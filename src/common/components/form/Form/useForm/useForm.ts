import * as React from 'react';
import isEqual from 'react-fast-compare';
import deepmerge from 'deepmerge';
import { LowPriority, unstable_runWithPriority } from 'scheduler';
import { __DEV__ } from 'common/constants/config';
import {
  FormValues,
  FormConfig,
  FormErrors,
  FormTouched,
  FormHandlers,
  FormHelpers,
  FieldMetaProps,
  FieldHelperProps,
  FieldInputProps,
} from '../types';
import { FormState, FormActionTypes } from '../reducer';
import * as formReducer from '../reducer';
import { isPromise, isFunction, isString, isObject } from 'common/utils/is';
import { getIn, setIn, arrayMerge } from '../utils';

export const emptyErrors: FormErrors<unknown> = {};
export const emptyTouched: FormTouched<unknown> = {};

interface FieldRegistry {
  [field: string]: {
    validate: (value: any) => string | Promise<string> | undefined;
  };
}

const getSelectedValues = (options: any[]) =>
  Array.from(options)
    .filter(el => el.selected)
    .map(el => el.value);

const getValueForCheckbox = (
  currentValue: string | any[],
  checked: boolean,
  valueProp: any
) => {
  if (typeof currentValue === 'boolean') {
    return Boolean(checked);
  }

  let currentArrayOfValues = [];
  let isValueInArray = false;
  let index = -1;

  if (!Array.isArray(currentValue)) {
    /* eslint-disable-next-line eqeqeq */
    if (!valueProp || valueProp == 'true' || valueProp == 'false') {
      return Boolean(checked);
    }
  } else {
    currentArrayOfValues = currentValue;
    index = currentValue.indexOf(valueProp);
    isValueInArray = index >= 0;
  }

  if (checked && valueProp && !isValueInArray) {
    return currentArrayOfValues.concat(valueProp);
  }

  if (!isValueInArray) {
    return currentArrayOfValues;
  }

  return currentArrayOfValues
    .slice(0, index)
    .concat(currentArrayOfValues.slice(index + 1));
};

const useEventCallback = <T extends (...args: any[]) => any>(fn: T): T => {
  const ref: any = React.useRef(fn);

  React.useLayoutEffect(() => {
    ref.current = fn;
  });

  return React.useCallback(
    (...args: any[]) => ref.current.apply(void 0, args),
    []
  ) as T;
};

export const useForm = <Values extends FormValues = FormValues>(
  config: FormConfig<Values>
) => {
  const { validateOnMount = false, enableReinitialize = false, onSubmit } = config;
  const initialValues = React.useRef(config.initialValues);
  const initialErrors = React.useRef(config.initialErrors || emptyErrors);
  const initialTouched = React.useRef(config.initialTouched || emptyTouched);
  const initialStatus = React.useRef(config.initialStatus);
  const isMounted = React.useRef<boolean>(false);
  const fieldRegistry = React.useRef<FieldRegistry>({});

  const [state, dispatch] = React.useReducer<
    React.Reducer<FormState<Values>, FormActionTypes<Values>>
  >(formReducer.reducer, {
    values: config.initialValues,
    errors: config.initialErrors || emptyErrors,
    touched: config.initialTouched || emptyTouched,
    status: config.initialStatus,
    isSubmitting: false,
    isValidating: false,
    submitCount: 0,
  });

  React.useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleValidate = React.useCallback(
    (values: Values, field?: string): Promise<FormErrors<Values>> =>
      new Promise(async (resolve, reject) => {
        const maybePromisedErrors = (config.validate as any)(values, field);
        /* eslint-disable-next-line eqeqeq */
        if (maybePromisedErrors == null) {
          resolve(emptyErrors);
        } else if (isPromise(maybePromisedErrors)) {
          try {
            const errors = (await maybePromisedErrors) as Promise<any>;
            resolve(errors || emptyErrors);
          } catch (error) {
            if (__DEV__) {
              console.warn(
                `Warning: An unhandled error was caught during form validation`,
                error
              );
            }
            reject(error);
          }
        } else {
          resolve(maybePromisedErrors);
        }
      }),
    [config.validate]
  );

  const validateSingleFieldLevel = React.useCallback(
    (field: string, value: void | string): Promise<string> => {
      return new Promise(resolve =>
        resolve(fieldRegistry.current[field].validate(value))
      );
    },
    []
  );

  const validateFieldLevels = React.useCallback(
    (values: Values): Promise<FormErrors<Values>> => {
      const fieldKeysWithValidation: string[] = Object.keys(
        fieldRegistry.current
      ).filter(field => isFunction(fieldRegistry.current[field].validate));
      const fieldValidations: Promise<string>[] =
        fieldKeysWithValidation.length > 0
          ? fieldKeysWithValidation.map(field =>
              validateSingleFieldLevel(field, getIn(values, field))
            )
          : [Promise.resolve('BASE_ERROR')];

      return Promise.all(fieldValidations).then((fieldErrorsList: string[]) =>
        fieldErrorsList.reduce((prev, curr, index) => {
          if (curr === 'BASE_ERROR') {
            return prev;
          }
          if (curr) {
            prev = setIn(prev, fieldKeysWithValidation[index], curr);
          }
          return prev;
        }, {})
      );
    },
    [validateSingleFieldLevel]
  );

  const validate = React.useCallback(
    async (values: Values) => {
      const [fieldErrors, validateErrors] = await Promise.all([
        validateFieldLevels(values),
        config.validate ? handleValidate(values) : {},
      ]);
      const combinedErrors = deepmerge.all<FormErrors<Values>>(
        [fieldErrors, validateErrors],
        { arrayMerge }
      );
      return combinedErrors;
    },
    [config.validate, handleValidate, validateFieldLevels]
  );

  /* low-priority validation via rAF */
  const validateFormWithLowPriority = useEventCallback(
    (values: Values = state.values) => {
      try {
        return unstable_runWithPriority(LowPriority, async () => {
          const combinedErrors = await validate(values);
          if (!!isMounted.current) {
            dispatch(formReducer.setErrors(combinedErrors));
          }
          return combinedErrors;
        });
      } catch (error) {
        if (__DEV__) {
          console.warn(
            `Warning: An unhandled error was caught during low priority form validation`,
            error
          );
        }
      }
    }
  );

  const validateFormWithHighPriority = useEventCallback(
    async (values: Values = state.values) => {
      const combinedErrors = await validate(values);
      if (!!isMounted.current) {
        dispatch(formReducer.setValidating(false));
        if (!isEqual(state.errors, combinedErrors)) {
          dispatch(formReducer.setErrors(combinedErrors));
        }
      }
      return combinedErrors;
    }
  );

  React.useEffect(() => {
    if (validateOnMount && isMounted.current === true) {
      validateFormWithLowPriority(initialValues.current);
    }
  }, [validateOnMount, validateFormWithLowPriority]);

  const resetForm = React.useCallback(
    async (nextState?: Partial<FormState<Values>>) => {
      const values =
        nextState && nextState.values ? nextState.values : initialValues.current;
      const errors =
        nextState && nextState.errors
          ? nextState.errors
          : initialErrors.current
          ? initialErrors.current
          : config.initialErrors || {};
      const touched =
        nextState && nextState.touched
          ? nextState.touched
          : initialTouched.current
          ? initialTouched.current
          : config.initialTouched || {};
      const status =
        nextState && nextState.status
          ? nextState.status
          : initialStatus.current
          ? initialStatus.current
          : config.initialStatus;
      initialValues.current = values;
      initialErrors.current = errors;
      initialTouched.current = touched;
      initialStatus.current = status;

      const reset = () => {
        dispatch(
          formReducer.reset<Values>({
            isSubmitting: !!nextState && !!nextState.isSubmitting,
            errors,
            touched,
            status,
            values,
            isValidating: !!nextState && !!nextState.isValidating,
            submitCount:
              !!nextState &&
              !!nextState.submitCount &&
              typeof nextState.submitCount === 'number'
                ? nextState.submitCount
                : 0,
          })
        );
      };

      if (config.onReset) {
        const maybePromisedOnReset = (config.onReset as any)(
          state.values,
          imperativeMethods
        );

        if (isPromise(maybePromisedOnReset)) {
          await (maybePromisedOnReset as Promise<any>);
          reset();
        } else {
          reset();
        }
      } else {
        reset();
      }
    },
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    [config.initialErrors, config.initialStatus, config.initialTouched]
  );

  React.useEffect(() => {
    if (
      enableReinitialize &&
      isMounted.current === true &&
      !isEqual(initialValues.current, config.initialValues)
    ) {
      initialValues.current = config.initialValues;
      resetForm();
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [enableReinitialize, config.initialValues, resetForm]);

  React.useEffect(() => {
    if (
      enableReinitialize &&
      isMounted.current === true &&
      !isEqual(initialErrors.current, config.initialErrors)
    ) {
      initialErrors.current = config.initialErrors || emptyErrors;
      dispatch(formReducer.setErrors<Values>(config.initialErrors || emptyErrors));
    }
  }, [enableReinitialize, config.initialErrors]);

  React.useEffect(() => {
    if (
      enableReinitialize &&
      isMounted.current === true &&
      !isEqual(initialTouched.current, config.initialTouched)
    ) {
      initialTouched.current = config.initialTouched || emptyTouched;
      dispatch(
        formReducer.setTouched<Values>(config.initialTouched || emptyTouched)
      );
    }
  }, [enableReinitialize, config.initialTouched]);

  React.useEffect(() => {
    if (
      enableReinitialize &&
      isMounted.current === true &&
      !isEqual(initialStatus.current, config.initialStatus)
    ) {
      initialStatus.current = config.initialStatus;
      dispatch(formReducer.setStatus<Values>(config.initialStatus));
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [enableReinitialize, config.initialStatus, config.initialTouched]);

  const validateField = useEventCallback(async (name: string) => {
    if (isFunction(fieldRegistry.current[name].validate)) {
      const value = getIn(state.values, name);
      const maybePromise = fieldRegistry.current[name].validate(value);
      if (isPromise(maybePromise)) {
        dispatch(formReducer.setValidating(true));
        const error = await maybePromise;
        dispatch(formReducer.setFieldError<Values>(name, error));
        dispatch(formReducer.setValidating(false));
        return error;
      } else {
        dispatch(
          formReducer.setFieldError<Values>(name, maybePromise as string | undefined)
        );
        return Promise.resolve(maybePromise as string | undefined);
      }
    }
    return Promise.resolve();
  });

  const registerField = React.useCallback((name: string, { validate }: any) => {
    fieldRegistry.current[name] = {
      validate,
    };
  }, []);

  const unregisterField = React.useCallback((name: string) => {
    delete fieldRegistry.current[name];
  }, []);

  const setTouched = useEventCallback(
    (touched: FormTouched<Values>, shouldValidate: boolean = true) => {
      dispatch(formReducer.setTouched<Values>(touched));
      return shouldValidate
        ? validateFormWithLowPriority(state.values)
        : Promise.resolve();
    }
  );

  const setErrors = React.useCallback((errors: FormErrors<Values>) => {
    dispatch(formReducer.setErrors(errors));
  }, []);

  const setValues = useEventCallback(
    (values: Values, shouldValidate: boolean = true) => {
      dispatch(formReducer.setValues<Values>(values));
      return shouldValidate
        ? validateFormWithLowPriority(values)
        : Promise.resolve();
    }
  );

  const setFieldError = React.useCallback(
    (field: string, value: string | undefined) => {
      dispatch(formReducer.setFieldError(field, value));
    },
    []
  );

  const setFieldValue = useEventCallback(
    (field: string, value: any, shouldValidate: boolean = true) => {
      dispatch(formReducer.setFieldValue(field, value));
      return shouldValidate
        ? validateFormWithLowPriority(setIn(state.values, field, value))
        : Promise.resolve();
    }
  );

  const executeChange = React.useCallback(
    (eventOrTextValue: string | React.ChangeEvent<any>, maybePath?: string) => {
      let field = maybePath;
      let val = eventOrTextValue;
      let parsed;
      if (!isString(eventOrTextValue)) {
        if ((eventOrTextValue as React.ChangeEvent<any>).persist) {
          (eventOrTextValue as React.ChangeEvent<any>).persist();
        }
        const target = eventOrTextValue.target
          ? (eventOrTextValue as React.ChangeEvent<any>).target
          : (eventOrTextValue as React.ChangeEvent<any>).currentTarget;

        const { type, name, id, value, checked, options, multiple } = target;

        field = maybePath ? maybePath : name ? name : id;
        val = /number|range/.test(type)
          ? ((parsed = parseFloat(value)), isNaN(parsed) ? '' : parsed)
          : /checkbox/.test(type)
          ? getValueForCheckbox(getIn(state.values, field!), checked, value)
          : !!multiple
          ? getSelectedValues(options)
          : value;
      }

      if (field) {
        setFieldValue(field, val);
      }
    },
    [setFieldValue, state.values]
  );

  const handleChange = useEventCallback<FormHandlers['handleChange']>(
    (
      eventOrPath: string | React.ChangeEvent<any>
    ): void | ((eventOrTextValue: string | React.ChangeEvent<any>) => void) => {
      if (isString(eventOrPath)) {
        return event => executeChange(event, eventOrPath);
      } else {
        executeChange(eventOrPath);
      }
    }
  );

  const setFieldTouched = useEventCallback(
    (field: string, touched: boolean = true, shouldValidate: boolean = true) => {
      dispatch(formReducer.setFieldTouched(field, touched));
      return shouldValidate
        ? validateFormWithLowPriority(state.values)
        : Promise.resolve();
    }
  );

  const executeBlur = React.useCallback(
    (event: any, path?: string) => {
      if (event.persist) {
        event.persist();
      }
      const { name, id } = event.target;
      const field = path ? path : name ? name : id;
      setFieldTouched(field, true);
    },
    [setFieldTouched]
  );

  const handleBlur = useEventCallback<FormHandlers['handleBlur']>(
    (eventOrString: any): void | ((e: any) => void) => {
      if (isString(eventOrString)) {
        return event => executeBlur(event, eventOrString);
      } else {
        executeBlur(eventOrString);
      }
    }
  );

  const setFormState = React.useCallback(
    (
      stateOrCb:
        | FormState<Values>
        | ((state: FormState<Values>) => FormState<Values>)
    ): void => {
      dispatch(formReducer.setState(stateOrCb));
    },
    []
  );

  const setStatus = React.useCallback((status: any) => {
    dispatch(formReducer.setStatus(status));
  }, []);

  const setSubmitting = React.useCallback((isSubmitting: boolean) => {
    dispatch(formReducer.setSubmitting(isSubmitting));
  }, []);

  const submitForm = useEventCallback(async () => {
    dispatch(formReducer.attemptSubmit());
    const combinedErrors: FormErrors<Values> = await validateFormWithHighPriority();
    const isInstanceOfError = combinedErrors instanceof Error;
    const isActuallyValid =
      !isInstanceOfError && Object.keys(combinedErrors).length === 0;
    if (isActuallyValid) {
      let promiseOrUndefined;
      try {
        promiseOrUndefined = executeSubmit();
        if (promiseOrUndefined === undefined) {
          return;
        }
      } catch (error) {
        throw error;
      }

      try {
        const result = await Promise.resolve(promiseOrUndefined);
        if (!!isMounted.current) {
          dispatch(formReducer.succeedSubmit());
        }
        return result;
      } catch (error) {
        dispatch(formReducer.failSubmit());
        throw error;
      }
    } else if (!!isMounted.current) {
      dispatch(formReducer.failSubmit());
      if (isInstanceOfError) {
        throw combinedErrors;
      }
    }
    return;
  });

  const handleSubmit = useEventCallback(
    (event?: React.FormEvent<HTMLFormElement>) => {
      if (event && event.preventDefault && isFunction(event.preventDefault)) {
        event.preventDefault();
      }
      if (event && event.stopPropagation && isFunction(event.stopPropagation)) {
        event.stopPropagation();
      }
      try {
        submitForm();
      } catch (error) {
        console.warn(
          `Warning: An unhandled error was caught from submitForm()`,
          error
        );
      }
    }
  );

  const imperativeMethods: FormHelpers<Values> = {
    resetForm,
    validateForm: validateFormWithHighPriority,
    validateField,
    setErrors,
    setFieldError,
    setFieldTouched,
    setFieldValue,
    setStatus,
    setSubmitting,
    setTouched,
    setValues,
    setFormState,
    submitForm,
  };

  const executeSubmit = useEventCallback(() =>
    onSubmit(state.values, imperativeMethods)
  );

  const handleReset = useEventCallback(event => {
    if (event && event.preventDefault && isFunction(event.preventDefault)) {
      event.preventDefault();
    }
    if (event && event.stopPropagation && isFunction(event.stopPropagation)) {
      event.stopPropagation();
    }
    resetForm();
  });

  const getFieldMeta = React.useCallback(
    (name: string): FieldMetaProps<any> => ({
      value: getIn(state.values, name),
      error: getIn(state.errors, name),
      touched: !!getIn(state.touched, name),
      initialValue: getIn(initialValues.current, name),
      initialTouched: !!getIn(initialTouched.current, name),
      initialError: getIn(initialErrors.current, name),
    }),
    [state.errors, state.touched, state.values]
  );

  const getFieldHelpers = React.useCallback(
    (name: string): FieldHelperProps<any> => ({
      setValue: (value: any, shouldValidate?: boolean) =>
        setFieldValue(name, value, shouldValidate),
      setTouched: (value: boolean, shouldValidate?: boolean) =>
        setFieldTouched(name, value, shouldValidate),
      setError: (value: any) => setFieldError(name, value),
    }),
    [setFieldValue, setFieldTouched, setFieldError]
  );

  const getFieldProps = React.useCallback(
    (nameOrOptions): FieldInputProps<any> => {
      const isAnObject = isObject(nameOrOptions);
      const name = isAnObject ? nameOrOptions.name : nameOrOptions;
      const valueState = getIn(state.values, name);

      const field: FieldInputProps<any> = {
        name,
        value: valueState,
        onChange: handleChange,
        onBlur: handleBlur,
      };
      if (isAnObject) {
        const { type, value: valueProp, as: is, multiple } = nameOrOptions;
        if (type === 'checkbox') {
          if (valueProp === undefined) {
            field.checked = !!valueState;
          } else {
            field.checked = !!(
              Array.isArray(valueState) && ~valueState.indexOf(valueProp)
            );
            field.value = valueProp;
          }
        } else if (type === 'radio') {
          field.checked = valueState === valueProp;
          field.value = valueProp;
        } else if (is === 'select' && multiple) {
          field.value = field.value || [];
          field.multiple = true;
        }
      }
      return field;
    },
    [handleBlur, handleChange, state.values]
  );

  const dirty = React.useMemo(
    () => !isEqual(initialValues.current, state.values),
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    [initialValues.current, state.values]
  );

  const isValid = React.useMemo(
    () => state.errors && Object.keys(state.errors).length === 0,
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    [dirty, state.errors, config]
  );

  return {
    ...state,
    initialValues: initialValues.current,
    initialErrors: initialErrors.current,
    initialTouched: initialTouched.current,
    initialStatus: initialStatus.current,
    handleBlur,
    handleChange,
    handleReset,
    handleSubmit,
    resetForm,
    setErrors,
    setFormState,
    setFieldTouched,
    setFieldValue,
    setFieldError,
    setStatus,
    setSubmitting,
    setTouched,
    setValues,
    submitForm,
    validateForm: validateFormWithHighPriority,
    validateField,
    isValid,
    dirty,
    unregisterField,
    registerField,
    getFieldProps,
    getFieldMeta,
    getFieldHelpers,
    validateOnMount,
  };
};

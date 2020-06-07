import * as React from 'react';
import { FormState } from './reducer';

export interface FormValues {
  [field: string]: any;
}

export type FormErrors<Values> = {
  [K in keyof Values]?: Values[K] extends string[]
    ? Values[K][number] extends object
      ? FormErrors<Values[K][number]>[] | string | string[]
      : string | string[]
    : Values[K] extends object
    ? FormErrors<Values[K]>
    : string;
};

export type FormTouched<Values> = {
  [K in keyof Values]?: Values[K] extends any[]
    ? Values[K][number] extends object
      ? FormTouched<Values[K][number]>[]
      : boolean
    : Values[K] extends object
    ? FormTouched<Values[K]>
    : boolean;
};

export interface FormDerivedProps<Values> {
  readonly dirty: boolean;
  readonly isValid: boolean;
  readonly initialValues: Values;
  readonly initialErrors: FormErrors<Values>;
  readonly initialTouched: FormTouched<Values>;
  readonly initialStatus?: any;
}

export interface FormHelpers<Values> {
  setStatus(status?: any): void;
  setErrors(errors: FormErrors<Values>): void;
  setSubmitting(isSubmitting: boolean): void;
  setTouched(touched: FormTouched<Values>, shouldValidate?: boolean): void;
  setValues(values: Values, shouldValidate?: boolean): void;
  setFieldValue(field: string, value: any, shouldValidate?: boolean): void;
  setFieldError(field: string, message: string): void;
  setFieldTouched(
    field: string,
    isTouched?: boolean,
    shouldValidate?: boolean
  ): void;
  validateForm(values?: any): Promise<FormErrors<Values>>;
  validateField(field: string): void;
  resetForm(nextState?: Partial<FormState<Values>>): void;
  submitForm(): Promise<void>;
  setFormState(
    f: FormState<Values> | ((prevState: FormState<Values>) => FormState<Values>),
    cb?: () => void
  ): void;
}

export interface FormHandlers {
  handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
  handleReset: (e?: React.SyntheticEvent<any>) => void;
  handleBlur(e: React.FocusEvent<any>): void;
  handleBlur<T = string | any>(
    fieldOrEvent: T
  ): T extends string ? (e: any) => void : void;
  handleChange(e: React.ChangeEvent<any>): void;
  handleChange<T = string | React.ChangeEvent<any>>(
    field: T
  ): T extends React.ChangeEvent<any>
    ? void
    : (e: string | React.ChangeEvent<any>) => void;
  getFieldProps<Value = any>(props: any): FieldInputProps<Value>;
  getFieldMeta<Value>(name: string): FieldMetaProps<Value>;
  getFieldHelpers<Value = any>(name: string): FieldHelperProps<Value>;
}

export interface FormSharedConfig {
  validateOnMount?: boolean;
  enableReinitialize?: boolean;
}

export interface FormConfig<Values> extends FormSharedConfig {
  children?: ((props: FormProps<Values>) => React.ReactNode) | React.ReactNode;
  initialValues: Values;
  onSubmit: (
    values: Values,
    formHelpers: FormHelpers<Values>
  ) => void | Promise<any>;
  initialStatus?: any;
  initialErrors?: FormErrors<Values>;
  initialTouched?: FormTouched<Values>;
  validate?: (values: Values) => void | object | Promise<FormErrors<Values>>;
  onReset?: (values: Values, formHelpers: FormHelpers<Values>) => void;
  ref?: React.Ref<FormProps<Values>>;
}

export type FormProps<Values> = FormSharedConfig &
  FormState<Values> &
  FormHelpers<Values> &
  FormHandlers &
  FormDerivedProps<Values> &
  FormRegistration & { submitForm: () => Promise<any> };

export interface FormRegistration {
  registerField(name: string, fns: { validate?: FieldValidator }): void;
  unregisterField(name: string): void;
}

export type FormContextType<Values> = FormProps<Values> &
  Pick<FormConfig<Values>, 'validate'>;

export type GenericFieldHTMLAttributes =
  | JSX.IntrinsicElements['input']
  | JSX.IntrinsicElements['select']
  | JSX.IntrinsicElements['textarea'];

export interface FieldMetaProps<Value> {
  value: Value;
  error?: string;
  touched: boolean;
  initialValue?: Value;
  initialTouched: boolean;
  initialError?: string;
}

export interface FieldHelperProps<Value> {
  setValue(value: Value, shouldValidate?: boolean): void;
  setTouched(value: boolean, shouldValidate?: boolean): void;
  setError(value: Value): void;
}

export interface FieldInputProps<Value> {
  value: Value;
  name: string;
  multiple?: boolean;
  checked?: boolean;
  onChange: FormHandlers['handleChange'];
  onBlur: FormHandlers['handleBlur'];
}

export type FieldValidator = (value: any) => string | void | Promise<string | void>;

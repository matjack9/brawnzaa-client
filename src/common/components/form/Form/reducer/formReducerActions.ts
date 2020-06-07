import { FormTouched, FormErrors } from '../types';
import {
  FormActionTypes,
  FormState,
  SUBMIT_ATTEMPT,
  SUBMIT_FAILURE,
  SUBMIT_SUCCESS,
  SET_ISVALIDATING,
  SET_ISSUBMITTING,
  SET_VALUES,
  SET_FIELD_VALUE,
  SET_FIELD_TOUCHED,
  SET_FIELD_ERROR,
  SET_TOUCHED,
  SET_ERRORS,
  SET_STATUS,
  SET_FORM_STATE,
  RESET_FORM,
} from './formReducerTypes';
import { isFunction } from 'common/utils/is';

export const attemptSubmit = <Values>(): FormActionTypes<Values> => ({
  type: SUBMIT_ATTEMPT,
});

export const failSubmit = <Values>(): FormActionTypes<Values> => ({
  type: SUBMIT_FAILURE,
});

export const succeedSubmit = <Values>(): FormActionTypes<Values> => ({
  type: SUBMIT_SUCCESS,
});

export const setValidating = <Values>(
  isValidating: boolean
): FormActionTypes<Values> => ({
  type: SET_ISVALIDATING,
  payload: isValidating,
});

export const setSubmitting = <Values>(
  isSubmitting: boolean
): FormActionTypes<Values> => ({
  type: SET_ISSUBMITTING,
  payload: isSubmitting,
});

export const setValues = <Values>(values: Values): FormActionTypes<Values> => ({
  type: SET_VALUES,
  payload: values,
});

export const setFieldValue = <Values>(
  field: string,
  value: any
): FormActionTypes<Values> => ({
  type: SET_FIELD_VALUE,
  payload: {
    field,
    value,
  },
});

export const setFieldTouched = <Values>(
  field: string,
  isTouched: boolean = true
): FormActionTypes<Values> => ({
  type: SET_FIELD_TOUCHED,
  payload: {
    field,
    value: isTouched,
  },
});

export const setFieldError = <Values>(
  field: string,
  error: string | undefined
): FormActionTypes<Values> => ({
  type: SET_FIELD_ERROR,
  payload: {
    field,
    value: error,
  },
});

export const setTouched = <Values>(
  touched: FormTouched<Values>
): FormActionTypes<Values> => ({
  type: SET_TOUCHED,
  payload: touched,
});

export const setErrors = <Values>(
  errors: FormErrors<Values>
): FormActionTypes<Values> => ({
  type: SET_ERRORS,
  payload: errors,
});

export const setStatus = <Values>(status: any): FormActionTypes<Values> => ({
  type: SET_STATUS,
  payload: status,
});

export const setState = <Values>(
  stateOrCb: FormState<Values> | ((state: FormState<Values>) => FormState<Values>)
): FormActionTypes<Values> => {
  if (isFunction(stateOrCb)) {
    return {
      type: SET_FORM_STATE,
      payload: stateOrCb,
    };
  }
  return {
    type: SET_FORM_STATE,
    payload: () => stateOrCb,
  };
};

export const reset = <Values>(
  state: FormState<Values>
): FormActionTypes<Values> => ({
  type: RESET_FORM,
  payload: state,
});

import { FormTouched, FormErrors } from '../types';

export const SUBMIT_ATTEMPT = 'SUBMIT_ATTEMPT';
export const SUBMIT_FAILURE = 'SUBMIT_FAILURE';
export const SUBMIT_SUCCESS = 'SUBMIT_SUCCESS';
export const SET_ISVALIDATING = 'SET_ISVALIDATING';
export const SET_ISSUBMITTING = 'SET_ISSUBMITTING';
export const SET_VALUES = 'SET_VALUES';
export const SET_FIELD_VALUE = 'SET_FIELD_VALUE';
export const SET_FIELD_TOUCHED = 'SET_FIELD_TOUCHED';
export const SET_FIELD_ERROR = 'SET_FIELD_ERROR';
export const SET_TOUCHED = 'SET_TOUCHED';
export const SET_ERRORS = 'SET_ERRORS';
export const SET_STATUS = 'SET_STATUS';
export const SET_FORM_STATE = 'SET_FORM_STATE';
export const RESET_FORM = 'RESET_FORM';

export interface FormState<Values> {
  readonly values: Values;
  readonly errors: FormErrors<Values>;
  readonly touched: FormTouched<Values>;
  readonly isSubmitting: boolean;
  readonly isValidating: boolean;
  readonly status?: any;
  readonly submitCount: number;
}

interface SubmitAttemptAction {
  type: typeof SUBMIT_ATTEMPT;
}

interface SubmitFailureAction {
  type: typeof SUBMIT_FAILURE;
}

interface SubmitSuccessAction {
  type: typeof SUBMIT_SUCCESS;
}

interface SetIsValidatingAction {
  type: typeof SET_ISVALIDATING;
  payload: boolean;
}

interface SetIsSubmittingAction {
  type: typeof SET_ISSUBMITTING;
  payload: boolean;
}

interface SetValuesAction<Values> {
  type: typeof SET_VALUES;
  payload: Values;
}

interface SetFieldValueAction {
  type: typeof SET_FIELD_VALUE;
  payload: { field: string; value?: any };
}

interface SetFieldTouchedAction {
  type: typeof SET_FIELD_TOUCHED;
  payload: { field: string; value?: boolean };
}

interface SetFieldErrorAction {
  type: typeof SET_FIELD_ERROR;
  payload: { field: string; value?: string };
}

interface SetTouchedAction<Values> {
  type: typeof SET_TOUCHED;
  payload: FormTouched<Values>;
}

interface SetErrorsAction<Values> {
  type: typeof SET_ERRORS;
  payload: FormErrors<Values>;
}

interface SetStatusAction {
  type: typeof SET_STATUS;
  payload: any;
}

interface SetFormStateAction<Values> {
  type: typeof SET_FORM_STATE;
  payload: (state: FormState<Values>) => FormState<Values>;
}

interface ResetFormAction<Values> {
  type: typeof RESET_FORM;
  payload: FormState<Values>;
}

export type FormActionTypes<Values> =
  | SubmitAttemptAction
  | SubmitFailureAction
  | SubmitSuccessAction
  | SetIsValidatingAction
  | SetIsSubmittingAction
  | SetValuesAction<Values>
  | SetFieldValueAction
  | SetFieldTouchedAction
  | SetFieldErrorAction
  | SetTouchedAction<Values>
  | SetErrorsAction<Values>
  | SetStatusAction
  | SetFormStateAction<Values>
  | ResetFormAction<Values>;

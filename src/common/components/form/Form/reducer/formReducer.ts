import isEqual from 'react-fast-compare';
import { FormTouched } from '../types';
import {
  FormState,
  FormActionTypes,
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
import { setIn, setNestedObjectValues } from '../utils';

export const reducer = <Values>(
  state: FormState<Values>,
  action: FormActionTypes<Values>
) => {
  switch (action.type) {
    case SET_VALUES:
      return { ...state, values: action.payload };
    case SET_TOUCHED:
      return { ...state, touched: action.payload };
    case SET_ERRORS:
      if (isEqual(state.errors, action.payload)) {
        return state;
      }
      return { ...state, errors: action.payload };
    case SET_STATUS:
      return { ...state, status: action.payload };
    case SET_ISSUBMITTING:
      return { ...state, isSubmitting: action.payload };
    case SET_ISVALIDATING:
      return { ...state, isValidating: action.payload };
    case SET_FIELD_VALUE:
      return {
        ...state,
        values: setIn(state.values, action.payload.field, action.payload.value),
      };
    case SET_FIELD_TOUCHED:
      return {
        ...state,
        touched: setIn(state.touched, action.payload.field, action.payload.value),
      };
    case SET_FIELD_ERROR:
      return {
        ...state,
        errors: setIn(state.errors, action.payload.field, action.payload.value),
      };
    case RESET_FORM:
      return { ...state, ...action.payload };
    case SET_FORM_STATE:
      return action.payload(state);
    case SUBMIT_ATTEMPT:
      return {
        ...state,
        touched: setNestedObjectValues<FormTouched<Values>>(state.values, true),
        isSubmitting: true,
        submitCount: state.submitCount + 1,
      };
    case SUBMIT_FAILURE:
      return {
        ...state,
        isSubmitting: false,
      };
    case SUBMIT_SUCCESS:
      return {
        ...state,
        isSubmitting: false,
      };
    default:
      return state;
  }
};

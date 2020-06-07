import * as React from 'react';
import { FormContextType } from '../types';

export const FormContext = React.createContext<FormContextType<any>>(
  undefined as any
);
export const FormProvider = FormContext.Provider;
export const FormConsumer = FormContext.Consumer;

export const useFormContext = <Values,>() =>
  React.useContext<FormContextType<Values>>(FormContext);

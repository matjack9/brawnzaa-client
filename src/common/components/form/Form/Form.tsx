import * as React from 'react';
import { FormConfig, FormValues, FormProps } from './types';
import useForm from './useForm';
import { FormProvider, useFormContext } from './Context';
import { isFunction } from 'common/utils/is';

export type FormComponentProps = Pick<
  React.FormHTMLAttributes<HTMLFormElement>,
  Exclude<keyof React.FormHTMLAttributes<HTMLFormElement>, 'onReset' | 'onSubmit'>
>;

type FormElProps = React.ComponentPropsWithoutRef<'form'>;

export const Form = React.forwardRef<HTMLFormElement, FormElProps>(
  (props: FormElProps, ref) => {
    const { action, ...rest } = props;
    const _action = action || '#';
    const { handleReset, handleSubmit } = useFormContext();
    return (
      <form
        onSubmit={handleSubmit}
        ref={ref}
        onReset={handleReset}
        action={_action}
        {...rest}
      />
    );
  }
);

type Props<Values extends FormValues> = FormConfig<Values>;

export const ComposedForm = <Values, ExtraProps = {}>(
  props: Props<Values> & { formProps: FormComponentProps } & ExtraProps
) => {
  const { formProps = {}, ...rest } = props;
  const { ref, children } = rest;
  const formComposer = useForm<Values>(rest);

  React.useImperativeHandle(ref, () => formComposer);

  return (
    <FormProvider value={formComposer}>
      <Form {...formProps}>
        {children
          ? isFunction(children)
            ? (children as (formComposer: FormProps<Values>) => React.ReactNode)(
                formComposer as FormProps<Values>
              )
            : children
          : null}
      </Form>
    </FormProvider>
  );
};

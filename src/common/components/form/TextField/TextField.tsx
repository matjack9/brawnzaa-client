import * as React from 'react';
import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from '@material-ui/core/TextField';
import { InputBaseComponentProps } from '@material-ui/core/InputBase';
import { useFormContext, FieldValidator } from '../Form';
import { DEFAULT_INPUT_ERROR } from 'common/constants/errors';

type Props = MuiTextFieldProps & { name: string } & { validate?: FieldValidator };

export const TextField: React.FC<Props> = props => {
  const { name, validate, ...rest } = props;
  const formComposer = useFormContext();
  const {
    getFieldProps,
    getFieldMeta,
    getFieldHelpers,
    registerField,
    unregisterField,
  } = formComposer;

  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (name) {
      registerField(name, {
        validate,
      });
    }
    return () => {
      if (name) {
        unregisterField(name);
      }
    };
  }, [registerField, unregisterField, name, validate]);

  const meta = getFieldMeta(name);
  const helpers = getFieldHelpers(name);

  const inputProps = {
    onInvalid: (event: Event) => {
      event.preventDefault();
      if (inputRef.current && inputRef.current.validationMessage) {
        helpers.setError(inputRef.current.validationMessage);
      } else {
        helpers.setError(DEFAULT_INPUT_ERROR);
      }
    },
    ...rest.inputProps,
  } as InputBaseComponentProps;

  return (
    <MuiTextField
      id={name}
      error={!!meta.error}
      {...rest}
      helperText={meta.error || rest.helperText}
      inputProps={inputProps}
      inputRef={inputRef}
      /* name, onChange, onBlur, value, ?checked, ?multiple */
      {...getFieldProps(props)}
    />
  );
};

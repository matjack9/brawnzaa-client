import * as React from 'react';
import ShowPasswordIcon from '@material-ui/icons/Visibility';
import HidePasswordIcon from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField, { TextFieldProps } from 'common/components/form/TextField';

export const PasswordField: React.FC<TextFieldProps> = props => {
  const [isPasswordHidden, setIsPasswordHidden] = React.useState(true);

  return (
    <TextField
      label="Password"
      type={isPasswordHidden ? 'password' : 'text'}
      autoComplete="current-password"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setIsPasswordHidden(!isPasswordHidden)}
              onMouseDown={event => event.preventDefault()}
            >
              {isPasswordHidden ? <HidePasswordIcon /> : <ShowPasswordIcon />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

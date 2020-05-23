import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button, { ButtonProps } from '@material-ui/core/Button';
import CircularProgress, {
  CircularProgressProps,
} from '@material-ui/core/CircularProgress';
import Hidden from 'common/components/Hidden';

const useStyles = makeStyles(() => ({
  absoluteMiddle: {
    marginTop: -12,
    marginLeft: -12,
    top: '50%',
    left: '50%',
    position: 'absolute',
  },
}));

interface Props extends ButtonProps {
  isLoading: boolean;
  CircularProgressProps?: CircularProgressProps;
}

export const LoadingButton: React.FC<Props> = props => {
  const {
    isLoading,
    children,
    disabled,
    CircularProgressProps = {},
    ...rest
  } = props;
  const classes = useStyles();

  return (
    <Button data-testid="loading-btn" {...rest} disabled={disabled || isLoading}>
      {isLoading ? <Hidden>{children}</Hidden> : children}
      {isLoading ? (
        <CircularProgress
          size={20}
          data-testid="loading-btn-progress-circle"
          {...CircularProgressProps}
          className={classes.absoluteMiddle}
        />
      ) : null}
    </Button>
  );
};

import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button, { ButtonProps } from '@material-ui/core/Button';
import CircularProgress, {
  CircularProgressProps,
} from '@material-ui/core/CircularProgress';
import Hidden from 'common/components/wrappers/Hidden';

const useStyles = makeStyles(() => ({
  absoluteMiddle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
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
    startIcon = undefined,
    endIcon = undefined,
    CircularProgressProps = {},
    ...rest
  } = props;
  const classes = useStyles();

  const maybeHide = (icon: React.ReactNode) =>
    isLoading ? <Hidden>{icon}</Hidden> : icon;
  const maybeStartIcon = startIcon ? maybeHide(startIcon) : startIcon;
  const maybeEndIcon = startIcon ? maybeHide(endIcon) : endIcon;

  return (
    <Button
      data-testid="loading-btn"
      {...rest}
      startIcon={maybeStartIcon}
      endIcon={maybeEndIcon}
      disabled={disabled || isLoading}
    >
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

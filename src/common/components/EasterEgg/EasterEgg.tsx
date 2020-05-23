import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { ExternalURL } from 'common/utils/constants/routes';
import useKonamiCode from 'common/hooks/useKonamiCode';

const useStyles = makeStyles({
  relative: { position: 'relative' },
  grow: { flex: 1 },
});

const Transition = React.forwardRef(
  (
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>
  ) => <Slide direction="up" ref={ref} {...props} />
);

export const EasterEgg: React.FC = () => {
  const classes = useStyles();
  const [isKonami, setIsKonami] = useKonamiCode();
  const handleClose = () => {
    setIsKonami(false);
  };
  return (
    <Dialog
      fullScreen
      open={isKonami}
      onClose={handleClose}
      TransitionComponent={Transition}
      data-testid="easter-egg-dialog"
    >
      <AppBar className={classes.relative}>
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
            className={classes.grow}
            align="center"
          >
            Platzinum + Ultra
          </Typography>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            data-testid="easter-egg-dialog-close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <iframe
        width="100%"
        height="100%"
        src={ExternalURL.PLATZINUM}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        title="Platzinum + Ultra"
        allowFullScreen
      />
    </Dialog>
  );
};

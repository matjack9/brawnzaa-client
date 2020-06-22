import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useCountdown from 'common/hooks/useCountdown';
import { NEXT_BRAWNZAA_DATETIME } from 'common/constants/dates';
import { getCountdownText } from 'common/utils/dates';

const useStyles = makeStyles(() =>
  createStyles({
    headline: { letterSpacing: '.5em' },
    content: { padding: '3em' },
  })
);

export const Home: React.FC<RouteComponentProps> = () => {
  const classes = useStyles();
  const timeLeft = useCountdown(NEXT_BRAWNZAA_DATETIME);
  return (
    <>
      <Typography
        variant="h1"
        align="center"
        className={classes.headline}
        gutterBottom
      >
        BRAWNZAA
      </Typography>
      <Typography variant="h2" component="p" align="center" gutterBottom>
        a feat of strength
      </Typography>
      <div className={classes.content}>
        <Typography
          variant="h2"
          component="p"
          align="center"
          color="primary"
          gutterBottom
        >
          {getCountdownText(timeLeft) ||
            'The threads bundled by the laws of causality have now been bound.'}
        </Typography>
      </div>
    </>
  );
};

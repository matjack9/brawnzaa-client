import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useCountdown from 'common/hooks/useCountdown';
import { NEXT_BRAWNZAA_DATETIME } from 'common/utils/constants/misc';
import { getCountdownText } from 'common/utils/date';

const useStyles = makeStyles(() =>
  createStyles({
    distinguish: { padding: '3em' },
  })
);

export const Home: React.FC<RouteComponentProps> = () => {
  const classes = useStyles();
  const timeLeft = useCountdown(NEXT_BRAWNZAA_DATETIME);
  return (
    <>
      <Typography variant="h1" align="center" gutterBottom>
        B R A W N Z A A
      </Typography>
      <Typography variant="h2" component="p" align="center" gutterBottom>
        a feat of strength
      </Typography>
      <div className={classes.distinguish}>
        <Typography
          variant="h2"
          component="p"
          align="center"
          color="primary"
          gutterBottom
        >
          {getCountdownText(timeLeft)}
        </Typography>
      </div>
    </>
  );
};

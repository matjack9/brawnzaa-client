import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { RouteComponentProps } from '@reach/router';

const DATE = new Date('June 20, 2020 12:00:00').getTime();

const Countdown: React.FC<{ date: number }> = props => {
  const { date } = props;
  const [now, setNow] = React.useState(Date.now());

  const diff = date - now;

  React.useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return (
    <Typography
      variant="h2"
      component="p"
      align="center"
      color="primary"
      gutterBottom
      style={{ margin: '1em' }}
    >
      {`${days}d ${hours}h ${minutes}m ${seconds}s`}
    </Typography>
  );
};

export const Home: React.FC<RouteComponentProps> = () => (
  <>
    <Typography variant="h1" align="center" gutterBottom>
      B R A W N Z A A
    </Typography>
    <Typography variant="h2" component="p" align="center" gutterBottom>
      a feat of strength
    </Typography>
    <Countdown date={DATE} />
  </>
);

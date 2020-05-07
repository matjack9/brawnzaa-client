import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { RouteComponentProps } from '@reach/router';

export const Home: React.FC<RouteComponentProps> = () => (
  <>
    <Typography variant="h1" align="center" gutterBottom>
      B R A W N Z A A
    </Typography>
    <Typography variant="h2" align="center" gutterBottom>
      a feat of strength
    </Typography>
  </>
);

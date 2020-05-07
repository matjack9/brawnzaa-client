import * as React from 'react';
import { RouteComponentProps, useLocation } from '@reach/router';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import GoBackButton from 'common/components/buttons/GoBack';

export const NotFoundView: React.FC<RouteComponentProps> = () => {
  const { pathname } = useLocation();
  return (
    <Container maxWidth="md">
      <Grid direction="column" alignItems="center" spacing={8} container>
        <Grid item>
          <Typography variant="h4" gutterBottom>
            &quot;{pathname}&quot; was not found!
          </Typography>
        </Grid>
        <Grid item>
          <iframe
            src="https://giphy.com/embed/L95W4wv8nnb9K"
            title="Not Found"
            width="480"
            height="273"
            allowFullScreen
          />
        </Grid>
        <Grid item>
          <GoBackButton />
        </Grid>
      </Grid>
    </Container>
  );
};

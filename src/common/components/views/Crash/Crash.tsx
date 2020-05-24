import * as React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import RepairIcon from '@material-ui/icons/Build';
import Typography from '@material-ui/core/Typography';
import LoadingButton from 'common/components/buttons/Loading';

export const Crash: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleRepair = async () => {
    if (!('serviceWorker' in navigator)) {
      window.location.reload();
      return;
    }

    setIsLoading(true);

    try {
      const registrations = await navigator.serviceWorker.getRegistrations();
      await Promise.all(
        registrations.map(registration => registration.unregister())
      );
      window.location.reload();
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth="md">
      <Grid direction="column" alignItems="center" spacing={8} container>
        <Grid item>
          <Typography variant="h1" align="center">
            Something went wrong
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" align="center">
            You can click the button below to attempt to resolve the issue. Our
            engineers have been notified of the error.
          </Typography>
        </Grid>
        <Grid item>
          <LoadingButton
            isLoading={isLoading}
            color="primary"
            variant="contained"
            size="large"
            onClick={handleRepair}
            startIcon={<RepairIcon />}
          >
            Repair
          </LoadingButton>
        </Grid>
      </Grid>
    </Container>
  );
};

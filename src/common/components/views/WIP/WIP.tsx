import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import WIPIcon from '@material-ui/icons/FitnessCenter';
import GoBackButton from 'common/components/buttons/GoBack';

const useStyles = makeStyles({ icon: { fontSize: '10rem' } });

interface Props extends Partial<RouteComponentProps> {
  label: string;
}

export const WIP: React.FC<Props> = props => {
  const classes = useStyles();
  const { label, children } = props;
  return (
    <Container maxWidth="md">
      <Grid direction="column" alignItems="center" spacing={8} container>
        <Grid item>
          <Typography
            variant="h4"
            component="h1"
          >{`${label} is building`}</Typography>
        </Grid>
        <Grid item>
          <WIPIcon className={classes.icon} />
        </Grid>
        {children ? <Grid item>{children}</Grid> : null}
        <Grid item>
          <GoBackButton />
        </Grid>
      </Grid>
    </Container>
  );
};

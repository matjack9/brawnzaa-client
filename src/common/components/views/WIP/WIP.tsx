import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import WIPIcon from '@material-ui/icons/FitnessCenter';
import GoBackButton from 'common/components/buttons/GoBack';

const useStyles = makeStyles({ icon: { fontSize: '10rem' } });

interface Props {
  viewLabel: string;
  subtext?: string;
}

export const WIP: React.FC<Props> = props => {
  const classes = useStyles();
  const { viewLabel, subtext } = props;
  return (
    <Container maxWidth="md">
      <Grid direction="column" alignItems="center" spacing={8} container>
        <Grid item>
          <Typography variant="h4">{`${viewLabel} is building`}</Typography>
        </Grid>
        <Grid item>
          <WIPIcon className={classes.icon} />
        </Grid>
        {subtext && (
          <Grid item>
            <Typography variant="subtitle1">{subtext}</Typography>
          </Grid>
        )}
        <Grid item>
          <GoBackButton />
        </Grid>
      </Grid>
    </Container>
  );
};

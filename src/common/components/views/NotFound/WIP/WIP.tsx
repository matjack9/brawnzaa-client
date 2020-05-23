import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import WIPIcon from '@material-ui/icons/FitnessCenter';
import GoBackButton from 'common/components/buttons/GoBack';

const useStyles = makeStyles({ icon: { fontSize: '10rem' } });

export const WIP: React.FC = () => {
  const classes = useStyles();
  return null;
  // return (
  //     <Container maxWidth="md">
  //         <Grid direction="column" alignItems="center" spacing={8} container>
  //             <Grid item><Typography variant="h4">{`${pageName} is building`}</Typography></Grid>
  //             <Grid item><WIPIcon className={classes.icon} /></Grid>
  //             {additionalText && (
  //                 <Grid item><Typography variant="subtitle1">{additionalText}</Typography></Grid>
  //             )}
  //             <Grid item><GoBackButton /></Grid>
  //         </Grid>
  //     </Container>
  // );
};

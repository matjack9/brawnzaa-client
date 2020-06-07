import * as React from 'react';
import { RouteComponentProps, Link as RouterLink } from '@reach/router';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Form from 'common/components/form/Form';
import TextField from 'common/components/form/TextField';
import PasswordField from 'common/components/inputs/Password';
import useRedirectIfAuthed from 'common/hooks/useRedirectIfAuthed';
import { Route } from 'common/constants/routes';
import Copyright from 'common/components/misc/Copyright';
import LoadingButton from 'common/components/buttons/Loading';
import GoBackButton from 'common/components/buttons/GoBack';
import brawnzaaB from 'assets/logos/brawnzaa-b-logo.png';

interface Values {
  email: string;
  password: string;
  isRemembering: boolean;
}

const useStyles = makeStyles(theme =>
  createStyles({
    root: { height: '100vh' },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/collection/8431698/)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    icon: { margin: theme.spacing(1) },
    fullWidth: { width: '100%' },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: { margin: theme.spacing(3, 0, 2) },
  })
);

export const Login: React.FC<RouteComponentProps> = () => {
  const classes = useStyles();

  useRedirectIfAuthed();

  const initialValues: Values = {
    email: '',
    password: '',
    isRemembering: false,
  };

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <img
            src={brawnzaaB}
            alt="BRAWNZAA"
            height="54"
            width="50"
            className={classes.icon}
          />
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          <Form
            formProps={{ className: classes.form }}
            onSubmit={(values, actions) => {
              /* eslint-disable-next-line no-alert */
              alert(`Sorry ${values.email}. Maybe you should get stronger first.`);
              actions.setSubmitting(false);
            }}
            initialValues={initialValues}
          >
            {({ values, handleChange, isSubmitting }) => (
              <>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Email Address"
                  type="email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <PasswordField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                />
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  name="isRemembering"
                  label="Remember me"
                  checked={values.isRemembering}
                  onChange={handleChange}
                />
                <LoadingButton
                  isLoading={isSubmitting}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Log In
                </LoadingButton>
              </>
            )}
          </Form>
          <Grid container>
            <Grid item xs>
              <Link component={RouterLink} to={Route.RESET_PASSWORD} variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link component={RouterLink} to={Route.SIGN_UP} variant="body2">
                New here? Sign Up
              </Link>
            </Grid>
          </Grid>
          <div className={classes.fullWidth}>
            <Box mt={2}>
              <Copyright />
            </Box>
            <Box mt={6}>
              <Grid container justify="center">
                <Grid item>
                  <GoBackButton />
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

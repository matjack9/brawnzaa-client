import * as React from 'react';
import { RouteComponentProps, Link as RouterLink } from '@reach/router';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import useRedirectIfAuthed from 'common/hooks/useRedirectIfAuthed';
import Form from 'common/components/form/Form';
import TextField from 'common/components/form/TextField';
import PasswordField from 'common/components/inputs/Password';
import { Route } from 'common/constants/routes';
import Copyright from 'common/components/misc/Copyright';
import LoadingButton from 'common/components/buttons/Loading';
import GoBackButton from 'common/components/buttons/GoBack';
import brawnzaaB from 'assets/logos/brawnzaa-b-logo.png';

interface Values {
  username: string;
  email: string;
  password: string;
  isEmailOptIn: boolean;
}

const useStyles = makeStyles(theme =>
  createStyles({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    icon: { margin: theme.spacing(1) },
    form: {
      width: '100%',
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  })
);

export const Signup: React.FC<RouteComponentProps> = () => {
  const classes = useStyles();

  useRedirectIfAuthed();

  const initialValues: Values = {
    username: '',
    email: '',
    password: '',
    isEmailOptIn: false,
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <img
          src={brawnzaaB}
          alt="BRAWNZAA"
          height="54"
          width="50"
          className={classes.icon}
        />
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Form
          formProps={{ className: classes.form }}
          onSubmit={(values, actions) => {
            /* eslint-disable-next-line no-alert */
            alert(`Sorry ${values.username}. Maybe you should get stronger first.`);
            actions.setSubmitting(false);
          }}
          initialValues={initialValues}
        >
          {({ values, handleChange, isSubmitting }) => (
            <>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Email Address"
                    type="email"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <PasswordField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    name="isEmailOptIn"
                    label="I want to receive inspiration, marketing promotions and updates via email."
                    checked={values.isEmailOptIn}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <LoadingButton
                isLoading={isSubmitting}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </LoadingButton>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link component={RouterLink} to={Route.LOG_IN} variant="body2">
                    Already have an account? Log in
                  </Link>
                </Grid>
              </Grid>
            </>
          )}
        </Form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
      <Box mt={3}>
        <Grid container justify="center">
          <Grid item>
            <GoBackButton />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

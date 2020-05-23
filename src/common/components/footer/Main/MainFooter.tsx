import * as React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagram,
  faSnapchatSquare,
  faYoutubeSquare,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Link, { LinkProps } from '@material-ui/core/Link';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import {
  Route,
  HelpRoute,
  EventsRoute,
  ExternalURL,
} from 'common/utils/constants/routes';
import { getAbsoluteRoute } from 'common/utils/router';
import red from '@material-ui/core/colors/red';

const useStyles = makeStyles(theme =>
  createStyles({
    footer: {
      padding: theme.spacing(8),
      marginTop: 'auto',
      background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
    },
    header: { color: theme.palette.common.white },
    secondary: {
      color: theme.palette.common.white,
      opacity: 0.75,
    },
    link: { '&:hover': { opacity: 1 } },
    section: { margin: theme.spacing(4, 0) },
    noGutterBottom: { marginBottom: 0 },
    captionWidth: { width: '8em' },
    spaced: { margin: theme.spacing(0, 1) },
  })
);

const Header: React.FC<React.PropsWithChildren<TypographyProps>> = props => {
  const classes = useStyles();
  return (
    <Typography variant="h6" className={classes.header} display="block" {...props} />
  );
};

type FooterLinkProps = React.PropsWithChildren<LinkProps & RouterLinkProps<{}>>;

const FooterLink: React.FC<FooterLinkProps> = props => {
  const classes = useStyles();
  return (
    <Link
      component={RouterLink}
      underline="none"
      className={[classes.secondary, classes.link].join(' ')}
      {...props}
    />
  );
};

const ListLink: React.FC<React.PropsWithChildren<FooterLinkProps>> = props => (
  <ListItem disableGutters>
    <FooterLink variant="subtitle2" {...props} />
  </ListItem>
);

const IconLink: React.FC<{ url: string; icon: IconDefinition }> = props => {
  const { url, icon } = props;
  const classes = useStyles();
  return (
    <Link href={url} underline="none" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon
        icon={icon}
        size="3x"
        className={[classes.secondary, classes.link].join(' ')}
      />
    </Link>
  );
};

export const MainFooter: React.FC = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container>
        <Grid container justify="center" spacing={4}>
          <Grid item xs={2}>
            <Header>About</Header>
            <List dense>
              <ListLink to={getAbsoluteRoute(Route.HELP, HelpRoute.ABOUT)}>
                Who We Are
              </ListLink>
              <ListLink to={getAbsoluteRoute(Route.HELP, HelpRoute.FAQ)}>
                FAQ
              </ListLink>
              <ListLink to={getAbsoluteRoute(Route.HELP, HelpRoute.CONTACT)}>
                Contact Us
              </ListLink>
              <ListLink to={getAbsoluteRoute(Route.HELP, HelpRoute.SUPPORT)}>
                Support
              </ListLink>
            </List>
          </Grid>
          <Grid item xs={2}>
            <Header>Discover</Header>
            <List dense>
              <ListLink to={Route.FEATS}>Feats</ListLink>
              <ListLink to={Route.MEDIA}>Media</ListLink>
              <ListLink to={Route.EVENTS}>Events</ListLink>
              <ListLink to={Route.LEADERBOARD}>Leaderboard</ListLink>
            </List>
          </Grid>
          <Grid item xs={2}>
            <Header>More</Header>
            <List dense>
              <ListLink to={getAbsoluteRoute(Route.HELP, HelpRoute.GUIDE)}>
                Gains
              </ListLink>
              <ListLink to={getAbsoluteRoute(Route.EVENTS, EventsRoute.PAST)}>
                Past Events
              </ListLink>
            </List>
          </Grid>
          <Grid item xs={4}>
            <Header align="center">Latest News</Header>
            <a
              className="twitter-timeline"
              data-width="360"
              data-height="200"
              data-theme="light"
              data-link-color={red['A700']}
              href={ExternalURL.TWITTER_TIMELINE_EMBED}
              data-chrome="noheader nofooter noscrollbar transparent"
            >
              Tweets by brawnzaa
            </a>
          </Grid>
        </Grid>
        <Divider className={classes.section} light />
        <Grid
          container
          justify="center"
          spacing={10}
          className={classes.noGutterBottom}
        >
          <Grid item>
            <IconLink icon={faFacebookSquare} url={ExternalURL.FACEBOOK} />
          </Grid>
          <Grid item>
            <IconLink icon={faTwitterSquare} url={ExternalURL.TWITTER} />
          </Grid>
          <Grid item>
            <IconLink icon={faInstagram} url={ExternalURL.INSTAGRAM} />
          </Grid>
          <Grid item>
            <IconLink icon={faSnapchatSquare} url={ExternalURL.SNAPCHAT} />
          </Grid>
          <Grid item>
            <IconLink icon={faYoutubeSquare} url={ExternalURL.SNAPCHAT} />
          </Grid>
        </Grid>
        <Container maxWidth="sm">
          <Grid container justify="center">
            <Grid item className={classes.captionWidth}>
              <Typography variant="caption" align="right" paragraph>
                {' '}
                <FooterLink
                  to={getAbsoluteRoute(Route.HELP, HelpRoute.TERMS_OF_SERVICE)}
                >
                  Terms of Service
                </FooterLink>
              </Typography>
            </Grid>
            <Grid item className={classes.spaced}>
              <Typography variant="caption" align="center" paragraph>
                <span className={classes.secondary}> | </span>
              </Typography>
            </Grid>
            <Grid item className={classes.captionWidth}>
              <Typography variant="caption" align="left" paragraph>
                <FooterLink
                  to={getAbsoluteRoute(Route.HELP, HelpRoute.PRIVACY_POLICY)}
                >
                  Privacy Policy
                </FooterLink>
              </Typography>
            </Grid>
          </Grid>
          <Typography
            className={classes.secondary}
            variant="caption"
            align="center"
            display="block"
          >
            © {new Date().getFullYear()} Brawnzaa, all rights reserved.
          </Typography>
        </Container>
      </Container>
    </footer>
  );
};

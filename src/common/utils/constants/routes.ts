export enum ExternalURL {
  BRAWNZAA = 'https://www.brawnzaa.com',
  FACEBOOK = 'https://www.facebook.com',
  TWITTER = 'https://twitter.com/brawnzaa',
  INSTAGRAM = 'https://www.instagram.com/brawnzaa',
  YOUTUBE = 'https://www.youtube.com',
  SNAPCHAT = 'https://www.snapchat.com',
  TWITTER_TIMELINE_EMBED = 'https://twitter.com/brawnzaa?ref_src=twsrc%5Etfw',
  PLATZINUM = 'https://www.youtube.com/embed/s6H-xs0fPyM?start=21',
  COOKIE_INFO = 'https://www.cookieconsent.com/what-are-cookies/',
}

export enum Email {
  WEBMASTER = 'webmaster@brawnzaa.com',
  CONTACT = 'contact@brawnzaa.com',
  SUPPORT = 'support@brawnzaa.com',
  PRIVACY = 'privacy@brawnzaa.com',
  LEGAL = 'legal@brawnzaa.com',
  EVENTS = 'events@brawnzaa.com',
  PRESS = 'press@brawnzaa.com',
  BILLING = 'billing@brawnzaa.com',
  DEV = 'dev@brawnzaa.com',
}

export enum Route {
  ROOT = '/',
  SIGN_UP = '/signup',
  LOG_IN = '/login',
  FEATS = '/feats',
  MEDIA = '/media',
  EVENTS = '/events',
  LEADERBOARD = '/leaderboard',
  HELP = '/help',
  POLICY = '/policy',
}

export enum EventsRoute {
  ROOT = '/',
  PAST = 'past',
}

export enum HelpRoute {
  ABOUT = 'about',
  FAQ = 'faq',
  GUIDE = 'guide',
  CONTACT = 'contact',
  SUPPORT = 'support',
}

export enum PolicyRoute {
  TERMS_OF_SERVICE = 'terms',
  PRIVACY_POLICY = 'privacy',
  COOKIE_POLICY = 'cookies',
}

export type RelativeRoute = EventsRoute | HelpRoute | PolicyRoute;

/**
 * <Grid container justify="center">
            <Grid item className={classes.captionWidth}>
              <Typography variant="caption" align="right" paragraph>
                {' '}
                <FooterLink
                  to={getAbsoluteRoute(Route.POLICY, PolicyRoute.TERMS_OF_SERVICE)}
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
                  to={getAbsoluteRoute(Route.POLICY, PolicyRoute.PRIVACY_POLICY)}
                >
                  Privacy Policy
                </FooterLink>
              </Typography>
            </Grid>
          </Grid>
 */

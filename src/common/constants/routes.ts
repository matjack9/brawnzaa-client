export enum Route {
  ROOT = '/',
  SIGN_UP = '/signup',
  LOG_IN = '/login',
  RESET_PASSWORD = '/reset',
  FEATS = '/feats',
  MEDIA = '/media',
  EVENTS = '/events',
  LEADERBOARD = '/leaderboard',
  HELP = '/help',
  POLICY = '/policy',
}

export enum FeatsRoute {
  ROOT = '/',
}

export enum MediaRoute {
  ROOT = '/',
}

export enum EventsRoute {
  ROOT = '/',
  PAST = 'past',
}

export enum LeaderboardRoute {
  ROOT = '/',
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

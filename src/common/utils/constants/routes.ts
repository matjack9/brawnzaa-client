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

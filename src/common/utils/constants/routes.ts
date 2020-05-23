export enum ExternalURL {
  FACEBOOK = 'https://www.facebook.com',
  TWITTER = 'https://twitter.com/brawnzaa',
  INSTAGRAM = 'https://www.instagram.com/brawnzaa',
  YOUTUBE = 'https://www.youtube.com',
  SNAPCHAT = 'https://www.snapchat.com',
  TWITTER_TIMELINE_EMBED = 'https://twitter.com/brawnzaa?ref_src=twsrc%5Etfw',
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
}

export enum EventsRoute {
  ROOT = '/',
  PAST = 'past',
}

export enum HelpRoute {
  ROOT = '/',
  ABOUT = 'about',
  FAQ = 'faq',
  GUIDE = 'guide',
  CONTACT = 'contact',
  SUPPORT = 'support',
  TERMS_OF_SERVICE = 'terms',
  PRIVACY_POLICY = 'privacy',
}

export type RelativeRoute = EventsRoute | HelpRoute;

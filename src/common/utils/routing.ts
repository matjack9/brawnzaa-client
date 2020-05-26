import { Route, RelativeRoute } from './constants/routes';

const getNormalizedRelativeRoute = (relativeRoute: string) =>
  relativeRoute.startsWith('/')
    ? relativeRoute === '/'
      ? ''
      : relativeRoute
    : `/${relativeRoute}`;

export const getAbsoluteRoute = (
  baseRoute: Omit<Route, 'ROOT'>,
  relativeRoute: RelativeRoute
) => `${baseRoute}${getNormalizedRelativeRoute(relativeRoute)}`;

import * as React from 'react';
import { Router, RouteComponentProps } from '@reach/router';
import { PolicyRoute } from 'common/constants/routes';
import TermsAndConditions from './Terms';
import PrivacyPolicy from './Privacy';
import CookiePolicy from './Cookies';

const Policy: React.FC<RouteComponentProps> = () => (
  <Router>
    <TermsAndConditions path={PolicyRoute.TERMS_OF_SERVICE} />
    <PrivacyPolicy path={PolicyRoute.PRIVACY_POLICY} />
    <CookiePolicy path={PolicyRoute.COOKIE_POLICY} />
  </Router>
);

export default Policy;

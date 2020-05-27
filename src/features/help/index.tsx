import * as React from 'react';
import { Router, RouteComponentProps } from '@reach/router';
import { HelpRoute } from 'common/utils/constants/routes';
import WIP from 'common/components/views/WIP';

const Help: React.FC<RouteComponentProps> = () => (
  <Router>
    <WIP path={HelpRoute.ABOUT} label="About" />
    <WIP path={HelpRoute.FAQ} label="FAQ" />
    <WIP path={HelpRoute.GUIDE} label="Guide" />
    <WIP path={HelpRoute.CONTACT} label="Contact" />
    <WIP path={HelpRoute.SUPPORT} label="Support" />
  </Router>
);

export default Help;

import * as React from 'react';
import { Router, RouteComponentProps } from '@reach/router';
import { EventsRoute } from 'common/constants/routes';
import WIP from 'common/components/views/WIP';

const Events: React.FC<RouteComponentProps> = () => (
  <Router>
    <WIP path={EventsRoute.ROOT} label="Events" />
    <WIP path={EventsRoute.PAST} label="Past Events" />
  </Router>
);

export default Events;

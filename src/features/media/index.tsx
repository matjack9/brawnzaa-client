import * as React from 'react';
import { Router, RouteComponentProps } from '@reach/router';
import { MediaRoute } from 'common/utils/constants/routes';
import WIP from 'common/components/views/WIP';

const Media: React.FC<RouteComponentProps> = () => (
  <Router>
    <WIP path={MediaRoute.ROOT} label="Media" />
  </Router>
);

export default Media;

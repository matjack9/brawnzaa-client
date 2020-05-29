import * as React from 'react';
import { Router, RouteComponentProps } from '@reach/router';
import { FeatsRoute } from 'common/constants/routes';
import WIP from 'common/components/views/WIP';

const Feats: React.FC<RouteComponentProps> = () => (
  <Router>
    <WIP path={FeatsRoute.ROOT} label="Feats" />
  </Router>
);

export default Feats;

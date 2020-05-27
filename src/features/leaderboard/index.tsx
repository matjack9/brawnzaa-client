import * as React from 'react';
import { Router, RouteComponentProps } from '@reach/router';
import { LeaderboardRoute } from 'common/utils/constants/routes';
import WIP from 'common/components/views/WIP';

const Leaderboard: React.FC<RouteComponentProps> = () => (
  <Router>
    <WIP path={LeaderboardRoute.ROOT} label="Leaderboard" />
  </Router>
);

export default Leaderboard;

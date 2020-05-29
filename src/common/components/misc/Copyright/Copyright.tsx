import * as React from 'react';
import { Link as RouterLink } from '@reach/router';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Route } from 'common/constants/routes';

export const Copyright: React.FC<TypographyProps> = props => (
  <Typography variant="body2" color="textSecondary" align="center" {...props}>
    {'Copyright © '}
    <Link component={RouterLink} to={Route.ROOT} color="inherit">
      Brawnzaa
    </Link>
    {` ${new Date().getFullYear()}`}
  </Typography>
);

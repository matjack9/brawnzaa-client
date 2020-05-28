import * as React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from '@reach/router';
import Button, { ButtonProps } from '@material-ui/core/Button';

const AdapterLink = React.forwardRef<any, RouterLinkProps<Object>>((props, ref) => (
  <RouterLink ref={ref as any} {...props} />
));

type NavButtonProps = React.PropsWithChildren<ButtonProps & RouterLinkProps<Object>>;

export const NavButton: React.FC<NavButtonProps> = props => (
  <Button component={AdapterLink} {...props} />
);

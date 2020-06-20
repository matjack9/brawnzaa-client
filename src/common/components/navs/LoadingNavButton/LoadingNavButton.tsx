import * as React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from '@reach/router';
import LoadingButton, {
  LoadingButtonProps,
} from 'common/components/buttons/Loading';

const AdapterLink = React.forwardRef<any, RouterLinkProps<Object>>((props, ref) => (
  <RouterLink ref={ref as any} {...props} />
));

export type LoadingNavButtonProps = React.PropsWithChildren<
  LoadingButtonProps & RouterLinkProps<Object>
>;

export const LoadingNavButton: React.FC<LoadingNavButtonProps> = props => (
  <LoadingButton component={AdapterLink} {...props} />
);

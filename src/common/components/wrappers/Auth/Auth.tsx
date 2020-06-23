import * as React from 'react';
import useAuthSubscription from 'common/hooks/useAuthSubscription';

export const Auth: React.FC = props => {
  const { children } = props;

  useAuthSubscription();

  return <>{children}</>;
};

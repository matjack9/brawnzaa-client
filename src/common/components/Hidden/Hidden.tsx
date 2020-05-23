import * as React from 'react';

/* inline style for higher specificity */
export const Hidden: React.FC = ({ children }) => (
  <div style={{ visibility: 'hidden', display: 'flex' }}>{children}</div>
);

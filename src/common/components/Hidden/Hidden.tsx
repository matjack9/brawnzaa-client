import * as React from 'react';

export const Hidden: React.FC = ({ children }) => (
  <div style={{ visibility: 'hidden', display: 'flex' }}>{children}</div>
);

import * as React from 'react';
import { __PROD__ } from 'common/utils/constants/config';
import Crash from 'common/components/views/Crash';

interface Props {}

interface State {
  isError: any;
}

export class ErrorBoundary extends React.Component<Props, State> {
  public readonly state = { isError: null };

  static getDerivedStateFromError() {
    return { isError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    if (__PROD__) {
      /* TODO: log error */
      /* TODO: serialize store */
    }
  }

  render() {
    if (this.state.isError) {
      return (
        <div data-testid="crash-view">
          <Crash />
        </div>
      );
    }
    return this.props.children;
  }
}

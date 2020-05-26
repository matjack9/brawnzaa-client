import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { ErrorBoundary } from '../ErrorBoundary';

const ErrorView = () => {
  throw 'bigly error';
};

/* suppress error in console */
jest.spyOn(console, 'error').mockImplementation(() => {});

describe('<ErrorBoundary />', () => {
  it('catches uncaught errors and renders a fallback UI', () => {
    render(<ErrorView />, { wrapper: ErrorBoundary });
    const crashView = screen.getByTestId('crash-view');
    expect(crashView).toBeInTheDocument();
  });
});

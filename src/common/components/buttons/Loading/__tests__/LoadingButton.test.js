import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { LoadingButton } from '../LoadingButton';

describe('<LoadingButton />', () => {
  it('renders its label when not loading', () => {
    const label = 'Show me';
    render(<LoadingButton isLoading={false}>{label}</LoadingButton>);
    const button = screen.getByTestId('loading-btn');
    const progressCircle = screen.queryByTestId('loading-btn-progress-circle');
    expect(button).toHaveTextContent(label);
    expect(progressCircle).not.toBeInTheDocument();
  });

  it('renders a loading indicator when loading', () => {
    const label = 'Hide me!';
    render(<LoadingButton isLoading>{label}</LoadingButton>);
    const button = screen.getByTestId('loading-btn');
    const progressCircle = screen.getByTestId('loading-btn-progress-circle');
    expect(button).toBeDisabled();
    expect(button).toHaveTextContent(label);
    expect(screen.getByText(label)).not.toBeVisible();
    expect(button).toContainElement(progressCircle);
  });
});

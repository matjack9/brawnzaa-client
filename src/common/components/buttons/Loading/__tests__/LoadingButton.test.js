import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { LoadingButton } from '../LoadingButton';

describe('<LoadingButton />', () => {
  it('renders its label when not loading', () => {
    const label = 'Show me';
    render(<LoadingButton isLoading={false}>{label}</LoadingButton>);
    const button = screen.getByTestId('loading-btn');
    const progressCircle = screen.queryByTestId('loading-btn-progress-circle');
    expect(button).toHaveTextContent(label);
    expect(button).not.toBeDisabled();
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

  it('hides any start and end icons when loading', () => {
    const label = 'Hide me!';
    const startIconTestId = 'start-icon';
    const endIconTestId = 'end-icon';
    const startIcon = <svg data-testid={startIconTestId}></svg>;
    const endIcon = <svg data-testid={endIconTestId}></svg>;
    render(
      <LoadingButton isLoading startIcon={startIcon} endIcon={endIcon}>
        {label}
      </LoadingButton>
    );
    const button = screen.getByTestId('loading-btn');
    const progressCircle = screen.getByTestId('loading-btn-progress-circle');
    expect(button).toBeDisabled();
    expect(button).toHaveTextContent(label);
    expect(screen.getByText(label)).not.toBeVisible();
    expect(screen.getByTestId(startIconTestId)).not.toBeVisible();
    expect(screen.getByTestId(endIconTestId)).not.toBeVisible();
    expect(button).toContainElement(progressCircle);
  });
});

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Hidden } from '../Hidden';

describe('<Hidden />', () => {
  it('visually hides its children', () => {
    render(<div data-testid="hide-me" />, { wrapper: Hidden });
    const maybeHidden = screen.getByTestId('hide-me');
    expect(maybeHidden).not.toBeVisible();
  });
});

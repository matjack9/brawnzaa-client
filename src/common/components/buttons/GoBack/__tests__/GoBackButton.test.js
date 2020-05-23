import * as React from 'react';
import { navigate } from '@reach/router';
import { render, screen, fireEvent } from '@testing-library/react';
import { GoBackButton } from '../GoBackButton';

jest.mock('@reach/router', () => ({
  navigate: jest.fn(),
}));

describe('<GoBackButton />', () => {
  it('navigates back on click', () => {
    render(<GoBackButton />);
    const button = screen.getByTestId('go-back-btn');
    fireEvent.click(button);
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toBeCalledWith(-1);
  });
});

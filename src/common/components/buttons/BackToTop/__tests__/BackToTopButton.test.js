import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BackToTopButton } from '../BackToTopButton';

global.scrollTo = jest.fn();

describe('<BackToTopButton />', () => {
  it('scrolls to top on click', () => {
    render(<BackToTopButton />);
    expect(global.scrollTo).not.toHaveBeenCalled();
    const button = screen.getByTestId('back-to-top-btn');
    fireEvent.click(button);
    expect(global.scrollTo).toHaveBeenCalledTimes(1);
    expect(global.scrollTo).toBeCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });
});

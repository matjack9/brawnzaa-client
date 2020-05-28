import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ScrollToTopButton } from '../ScrollToTopButton';

global.scrollTo = jest.fn();

describe('<ScrollToTopButton />', () => {
  it('scrolls to top on click', () => {
    render(<ScrollToTopButton />);
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

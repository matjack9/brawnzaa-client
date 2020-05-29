import * as React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { EasterEgg } from '../EasterEgg';
import { KONAMI_CODES } from 'common/constants/misc';

describe('<EasterEgg />', () => {
  beforeEach(() => {
    render(<EasterEgg />);
    const maybeDialog = screen.queryByTestId('easter-egg-dialog');
    expect(maybeDialog).not.toBeInTheDocument();
    KONAMI_CODES.forEach(key => {
      fireEvent.keyUp(document, { key });
    });
  });

  it('renders after entering the konami code', () => {
    const dialog = screen.getByTestId('easter-egg-dialog');
    expect(dialog).toBeInTheDocument();
  });

  it('closes after clicking the close button', async () => {
    const dialogCloseButton = screen.getByTestId('easter-egg-dialog-close');
    fireEvent.click(dialogCloseButton);
    await waitForElementToBeRemoved(() => screen.queryByTestId('easter-egg-dialog'));
    const maybeDialog = screen.queryByTestId('easter-egg-dialog');
    expect(maybeDialog).not.toBeInTheDocument();
  });

  it('can render after closing and re-entering the konami code', async () => {
    const dialogCloseButton = screen.getByTestId('easter-egg-dialog-close');
    fireEvent.click(dialogCloseButton);
    await waitForElementToBeRemoved(() => screen.queryByTestId('easter-egg-dialog'));
    const maybeDialog = screen.queryByTestId('easter-egg-dialog');
    expect(maybeDialog).not.toBeInTheDocument();
    KONAMI_CODES.forEach(key => {
      fireEvent.keyUp(document, { key });
    });
    const dialog = screen.getByTestId('easter-egg-dialog');
    expect(dialog).toBeInTheDocument();
  });
});

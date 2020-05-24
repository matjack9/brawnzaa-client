import * as React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Crash } from '../Crash';

const mockRegistration = {
  unregister: jest.fn().mockImplementationOnce(() => Promise.resolve(true)),
};

const mockServiceWorker = {
  getRegistrations: jest
    .fn()
    .mockImplementationOnce(() => Promise.resolve([mockRegistration])),
};

global.navigator.serviceWorker = mockServiceWorker;

delete window.location;
window.location = { reload: jest.fn() };

describe('<Crash />', () => {
  it('unregisters any service workers and then refreshes upon repair click', async () => {
    render(<Crash />);
    expect(navigator.serviceWorker.getRegistrations).not.toHaveBeenCalled();
    expect(mockRegistration.unregister).not.toHaveBeenCalled();
    expect(window.location.reload).not.toHaveBeenCalled();
    const repair = screen.getByTestId('crash-repair-btn');
    fireEvent.click(repair);
    await waitFor(() =>
      expect(navigator.serviceWorker.getRegistrations).toHaveBeenCalledTimes(1)
    );
    await waitFor(() =>
      expect(mockRegistration.unregister).toHaveBeenCalledTimes(1)
    );
    await waitFor(() => expect(window.location.reload).toHaveBeenCalledTimes(1));
  });
});

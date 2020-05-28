// import React from 'react';
// import { render, act } from '@testing-library/react';
// import { useCountdown } from '../useCountdown';

// const setup = (...args) => {
//   const returnWrapper = {};
//   const TestComponent = () => {
//     /* using mutating object to access hook return */
//     Object.assign(returnWrapper, { returnVal: useCountdown(...args) });
//     return null;
//   };
//   render(<TestComponent />);
//   return returnWrapper;
// };

// const stubbedNow = new Date('November 29, 1990 19:03:00').getTime();

// describe('useCountdown', () => {
//   beforeEach(() => {
//     jest.useFakeTimers();
//     jest
//       .spyOn(Date, 'now')
//       .mockImplementationOnce(() => stubbedNow)
//       .mockImplementationOnce(() => stubbedNow)
//       .mockImplementationOnce(() => stubbedNow + 2000)
//       .mockImplementationOnce(() => stubbedNow + 2000);
//   });

//   afterEach(() => {
//     jest.spyOn(Date, 'now').mockRestore();
//     jest.clearAllTimers();
//   });

//   it('returns the time remaining', () => {
//     const { returnVal } = setup(new Date('June 20, 2020 12:00:00').getTime());
//     expect(returnVal).toBe(932745420000);
//   });

//   it('returns 0 if it is the target time', () => {
//     const { returnVal } = setup(stubbedNow);
//     expect(returnVal).toBe(0);
//   });

//   it('returns 0 if the target time has passed', () => {
//     const { returnVal } = setup(stubbedNow - 1000);
//     expect(returnVal).toBe(0);
//   });

//   it('updates the time remaining at the designated interval', () => {
//     const returnWrapper = setup(new Date('June 20, 2020 12:00:00').getTime(), 2000);
//     act(() => {
//       jest.advanceTimersByTime(2000);
//     });
//     expect(returnWrapper.returnVal).toBe(932745418000);
//   });
// });

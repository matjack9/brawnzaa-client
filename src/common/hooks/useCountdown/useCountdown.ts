import * as React from 'react';

export const useCountdown = (datetime: number, interval: number = 1000) => {
  const [now, setNow] = React.useState(Date.now());

  React.useEffect(() => {
    const tick = setInterval(() => {
      setNow(Date.now());
    }, interval);
    return () => {
      clearInterval(tick);
    };
  }, []);

  return datetime - now;
};

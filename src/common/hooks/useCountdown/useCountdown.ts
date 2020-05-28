import * as React from 'react';

export const useCountdown = (datetime: number, interval: number = 1000) => {
  const [now, setNow] = React.useState(Date.now());

  const timeLeft = datetime - now;
  const isTimeLeft = timeLeft > 0;

  React.useEffect(() => {
    const tick = setInterval(() => {
      setNow(Date.now());
    }, interval);

    if (!isTimeLeft) {
      clearInterval(tick);
    }

    return () => {
      clearInterval(tick);
    };
  }, [isTimeLeft, interval]);

  return isTimeLeft ? timeLeft : 0;
};

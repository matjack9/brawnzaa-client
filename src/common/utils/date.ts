type DisplayConfig = Partial<{
  years: boolean;
  days: boolean;
  hours: boolean;
  minutes: boolean;
  seconds: boolean;
}>;

export const getCountdownText = (
  timeLeft: number,
  toDisplay: DisplayConfig = {
    days: true,
    hours: true,
    minutes: true,
    seconds: true,
  }
) => {
  const days = toDisplay.days ? Math.floor(timeLeft / (1000 * 60 * 60 * 24)) : null;
  const hours = toDisplay.hours
    ? Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    : null;
  const minutes = toDisplay.minutes
    ? Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
    : null;
  const seconds = toDisplay.seconds
    ? Math.floor((timeLeft % (1000 * 60)) / 1000)
    : null;

  const getSubStrForTimeUnit = (
    unitVal: number | null,
    unitType: string,
    isUnitHighestWithValue: boolean
  ) => {
    const valWithUnit = unitVal + unitType + ' ';
    return `${
      unitVal === null
        ? ''
        : unitVal
        ? valWithUnit
        : isUnitHighestWithValue
        ? ''
        : valWithUnit
    }`;
  };

  return `${getSubStrForTimeUnit(days, 'd', true)}${getSubStrForTimeUnit(
    hours,
    'h',
    !days
  )}${getSubStrForTimeUnit(minutes, 'm', !days && !hours)}${getSubStrForTimeUnit(
    seconds,
    's',
    !days && !hours && !minutes
  )}`.trim();
};

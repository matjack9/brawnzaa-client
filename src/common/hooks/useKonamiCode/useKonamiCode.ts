import * as React from 'react';
import { KONAMI_CODES } from 'common/utils/constants/misc';

export const useKonamiCode = () => {
  const stateHandler = React.useState(false);
  const [isKonami, setIsKonami] = stateHandler;
  type StateHandler = typeof stateHandler;

  const refIndex = React.useRef(0);

  const handleKeyUp = React.useCallback(
    event => {
      const onKeyUp = ({ key }: KeyboardEvent) => {
        if (refIndex.current === KONAMI_CODES.length - 1) {
          setIsKonami(true);
          refIndex.current = 0;
        } else if (
          !!key &&
          !!KONAMI_CODES[refIndex.current] &&
          key.toLowerCase() === KONAMI_CODES[refIndex.current].toLowerCase()
        ) {
          refIndex.current++;
        } else {
          refIndex.current = 0;
          setIsKonami(false);
        }
      };
      onKeyUp(event);
    },
    [setIsKonami]
  );

  React.useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyUp]);

  return [isKonami, setIsKonami] as StateHandler;
};

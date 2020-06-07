import * as React from 'react';
import { __PROD__ } from 'common/constants/config';

const WELCOME_TEXT =
  'I bid thee welcome to this distant setting, this abstract time. ' +
  'Ye lambs of the ungodly god born man. ' +
  'Enjoy this sacred nocturnal festival to the fullest.';

const ASCII_ART =
  '                                                                             _ \n' +
  '                                 _ __  _ ______  __ ___      ___ __ __ _  __| |\n' +
  "                                | '_ \\| '_ \\  _|/ _` \\ \\ /\\ / / '_ \\__` |/ _` |\n" +
  '                                | |_) | |_) \\ \\| | | |\\ V  V /| |_) | | | (_| |\n' +
  '                                |_.__/|_.__/___\\_| |_| \\_/\\_/ |_.__/  |_|\\__,_|\n';

const KONAMI_CODE_CTA = 'Show me the Konami Code.';

const KONAMI_CODE_LINK =
  'https://www.howtogeek.com/659611/what-is-the-konami-code-and-how-do-you-use-it/#:~:text=Up%2C%20Up%2C%20Down%2C%20Down,cheats%20that%20help%20you%20win.';

export const useConsoleArt = () => {
  React.useEffect(() => {
    if (__PROD__) {
      /* eslint-disable-next-line no-console */
      console.clear();

      /* eslint-disable-next-line no-console */
      console.log(`%c ${WELCOME_TEXT}`, 'background: black; color: grey;');

      /* eslint-disable-next-line no-console */
      console.log(`%c ${ASCII_ART}`, 'font-weight: bold; color: red;');

      /* eslint-disable-next-line no-console */
      console.log('\n\n\n');

      /* eslint-disable-next-line no-console */
      console.log(
        `%c ${KONAMI_CODE_CTA}`,
        'background: #222; color: white; font-size: x-large;'
      );

      /* eslint-disable-next-line no-console */
      console.log(
        `%c * for the ignorant: ${KONAMI_CODE_LINK}`,
        'color: grey; font-size: x-small;'
      );

      /* eslint-disable-next-line no-console */
      console.log('\n');
    }
    /* eslint-disable-next-line no-console */
    return console.clear;
  }, []);
};

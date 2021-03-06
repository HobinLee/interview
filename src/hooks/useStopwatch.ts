import { Seconds } from '@src/types/common';
import { useState } from 'react';

const MILLSEC_PER_SEC: number = 1000;

export default () => {
  const [timer, setTimer] = useState<Seconds>(new Date().getTime());

  return {
    startStopWatch: () => {
      setTimer(new Date().getTime());
    },
    getStopWatchTime: () => {
      const now = new Date().getTime();

      const time = (now - timer) / MILLSEC_PER_SEC;

      return time;
    },
  };
};

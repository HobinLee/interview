import { Seconds } from '@src/stores/question';
import { useCallback, useEffect, useState } from 'react';

const ONE_SECOND = 1000;

export default (initTime: Seconds, onTimeOver?: () => void) => {
  const [timer, setTimer] = useState<Seconds>(initTime);

  useEffect(() => {
    if (!timer) {
      onTimeOver?.();
      return;
    }

    const timeout = setTimeout(() => {
      setTimer(timer - 1);
    }, ONE_SECOND);

    return () => clearTimeout(timeout);
  }, [timer]);

  const initTimer = useCallback(() => {
    setTimer(initTime);
  }, []);

  return { timer, initTimer };
};

import { useState } from 'react';

export default <T>(key: string, defaultValue?: T): [T, (value: T) => void, T] => {
  const localStorageData: T = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)!) : defaultValue;
  const [state, setState] = useState<T>(localStorageData);

  return [
    state,
    (value: T) => {
      localStorage.setItem(key, JSON.stringify(value));
      setState(value);
    },
    localStorageData
  ];
};

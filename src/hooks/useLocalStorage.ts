import { useState } from 'react';

export default <T>(key: string, defaultValue?: T): [T, (value: T) => void] => {
  const [state, setState] = useState<T>(
    JSON.parse(localStorage.getItem(key) ?? '') ?? defaultValue,
  );

  return [
    state,
    (value: T) => {
      localStorage.setItem(key, JSON.stringify(value));
      setState(value);
    },
  ];
};

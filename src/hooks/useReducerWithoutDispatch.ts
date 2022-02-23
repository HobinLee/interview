import { useReducer } from 'react';

interface ReducerTypes<T> {
  [key: string]: (state: T) => T;
}

export default <T>(
  initialState: T,
  obj: ReducerTypes<T>,
): [T, (() => void)[]] => {
  const reducer = (state: T, action: any) => {
    return obj[action.type]?.(state) ?? state;
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return [
    state,
    Object.keys(obj).map((key: string) => () => dispatch({ type: key })),
  ];
};

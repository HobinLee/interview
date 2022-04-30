import useReducerWithoutDispatch from "./useReducerWithoutDispatch";

export default function(defautValue = true): [boolean, () => void, () => void] {
  const [value, [turnOn, turnOff]] = useReducerWithoutDispatch(defautValue, {
    turnOn: () => true,
    turnOff: () => false
  });

  return [value, turnOn, turnOff];
}
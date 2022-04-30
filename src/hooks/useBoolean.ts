import useReducerWithoutDispatch from "./useReducerWithoutDispatch";

type TrueSetter = () => void;
type FalseSetter = () => void;

export default function(defautValue = true): [boolean, TrueSetter, FalseSetter] {
  const [value, [setTrue, setFalse]] = useReducerWithoutDispatch(defautValue, {
    setTrue: () => true,
    setFalse: () => false
  });

  return [value, setTrue, setFalse];
}
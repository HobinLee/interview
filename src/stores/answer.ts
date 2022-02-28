import { Answer } from '@src/types/answer';
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
} from 'recoil';

const answerState = atom<Answer[]>({
  key: 'result',
  default: [],
});

export const getAnswerList = () => useRecoilValue(answerState);

export const useAnswerState = () => {
  const [answerList, setAnswerList] = useRecoilState(answerState);
  const initAnswerList = useResetRecoilState(answerState);

  return {
    answerList,
    setAnswerList,
    initAnswerList,
  };
};

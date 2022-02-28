import { Question, QuestionSetKey } from '@src/types/question';
import { atom, useRecoilState, useRecoilValue } from 'recoil';

const questionState = atom<Question[]>({
  key: 'question',
  default: [],
});

const questionSetKeyState = atom<QuestionSetKey>({
  key: 'questionSetKey',
  default: 'default',
});

export const useQuestionState = () => useRecoilState(questionState);

export const getQuestionSetKey = () => useRecoilValue(questionSetKeyState);

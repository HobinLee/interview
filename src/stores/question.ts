import { Question, QuestionSetKey } from '@src/types/question';
import { atom } from 'recoil';

export const questionState = atom<Question[]>({
  key: 'question',
  default: [],
});

export const questionSetKeyState = atom<QuestionSetKey>({
  key: 'questionSetKey',
  default: 'default',
});

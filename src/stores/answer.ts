import { atom } from 'recoil';
import { Question } from './question';
export type Seconds = number;

export type Answer = {
  question: Question;
  time: Seconds;
};

export const answerState = atom<Answer[]>({
  key: 'result',
  default: [],
});

export type QuestionSetKey = string;

export const questionSetKeyState = atom<QuestionSetKey>({
  key: 'questionSetKey',
  default: 'default',
});

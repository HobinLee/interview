import { atom, RecoilState } from 'recoil';

export type Question = string;

export type QuestionSet = {
  begin: Question[];
  essential: Question[];
  random: Question[];
  end: Question[];
};

export const questionState = atom<Question[]>({
  key: 'question',
  default: [],
});

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

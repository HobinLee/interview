import { atom } from 'recoil';

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

import { Answer } from '@src/types/answer';
import { atom } from 'recoil';

export const answerState = atom<Answer[]>({
  key: 'result',
  default: [],
});

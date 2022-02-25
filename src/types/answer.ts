import { Seconds } from './common';
import { Question } from './question';

export type Answer = {
  question: Question;
  time: Seconds;
  record?: any;
};

import { getQuestionSetKey, useQuestionState } from '@src/stores/question';
import { Question, QuestionSet } from '@src/types/question';
import { draw, shuffle } from '@src/utils/utils';
import { useReducer } from 'react';
import { useLocalStorage } from '@src/hooks'

type MiddleQuestions = {
  essential: Question[];
  random: Question[];
};

const getQuestions = ({ essential, random }: MiddleQuestions): Question[] => {
  const QUESTION_COUNT = 15;
  const restCount = QUESTION_COUNT - essential.length;

  const questions: Question[] = [...essential, ...draw(random, restCount)];

  return shuffle(questions);
};

const shuffleQuestion = (questionSet: QuestionSet): Question[] => {
  return [
    ...questionSet.begin,
    ...getQuestions(questionSet),
    ...questionSet.end,
  ];
};

export default () => {
  const questionSetKey = getQuestionSetKey();
  const [questionList, setQuestionList] = useQuestionState();
  const [index, nextIndex] = useReducer((index: number) => index + 1, 0);
  const [questionSet] = useLocalStorage(questionSetKey, { begin: [], essential: [], random: [], end: [] })

  return {
    question: questionList[index],
    shuffleQuestion: () => {
      setQuestionList(shuffleQuestion(questionSet));
    },
    nextQuestion: nextIndex,
  };
};

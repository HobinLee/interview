import { getQuestionSetKey, useQuestionState } from '@src/stores/question';
import { Question, QuestionSet } from '@src/types/question';
import { draw, shuffle } from '@src/utils/utils';
import { useReducer } from 'react';

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

const shuffleQuestion = (questionSetKey: string): Question[] => {
  const questionSet: QuestionSet = JSON.parse(
    localStorage.getItem(questionSetKey) ?? '{}',
  );

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

  return {
    question: questionList[index],
    shuffleQuestion: () => {
      setQuestionList(shuffleQuestion(questionSetKey));
    },
    nextQuestion: nextIndex,
  };
};

import { questionSetKeyState, questionState } from '@src/stores/question';
import { Question, QuestionSet, QuestionSetKey } from '@src/types/question';
import { draw, shuffle } from '@src/utils/utils';
import { useReducer } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

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
  const questionSetKey = useRecoilValue<QuestionSetKey>(questionSetKeyState);
  const [questionList, setQuestionList] =
    useRecoilState<Question[]>(questionState);
  const [index, nextIndex] = useReducer((index: number) => index + 1, 0);

  return {
    question: questionList[index],
    shuffleQuestion: () => {
      setQuestionList(shuffleQuestion(questionSetKey));
    },
    nextQuestion: nextIndex,
  };
};

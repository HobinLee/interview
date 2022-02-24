import { draw, shuffle } from '@src/utils/utils';
import { atom, RecoilState, useRecoilState, useRecoilValue } from 'recoil';

export type Question = string;

export type QuestionSet = {
  begin: Question[];
  essential: Question[];
  random: Question[];
  end: Question[];
};

const questionState = atom<Question[]>({
  key: 'question',
  default: [],
});

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

export const useQuestionStore = () => {
  const questionSetKey = useRecoilValue<QuestionSetKey>(questionSetKeyState);
  const [questionList, setQuestionList] =
    useRecoilState<Question[]>(questionState);

  return {
    questionList,
    shuffleQuestion: () => {
      setQuestionList(shuffleQuestion(questionSetKey));
    },
  };
};

export type Seconds = number;

export type Answer = {
  question: Question;
  time: Seconds;
};

const answerState = atom<Answer[]>({
  key: 'result',
  default: [],
});

export type QuestionSetKey = string;

export const questionSetKeyState = atom<QuestionSetKey>({
  key: 'questionSetKey',
  default: 'default',
});

export const useAnswerStore = () => {
  const [answerList, setAnswerList] = useRecoilState<Answer[]>(answerState);

  return {
    answerList,
    initAnswerList: () => {
      setAnswerList([]);
    },
    addAnswer: (answer: Answer) => {
      setAnswerList([...answerList, answer]);
    },
  };
};

import { answerState } from '@src/stores/answer';
import { Answer } from '@src/types/answer';
import { Seconds } from '@src/types/common';
import { Question } from '@src/types/question';
import { useRecoilState } from 'recoil';

export default () => {
  const [answerList, setAnswerList] = useRecoilState<Answer[]>(answerState);

  return {
    answerList,
    initAnswerList: () => {
      setAnswerList([]);
    },
    addAnswer: (question: Question, time: Seconds) => {
      setAnswerList([...answerList, { question, time }]);
    },
  };
};

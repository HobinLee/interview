import { Answer, answerState, Seconds } from '@src/stores/answer';
import { Question } from '@src/stores/question';
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

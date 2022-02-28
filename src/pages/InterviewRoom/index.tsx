import { FC, useEffect, useReducer } from 'react';
import * as S from './style';
import EnterSFX from '@src/assets/audios/enter.mp3';
import { useAudio, useReducerWithoutDispatch, useStopwatch } from '@src/hooks';
import { LoadingIndicator } from './Loading';
import { InterviewRoomBody } from './Body';
import { InterviewRoomFooter } from './Footer';
import { IndicationBox } from './IndicationBox';
import { useQuestion } from '@src/hooks';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { answerState } from '@src/stores/answer';
import { Seconds } from '@src/types/common';
import { Question } from '@src/types/question';
import { Answer } from '@src/types/answer';
import { standbyState } from '@src/stores/interview';
import Recorder from '@src/components/molecules/Recorder';

const InterviewRoom: FC = () => {
  const { question, shuffleQuestion, nextQuestion } = useQuestion();
  const { initAnswerList, addAnswer } = useAnswerControl();
  const { isLoading, audio } = useAudio(EnterSFX, true);
  const { startStopWatch, getStopWatchTime } = useStopwatch();
  const [isInterviewing, [startInterview]] = useReducerWithoutDispatch(false, {
    startInterview: () => true,
  });
  const [standby, setStandby] = useRecoilState(standbyState);

  useEffect(() => {
    if (!isInterviewing) return;

    if (!standby) {
      startStopWatch();
      return;
    }
  }, [standby]);

  return (
    <S.InterviewRoom>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <>
          <InterviewRoomBody />
          <InterviewRoomFooter
            isEndQuestion={isInterviewing && !question}
            handelNextQuestion={handelNextQuestion}
          />
          <IndicationBox
            isInterviewing={isInterviewing}
            question={question}
            startInterview={handleStartInterview}
          />
        </>
      )}
      {audio}
      <Recorder isEndQuestion={isInterviewing && !question} />
    </S.InterviewRoom>
  );

  function handleStartInterview() {
    shuffleQuestion();
    initAnswerList();
    startInterview();
  }

  function handelNextQuestion() {
    addAnswer(question, getStopWatchTime());
    nextQuestion();
    setStandby(true);
  }
};

export default InterviewRoom;

function useAnswerControl() {
  const [answerList, setAnswerList] = useRecoilState<Answer[]>(answerState);
  const initAnswerList = useResetRecoilState(answerState);

  return {
    initAnswerList,
    addAnswer: (question: Question, time: Seconds) => {
      setAnswerList([...answerList, { question, time }]);
    },
  };
}

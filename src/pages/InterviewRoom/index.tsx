import { FC, useEffect, useReducer } from 'react';
import * as S from './style';
import EnterSFX from '@src/assets/audios/enter.mp3';
import {
  useAnswer,
  useAudio,
  useReducerWithoutDispatch,
  useStopwatch,
} from '@src/hooks';
import { LoadingIndicator } from './Loading';
import { InterviewRoomBody } from './Body';
import { InterviewRoomFooter } from './Footer';
import { IndicationBox } from './IndicationBox';
import { useQuestion } from '@src/hooks';

const InterviewRoom: FC = () => {
  const { question, shuffleQuestion, nextQuestion } = useQuestion();
  const { initAnswerList, addAnswer } = useAnswer();
  const { isLoading, audio } = useAudio(EnterSFX, true);
  const { startStopWatch, getStopWatchTime } = useStopwatch();
  const [isInterviewing, [startInterview]] = useReducerWithoutDispatch(false, {
    startInterview: () => true,
  });
  const [standby, [ready, start]] = useReducerWithoutDispatch(true, {
    ready: () => true,
    start: () => false,
  });

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
            standby={standby}
          />
          <IndicationBox
            isInterviewing={isInterviewing}
            question={question}
            start={start}
            startInterview={handleStartInterview}
          />
        </>
      )}
      {audio}
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
    ready();
  }
};

export default InterviewRoom;

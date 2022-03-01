import { FC, useEffect, useReducer } from 'react';
import * as S from './style';
import EnterSFX from '@src/assets/audios/enter.mp3';
import { useAudio, useReducerWithoutDispatch, useStopwatch } from '@src/hooks';
import { LoadingIndicator } from './Loading';
import { InterviewRoomBody } from './Body';
import { InterviewRoomFooter } from './Footer';
import { IndicationBox } from './IndicationBox';
import { useQuestion, useRecord } from '@src/hooks';
import { useRecoilState } from 'recoil';
import { useAnswerState } from '@src/stores/answer';
import { Seconds } from '@src/types/common';
import { Question } from '@src/types/question';
import { standbyState } from '@src/stores/interview';
import { useRecordState } from '@src/stores/records';

const InterviewRoom: FC = () => {
  const { question, shuffleQuestion, nextQuestion } = useQuestion();
  const { initAnswerList, addAnswer } = useAnswerControl();
  const { startStopWatch, getStopWatchTime } = useStopwatch();
  const [isInterviewing, [startInterview]] = useReducerWithoutDispatch(false, {
    startInterview: () => true,
  });
  const [standby, setStandby] = useRecoilState(standbyState);
  const { isLoading, audio } = useAudio(EnterSFX, true);
  const { recorder, startRecord, stopRecord, recordList, isReadyToRecord } = useRecord(
    isInterviewing && !question,
  );
  const { setRecordList, initRecordList } = useRecordState();

  useEffect(() => {
    initRecordList();
    return () => {
      setRecordList([...recordList]);
    };
  }, []);

  useEffect(() => {
    if (!isInterviewing) return;

    if (!standby) {
      startRecord();
      startStopWatch();
      return;
    }
  }, [standby]);

  return (
    <S.InterviewRoom>
      {!isReadyToRecord || isLoading ? (
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
      {recorder}
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
    stopRecord();
  }
};

export default InterviewRoom;

function useAnswerControl() {
  const { answerList, setAnswerList, initAnswerList } = useAnswerState();

  return {
    initAnswerList,
    addAnswer: (question: Question, time: Seconds) => {
      setAnswerList([...answerList, { question, time }]);
    },
  };
}

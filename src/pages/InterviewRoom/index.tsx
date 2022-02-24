import { FC, useEffect, useReducer, useState } from 'react';
import * as S from './style';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  Answer,
  Question,
  QuestionSet,
  questionSetKeyState,
  QuestionSetKey,
  useAnswerStore,
  useQuestionStore,
} from '@src/stores/question';
import EnterSFX from '@src/assets/audios/enter.mp3';
import { useAudio, useReducerWithoutDispatch, useStopwatch } from '@src/hooks';
import { LoadingIndicator } from './Loading';
import { InterviewRoomBody } from './Body';
import { InterviewRoomFooter } from './Footer';
import { IndicationBox } from './IndicationBox';

const InterviewRoom: FC = () => {
  const { questionList, shuffleQuestion } = useQuestionStore();
  const { initAnswerList, addAnswer } = useAnswerStore();
  const { isLoading, audio } = useAudio(EnterSFX, true);
  const { startStopWatch, getCurrentWatch } = useStopwatch();
  const [QIndex, nextQIndex] = useReducer((index: number) => index + 1, 0);
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

  const startQuestion = () => {
    shuffleQuestion();
    initAnswerList();
    startInterview();
  };

  const handelNextQuestion = () => {
    const answer: Answer = {
      question: questionList[QIndex],
      time: getCurrentWatch(),
    };

    addAnswer(answer);
    nextQIndex();
    ready();
  };

  return (
    <S.InterviewRoom>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <>
          <InterviewRoomBody />
          <InterviewRoomFooter
            isLastQuestion={isInterviewing && !questionList[QIndex]}
            handelNextQuestion={handelNextQuestion}
            standby={standby}
          />
          <IndicationBox
            isInterviewing={isInterviewing}
            question={questionList[QIndex]}
            start={start}
            startInterview={startQuestion}
          />
        </>
      )}
      {audio}
    </S.InterviewRoom>
  );
};

export default InterviewRoom;

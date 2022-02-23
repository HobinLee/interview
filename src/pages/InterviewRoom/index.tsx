import { FC, useEffect, useReducer, useState } from 'react';
import * as S from './style';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  Answer,
  answerState,
  Question,
  questionState,
  QuestionSet,
  questionSetKeyState,
  QuestionSetKey,
} from '@src/stores/question';
import EnterSFX from '@src/assets/audios/enter.mp3';
import { draw, shuffle } from '@src/utils/utils';
import { useAudio, useReducerWithoutDispatch, useStopwatch } from '@src/hooks';
import { LoadingIndicator } from './Loading';
import { InterviewRoomBody } from './Body';
import { InterviewRoomFooter } from './Footer';
import { IndicationBox } from './IndicationBox';

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

const InterviewRoom: FC = () => {
  const questionSetKey = useRecoilValue<QuestionSetKey>(questionSetKeyState);
  const [questions, setQuestions] = useRecoilState<Question[]>(questionState);
  const [answerList, setAnswerList] = useRecoilState<Answer[]>(answerState);
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

  const shuffleQuestion = (): Question[] => {
    const questionSet: QuestionSet = JSON.parse(
      localStorage.getItem(questionSetKey) ?? '{}',
    );

    return [
      ...questionSet.begin,
      ...getQuestions(questionSet),
      ...questionSet.end,
    ];
  };

  const startQuestion = () => {
    setAnswerList([]);
    setQuestions(shuffleQuestion);
    startInterview();
  };

  const handelNextQuestion = () => {
    const answer: Answer = {
      question: questions[QIndex],
      time: getCurrentWatch(),
    };

    setAnswerList([...answerList, answer]);
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
            showNextButton={QIndex === 0 || !!questions[QIndex]}
            handelNextQuestion={handelNextQuestion}
            standby={standby}
          />
          <IndicationBox
            isInterviewing={isInterviewing}
            question={questions[QIndex]}
            start={start}
            startQuestion={startQuestion}
          />
        </>
      )}
      {audio}
    </S.InterviewRoom>
  );
};

export default InterviewRoom;

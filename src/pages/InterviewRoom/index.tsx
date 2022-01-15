import { FC, useEffect, useState } from 'react';
import { InterviewRoomWrapper } from './style';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  Answer,
  answerState,
  Seconds,
  Question,
  questionState,
  QuestionSet,
  questionSetKeyState,
  QuestionSetKey,
} from '@src/stores/question';
import EnterSFX from '@src/assets/audios/enter.mp3';
import { draw, shuffle } from '@src/utils/utils';
import { useAudio } from '@src/hooks';
import { LoadingPage } from './Loading';
import { Body } from './Body';
import { Footer } from './Footer';
import { IndicatorBox } from './IndicatorBox';

const MILLSEC_PER_SEC: number = 1000;

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

  const [start, setStart] = useState(false);
  const [standby, setStandby] = useState(true);
  const [index, setIndex] = useState(0);
  const [timer, setTimer] = useState(new Date().getTime());

  useEffect(() => {
    if (!start) {
      return;
    }

    if (!standby) {
      setTimer(new Date().getTime());
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
    setStart(true);
  };

  const handelNextQuestion = () => {
    const now = new Date().getTime();

    const time: Seconds = (now - timer) / MILLSEC_PER_SEC;

    const answer: Answer = {
      question: questions[index],
      time,
    };

    setAnswerList([...answerList, answer]);
    setIndex(index + 1);
    setStandby(true);
  };

  return (
    <InterviewRoomWrapper>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          <Body />
          <Footer
            showNextButton={index === 0 || !!questions[index]}
            handelNextQuestion={handelNextQuestion}
            standby={standby}
          />
          <IndicatorBox
            start={start}
            question={questions[index]}
            setStandby={setStandby}
            startQuestion={startQuestion}
          />
        </>
      )}
      {audio}
    </InterviewRoomWrapper>
  );
};

export default InterviewRoom;

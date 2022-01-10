import { ComponentPropsWithoutRef, FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InterviewRoomWrapper, IndicationBox } from './style';
import { MdCallEnd } from 'react-icons/md';
import { AiOutlineFileSearch, AiOutlineRight } from 'react-icons/ai';
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
import QuestionBox from './QuestionBox';
import EnterSFX from '@src/assets/audios/enter.mp3';
import { draw, shuffle } from '@src/utils/utils';
import { Button, Typography } from '@src/components/atoms';
import { ROUTE_HOME, ROUTE_REVIEW } from '@src/routes';
import Profile from './Profile';

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

const FooterButton: FC<
  Pick<
    ComponentPropsWithoutRef<typeof Button>,
    'color' | 'disabled' | 'onClick'
  >
> = ({ children, ...props }) => (
  <Button
    {...props}
    isFilled
    padding="0.5rem 1.4rem"
    fontSize="large"
    borderRadius="larger"
    margin="0 0.5rem"
  >
    {children}
  </Button>
);

const InterviewRoom: FC = () => {
  const navigate = useNavigate();

  const questionSetKey = useRecoilValue<QuestionSetKey>(questionSetKeyState);
  const [questions, setQuestions] = useRecoilState<Question[]>(questionState);
  const [answerList, setAnswerList] = useRecoilState<Answer[]>(answerState);

  const [start, setStart] = useState(false);
  const [standby, setStandby] = useState(true);
  const [index, setIndex] = useState(0);
  const [timer, setTimer] = useState(new Date().getTime());
  const [startTime] = useState(new Date().toString().slice(16, 25));

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

  const moveToHome = () => {
    navigate(ROUTE_HOME);
  };
  const moveToReview = () => {
    navigate(ROUTE_REVIEW);
  };

  const showNextButton = index === 0 || !!questions[index];

  return (
    <InterviewRoomWrapper>
      <audio src={EnterSFX} autoPlay />
      <div className="body">
        <Profile type="interviewer" />
        <Profile type="interviewer" />
        <Profile type="interviewee" />

        <IndicationBox>
          {start ? (
            questions[index] ? (
              <QuestionBox
                question={questions[index]}
                setStandby={setStandby}
              />
            ) : (
              <Typography
                fontSize="large"
                color="white"
                fontWeight="bold"
                textAlign="center"
                margin="2rem 0"
              >
                고생하셨습니다 🙂
              </Typography>
            )
          ) : (
            <Button
              onClick={startQuestion}
              color="green"
              isFilled
              borderRadius="large"
              margin="2rem auto"
            >
              시작하기
            </Button>
          )}
        </IndicationBox>
      </div>
      <div className="footer">
        <span className="start-time">
          <Typography
            color="white"
            margin="0 0 0.5rem 0"
            fontWeight="bold"
            fontSize="smaller"
          >
            시작시간
          </Typography>
          <Typography color="white" fontSize="large">
            {startTime}
          </Typography>
        </span>

        <FooterButton
          color="blue"
          disabled={showNextButton && standby}
          onClick={showNextButton ? handelNextQuestion : moveToReview}
        >
          {showNextButton ? (
            <AiOutlineRight stroke="#fff" />
          ) : (
            <AiOutlineFileSearch />
          )}
        </FooterButton>
        <FooterButton color="red" onClick={moveToHome}>
          <MdCallEnd />
        </FooterButton>
      </div>
    </InterviewRoomWrapper>
  );
};

export default InterviewRoom;

import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { InterviewRoomWrapper } from './style';
import { MdCallEnd } from 'react-icons/md';
import { GrNext } from 'react-icons/gr';
import { AiOutlineFileSearch } from 'react-icons/ai';
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
import StartButton from './StartButton';
import { draw, shuffle } from '@src/utils/utils';

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

  return (
    <InterviewRoomWrapper>
      <audio src={EnterSFX} autoPlay />
      <div className="interviewers">
        <div className="interviewer">
          <div className="profile"></div>
        </div>
        <div className="interviewer">
          <div className="profile"></div>
        </div>
      </div>
      {start ? (
        questions[index] ? (
          <QuestionBox question={questions[index]} setStandby={setStandby} />
        ) : (
          <h3>고생하셨습니다</h3>
        )
      ) : (
        <StartButton setStart={startQuestion} />
      )}
      <div className="interviewee">
        <div className="profile"></div>
      </div>
      <div className="footer">
        {questions[index] ? (
          <button
            className="next-button"
            disabled={standby}
            onClick={handelNextQuestion}
          >
            <GrNext />
          </button>
        ) : (
          <Link className="review-button" to="/review">
            <AiOutlineFileSearch />
          </Link>
        )}
        <Link className="close-button" to="/">
          <MdCallEnd />
        </Link>
      </div>
      <span className="start-time">start from {startTime}</span>
    </InterviewRoomWrapper>
  );
};

export default InterviewRoom;

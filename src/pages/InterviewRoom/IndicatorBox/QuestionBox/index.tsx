import { FC, useEffect, useState } from 'react';
import { Question, Seconds } from '@src/stores/question';
import { Typography } from '@src/components/atoms';

const STAND_BY_SECONDS = 3;
const ONE_SECOND = 1000;

type QuestionBoxProps = {
  question: Question;
  setStandby: (standby: boolean) => void;
};

const QuestionBox: FC<QuestionBoxProps> = ({ question, setStandby }) => {
  const [timer, setTimer] = useState<Seconds>(STAND_BY_SECONDS);

  useEffect(() => {
    setTimer(STAND_BY_SECONDS);
  }, [question]);

  useEffect(() => {
    if (!timer) {
      setStandby(false);
      return;
    }

    const timeout = setTimeout(() => {
      setTimer(timer - 1);
    }, ONE_SECOND);

    return () => clearTimeout(timeout);
  }, [timer]);

  return timer ? (
    <>
      <Typography
        fontSize="large"
        fontWeight="bold"
        textAlign="center"
        color="white"
        margin="2rem auto"
      >
        {question}
      </Typography>
      <Typography
        fontSize="larger"
        fontWeight="bold"
        textAlign="center"
        color="white"
        margin="1rem auto"
      >
        {timer}
      </Typography>
    </>
  ) : null;
};

export default QuestionBox;

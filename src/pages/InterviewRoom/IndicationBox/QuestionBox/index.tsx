import { FC, useEffect } from 'react';
import { Typography } from '@src/components/atoms';
import useTimer from '@src/hooks/useTimer';
import { Question } from '@src/types/question';
import If from '@src/components/atoms/If';

const STAND_BY_SECONDS = 3;

type QuestionBoxProps = {
  question: Question;
  start: () => void;
};

const QuestionBox: FC<QuestionBoxProps> = ({ question, start }) => {
  const { timer, initTimer } = useTimer(STAND_BY_SECONDS, start);

  useEffect(() => {
    initTimer();
  }, [question]);

  return <If when={!!timer}>
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
  </If>
};

export default QuestionBox;

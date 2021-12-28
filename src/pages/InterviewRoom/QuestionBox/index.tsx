import { FC, useEffect, useState } from "react";
import { Question, Seconds } from "../../../store/question";
import { QuestionBoxWrapper } from "./style";

type QuestionBoxProps = {
  question: Question,
  setStandby: (standby: boolean) => void
}

const STAND_BY_SECONDS = 3;
const ONE_SECOND = 1000;

const QuestionBox: FC<QuestionBoxProps> = ({ question, setStandby }) => {
  const [timer, setTimer] = useState<Seconds>(STAND_BY_SECONDS);
  useEffect(() => {
    setTimer(STAND_BY_SECONDS);
  }, [question])

  useEffect(() => {
    if(!timer) {
      setStandby(false);
      return;
    }

    setTimeout(() => {
      setTimer(timer - 1);
    }, ONE_SECOND);
  }, [timer]);

  return (
    timer ? <QuestionBoxWrapper>
      <h3>{question}</h3>
      <span className="timer">{timer}</span>
    </QuestionBoxWrapper>
    : null
    );
}

export default QuestionBox;
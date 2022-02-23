import { Button, Typography } from '@src/components/atoms';
import { Question } from '@src/stores/question';
import { FC } from 'react';
import QuestionBox from './QuestionBox';
import * as S from './style';

interface IndicationBoxProps {
  start: boolean;
  question: Question;
  startQuestion: () => void;
  setStandby: (standby: boolean) => void;
}

export const IndicationBox: FC<IndicationBoxProps> = ({
  start,
  question,
  startQuestion,
  setStandby,
}) => {
  const isQuestionEnd = !!question;

  // 준비 중
  if (!start) {
    return (
      <S.IndicationBoxWrap>
        <Button
          onClick={startQuestion}
          color="green"
          isFilled
          borderRadius="large"
          margin="2rem auto"
        >
          시작하기
        </Button>
      </S.IndicationBoxWrap>
    );
  }

  // 인터뷰 중
  return (
    <S.IndicationBoxWrap>
      {isQuestionEnd ? (
        <QuestionBox question={question} start={() => setStandby(false)} />
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
      )}
    </S.IndicationBoxWrap>
  );
};

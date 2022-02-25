import { Button, Typography } from '@src/components/atoms';
import { standbyState } from '@src/stores/interview';
import { Question } from '@src/types/question';
import { FC } from 'react';
import { useSetRecoilState } from 'recoil';
import QuestionBox from './QuestionBox';
import * as S from './style';

interface IndicationBoxProps {
  isInterviewing: boolean;
  question: Question;
  startInterview: () => void;
}

export const IndicationBox: FC<IndicationBoxProps> = ({
  isInterviewing,
  question,
  startInterview,
}) => {
  const isQuestionEnd = !!question;
  const setStandby = useSetRecoilState(standbyState);

  // 준비 중
  if (!isInterviewing) {
    return (
      <S.IndicationBoxWrap>
        <Button
          onClick={startInterview}
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
        <QuestionBox
          question={question}
          start={() => {
            setStandby(false);
          }}
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
      )}
    </S.IndicationBoxWrap>
  );
};

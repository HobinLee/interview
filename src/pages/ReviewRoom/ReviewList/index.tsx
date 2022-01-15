import { Typography } from '@src/components/atoms';
import { Answer, answerState } from '@src/stores/question';
import { VFC } from 'react';
import { useRecoilValue } from 'recoil';
import * as S from './styles';

export const ReviewList: VFC = () => {
  const answers: Answer[] = useRecoilValue<Answer[]>(answerState);

  const answerList = answers.map((answer, idx) => (
    <S.ReviewListElement key={idx}>
      <S.QuestionWrap>
        <Typography fontSize="normal" fontWeight="bold" ellipsis>
          {answer.question}
        </Typography>
      </S.QuestionWrap>
      <S.TimeWrap>
        <Typography>{answer.time}'</Typography>
      </S.TimeWrap>
    </S.ReviewListElement>
  ));

  return (
    <S.ReviewList>
      <S.ReviewListElement>
        <Typography
          className="question"
          fontSize="normal"
          fontWeight="bold"
          color="darkGray"
          textAlign="center"
        >
          질문
        </Typography>
        <Typography
          className="time"
          fontSize="normal"
          fontWeight="bold"
          color="darkGray"
          textAlign="center"
        >
          시간
        </Typography>
      </S.ReviewListElement>
      {answerList}
    </S.ReviewList>
  );
};

import { Button, Typography } from '@src/components/atoms';
import { answerState } from '@src/stores/answer';
import { recordsState } from '@src/stores/records';
import { VFC } from 'react';
import { useRecoilValue } from 'recoil';
import * as S from './styles';

interface Props {
  playThisVideo: (record: Blob | null) => void;
}

export const ReviewList: VFC<Props> = ({ playThisVideo }) => {
  const answerList = useRecoilValue(answerState);
  const recordList = useRecoilValue(recordsState);

  const answers = answerList.map((answer, idx) => (
    <S.ReviewListElement key={idx}>
      <S.QuestionWrap>
        <Typography fontSize="normal" fontWeight="bold" ellipsis>
          {answer.question}
        </Typography>
      </S.QuestionWrap>
      <S.TimeWrap>
        <Typography>{answer.time}'</Typography>
      </S.TimeWrap>
      <Button
        color="gray"
        onClick={() => playThisVideo(recordList[idx])}
        disabled={!recordList[idx]}
      >
        보기
      </Button>
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
      {answers}
    </S.ReviewList>
  );
};

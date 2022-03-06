import { Button, Typography } from '@src/components/atoms';
import { getAnswerList } from '@src/stores/answer';
import { getRecordList } from '@src/stores/records';
import { toSec } from '@src/utils/utils';
import { VFC } from 'react';
import * as S from './styles';

interface Props {
  playThisVideo: (record: Blob | null) => void;
}

export const ReviewList: VFC<Props> = ({ playThisVideo }) => {
  const answerList = getAnswerList();
  const recordList = getRecordList();

  const answers = answerList.map((answer, idx) => (
    <S.ReviewListElement key={idx}>
      <S.QuestionWrap>
        <Typography fontSize="small">
          {answer.question}
        </Typography>
      </S.QuestionWrap>
      <Typography fontSize="small">{toSec(answer.time)}'</Typography>
      <S.PlayButton
        color="gray"
        onClick={() => playThisVideo(recordList[idx])}
        disabled={!recordList[idx]}
      >
        보기
      </S.PlayButton>
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

import { Typography } from '@src/components/atoms';
import { getAnswerList } from '@src/stores/answer';
import { getRecordList } from '@src/stores/records';
import { toSec } from '@src/utils/utils';
import { VFC } from 'react';
import * as S from './styles';

import { Answer } from '@src/types/answer';
import { AiFillPlayCircle, AiOutlinePlayCircle } from 'react-icons/ai';

const mockups: Answer[] = [

]

interface Props {
  playThisVideo: (record: Blob | null) => void;
}

export const ReviewList: VFC<Props> = ({ playThisVideo }) => {
  const answerList = getAnswerList();
  const recordList = getRecordList();

  const answers = answerList.map((answer, idx) => (
    <S.ReviewListElement key={idx}>
      <S.PlayButton
        onClick={() => playThisVideo(recordList[idx])}
        disabled={!recordList[idx]}
      >
        <AiOutlinePlayCircle
          color='gray'
          strokeWidth={'3px'}
        />
      </S.PlayButton>
      <S.QuestionWrap>
        <Typography fontSize="small">
          {answer.question}
        </Typography>
      </S.QuestionWrap>
      <Typography fontSize="small">{toSec(answer.time)}'</Typography>
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

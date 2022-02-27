import { FC, useState } from 'react';
import * as S from './style';
import { Card, HomeButton } from '@src/components/molecules';
import { ReviewList } from './ReviewList';
import { Typography } from '@src/components/atoms';
import { RecordPlayer } from './RecordPlayer';

const ReviewRoom: FC = () => {
  const [record, playThisVideo] = useState<Blob | null>(null);

  return (
    <S.ReviewRoom>
      <S.ReviewRoomBody>
        <RecordPlayer record={record} />
        <Card
          title={
            <Typography tag="h3" fontSize="large">
              질문 답변 모음
            </Typography>
          }
        >
          <ReviewList playThisVideo={playThisVideo} />
        </Card>
      </S.ReviewRoomBody>
      <HomeButton />
    </S.ReviewRoom>
  );
};

export default ReviewRoom;

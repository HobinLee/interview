import { FC } from 'react';
import * as S from './style';
import { Card, HomeButton } from '@src/components/molecules';
import { ReviewList } from './ReviewList';
import { Typography } from '@src/components/atoms';

const ReviewRoom: FC = () => {
  return (
    <S.ReviewRoom>
      <S.ReviewRoomBody>
        <Card
          title={
            <Typography tag="h3" fontSize="large">
              질문 답변 모음
            </Typography>
          }
        >
          <ReviewList />
        </Card>
      </S.ReviewRoomBody>
      <HomeButton />
    </S.ReviewRoom>
  );
};

export default ReviewRoom;

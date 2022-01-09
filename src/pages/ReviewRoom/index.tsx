import { FC } from 'react';
import { ReviewRoomWrapper } from './style';
import { Card, HomeButton } from '@src/components/molecules';
import { ReviewList } from './ReviewList';
import { Typography } from '@src/components/atoms';

const ReviewRoom: FC = () => {
  return (
    <ReviewRoomWrapper>
      <div className="review-room">
        <Card
          title={
            <Typography heading="h3" fontSize="large">
              질문 답변 모음
            </Typography>
          }
        >
          <ReviewList />
        </Card>
      </div>
      <HomeButton />
    </ReviewRoomWrapper>
  );
};

export default ReviewRoom;

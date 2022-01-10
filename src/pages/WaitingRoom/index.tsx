import { Button, Typography } from '@src/components/atoms';
import { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import { WaitingRoomWrapper } from './style';

const WaitingRoom: FC = () => {
  const navigate = useNavigate();

  const moveToInterviewRoom = () => {
    navigate('/home');
  };
  const moveToSettingRoom = () => {
    navigate('/setting');
  };

  return (
    <WaitingRoomWrapper>
      <div className="waiting-room">
        <div className="waiting-room__content">
          <div className="waiting-room__camera"></div>
          <div className="waiting-room__start">
            <Typography heading="h3" fontSize="large">
              참여할 준비가 되셨나요?
            </Typography>
            <Button
              color="blue"
              borderRadius="larger"
              onClick={moveToInterviewRoom}
              isFilled
              padding="1rem 3rem"
            >
              지금 참여하기
            </Button>
          </div>
        </div>
      </div>
      <div className="question-set">
        <Button color="green" onClick={moveToSettingRoom}>
          질문 목록 수정
        </Button>
      </div>
    </WaitingRoomWrapper>
  );
};

export default WaitingRoom;

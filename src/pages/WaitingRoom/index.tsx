import { Button, Typography } from '@src/components/atoms';
import Camera from '@src/components/atoms/Camera';
import { ROUTE_INTERVIEW, ROUTE_SETTING } from '@src/routes';
import { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import * as S from './style';

const WaitingRoom: FC = () => {
  const navigate = useNavigate();

  const moveToInterviewRoom = () => {
    navigate(ROUTE_INTERVIEW);
  };
  const moveToSettingRoom = () => {
    navigate(ROUTE_SETTING);
  };

  return (
    <S.WaitingRoom>
      <S.WaitingRoomBody>
        <S.WaintingRoomContent>
          <S.CameraWrap>
            <Camera />
          </S.CameraWrap>
          <S.StartWrap>
            <Typography tag="h3" fontSize="large">
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
          </S.StartWrap>
        </S.WaintingRoomContent>
      </S.WaitingRoomBody>
      <S.QuestionSetWrap>
        <Button color="green" onClick={moveToSettingRoom}>
          질문 목록 수정
        </Button>
      </S.QuestionSetWrap>
    </S.WaitingRoom>
  );
};

export default WaitingRoom;

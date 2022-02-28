import { Button, Typography } from '@src/components/atoms';
import Camera from '@src/components/molecules/Camera';
import { usePage } from '@src/hooks';
import { ROUTE_INTERVIEW, ROUTE_SETTING } from '@src/routes';
import { FC } from 'react';

import * as S from './style';

const WaitingRoom: FC = () => {
  const [moveToInterviewRoom, moveToSettingRoom] = usePage([
    ROUTE_INTERVIEW,
    ROUTE_SETTING,
  ]);

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

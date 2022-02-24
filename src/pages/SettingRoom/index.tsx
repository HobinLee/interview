import * as S from './style';
import QuestionList from './QuestionList';
import { FC } from 'react';
import { HomeButton } from '@src/components/molecules';

const SettingRoom: FC = () => (
  <S.SettingRoom>
    <S.SettingRoomBody>
      <QuestionList type="begin" />
      <QuestionList type="essential" />
      <QuestionList type="random" />
      <QuestionList type="end" />
    </S.SettingRoomBody>
    <HomeButton />
  </S.SettingRoom>
);

export default SettingRoom;

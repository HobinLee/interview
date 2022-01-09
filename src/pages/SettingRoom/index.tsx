import { SettingRoomWrapper } from './style';
import QuestionList from './QuestionList';
import { useRecoilValue } from 'recoil';
import { questionSetKeyState } from '@src/stores/question';
import { FC, useEffect } from 'react';
import { HomeButton } from '@src/components/molecules';

const SettingRoom: FC = () => {
  const questionSetKey = useRecoilValue(questionSetKeyState);
  useEffect(() => {
    console.log(questionSetKey);
  }, [, questionSetKeyState]);
  return (
    <SettingRoomWrapper>
      <div className="setting-room">
        <QuestionList type="begin" />
        <QuestionList type="essential" />
        <QuestionList type="random" />
        <QuestionList type="end" />
      </div>
      <HomeButton />
    </SettingRoomWrapper>
  );
};

export default SettingRoom;

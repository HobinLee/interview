import { SettingRoomWrapper } from './style';
import QuestionList from './QuestionList';
import { useRecoilValue } from 'recoil';
import { questionSetKeyState } from '../../store/question';
import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';

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
      <Link to="/">
        <AiFillHome fill="white" />
      </Link>
    </SettingRoomWrapper>
  );
};

export default SettingRoom;

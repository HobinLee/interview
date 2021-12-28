import { SettingRoomWrapper } from "./style";
import QuestionList from "./QuestionList";
import { useRecoilValue } from "recoil";
import { questionSetKeyState } from "../../store/question";
import { FC, useEffect } from "react";
import { Link } from "react-router-dom";

const SettingRoom: FC = () => {
  const questionSetKey = useRecoilValue(questionSetKeyState);
  useEffect(() => {
    console.log(questionSetKey);
  }, 
  [, questionSetKeyState])
  return <SettingRoomWrapper>
    <div className="setting-room">
      <QuestionList type="begin"/>
      <QuestionList type="essential"/>
      <QuestionList type="random"/>
      <QuestionList type="end"/>
    </div>

    <Link to="/">
      돌아가기
    </Link>
  </SettingRoomWrapper>
}

export default SettingRoom;
import * as S from './style';
import QuestionList from './QuestionList';
import useQuestionSetState from './hooks';
import { FC } from 'react';
import { HomeButton } from '@src/components/molecules';

const SettingRoom: FC = () => {
  const [questionSet, setQuestionList] = useQuestionSetState();

  return (<S.SettingRoom>
    <S.SettingRoomBody>
      <QuestionList type={'begin'} questionList={questionSet.begin} setQuestionList={setQuestionList}/>
      <QuestionList type={'essential'} questionList={questionSet.essential} setQuestionList={setQuestionList}/>
      <QuestionList type={'random'} questionList={questionSet.random} setQuestionList={setQuestionList}/>
      <QuestionList type={'end'} questionList={questionSet.end} setQuestionList={setQuestionList}/>
    </S.SettingRoomBody>
    <HomeButton />
  </S.SettingRoom>)
}

export default SettingRoom;

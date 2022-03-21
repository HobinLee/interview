import * as S from './style';
import QuestionList, { SetQusetionList } from './QuestionList';
import { FC } from 'react';
import { HomeButton } from '@src/components/molecules';
import { getQuestionSetKey } from '@src/stores/question';
import { useLocalStorage } from '@src/hooks';
import { Question, QuestionSet } from '@src/types/question';
import { QuestionType } from './QuestionList/data';

const SettingRoom: FC = () => {
  const [questionSet, setQuestionList] = useQuestionSetHandler();

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

function useQuestionSetHandler(): [QuestionSet, SetQusetionList] {
  const questionSetKey = getQuestionSetKey();
  const [questionSet, setQuestionSet] = useLocalStorage<QuestionSet>(
    questionSetKey,
    { begin: [], essential: [], random: [], end: [] },
  );

  const setQuestionList = (type: QuestionType, questionList: Question[]) => {
    setQuestionSet({
      ...questionSet, [type]: questionList
    })
  };

  return [ questionSet, setQuestionList ];
}
import { SetQusetionList } from './QuestionList';
import { getQuestionSetKey } from '@src/stores/question';
import { useLocalStorage } from '@src/hooks';
import { Question, QuestionSet } from '@src/types/question';
import { QuestionType } from './QuestionList/data';

export default function(): [QuestionSet, SetQusetionList] {
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
import * as S from './style';
import { FC, useCallback, VFC } from 'react';
import { useInput, useLocalStorage } from '@src/hooks';
import QuestionElement from '../Question';
import { Button, Input, Typography } from '@src/components/atoms';
import { Question } from '@src/types/question';
import { QuestionType, questionTypeInfo } from './data';

export type SetQusetionList = (type: QuestionType, questionList: Question[]) => void;

export type QuestionListProps = {
  type: QuestionType;
  questionList: Question[];
  setQuestionList: SetQusetionList;
};

const QuestionListSection: FC<QuestionListProps> = ({ type, questionList,  setQuestionList }) => {
  const { value: newQuestion, onChange, setValue } = useInput('');

  const Questions: VFC = useCallback(() => {
    return (<>
      {questionList.map((q: Question, idx: number) => (
        <QuestionElement
          key={idx + q}
          question={q}
          modifyQuestion={(newQ: Question) => {modifyQuestion(idx, newQ)}}
          deleteQuestion={() => {deleteQuestion(idx)}}
        />))}
    </>)
  
    function deleteQuestion(idx: number) {
      return setQuestionList(type, questionList.filter((_, i) => idx !== i));
    }
  
    function modifyQuestion(idx: number, question: Question) {
      return setQuestionList(type, questionList.map((q, i) => idx === i ? question : q));
    }
  }, [questionList]);

  return (
    <S.QuestionListSection>
      <S.QuestionListTitleWrap>
        <Typography tag="h4">{questionTypeInfo[type].title}</Typography>
        <Typography color="gray" fontSize="small">
          * {questionTypeInfo[type].indication}
        </Typography>
      </S.QuestionListTitleWrap>
      <S.QuestionList>
        <S.AddQuestionWrap>
          <Input
            onChange={onChange}
            value={newQuestion}
            placeholder="질문을 입력해주세요"
            fontSize="small"
          />
          <Button
            onClick={() => {
              addQuestion(newQuestion);
              setValue('');
            }}
            color="green"
            fontSize="small"
            disabled={!newQuestion.length}
          >
            추가
          </Button>
        </S.AddQuestionWrap>
        <Questions />
      </S.QuestionList>
    </S.QuestionListSection>
  );

  function addQuestion(question: Question) {
    questionList.push(question);
    return setQuestionList(type, questionList);
  }
};

export default QuestionListSection;

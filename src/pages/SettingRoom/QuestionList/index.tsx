import * as S from './style';
import { FC } from 'react';
import { useInput, useLocalStorage } from '@src/hooks';
import QuestionElement from '../Question';
import { Button, Input, Typography } from '@src/components/atoms';
import { Question, QuestionSet } from '@src/types/question';
import { questionTypeInfo } from './data';
import { getQuestionSetKey } from '@src/stores/question';

type QuestionType = keyof typeof questionTypeInfo;
type QuestionListProps = {
  type: QuestionType;
};

const QuestionList: FC<QuestionListProps> = ({ type }) => {
  const { value: newQuestion, onChange, setValue } = useInput('');
  const { questionList, addQuestion, deleteQuestion, modifyQuestion } =
    useQuestionListHandler(type);

  const questions = questionList.map((q: Question, idx: number) => (
    <QuestionElement
      key={idx + q}
      question={q}
      modifyQuestion={(newQ: Question) => modifyQuestion(newQ, idx)}
      deleteQuestion={() => {
        deleteQuestion(idx);
      }}
    />
  ));

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
        {questions}
      </S.QuestionList>
    </S.QuestionListSection>
  );
};

function useQuestionListHandler(type: QuestionType) {
  const questionSetKey = getQuestionSetKey();
  const [questionSet, setQuestionSet] = useLocalStorage<QuestionSet>(
    questionSetKey,
    { begin: [], essential: [], random: [], end: [] },
  );
  const questionList = questionSet[type];

  const modifyQuestion = (newQ: Question, idx: number) => {
    questionSet[type] = questionList.map((question: Question, i: number) =>
      idx === i ? newQ : question,
    );

    setQuestionSet({
      ...questionSet,
    });
  };

  const addQuestion = (newQuestion: Question) => {
    questionSet[type].push(newQuestion);
    setQuestionSet({ ...questionSet });
  };

  const deleteQuestion = (idx: number) => {
    questionSet[type] = questionList.filter((_, i: number) => i !== idx);
    setQuestionSet({ ...questionSet });
  };
  return { questionList, modifyQuestion, addQuestion, deleteQuestion };
}

export default QuestionList;

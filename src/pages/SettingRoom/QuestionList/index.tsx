import * as S from './style';
import { FC, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useInput, useLocalStorage } from '@src/hooks';
import QuestionElement from '../Question';
import { Button, Input, Typography } from '@src/components/atoms';
import { Question, QuestionSet } from '@src/types/question';
import { questionSetKeyState } from '@src/stores/question';

const questionTypeInfo = {
  begin: {
    title: '시작 질문',
    indication: '모든 질문이 처음에 순서대로 나옵니다',
  },
  essential: {
    title: '필수 질문',
    indication: '모든 질문이 기타 질문과 함께 섞여 무작위로 나옵니다',
  },
  random: {
    title: '기타 질문',
    indication: '일부 질문이 필수 질문과 섞여 무작위로 나옵니다',
  },
  end: {
    title: '마무리 질문',
    indication: '모든 질문이 마지막에 순서대로 나옵니다',
  },
};

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
  const questionSetKey: Question = useRecoilValue(questionSetKeyState);
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

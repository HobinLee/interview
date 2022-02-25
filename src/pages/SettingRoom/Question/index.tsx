import { Button, Input, Typography } from '@src/components/atoms';
import { FC, useState } from 'react';
import { useInput, useReducerWithoutDispatch } from '@src/hooks';
import * as S from './style';
import { Question } from '@src/types/question';

type QuestionProps = {
  question: Question;
  modifyQuestion: (question: Question) => void;
  deleteQuestion: () => void;
};

const QuestionElement: FC<QuestionProps> = ({
  question,
  modifyQuestion,
  deleteQuestion,
}) => {
  const [isModifying, [startModify, endModify]] = useReducerWithoutDispatch(
    false,
    {
      startModify: () => true,
      endModify: () => false,
    },
  );
  const {
    value: modifiedQuestion,
    onChange: handleModifiedQuestion,
    setValue: setModifiedQuestion,
  } = useInput(question);

  if (isModifying) {
    return (
      <S.QuestionElement>
        <Input
          value={modifiedQuestion}
          onChange={handleModifiedQuestion}
          placeholder="질문을 입력해주세요"
          fontSize="small"
        />
        <div className="buttons-wrapper">
          <Button
            onClick={() => {
              modifyQuestion(modifiedQuestion);
              endModify();
            }}
            color="blue"
            fontSize="small"
          >
            수정
          </Button>
          <Button
            onClick={() => {
              setModifiedQuestion(question);
              endModify();
            }}
            color="gray"
            fontSize="small"
          >
            취소
          </Button>
        </div>
      </S.QuestionElement>
    );
  }

  return (
    <S.QuestionElement>
      <Typography ellipsis fontWeight="default">
        {question}
      </Typography>
      <div className="buttons-wrapper">
        <Button onClick={startModify} color="blue" fontSize="small">
          수정
        </Button>
        <Button onClick={deleteQuestion} color="red" fontSize="small">
          삭제
        </Button>
      </div>
    </S.QuestionElement>
  );
};

export default QuestionElement;

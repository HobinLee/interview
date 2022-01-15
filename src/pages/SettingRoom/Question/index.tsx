import { Button, Input, Typography } from '@src/components/atoms';
import { FC, useState } from 'react';
import { useInput } from '@src/hooks';
import { Question } from '@src/stores/question';
import * as S from './style';

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
  const [isModify, setModify] = useState(false);
  const {
    value: modifiedQuestion,
    onChange: handleModifiedQuestion,
    setValue: setModifiedQuestion,
  } = useInput(question);

  const handleModify = () => {
    setModify(true);
  };

  const handleConfirmModify = () => {
    modifyQuestion(modifiedQuestion);
    setModify(false);
  };

  const handleCancelModify = () => {
    setModifiedQuestion(question);
    setModify(false);
  };

  if (isModify) {
    return (
      <S.QuestionElement>
        <Input
          value={modifiedQuestion}
          onChange={handleModifiedQuestion}
          placeholder="질문을 입력해주세요"
          fontSize="small"
        />
        <div className="buttons-wrapper">
          <Button onClick={handleConfirmModify} color="blue" fontSize="small">
            수정
          </Button>
          <Button onClick={handleCancelModify} color="gray" fontSize="small">
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
        <Button onClick={handleModify} color="blue" fontSize="small">
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

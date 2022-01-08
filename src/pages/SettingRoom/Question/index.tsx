import { Button } from '@src/components/atoms/Button/Button';
import { Input } from '@src/components/atoms/Input/Input';
import { FC, useState } from 'react';
import { useInput } from '../../../hooks';
import { Question } from '../../../store/question';
import { QuestionElementWrapper } from './style';

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
      <QuestionElementWrapper>
        <Input
          value={modifiedQuestion}
          onChange={handleModifiedQuestion}
          placeholder="질문들 입력해주세요"
        ></Input>
        <div>
          <Button onClick={handleConfirmModify} color="blue">
            수정
          </Button>
          <Button onClick={handleCancelModify} color="gray">
            취소
          </Button>
        </div>
      </QuestionElementWrapper>
    );
  }

  return (
    <QuestionElementWrapper>
      <h5>{question}</h5>
      <div>
        <Button onClick={handleModify} color="blue">
          수정
        </Button>
        <Button onClick={deleteQuestion} color="red">
          삭제
        </Button>
      </div>
    </QuestionElementWrapper>
  );
};

export default QuestionElement;

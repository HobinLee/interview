import { Button } from '@src/components/atoms/Button/Button';
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
        <input
          value={modifiedQuestion}
          onChange={handleModifiedQuestion}
        ></input>
        <div>
          <Button onClick={handleConfirmModify}>수정 완료</Button>
          <Button onClick={handleCancelModify}>수정 취소</Button>
        </div>
      </QuestionElementWrapper>
    );
  }

  return (
    <QuestionElementWrapper>
      <h5>{question}</h5>
      <div>
        <Button onClick={handleModify}>수정</Button>
        <Button onClick={deleteQuestion}>삭제</Button>
      </div>
    </QuestionElementWrapper>
  );
};

export default QuestionElement;

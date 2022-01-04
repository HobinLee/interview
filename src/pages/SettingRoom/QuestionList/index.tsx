import {
  Question,
  QuestionSet,
  QuestionSetKey,
  questionSetKeyState,
} from '../../../store/question';
import { QuestionListWrapper } from './style';
import { FC, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useInput } from '../../../hooks';
import QuestionElement from '../Question';

type QuestionType = 'begin' | 'essential' | 'random' | 'end';
type QuestionListProps = {
  type: QuestionType;
};

const typeName = {
  begin: '시작 질문',
  essential: '필수 질문',
  random: '기타 질문',
  end: '마무리 질문',
};

const QuestionList: FC<QuestionListProps> = ({ type }) => {
  const { value: newQuestion, onChange, setValue } = useInput('');
  const questionSet: QuestionSetKey = useRecoilValue(questionSetKeyState);

  const [list, setList] = useState<Question[]>(
    JSON.parse(localStorage.getItem(questionSet) ?? '{}')[type] ?? [],
  );

  useEffect(() => {
    const newSet: QuestionSet = {
      ...JSON.parse(localStorage.getItem(questionSet) ?? '{}'),
    };

    newSet[type] = list;

    localStorage.setItem(questionSet, JSON.stringify(newSet));
  }, [list]);

  const modifyQuestion = (newQ: Question, i: number) => {
    const newList = list.map((q: Question, idx: number) =>
      idx === i ? newQ : q,
    );

    setList(newList);
  };

  const handleAddQuestion = () => {
    setList([...list, newQuestion]);
    setValue('');
  };

  const questionList = list.map((q: Question, idx: number) => (
    <QuestionElement
      key={idx + q}
      question={q}
      modifyQuestion={(newQ: Question) => modifyQuestion(newQ, idx)}
      deleteQuestion={() => setList(list.filter((_, i: number) => i !== idx))}
    />
  ));

  return (
    <QuestionListWrapper>
      <div className="title">
        <h4>{typeName[type]}</h4>
        <div className="add-question-button">
          <input onChange={onChange} value={newQuestion} />
          <button onClick={handleAddQuestion}>추가</button>
        </div>
      </div>
      <ul className="list">{questionList}</ul>
    </QuestionListWrapper>
  );
};

export default QuestionList;

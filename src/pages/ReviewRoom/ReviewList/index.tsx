import { Typography } from '@src/components/atoms';
import { Answer, answerState } from '@src/stores/question';
import { colors } from '@src/styles/variables';
import { VFC } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

export const ReviewList: VFC = () => {
  const answers: Answer[] = useRecoilValue<Answer[]>(answerState);

  const answerList = answers.map((answer, idx) => (
    <li key={idx}>
      <span className="question">
        <Typography fontSize="normal" fontWeight="bold" ellipsis>
          {answer.question}
        </Typography>
      </span>
      <span className="time">
        <Typography>{answer.time}'</Typography>
      </span>
    </li>
  ));

  return (
    <ListWrapper>
      <li>
        <Typography
          className="question"
          fontSize="normal"
          fontWeight="bold"
          color="darkGray"
          textAlign="center"
        >
          질문
        </Typography>
        <Typography
          className="time"
          fontSize="normal"
          fontWeight="bold"
          color="darkGray"
          textAlign="center"
        >
          시간
        </Typography>
      </li>
      {answerList}
    </ListWrapper>
  );
};

export const ListWrapper = styled.ul`
  width: 100%;
  min-height: 300px;

  li {
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
  }

  .question {
    width: 300px;
    border-right: 1px solid ${colors.gray};
    margin-right: 1rem;
    padding-right: 1rem;
  }

  .time {
    width: 100px;
  }
`;

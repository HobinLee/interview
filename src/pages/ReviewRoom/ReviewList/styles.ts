import { colors } from '@src/styles/variables';
import styled from 'styled-components';

export const ReviewList = styled.ul`
  width: 100%;
  min-height: 300px;
`;

export const QuestionWrap = styled.div`
  width: 300px;
  border-right: 1px solid ${colors.gray};
  margin-right: 1rem;
  padding-right: 1rem;
`;

export const TimeWrap = styled.div`
  width: 100px;
`;

export const ReviewListElement = styled.li`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
`;

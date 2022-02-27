import { media } from '@src/styles/mixins';
import { colors } from '@src/styles/variables';
import styled from 'styled-components';

export const ReviewList = styled.ul`
  width: 100%;
  min-height: 300px;
  min-width: 100%;
  height: 70vh;
  overflow: scroll;

  ${media('pc')} {
    max-height: calc(100vh - 100vw - 40px);
  }
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
  word-break: keep-all;
`;

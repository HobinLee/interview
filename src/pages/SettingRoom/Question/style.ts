import styled from 'styled-components';

export const QuestionElement = styled.li`
  margin-top: 0.5rem;
  height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .buttons-wrapper {
    display: flex;
  }
`;

export const ButtonsWrap = styled.div`
  width: auto;
  min-width: 120px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-left: 0.7rem;
`;

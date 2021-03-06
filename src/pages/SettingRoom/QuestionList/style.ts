import styled from 'styled-components';

export const QuestionListSection = styled.section`
  background-color: white;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  align-items: flex-start;
  padding: 1rem;
  border-radius: 1rem;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 3px;

  & + & {
    margin-top: 1rem;
  }
`;

export const QuestionListTitleWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AddQuestionWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const QuestionList = styled.ul`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0;
  padding-left: 1rem;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

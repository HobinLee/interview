import style from 'styled-components';

export const QuestionElementWrapper = style.li`
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > button {
    margin-left: 1rem;
  }
`;

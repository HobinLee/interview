import style from "styled-components";

export const QuestionListWrapper = style.main`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  min-width: 50rem;

  .title {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    h4 {
      margin: 0;
      margin-right: 1rem;
    }
    input {
      width: 30rem;
      margin-right: 1rem;
    }
  }

  .list {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0;
    padding-left: 2rem;
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 4rem;
  }
`
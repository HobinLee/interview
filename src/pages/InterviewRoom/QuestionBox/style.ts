import styled from 'styled-components';

export const QuestionBoxWrapper = styled.div`
  width: 100vw;
  height: auto;
  position: absolute;
  top: calc(50%-2rem);
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  text-align: center;
  padding: 3rem 0;
  z-index: 100;

  > h3 {
    padding: 0;
    margin: 0;
    margin-bottom: 2rem;
    font-size: 4rem;
  }

  .timer {
    font-size: 2rem;
  }
`;

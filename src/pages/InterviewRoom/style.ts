import styled from 'styled-components';
import { colors } from '@src/styles/variables';

export const InterviewRoomWrapper = styled.main`
  background: ${colors.darkGray};
  width: 100vw;
  height: 100vh;

  .body {
    width: 100%;
    height: 100%;
    padding: 5rem 1rem;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .footer {
    position: fixed;
    left: 0;
    bottom: 0;

    width: 100%;

    padding: 1rem 0;

    display: flex;
    justify-content: center;
    justify-self: flex-end;
  }

  .start-time {
    position: absolute;
    left: 2rem;
  }
`;

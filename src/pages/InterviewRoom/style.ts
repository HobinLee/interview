import styled from 'styled-components';

export const InterviewRoomWrapper = styled.main`
  background: #333;
  color: #fff;
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 2.8rem;
    margin: 2rem 0 0 0;
  }

  .interviewers {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: calc(25vw + 13em);
    max-height: ;

    > div {
      width: 40vw;
      max-width: 600px;
      margin: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }

  .profile {
    width: 40vw;
    height: 25vw;
    max-width: 600px;
    max-height: 375px;
    background: #222;
    border-radius: 2rem;
  }

  .footer {
    justify-self: flex-end;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 1rem 0;
    display: flex;
    justify-content: center;

    .next-button {
      margin: 2rem;
      svg {
        width: 2rem;
        height: 2rem;
        > polyline {
          stroke: #fff;
        }
      }

      padding: 0.8rem 2.8rem;
      background: #1a73e8;
      color: #fff;
      border-radius: 2.5rem;
      text-decoration: none;
      outline: none;
      border: none;
      cursor: pointer;

      &:disabled {
        opacity: 0.5;
      }
    }

    a {
      margin: 2rem;
      svg {
        width: 3rem;
        height: 3rem;
      }
      padding: 0.8rem 2.8rem;
      color: white;
      border-radius: 2.3rem;
      text-decoration: none;
    }

    .close-button {
      background: #ea4335;
    }

    .review-button {
      background: #1a73e8;
    }
  }

  .interviewee {
    position: relative;
  }

  .start-time {
    position: absolute;
    font-size: 2rem;
    left: 2rem;
    bottom: 2rem;
    color: white;
  }
`;

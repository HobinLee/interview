import styled from 'styled-components';
import { media } from './mixins';

export const WaitingRoomWrapper = styled.main`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  min-height: 90vh;
  width: 100%;

  .question-set {
    width: 100%;
    position: fixed;
    bottom: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .waiting-room {
    display: flex;
    align-items: center;
    justify-content: center;

    &__content {
      display: flex;
      flex-direction: row;

      ${media('tablet')} {
        flex-direction: column;
      }
      > div {
        border-radius: 1rem;
      }
    }

    &__camera {
      width: 50vw;
      height: 28vw;
      background: #333;
      width: 50vw;
      height: 28vw;
      min-width: 400px;

      ${media('tablet')} {
        width: 80vw;
        height: 42vw;
      }
    }

    &__start {
      margin-top: 0;
      margin-left: 5rem;
      min-height: 100%;
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      align-items: center;

      ${media('tablet')} {
        margin-left: 0;
        margin-top: 5rem;
      }

      button {
        margin-top: 2rem;
      }
    }
  }
`;

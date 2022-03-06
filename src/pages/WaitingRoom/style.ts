import styled from 'styled-components';
import { media } from '@src/styles/mixins';

export const WaitingRoom = styled.main`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  min-height: 90vh;
  width: 100%;
`;

export const WaitingRoomBody = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WaintingRoomContent = styled.div`
  display: flex;
  flex-direction: row;

  ${media('tablet')} {
    flex-direction: column;
  }
`;

export const CameraWrap = styled.div`
  width: 50vw;
  height: 28vw;
  width: 50vw;
  height: 28vw;
  min-width: 400px;
  overflow: hidden;
  display:flex;
  align-items: center;
  justify-content: center;

  ${media('tablet')} {
    width: 80vw;
    height: 42vw;
  }
`;

export const StartWrap = styled.div`
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
`;

export const QuestionSetWrap = styled.div`
  width: 100%;
  position: fixed;
  bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

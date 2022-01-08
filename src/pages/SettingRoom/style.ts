import { colors } from '@src/styles/variables';
import styled from 'styled-components';

export const SettingRoomWrapper = styled.main`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${colors.lightGray};
  .setting-room {
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;

    button {
      width: 60px;
      min-width: 60px;
      margin-left: 5px;
    }
  }

  & > a {
    transition: 0.5s;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 1.5rem;
    left: 1.5rem;
    width: 50px;
    height: 50px;
    background-color: ${colors.blue};
    border-radius: 50%;
    font-size: 1.4rem;

    &:hover {
      opacity: 0.9;
    }
  }
`;

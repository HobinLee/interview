import { colors } from '@src/styles/variables';
import styled from 'styled-components';

export const SettingRoom = styled.main`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${colors.lightGray};
`;

export const SettingRoomBody = styled.section`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;

  button {
    width: 60px;
    min-width: 60px;
    margin-left: 5px;
  }
`;

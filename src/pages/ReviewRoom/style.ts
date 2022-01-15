import { colors } from '@src/styles/variables';
import styled from 'styled-components';

export const ReviewRoom = styled.main`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${colors.lightGray};
`;

export const ReviewRoomBody = styled.section`
  width: 100%;
  max-width: 600px;
`;

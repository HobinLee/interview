import { colors } from '@src/styles/variables';
import styled from 'styled-components';

export const ReviewRoomWrapper = styled.main`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${colors.lightGray};

  .review-table {
    margin: auto;
    border: 1px solid black;
  }
`;

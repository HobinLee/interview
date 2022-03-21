import { media } from '@src/styles/mixins';
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
  display: flex;
  flex-direction: row;
  max-width: 1250px;
  justify-content: center;
  align-items: center;

  & > section {
    margin: 0 1rem;
    flex-basis: 50%;
  }

  ${media('pc')} {
    flex-direction: column;
    max-width: 600px;
    & > section {
      margin: 1rem 0;
    }
  }
`;

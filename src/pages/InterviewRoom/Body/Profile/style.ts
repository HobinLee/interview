import { media } from '@src/styles/mixins';
import styled from 'styled-components';

export const ProfileWrap = styled.div`
  width: 40vw;
  height: 25vw;
  max-width: 480px;
  max-height: 300px;
  background: #222;
  border-radius: 1rem;
  margin: 0.5rem;

  ${media('tablet')} {
    width: 80vw;
    height: 50vw;
    &:nth-child(2) {
      display: none;
    }
  }
`;

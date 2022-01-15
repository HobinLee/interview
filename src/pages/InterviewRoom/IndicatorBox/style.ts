import { Z_INDEX } from '@src/styles/zIndex';
import styled from 'styled-components';

export const IndicationBox = styled.div`
  width: 100vw;
  height: auto;

  position: fixed;
  top: 50%;
  left: 0;
  z-index: ${Z_INDEX.QUETION};
  transform: translateY(-50%);

  background: rgba(0, 0, 0, 0.4);
`;

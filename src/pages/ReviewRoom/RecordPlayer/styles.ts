import { media } from '@src/styles/mixins';
import { colors } from '@src/styles/variables';
import styled from 'styled-components';

export const RecordVideo = styled.video`
  width: 100%;
  height: auto;
  transform: scaleX(-1);

  ${media('pc')} {
    width: auto;
    height: 100%;
  }
`;

export const VideoWrap = styled.section`
  min-width: 550px;
  height: 330px;
  border-radius: 1rem;
  overflow: hidden;
  background-color: ${colors.gray};

  ${media('pc')} {
    min-width: 0;
    max-width: 100%;
    min-height: 0;
    height: 350px;
    width: 100%;
    max-height: calc(75vw - 30px);
  }
`;

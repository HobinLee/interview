import { media } from '@src/styles/mixins';
import ReactPlayer from 'react-player/lazy';
import styled from 'styled-components';

export const RecordVideo = styled(ReactPlayer)`
  & > video {
    width: 100%;
    height: auto;
    border-radius: 1rem;
  }
  ${media('pc')} {
    &> video {
      width: auto;
      height: 100%;
    }
  }
`;

export const VideoWrap = styled.section`
  ${media('pc')} {
    max-width: 100%;
    width: 100%;
    max-height: calc(75vw - 30px);
  }
`;

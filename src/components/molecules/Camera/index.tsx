import { VFC } from 'react';
import Webcam from 'react-webcam';
import styled from 'styled-components';

const Camera: VFC = () => {
  return <CameraWrap autoPlay muted />;
};

export default Camera;

const CameraWrap = styled(Webcam)`
  height: 100%;
  width: auto;
  transform: scaleX(-1);
`;

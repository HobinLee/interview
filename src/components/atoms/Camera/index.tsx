import { VFC } from 'react';
import Webcam from 'react-webcam';
import styled from 'styled-components';

const Camera: VFC = () => <CameraWrap width="auto" height="100%" />;

export default Camera;

const CameraWrap = styled(Webcam)`
  transform: scaleX(-1);
`;

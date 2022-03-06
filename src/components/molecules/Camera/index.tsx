import { Typography } from '@src/components/atoms';
import { colors } from '@src/styles/variables';
import { useEffect, useRef, useState, VFC } from 'react';
import { useRecordWebcam } from 'react-record-webcam';
import Webcam from 'react-webcam';
import styled from 'styled-components';

const PermissionNeed = () => (<SkeletonWrap>
  <Typography fontSize='small' color='white'>카메라 및 오디오를 허용해주세요</Typography>
  </SkeletonWrap>);

export default () => {
  const { status, open, close } = useRecordWebcam();
  const [permission, setPermission] = useState<boolean>(true);

  useEffect(() => {
    open();
    return () => {
      close();
    }
  }, [])

  useEffect(() => {
    if(status === 'ERROR') {
      setPermission(false);
    }
  }, [status]);

  return permission ? <CameraWrap autoPlay muted /> : <PermissionNeed />
};

const CameraWrap = styled(Webcam)`
  height: 100%;
  width: auto;
  transform: scaleX(-1);
  border-radius: 1rem;
`;

const SkeletonWrap = styled.div`
  width: 100%;
  height: 100%;
  background: ${colors.darkGray};
  opacity: 0.2;
  display: flex;
  justify-column: center;
  align-items: center;
  border-radius: 1rem;

  & > div {
    width: 100%;
    text-align: center;
  }
`

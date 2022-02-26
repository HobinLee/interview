import { useEffect, useState, VFC } from 'react';
import Webcam from 'react-webcam';
import { useRecordWebcam } from 'react-record-webcam';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { standbyState } from '@src/stores/interview';

interface CameraProps {
  record?: boolean;
  startRecord?: () => void;
  stopRecord?: () => void;
}

const Camera: VFC<CameraProps> = ({ record }) => {
  const recordWebcam = useRecordWebcam();
  const standby = useRecoilValue(standbyState);

  useEffect(() => {
    record && recordWebcam.open();
  }, []);

  useEffect(() => {
    if (standby) {
      if (recordWebcam.status === 'RECORDING') recordWebcam.stop();
    } else {
      recordWebcam.start();
    }
  }, [standby]);

  useEffect(() => {
    if (recordWebcam.status === 'PREVIEW') {
      saveFile();
    }
  }, [recordWebcam.status]);

  const saveFile = async () => {
    const blob = await recordWebcam.getRecording();
    console.log(blob);
    recordWebcam.open();
  };

  if (!record) return <CameraWrap autoPlay muted />;

  // return <CameraWrap as="video" ref={recordWebcam.webcamRef} autoPlay muted />;
  return (
    <div>
      <p>Camera status: {recordWebcam.status}</p>
      <button onClick={recordWebcam.open}>Open camera</button>
      <button onClick={recordWebcam.start}>Start recording</button>
      <button onClick={recordWebcam.stop}>Stop recording</button>
      <button onClick={recordWebcam.retake}>Retake recording</button>
      <button onClick={recordWebcam.download}>Download recording</button>
      <button onClick={saveFile}>Save file to server</button>
      <video ref={recordWebcam.webcamRef} autoPlay muted />
    </div>
  );
};

export default Camera;

const CameraWrap = styled(Webcam)`
  height: 100%;
  width: auto;
  transform: scaleX(-1);
`;

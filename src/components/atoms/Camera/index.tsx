import { useEffect, useState, VFC } from 'react';
import Webcam from 'react-webcam';
import { useRecordWebcam } from 'react-record-webcam';
import styled from 'styled-components';

interface CameraProps {
  record?: boolean;
  startRecord?: () => void;
  stopRecord?: () => void;
}

const Camera: VFC<CameraProps> = ({ record }) => {
  const recordWebcam = useRecordWebcam();
  useEffect(() => {
    record && recordWebcam.open();
  }, []);

  const saveFile = async () => {
    const blob = await recordWebcam.getRecording();
  };

  if (!record) return <CameraWrap autoPlay muted />;

  return <CameraWrap as="video" ref={recordWebcam.webcamRef} autoPlay muted />;
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
      <video ref={recordWebcam.previewRef} autoPlay muted loop />
    </div>
  );
};

export default Camera;

const CameraWrap = styled(Webcam)`
  height: 100%;
  width: auto;
  transform: scaleX(-1);
`;

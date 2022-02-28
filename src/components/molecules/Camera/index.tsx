import { useEffect, useRef, VFC } from 'react';
import Webcam from 'react-webcam';
import { useRecordWebcam } from 'react-record-webcam';
import styled from 'styled-components';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { standbyState } from '@src/stores/interview';
import { recordsState } from '@src/stores/records';

interface CameraProps {
  record?: boolean;
}

const Camera: VFC<CameraProps> = ({ record }) => {
  const cameraRef = useWebcamControl(record);

  if (!record) return <CameraWrap autoPlay muted />;
  return <CameraWrap as="video" ref={cameraRef} autoPlay muted />;
};

export default Camera;

const CameraWrap = styled(Webcam)`
  height: 100%;
  width: auto;
  transform: scaleX(-1);
`;

function useWebcamControl(record?: boolean) {
  const { webcamRef, start, status, open, stop, getRecording } =
    useRecordWebcam();
  const standby = useRecoilValue(standbyState);
  const recordList = useRef<(Blob | null)[]>([]).current;
  const setRecordList = useSetRecoilState(recordsState);
  const initRecordList = useResetRecoilState(recordsState);

  useEffect(() => {
    if (!record) return;
    initRecordList();
    open();

    return () => {
      setRecordList([...recordList]);
    };
  }, []);

  useEffect(() => {
    if (!record) return;

    if (standby) {
      if (status !== 'RECORDING') return;
      stop();
    } else {
      if (status === 'ERROR') return;
      start();
    }
  }, [standby]);

  useEffect(() => {
    if (!record) return;

    if (status === 'PREVIEW') {
      saveFile();
    }

    if (status === 'ERROR') {
      addToRecordList(null);
      open();
    }

    return;
  }, [status]);

  const saveFile = async () => {
    try {
      const record: unknown = await getRecording();
      open();
      addToRecordList(record as Blob);
    } catch (e) {
      addToRecordList(null);
    }
  };

  function addToRecordList(record: Blob | null) {
    recordList.push(record);
    console.log(recordList);
  }
  return webcamRef;
}

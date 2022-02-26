import { useEffect, useRef, VFC } from 'react';
import Webcam from 'react-webcam';
import { useRecordWebcam } from 'react-record-webcam';
import styled, { css } from 'styled-components';
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
  }, []);

  useEffect(() => {
    if (!record) return;
    if (standby) {
      if (status === 'RECORDING') stop();
    } else {
      start();
    }
  }, [standby]);

  useEffect(() => {
    if (!record) return;
    switch (status) {
      case 'PREVIEW':
        saveFile();
        break;
      case 'ERROR':
        addToRecordList(null);
        break;
    }
  }, [status]);

  const saveFile = async () => {
    try {
      const record: any = await getRecording();
      open();
      addToRecordList(record);
    } catch (e) {
      addToRecordList(null);
    }
  };

  function addToRecordList(record: Blob | null) {
    recordList.push(record);
    setRecordList([...recordList]);
    console.log(recordList);
  }
  return webcamRef;
}

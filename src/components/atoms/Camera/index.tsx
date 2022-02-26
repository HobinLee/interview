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
  const recordWebcam = useRecordWebcam();
  const standby = useRecoilValue(standbyState);
  const recordList = useRef<(Blob | null)[]>([]).current;
  const setRecordList = useSetRecoilState(recordsState);
  const initRecordList = useResetRecoilState(recordsState);

  useEffect(() => {
    if (!record) return;
    initRecordList();
    recordWebcam.open();
  }, []);

  useEffect(() => {
    if (standby) {
      if (recordWebcam.status === 'RECORDING') recordWebcam.stop();
    } else {
      recordWebcam.start();
    }
  }, [standby]);

  useEffect(() => {
    switch (recordWebcam.status) {
      case 'PREVIEW':
        saveFile();
        break;
      case 'ERROR':
        addToRecordList(null);
        break;
    }
  }, [recordWebcam.status]);

  const saveFile = async () => {
    try {
      const record: any = await recordWebcam.getRecording();
      recordWebcam.open();
      addToRecordList(record);
    } catch (e) {
      addToRecordList(null);
    }
  };

  function addToRecordList(record: Blob | null) {
    recordList.push(record);
    setRecordList([...recordList]);
  }

  if (!record) return <CameraWrap autoPlay muted />;

  return <CameraWrap as="video" ref={recordWebcam.webcamRef} autoPlay muted />;
};

export default Camera;

const CameraWrap = styled(Webcam)`
  height: 100%;
  width: auto;
  transform: scaleX(-1);
`;

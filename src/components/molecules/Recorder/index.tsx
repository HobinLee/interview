import { useEffect, useRef, VFC } from 'react';
import { useRecordWebcam } from 'react-record-webcam';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { standbyState } from '@src/stores/interview';
import { recordsState } from '@src/stores/records';

const Recorder: VFC<{ isEndQuestion: boolean }> = ({ isEndQuestion }) => {
  const cameraRef = useWebcamControl(isEndQuestion);

  return <video style={{ display: 'none' }} ref={cameraRef} />;
};

export default Recorder;

function useWebcamControl(isEndQuestion: boolean) {
  const { webcamRef, start, status, open, stop, getRecording } =
    useRecordWebcam();
  const standby = useRecoilValue(standbyState);
  const recordList = useRef<(Blob | null)[]>([]).current;
  const setRecordList = useSetRecoilState(recordsState);
  const initRecordList = useResetRecoilState(recordsState);

  useEffect(() => {
    initRecordList();
    open();

    return () => {
      setRecordList([...recordList]);
    };
  }, []);

  useEffect(() => {
    if (standby) {
      if (status !== 'RECORDING') return;
      stop();
    } else {
      if (status === 'ERROR') return;
      start();
    }
  }, [standby]);

  useEffect(() => {
    if (status === 'PREVIEW') {
      saveFile();
    }

    if (status === 'ERROR') {
      addToRecordList(null);
    }

    return;
  }, [status]);

  const saveFile = async () => {
    try {
      const record: unknown = await getRecording();
      addToRecordList(record as Blob);
    } catch (e) {
      addToRecordList(null);
    }
  };

  function addToRecordList(record: Blob | null) {
    recordList.push(record);

    !isEndQuestion && open();
  }
  return webcamRef;
}

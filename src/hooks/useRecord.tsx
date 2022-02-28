import { useEffect, useRef } from 'react';
import { useRecordWebcam } from 'react-record-webcam';
import { useReducerWithoutDispatch } from '.';

export default (isEndQuestion: boolean) => {
  const { webcamRef, start, status, open, stop, getRecording } =
    useRecordWebcam();
  const recordList = useRef<(Blob | null)[]>([]).current;
  const [isReadyToRecord, [ready]] = useReducerWithoutDispatch(false, {
    ready: () => true,
  });

  useEffect(() => {
    open();
  }, []);

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

  return {
    stopRecord: () => {
      if (status !== 'RECORDING') return;
      stop();
    },
    startRecord: () => {
      if (status === 'ERROR') return;
      start();
    },
    recordList,
    recorder: <video style={{ display: 'none' }} ref={webcamRef} />,
  };
};

import { toast } from '@src/dialog';
import { useEffect, useRef, useState } from 'react';
import { useRecordWebcam } from 'react-record-webcam';
import { useReducerWithoutDispatch } from '.';

export default (isEndQuestion: boolean) => {
  const [permission, setPermission] = useState(true);
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
    if(!permission) return;

    if (!recordList.length && status === 'OPEN') {
      ready();
    }

    if (status === 'PREVIEW') {
      saveFile();
    }

    if (status === 'ERROR') {
      if(isReadyToRecord) {
        toast('동영상 저장에 실패했습니다');
        addToRecordList(null);
      } else {
        setPermission(false);
        ready();
      }
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
    isReadyToRecord
  };
};

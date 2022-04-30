import { toast } from '@src/dialog';
import { useRecordState } from '@src/stores/records';
import { useEffect, useRef } from 'react';
import { useRecordWebcam } from 'react-record-webcam';
import useBoolean from './useBoolean';

export default (isEndQuestion: boolean) => {
  const [permission, _, refusePermission] = useBoolean(true);
  const { webcamRef, start, status, open, stop, getRecording } =
    useRecordWebcam();
  const recordList = useRef<(Blob | null)[]>([]).current;
  const [isReady, ready] = useBoolean(false);
  const { setRecordList, initRecordList } = useRecordState();

  useEffect(() => {
    open();
    initRecordList();
    return () => {
      setRecordList([...recordList]);
      close();
    };
  }, []);

  useEffect(() => {
    if(!permission || !webcamRef) return;

    if (!recordList.length && status === 'OPEN') {
      ready();
    }

    if (status === 'PREVIEW') {
      saveFile();
    }

    if (status === 'ERROR') {
      if(isReady) {
        toast('동영상 저장에 실패했습니다');
        addToRecordList(null);
      } else {
        refusePermission();
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
    isLoading: !isReady
  };
};

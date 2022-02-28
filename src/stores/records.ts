import {
  atom,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from 'recoil';

const RECORD_KEY = 'recordState';

const recordState = atom<(Blob | null)[]>({
  key: RECORD_KEY,
  default: [],
});

export const useRecordState = () => {
  const setRecordList = useSetRecoilState(recordState);
  const initRecordList = useResetRecoilState(recordState);

  return {
    setRecordList,
    initRecordList,
  };
};

export const getRecordList = () => useRecoilValue(recordState);

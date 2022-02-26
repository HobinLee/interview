import { atom } from 'recoil';

const RECORD_KEY = 'recordState';

export const recordsState = atom<(Blob | null)[]>({
  key: RECORD_KEY,
  default: [],
});

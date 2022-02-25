import { atom } from 'recoil';

const INTERVIEW_KEY = 'interview';

export const standbyState = atom<boolean>({
  key: INTERVIEW_KEY,
  default: true,
});

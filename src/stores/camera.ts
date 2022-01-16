import { atom, RecoilState, selector } from 'recoil';

const getCameraStream = async () =>
  await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
  });

export const cameraState = selector<MediaStream | null>({
  key: 'cameraStream',
  get: async () => {
    return await getCameraStream();
  },
});

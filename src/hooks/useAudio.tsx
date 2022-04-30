import { useRef } from 'react';
import useBoolean from './useBoolean';

export default (src: string, autoPlay?: boolean) => {
  const [isReady,ready] = useBoolean(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const play = () => {
    if(!audioRef.current) return;

    if (isReady) {
      audioRef.current.play();
    } else {
      onloadeddata = () => {
        ready();
        audioRef?.current?.play();
      }
    }  
  }

  return {
    isLoading: !isReady,
    audio: (
      <audio
        ref={audioRef}
        src={src}
        autoPlay={autoPlay}
        onLoadedData={ready}
      />
    ),
    play
  };
};

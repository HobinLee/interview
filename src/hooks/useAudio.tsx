import { useRef, useState } from 'react';
import { useReducerWithoutDispatch } from '.';

export default (src: string, autoPlay?: boolean) => {
  const [isLoading, [ready]] = useReducerWithoutDispatch(true, {
    ready: () => false
  });
  const audioRef = useRef<HTMLAudioElement>(null);

  const play = () => {
    if(!audioRef.current) return;

    if (!isLoading) {
      audioRef.current.play();
    } else {
      onloadeddata = () => {
        ready();
        audioRef?.current?.play();
      }
    }  
  }

  return {
    isLoading,
    audio: (
      <audio
        ref={audioRef}
        src={src}
        autoPlay={autoPlay}
        onLoadedData={() => ready()}
      />
    ),
    play
  };
};

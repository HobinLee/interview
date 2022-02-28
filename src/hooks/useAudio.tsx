import { useState } from 'react';

export default (src: string, autoPlay?: boolean) => {
  const [isLoading, setIsLoading] = useState(true);

  return {
    isLoading,
    audio: (
      <audio
        src={src}
        autoPlay={autoPlay}
        onLoadedData={() => setIsLoading(false)}
      />
    ),
  };
};

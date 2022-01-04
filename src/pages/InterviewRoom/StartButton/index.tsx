import { FC } from 'react';
import { StartButtonWrapper } from './style';

type StartButtonProps = {
  setStart: () => void;
};

const StartButton: FC<StartButtonProps> = ({ setStart }) => {
  return (
    <StartButtonWrapper>
      <button onClick={setStart}>Start</button>
    </StartButtonWrapper>
  );
};

export default StartButton;

import { StartButtonWrapper } from "./style";

type StartButtonProps = {
  setStart: () => void
}

const StartButton = ({ setStart }: StartButtonProps) => {
  return <StartButtonWrapper>
    <button onClick={setStart}>Start</button>
  </StartButtonWrapper>;
}

export default StartButton;
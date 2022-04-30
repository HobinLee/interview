import { FC } from 'react';
import * as S from './style';
import { LoadingIndicator } from './Loading';
import { InterviewRoomBody } from './Body';
import { InterviewRoomFooter } from './Footer';
import { IndicationBox } from './IndicationBox';
import useInterviewRoomState from './hooks';

const InterviewRoom: FC = () => {
  const {
    isLoading,
    isInterviewing,
    audio,
    recorder,
    question,
    handelNextQuestion,
    handleStartInterview,
  } = useInterviewRoomState();

  return (
    <S.InterviewRoom>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <>
          <InterviewRoomBody />
          <InterviewRoomFooter
            isEndQuestion={isInterviewing && !question}
            handelNextQuestion={handelNextQuestion}
          />
          <IndicationBox
            isInterviewing={isInterviewing}
            question={question}
            startInterview={handleStartInterview}
          />
        </>
      )}
      {audio}
      {recorder}
    </S.InterviewRoom>
  );
};

export default InterviewRoom;
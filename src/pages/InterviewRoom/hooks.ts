import { useAudio, useBoolean, useQuestion, useRecord, useStopwatch } from "@src/hooks";
import { standbyState } from "@src/stores/interview";
import EnterSFX from '@src/assets/audios/enter.mp3';
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useAnswerState } from "@src/stores/answer";
import { Seconds } from "@src/types/common";
import { Question } from "@src/types/question";

export default function() {
  const { question, shuffleQuestion, nextQuestion } = useQuestion();
  const { initAnswerList, addAnswer } = useAnswerControl();
  const { startStopWatch, getStopWatchTime } = useStopwatch();
  const [isInterviewing, startInterview] = useBoolean(false);
  const [standby, setStandby] = useRecoilState(standbyState);
  const { isLoading: isLoadingAudio, audio, play } = useAudio(EnterSFX, false);
  const { recorder, startRecord, stopRecord, isLoading: isLoadingRecord } = useRecord(
    isInterviewing && !question,
  );

  useEffect(() => {
    isLoadingRecord && isLoadingAudio && play();
  }, [isLoadingAudio, isLoadingRecord]);

  useEffect(() => {
    if (!isInterviewing) return;

    if (!standby) {
      startRecord();
      startStopWatch();
      return;
    }
  }, [standby]);

  function handleStartInterview() {
    shuffleQuestion();
    initAnswerList();
    startInterview();
  }

  function handelNextQuestion() {
    addAnswer(question, getStopWatchTime());
    nextQuestion();
    setStandby(true);
    stopRecord();
  }

  return {
    isLoading: isLoadingAudio || isLoadingRecord,
    question,
    handleStartInterview,
    handelNextQuestion,
    audio,
    recorder,
    isInterviewing,
  }
}

function useAnswerControl() {
  const { answerList, setAnswerList, initAnswerList } = useAnswerState();

  return {
    initAnswerList,
    addAnswer: (question: Question, time: Seconds) => {
      setAnswerList([...answerList, { question, time }]);
    },
  };
}
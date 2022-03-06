import { QuestionSet } from '@src/types/question';

export type QuestionType = keyof QuestionSet;


interface Info {
  title: string;
  indication: string;
}

export const questionTypeInfo: Record<QuestionType, Info> = {
  begin: {
    title: '시작 질문',
    indication: '모든 질문이 처음에 순서대로 나옵니다',
  },
  essential: {
    title: '필수 질문',
    indication: '모든 질문이 기타 질문과 함께 섞여 무작위로 나옵니다',
  },
  random: {
    title: '기타 질문',
    indication: '일부 질문이 필수 질문과 섞여 무작위로 나옵니다',
  },
  end: {
    title: '마무리 질문',
    indication: '모든 질문이 마지막에 순서대로 나옵니다',
  },
};

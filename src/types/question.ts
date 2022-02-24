export type Question = string;

export type QuestionSet = {
  begin: Question[];
  essential: Question[];
  random: Question[];
  end: Question[];
};

export type QuestionSetKey = string;

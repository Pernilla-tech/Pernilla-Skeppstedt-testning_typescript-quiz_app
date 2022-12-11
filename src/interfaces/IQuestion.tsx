import { QuestionDifficulty } from "../enums/Difficulty";

export interface ApiQuestion {
  category: string;
  id: string;
  difficulty: QuestionDifficulty;
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
}

export interface Question extends ApiQuestion {
  answers: string[];
}

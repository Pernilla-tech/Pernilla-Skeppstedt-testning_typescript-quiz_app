import { QuestionDifficulty } from "../enums/Difficulty";

export interface Answer {
  correct: boolean;
  difficulty: QuestionDifficulty;
  answer: string;
  timeLeft: number;
}

import { QuestionDifficulty } from "../../enums/Difficulty";
import { Answer } from "../../interfaces/IAnswer";

type ScoreConfig = {
  [QuestionDifficulty.EASY]: number;
  [QuestionDifficulty.MEDIUM]: number;
  [QuestionDifficulty.HARD]: number;
};
export function calculateScore(answers: Answer[], scoreConfig: ScoreConfig) {
  let totalScore = 0;
  let correctCount = 0;

  for (const answer of answers) {
    if (answer.correct) {
      totalScore =
        totalScore + answer.timeLeft * scoreConfig[answer.difficulty];
      correctCount = correctCount + 1;
    }
  }
  totalScore = totalScore + correctCount * longestStreak(answers);

  return totalScore;
}

function longestStreak(answers: Answer[]) {
  let streakAnswers = 0;
  let longest = 0;
  for (const answer of answers) {
    if (answer.correct) {
      streakAnswers = streakAnswers + 1;
      if (streakAnswers > longest) {
        longest = streakAnswers;
      }
    } else {
      streakAnswers = 0;
    }
  }
  if (longest >= 3) {
    return longest;
  } else {
    return 0;
  }
}

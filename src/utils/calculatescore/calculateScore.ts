import { QuestionDifficulty } from "../../enums/Difficulty";
import { Answer } from "../../interfaces/IAnswer";

type ScoreConfig = {
  [QuestionDifficulty.EASY]: number;
  [QuestionDifficulty.MEDIUM]: number;
  [QuestionDifficulty.HARD]: number;
};
export function calculateScore(answers: Answer[], scoreConfig: ScoreConfig) {
  //sek som är kvar * svårighetsgrad = summa för varje fråga
  //+ antal gissade rätt totalt = siffra mellan 0-9
  // * antal gissade rätt i föld om det är minst 3 rätt på raken= 3 eller större
  //När alla 9 frågor besvarats visas totalpoängen
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
  let streakAnswers = 0; //antal rätt svar i rad
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

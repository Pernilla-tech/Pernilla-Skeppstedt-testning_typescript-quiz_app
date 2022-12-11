import config from "../../confiq/QuizConfig";
import { QuestionDifficulty } from "../../enums/Difficulty";
import { Answer } from "../../interfaces/IAnswer";
import { calculateScore } from "./calculateScore";

const easyAnswer: Answer = {
  answer: "Fish tacos",
  correct: true,
  difficulty: QuestionDifficulty.EASY,
  timeLeft: 10,
};

const mediumAnswer: Answer = {
  answer: "Fish tacos",
  correct: true,
  difficulty: QuestionDifficulty.MEDIUM,
  timeLeft: 15,
};

const hardAnswer: Answer = {
  answer: "Fish tacos",
  correct: true,
  difficulty: QuestionDifficulty.HARD,
  timeLeft: 20,
};

const wrongAnswer: Answer = {
  answer: "Beef tacos",
  correct: false,
  difficulty: QuestionDifficulty.HARD,
  timeLeft: 20,
};

describe("CalculateScore", () => {
  it("Should return 0 for empty answers", () => {
    const score = calculateScore([], config.points);
    expect(score).toEqual(0);
  });

  it("Should return 0 points if wrong answer", () => {
    const score = calculateScore([wrongAnswer], config.points);
    expect(score).toEqual(0);
  });

  it("should return score based on difficulty and time left", () => {
    const scoreEasy = calculateScore([easyAnswer], config.points);
    const scoreMedium = calculateScore([mediumAnswer], config.points);
    const scoreHard = calculateScore([hardAnswer], config.points);
    expect(scoreEasy).toEqual(10);
    expect(scoreMedium).toEqual(30);
    expect(scoreHard).toEqual(60);
  });

  it("Should return score based on time left and difficulty and correct answers", () => {
    const score = calculateScore(
      [easyAnswer, mediumAnswer, hardAnswer],
      config.points
    );
    expect(score).toBe(109);
  });

  it("If 3 or more correct answers in a row, * score by 3 or more", () => {
    const score = calculateScore(
      [easyAnswer, easyAnswer, easyAnswer, easyAnswer],
      config.points
    );
    expect(score).toBe(56);
  });

  it("Should render total score for 9 answered questions", () => {
    const totalScore = calculateScore(
      [
        easyAnswer,
        easyAnswer,
        easyAnswer,
        wrongAnswer,
        wrongAnswer,
        wrongAnswer,
        wrongAnswer,
        wrongAnswer,
        wrongAnswer,
      ],
      config.points
    );
    expect(totalScore).toBe(39);
  });
});

import { API_BASE_URL } from "../confiq/QuizConfig";
import { GameDifficulty } from "../enums/Difficulty";
import { Region } from "../enums/Region";
import { Category } from "../interfaces/ICategory";
import { ApiQuestion, Question } from "../interfaces/IQuestion";
import { shuffleArray } from "../utils/ShuffleArray";

export class QuestionNotFoundError extends Error {}

export const getQuestion = async (
  level: GameDifficulty,
  region: Region,
  category: Category
): Promise<Question> => {
  const params = [`limit=1`, `region=${region}`, `categories=${category.id}`];
  if (level !== GameDifficulty.RANDOM) {
    params.push(`difficulty=${level}`);
  }

  const queryString = params.join("&");
  const endpoint = `${API_BASE_URL}/questions?${queryString}`;
  const request = await fetch(endpoint);
  const quiz = await request.json();

  const questions = quiz.map((question: ApiQuestion) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrectAnswers,
      question.correctAnswer,
    ]),
  }));

  if (questions.length > 0) {
    return questions[0];
  } else {
    throw new QuestionNotFoundError("No questions found");
  }
};

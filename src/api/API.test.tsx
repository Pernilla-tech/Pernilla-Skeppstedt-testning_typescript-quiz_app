import fetchMock from "jest-fetch-mock";
import { GameDifficulty, QuestionDifficulty } from "../enums/Difficulty";
import { Region } from "../enums/Region";
import { getQuestion } from "./API";
import { ApiQuestion } from "../interfaces/IQuestion";

const mockQuestion: ApiQuestion = {
  category: "Tacos",
  id: "1",
  difficulty: QuestionDifficulty.EASY,
  question: "What is the best taco?",
  correctAnswer: "Fish tacos",
  incorrectAnswers: ["Beef tacos", "Chicken tacos", "Pork tacos"],
};

describe("Trivia API", () => {
  it("should return a single questions", async () => {
    fetchMock.mockResponse(JSON.stringify([mockQuestion]));

    const response = await getQuestion(GameDifficulty.EASY, Region.SV, {
      id: "1",
      name: "Tacos",
    });

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(response).toEqual({
      ...mockQuestion,
      answers: expect.any(Array),
    });
    expect(response.answers).toHaveLength(4);
    expect(response.answers).toContain("Fish tacos");
    expect(response.answers).toContain("Beef tacos");
    expect(response.answers).toContain("Chicken tacos");
    expect(response.answers).toContain("Pork tacos");

    const url = fetchMock.mock.calls[0][0];
    expect(url).toEqual(
      "https://the-trivia-api.com/api/questions?limit=1&region=SV&categories=1&difficulty=easy"
    );
  });

  it("Should return an error if api return empty question", async () => {
    fetchMock.mockResponse(JSON.stringify([]));

    await expect(
      getQuestion(GameDifficulty.EASY, Region.SV, {
        id: "1",
        name: "Tacos",
      })
    ).rejects.toThrowError("No questions found");
  });
});

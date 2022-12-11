import { render, screen } from "@testing-library/react";

import { QuestionDifficulty } from "../../enums/Difficulty";
import { Question } from "../../interfaces/IQuestion";
import AnswerQuestion from "./AnswerQuestion";

const question: Question = {
  id: "1",
  answers: ["Stockholm", "Oslo", "Helsinki", "Copenhagen"],
  category: "Geography",
  correctAnswer: "Stockholm",
  difficulty: QuestionDifficulty.EASY,
  incorrectAnswers: ["Oslo", "Helsinki", "Copenhagen"],
  question: "Whats the capital of Sweden?",
};

describe("AnswerQuestion renders correctly", () => {
  it("should render 4 questions", () => {
    render(<AnswerQuestion question={question} onAnswer={jest.fn()} />);
    const answers = screen.getAllByTestId("check-answer-button");
    expect(answers).toHaveLength(4);
  });

  it("should render 4 questions where 1 question is the correct answer", () => {
    render(<AnswerQuestion question={question} onAnswer={jest.fn()} />);
    const answers = screen.getAllByTestId("check-answer-button");
    const correctAnswer = answers.find((answer) =>
      answer.textContent?.includes(question.correctAnswer)
    );
    expect(correctAnswer).toBeInTheDocument();
  });

  it("should render 1 next question button", () => {
    render(<AnswerQuestion question={question} onAnswer={jest.fn()} />);
    const answers = screen.getAllByTestId("next-question-button");
    expect(answers).toHaveLength(1);
  });

  it("next question button should be disabled as long as the question is not answered and time is left", () => {
    render(<AnswerQuestion question={question} onAnswer={jest.fn()} />);
    const nextQuestionButton = screen.getByTestId("next-question-button");
    expect(nextQuestionButton).toBeDisabled();
  });
});

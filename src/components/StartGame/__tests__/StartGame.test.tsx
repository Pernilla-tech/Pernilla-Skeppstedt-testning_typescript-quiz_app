import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import StartGame from "../StartGame";
import Button from "../../button/Button";
import { QuizGameProvider } from "../../../context/QuizGameContext";

describe("when input renders correctly", () => {
  it("render playername input", () => {
    render(<StartGame />);
    const inputEl = screen.getByLabelText(/Playername/i);
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
  });

  it("input should be initially empty", () => {
    render(
      <QuizGameProvider>
        <StartGame />
      </QuizGameProvider>
    );
    const input = screen.getByLabelText(/Playername/i) as HTMLInputElement;
    expect(input.value).toBe("");
  });

  it("input should be able to change value", () => {
    render(
      <QuizGameProvider>
        <StartGame />
      </QuizGameProvider>
    );
    const input = screen.getByLabelText(/Playername/i) as HTMLInputElement;
    const testValue = "test";
    fireEvent.change(input, { target: { value: testValue } });
    expect(input.value).toBe(testValue);
  });
});

describe("when selected difficulty and region renders correctly", () => {
  it("render a selected difficulty", () => {
    render(<StartGame />);
    expect(screen.getByTestId("select-difficulty")).toHaveDisplayValue("easy");
  });

  it("render a selected region", () => {
    render(<StartGame />);
    expect(screen.getByTestId("select-region")).toHaveDisplayValue("SV");
  });
});

describe("when button renders correctly", () => {
  it("Testing start game button", () => {
    render(<Button>Hello world</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("Button should not be disabled if player name input exist", () => {
    render(
      <QuizGameProvider>
        <StartGame />
      </QuizGameProvider>
    );
    const buttonElement = screen.getByTestId(/start-quiz-button/i);
    const inputValue = screen.getByLabelText("Playername") as HTMLInputElement;
    const testValue = "test";
    fireEvent.change(inputValue, { target: { value: testValue } });
    expect(buttonElement).not.toBeDisabled();
  });

  it("handles onClick", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Start quiz</Button>);
    const buttonEl = screen.getByText(/Start quiz/i);
    fireEvent.click(buttonEl);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

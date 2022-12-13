import { render, screen } from "@testing-library/react";
import EndGame from "../EndGame";

describe("Render EndGame correctly", () => {
  it("Render h1 tag", () => {
    render(<EndGame />);
    const titleElement = screen.getByText(/End game/i);
    expect(titleElement).toBeInTheDocument();
  });

  it("Render a Play again button", () => {
    render(<EndGame />);
    const buttonElement = screen.getByText(/Play again/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toBeEnabled();
  });
});

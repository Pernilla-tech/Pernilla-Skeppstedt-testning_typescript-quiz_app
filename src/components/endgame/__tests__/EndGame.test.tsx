import { render, screen } from "@testing-library/react";
import EndGame from "../EndGame";

it("Render h1 tag", () => {
  render(<EndGame />);
  const titleElement = screen.getByText(/End game/i);
  expect(titleElement).toBeInTheDocument();
});

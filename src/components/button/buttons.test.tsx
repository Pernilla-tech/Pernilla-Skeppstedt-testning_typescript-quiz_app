import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

test("handles onClick", () => {
  const onClick = jest.fn();
  render(<Button onClick={onClick}>Hello</Button>);
  const buttonEl = screen.getByText("Hello");
  fireEvent.click(buttonEl);
  expect(onClick).toHaveBeenCalledTimes(1);
});

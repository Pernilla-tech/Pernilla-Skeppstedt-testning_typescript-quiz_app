import { render, screen } from "@testing-library/react";
import PickCategory from "./PickCategory";

it("Should render three random categories", () => {
  render(<PickCategory onCategoryPicked={() => {}} />);
  const categoryButtons = screen.getAllByRole("button");
  expect(categoryButtons.length).toBe(3);
});

it("should call onCategoryPicked when button is clicked", () => {
  const onClick = jest.fn();
  render(<PickCategory onCategoryPicked={onClick} />);
  const categoryButtons = screen.getAllByRole("button");
  const firstButton = categoryButtons[0];
  const category = firstButton.textContent?.trim();
  firstButton.click();
  expect(category?.length).toBeGreaterThan(0);
  expect(onClick).toBeCalledWith({ id: expect.any(String), name: category });
});

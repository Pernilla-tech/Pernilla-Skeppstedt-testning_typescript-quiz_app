import { render } from "@testing-library/react";
import App from "../App";

test("snapshot is correct", () => {
  const view = render(<App />);
  expect(view).toMatchSnapshot();
});

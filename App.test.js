import { render, screen } from "@testing-library/react-native";
import App from "./App";

test("'Counter Value' is on the screen", () => {
  render(<App />);
  const counterValue = screen.getByText("Counter Value:");

  expect(counterValue).toBeOnTheScreen();
});

import { render, screen } from "@testing-library/react-native";
import App from "./App";

test("items are on the screen", () => {
  render(<App />);
  const counterValue = screen.getByText("Counter Value:");
  const result = screen.getByText("0", { exact: false });
  const incrementInput = screen.getByDisplayValue("1");
  const incrementButton = screen.getByRole("button", { name: "Increment" });
  const decrementButton = screen.getByRole("button", { name: "Decrement" });

  expect(counterValue).toBeOnTheScreen();
  expect(result).toBeOnTheScreen();
  expect(incrementInput).toBeOnTheScreen();
  expect(incrementButton).toBeOnTheScreen();
  expect(decrementButton).toBeOnTheScreen();
});

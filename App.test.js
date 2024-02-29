import { render, screen, userEvent } from "@testing-library/react-native";
import App from "./App";

afterEach(() => {
  jest.useRealTimers();
});

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

test("Increment works correctly", async () => {
  jest.useFakeTimers();
  render(<App />);
  const incrementButton = screen.getByRole("button", { name: "Increment" });
  const user = userEvent.setup();
  await user.press(incrementButton);
  jest.runAllTimers();

  const result = screen.getByText("Current Count: 1");
  expect(result).toBeOnTheScreen();
});

test("Decrement works correctly", async () => {
  jest.useFakeTimers();
  render(<App />);
  const incrementButton = screen.getByRole("button", { name: "Decrement" });
  const user = userEvent.setup();
  await user.press(incrementButton);
  jest.runAllTimers();

  const result = screen.getByText("Current Count: -1");
  expect(result).toBeOnTheScreen();
});

test("Decrement works correctly with changed counter value", async () => {
  jest.useFakeTimers();
  render(<App />);
  const incrementButton = screen.getByRole("button", { name: "Decrement" });
  const incrementInput = screen.getByDisplayValue("1");

  const user = userEvent.setup();
  await user.clear(incrementInput);
  await user.type(incrementInput, "3");
  await user.press(incrementButton);
  jest.runAllTimers();

  const result = screen.getByText("Current Count: -3");
  expect(result).toBeOnTheScreen();
});

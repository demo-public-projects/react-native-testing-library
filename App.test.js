import { render, screen, userEvent, act } from "@testing-library/react-native";
import App from "./App";

afterEach(() => {
  jest.useRealTimers();
});

test("Counter Value is not shown at the start with real timers", async () => {
  render(<App />);
  const counterValue = screen.queryByText("Counter Value:");
  await act(async () => await new Promise((r) => setTimeout(r, 1600)));

  expect(counterValue).not.toBeOnTheScreen();
});

test("Counter Value is not shown at the start with fake timers", () => {
  jest.useFakeTimers();
  render(<App />);
  const counterValue = screen.queryByText("Counter Value:");
  act(jest.runAllTimers);

  expect(counterValue).not.toBeOnTheScreen();
});

test("Counter Value is shown later with real timers", async () => {
  render(<App />);
  const counterValue = await screen.findByText("Counter Value:", {}, {timeout: 1600});

  expect(counterValue).toBeOnTheScreen();
});

test("Counter Value is shown later with fake timers", async () => {
  jest.useFakeTimers();
  render(<App />);
  act(jest.runAllTimers);
  const counterValue = screen.getByText("Counter Value:");

  expect(counterValue).toBeOnTheScreen();
});

// test("items are on the screen", () => {
//   render(<App />);
//   const counterValue = screen.getByText("Counter Value:");
//   const result = screen.getByText("0", { exact: false });
//   const incrementInput = screen.getByDisplayValue("1");
//   const incrementButton = screen.getByRole("button", { name: "Increment" });
//   const decrementButton = screen.getByRole("button", { name: "Decrement" });

//   expect(counterValue).toBeOnTheScreen();
//   expect(result).toBeOnTheScreen();
//   expect(incrementInput).toBeOnTheScreen();
//   expect(incrementButton).toBeOnTheScreen();
//   expect(decrementButton).toBeOnTheScreen();
// });

// test("Increment works correctly", async () => {
//   jest.useFakeTimers();
//   render(<App />);
//   const incrementButton = screen.getByRole("button", { name: "Increment" });
//   const user = userEvent.setup();
//   await user.press(incrementButton);
//   jest.runAllTimers();

//   const result = screen.getByText("Current Count: 1");
//   expect(result).toBeOnTheScreen();
// });

// test("Decrement works correctly", async () => {
//   jest.useFakeTimers();
//   render(<App />);
//   const incrementButton = screen.getByRole("button", { name: "Decrement" });
//   const user = userEvent.setup();
//   await user.press(incrementButton);
//   jest.runAllTimers();

//   const result = screen.getByText("Current Count: -1");
//   expect(result).toBeOnTheScreen();
// });

// test("Decrement works correctly with changed counter value", async () => {
//   jest.useFakeTimers();
//   render(<App />);
//   const incrementButton = screen.getByRole("button", { name: "Decrement" });
//   const incrementInput = screen.getByDisplayValue("1");

//   const user = userEvent.setup();
//   await user.clear(incrementInput);
//   await user.type(incrementInput, "3");
//   await user.press(incrementButton);
//   jest.runAllTimers();

//   const result = screen.getByText("Current Count: -3");
//   expect(result).toBeOnTheScreen();
// });

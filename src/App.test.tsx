import { render, screen } from "@testing-library/react";
import App from "./App.tsx";

test("renders App", () => {
  render(<App />);
  expect(screen.getByText("Vite + React")).toBeInTheDocument();
});

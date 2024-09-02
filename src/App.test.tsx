import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App.tsx";

describe("App", () => {
  it("renders App with correct initial content", () => {
    render(<App />);
    expect(screen.getByText("Vite + React")).toBeInTheDocument();
  });
});

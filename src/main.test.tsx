import { render, screen } from "@testing-library/react";
import { ReactElement } from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("react-dom/client", () => ({
  createRoot: vi.fn(() => ({
    render: vi.fn(),
  })),
}));

vi.mock("./App", () => ({
  default: () => <div data-testid="mock-app">Mocked App</div>,
}));

describe("main.tsx", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    document.body.innerHTML = '<div id="root"></div>';
  });

  it("renders without crashing", () => {
    expect(async () => {
      await import("./main");
    }).not.toThrow();
  });

  it("renders App component inside StrictMode", async () => {
    const { createRoot } = await import("react-dom/client");
    await import("./main");

    const root = document.getElementById("root");
    expect(root).not.toBeNull();

    expect(createRoot).toHaveBeenCalledWith(root);

    const mockCreateRoot = createRoot as ReturnType<typeof vi.fn>;
    const renderFunction = mockCreateRoot.mock.results[0].value.render;
    expect(renderFunction).toHaveBeenCalled();

    const renderedElement = renderFunction.mock.calls[0][0] as ReactElement;

    render(renderedElement);
    expect(screen.getByTestId("mock-app")).toBeInTheDocument();
  });
});

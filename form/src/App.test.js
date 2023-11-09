import { App } from "./App";
import { render, screen } from "@testing-library/react";

describe("App", () => {
  test("Should render without crash", async () => {
    render(<App />);
    console.log("OOL =>");
    const value = screen.getByRole("input");
    expect(value.textContent).toBe(268);
  });
});

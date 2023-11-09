import DyCircle from "./DyCircle";
import { render } from "@testing-library/react";

describe("DyCircle", () => {
  test("Should render without crash", async () => {
    render(<DyCircle />);
  });
});

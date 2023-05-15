import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page";

describe("Home", () => {
  it("renders a heading", async () => {
    render(<Home />);
    const heading = await screen.findByRole("heading");
    await waitFor(() => expect(heading).toBeInTheDocument());
  });
});

import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { describe, it, expect } from "vitest";

describe("Home Page", () => {
  it("renders the main heading", () => {
    render(<Home />);
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  });
});

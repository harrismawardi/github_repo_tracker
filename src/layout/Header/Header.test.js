import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from ".";

describe("Header", () => {

  test("it renders a header", () => {
    renderWithReduxProvider(<Header />);
    expect(screen.getByRole("heading").textContent).toBe(
      "Enter the GitHub username to get information about your public repos."
    );
  });


});

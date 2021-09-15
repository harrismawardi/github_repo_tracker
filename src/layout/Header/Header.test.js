import { screen } from "@testing-library/react";
import Header from ".";

describe("Header", () => {

  test("it renders a header", () => {
    renderWithReduxAndRouter(<Header />);
    expect(screen.getByRole("heading").textContent).toBe(
      "Enter the GitHub username to get information about your public repos."
    );
  });

  it('renders error message if error is not false', () => {
      const initState = { error: 'Some error message' };
      renderWithReduxAndRouter(<Header />, { initState });
      const error = screen.getByRole('alert');
      expect(error.textContent).toBe('Some error message');
  })

  it('does not render error message if error is false', () => {
      const initState = { error: false };
      renderWithReduxAndRouter(<Header />, { initState });
      const error = screen.queryByRole('alert');
      expect(error).not.toBeInTheDocument();
  })

});

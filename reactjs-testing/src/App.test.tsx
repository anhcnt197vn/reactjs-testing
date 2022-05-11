import { act, fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

const makeSut = () => {
  return render(<App />);
};

describe("<App />", () => {
  test("Should render data", async () => {
    await act(async () => {
      makeSut();
    });

    fireEvent.click(screen.getByText(/Show Data/));

    expect(screen.getAllByRole("listitem").length).toBe(5);
  });
});

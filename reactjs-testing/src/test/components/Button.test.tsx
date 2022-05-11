import { Button, ButtonProps } from "src/components/Button";
import { fireEvent, render } from "@testing-library/react";
import { screen } from "@testing-library/react";

const makeSut = (props: Partial<ButtonProps>) => {
  return render(<Button label="label" onClick={jest.fn()} {...props} />);
};

describe("<Button />", () => {
  test("Should render label correctly", () => {
    makeSut({ label: "My Button" });

    expect(screen.getByText(/My Button/)).toBeInTheDocument();
  });

  test("Should call onClick successfully", () => {
    const spy = jest.fn();
    makeSut({ onClick: spy });

    fireEvent.click(screen.getByText(/label/));
    expect(spy).toHaveBeenCalled();
  });
});

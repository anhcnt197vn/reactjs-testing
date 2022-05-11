import { DropdownList, DropdownListProps } from "src/components/DropdownList";
import { fireEvent, render, screen } from "@testing-library/react";

const labels = {
  hide: "Hide",
  show: "Show",
};

const data = [
  { value: "1", label: "Item 1" },
  { value: "2", label: "Item 2" },
  { value: "3", label: "Item 3" },
];

const makeSut = (props: Partial<DropdownListProps>) => {
  return render(<DropdownList data={data} labels={labels} onRemoveItem={jest.fn()} {...props} />);
};

describe("<DropdownList />", () => {
  test("Should not render ul component on initial render", () => {
    makeSut({});

    expect(screen.queryByTestId("dropdown-ul")).not.toBeInTheDocument();
  });

  test("Should render ul component when click on button", () => {
    makeSut({});

    fireEvent.click(screen.getByText(labels.show));

    expect(screen.getByTestId("dropdown-ul")).toBeInTheDocument();
  });

  test("Should switch button label on click", () => {
    makeSut({});

    expect(screen.getByText(labels.show)).toBeInTheDocument();

    fireEvent.click(screen.getByText(labels.show));

    expect(screen.getByText(labels.hide)).toBeInTheDocument();
  });

  test("Should render 3 li correctly", () => {
    makeSut({});

    fireEvent.click(screen.getByText(labels.show));

    expect(screen.getAllByRole("listitem").length).toBe(data.length);
  });

  test("Should call onRemoveItem callback correctly", () => {
    const onRemoveItem = jest.fn();

    makeSut({ onRemoveItem });

    fireEvent.click(screen.getByText(labels.show));

    fireEvent.click(screen.getAllByText(/Remove/)[2]);

    expect(onRemoveItem).toHaveBeenCalledWith(data[2], 2);
  });
});

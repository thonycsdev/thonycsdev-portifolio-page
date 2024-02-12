/**
 * @jest-environment jsdom
 */

import SwitchButton from "@/components/UI/SwitchButton";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("SwitchButton", () => {
  beforeEach(() => {
    render(<SwitchButton />);
  });
  it("should render correctly with the first language begin portuguese and switch off", () => {
    const en_us_label = screen.getByText("en_US");
    const switchBtn = screen.getByRole("checkbox");
    expect(switchBtn).not.toBeChecked();
    expect(en_us_label).toBeInTheDocument();
  });
  it("should change the language to english when the switch is on", () => {
    const switchBtn = screen.getByRole("checkbox");
    act(() => {
      switchBtn.click();
    });
    const en_us_label = screen.getByText("en_US");
    expect(switchBtn).toBeChecked();
    expect(en_us_label).toBeInTheDocument();
  });
});

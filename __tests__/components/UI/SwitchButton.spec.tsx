/**
 * @jest-environment jsdom
 */

import {
  TranslationContext,
  TranslationContextProvider,
} from "@/components/Context/TranslationContext";
import SwitchButton from "@/components/UI/SwitchButton";
import { cleanup, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("SwitchButton", () => {
  beforeEach(() => {
    cleanup();
    render(
      <TranslationContextProvider>
        <SwitchButton />
      </TranslationContextProvider>
    );
  });

  it("should render correctly with the first language begin portuguese and switch off", () => {
    const en_us_label = screen.getByText("en_US");
    const switchBtn = screen.getByRole("checkbox");
    expect(switchBtn).not.toBeChecked();
    expect(en_us_label).toBeInTheDocument();
  });
  it("Should call the context function when the switch is clicked", () => {
    cleanup();
    const setIsInEnglish = jest.fn();
    const isInEnglish = false;
    render(
      <TranslationContext.Provider
        value={{ isInEnglish, changeTranslation: setIsInEnglish }}
      >
        <SwitchButton />
      </TranslationContext.Provider>
    );
    const switchBtn = screen.getByRole("checkbox");
    act(() => {
      switchBtn.click();
    });
    expect(setIsInEnglish).toHaveBeenCalled();
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

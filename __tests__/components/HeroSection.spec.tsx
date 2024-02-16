/**
 * @jest-environment jsdom
 */

import { TranslationContext } from "@/components/Context/TranslationContext";
import HeroSection from "@/components/HeroSection";
import { Language, br, en } from "@/translations/IConstantsTexts";
import { cleanup, render, screen } from "@testing-library/react";
describe("HeroSection Components", () => {
  beforeEach(() => {
    render(
      <TranslationContext.Provider
        value={{
          language: br,
          changeTranslation: jest.fn(),
          currentLanguage: Language.br,
        }}
      >
        <HeroSection />
      </TranslationContext.Provider>
    );
  });

  it("Should render the download CV button", async () => {
    var downloadBtn = await screen.findByRole("button", {
      name: br.downloadCVLabel,
    });
    expect(downloadBtn).toBeInTheDocument();
  });
  it("Should render the Me Contrate button", () => {
    var downloadBtn = screen.getByRole("button", { name: br.hireMe });
    expect(downloadBtn).toBeInTheDocument();
  });
  it("Should render My Logo", () => {
    var img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
  });
  it("Should render the text in english when the language is english", () => {
    cleanup();
    render(
      <TranslationContext.Provider
        value={{
          changeTranslation: jest.fn(),
          language: en,
          currentLanguage: Language.en,
        }}
      >
        <HeroSection />
      </TranslationContext.Provider>
    );
    var hire_me_text = screen.getByText(en.hireMe);
    expect(hire_me_text).toBeInTheDocument();
  });
});

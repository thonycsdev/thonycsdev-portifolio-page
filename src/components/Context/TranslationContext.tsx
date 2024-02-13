import {
  IConstantsTexts,
  Language,
  br,
  en,
} from "@/translations/IConstantsTexts";
import React, { createContext, useState } from "react";

type TranslationContextType = {
  changeTranslation: (lang: Language) => void;
  language: IConstantsTexts;
};

export const TranslationContext = createContext<TranslationContextType>({
  changeTranslation: () => {},
  language: br,
});

type TranslationContextProviderProps = {
  children: React.ReactNode;
};

export function TranslationContextProvider({
  children,
}: TranslationContextProviderProps) {
  const [language, setLanguage] = useState<IConstantsTexts>(br);
  function changeTranslation(lang: Language) {
    switch (lang) {
      case Language.br:
        setLanguage(br);
        break;
      case Language.en:
        setLanguage(en);
        break;
      default:
        break;
    }
  }

  return (
    <TranslationContext.Provider value={{ changeTranslation, language }}>
      {children}
    </TranslationContext.Provider>
  );
}

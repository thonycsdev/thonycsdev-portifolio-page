import {
	IConstantsTexts,
	Language,
	br,
	en
} from '@/translations/IConstantsTexts';
import React, {
	createContext,
	useState
} from 'react';

type TranslationContextType = {
	changeTranslation: (lang: Language) => void;
	language: IConstantsTexts;
	currentLanguage: Language;
};

export const TranslationContext =
	createContext<TranslationContextType>({
		changeTranslation: () => {},
		language: br,
		currentLanguage: Language.br
	});

type TranslationContextProviderProps = {
	children: React.ReactNode;
};

export function TranslationContextProvider({
	children
}: TranslationContextProviderProps) {
	const [language, setLanguage] =
		useState<IConstantsTexts>(br);
	const [currentLanguage, setCurrentLanguage] =
		useState<Language>(Language.br);
	function changeTranslation(lang: Language) {
		switch (lang) {
			case Language.br:
				setLanguage(br);
				setCurrentLanguage(Language.br);
				break;
			case Language.en:
				setLanguage(en);
				setCurrentLanguage(Language.en);
				break;
			default:
				break;
		}
	}

	return (
		<TranslationContext.Provider
			value={{
				changeTranslation,
				language,
				currentLanguage
			}}
		>
			{children}
		</TranslationContext.Provider>
	);
}

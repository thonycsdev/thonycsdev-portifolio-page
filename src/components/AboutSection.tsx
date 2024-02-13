import React, { useContext } from "react";
import { TranslationContext } from "./Context/TranslationContext";

function AboutSection() {
  const { language } = useContext(TranslationContext);
  return (
    <section className="text-white mt-10 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-extrabold mb-2">{language.aboutMeLabel}</h2>
      <p className="text-center">
        {language.shortAboutMe}
        {` `}
        <br />
      </p>
      <b className="mt-5">{language.welcomeToMySkills}</b>
    </section>
  );
}

export default AboutSection;

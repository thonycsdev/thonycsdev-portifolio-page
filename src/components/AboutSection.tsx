import React, { useContext } from "react";
import { TranslationContext } from "./Context/TranslationContext";

function AboutSection() {
  const { language } = useContext(TranslationContext);
  return (
    <section className="">
      <h2 className="">{language.aboutMeLabel}</h2>
      <p className="">
        {language.shortAboutMe}
      </p>
      <b className="">{language.welcomeToMySkills}</b>
    </section>
  );
}

export default AboutSection;

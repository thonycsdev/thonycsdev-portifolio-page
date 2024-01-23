import React from "react";
import Tabs from "./Tabs";

function AboutSection() {
  return (
    <section className="text-white mt-10">
      <h2 className="text-4xl font-extrabold mb-6">About Me</h2>
      <p>
        Olá ✌️. Sou Anthony Coutinho. Tenho 25 anos, com 2 anos trabalhando
        profissionalmente com programação com diversas linguagens e frameworks.{" "}
        <b>Bem-vindo!</b>
      </p>
      <Tabs />
    </section>
  );
}

export default AboutSection;

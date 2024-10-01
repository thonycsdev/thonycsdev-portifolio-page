import React from "react";

function AboutSection() {
  return (
    <section className="text-wrap place-self-start grid grid-flow-row gap-4">
      <b className="text-xl">Sobre mim</b>
      <p className="">Ola. Sou Anthony Coutinho, nasci do Rio de Janeiro e tenho tecnologia como minha paixao des de sempre</p>
      <p>Alem das minhas principais tecnologias conto com varias habilidades que desenvolvi com o tempo.</p>
      <ol className="list-disc">
        <li>Rapida adaptacao a novas tecnologias ou ambientes</li>
        <li>Comunicacao</li>
        <li>Visao de Negocio</li>
        <li>Testes Automatizados</li>
        <li>Ambientes Cloud como AWS e Azure</li>
      </ol>
      <p></p>
      Estou apenas no começo da minha jornada profissional, mas tenho a certeza de que serei um dos profissionais mais dedicados por onde passar. Sou uma pessoa sonhadora e determinada, e meus projetos sempre refletem essa atitude. Dou prioridade à durabilidade, escalabilidade e desempenho, para que eu possa me orgulhar do meu trabalho e, ao mesmo tempo, entregar software de qualidade, que seja essencial para qualquer empresa.
    </section>
  );
}

export default AboutSection;

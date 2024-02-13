export interface IConstantsTexts {
  hireMe: string;
  welcomeLabel: string;
  greetingsLabel: string;
  downloadCVLabel: string;
  aboutMeLabel: string;
  welcomeToMySkills: string;
  shortAboutMe: string;
  skillsLabel: string;
  projectsLabel: string;
  educationLabel: string;
  experienceLabel: string;
  certificateLabel: string;
}
export const br: IConstantsTexts = {
  hireMe: "Me Contrate",
  welcomeLabel:
    "Bem-vindo ao meu portfólio! Sou um desenvolvedor full stack com ênfase no backend. Espero que goste do meu trabalho!",
  greetingsLabel: "Olá, Eu sou",
  aboutMeLabel: "Sobre mim",
  welcomeToMySkills: "Bem-vindo(a)!",
  shortAboutMe:
    "Olá ✌️. Sou o Anthony Coutinho, tenho 25 anos e trabalho há dois anos com programação em diversas linguagens e frameworks.",
  skillsLabel: "Habilidades",
  projectsLabel: "Projetos",
  educationLabel: "Educação",
  experienceLabel: "Experiência",
  certificateLabel: "Certificados",
  downloadCVLabel: "Baixar Currículo",
};

export const en: IConstantsTexts = {
  hireMe: "Hire Me",
  welcomeLabel:
    "Welcome to my portfolio! I am a full stack developer with a focus on backend. I hope you like my work!",
  greetingsLabel: "Hello, I'm",
  aboutMeLabel: "About Me",
  welcomeToMySkills: "Welcome!",
  shortAboutMe:
    "Hello ✌️. I'm Anthony Coutinho, 25 years old, and I have been working with programming in various languages and frameworks for two years.",
  skillsLabel: "Skills",
  projectsLabel: "Projects",
  educationLabel: "Education",
  experienceLabel: "Experience",
  certificateLabel: "Certificates",
  downloadCVLabel: "Download CV",
};

export enum Language {
  br = "br",
  en = "en",
}

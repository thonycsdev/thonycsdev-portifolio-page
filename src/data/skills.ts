import githubServicesFactory from "@/factories/githubServiceFactory";

export type FullFormattedData = {
  skills: Skills[];
  experience: Experience[];
  education: Education[];
  certifications: Certifications[];
  projects: Projects[];
};

export type DataDescription = {
  name: string;
  level: string | null;
  description: string | null;
  url: string | null;
};

export type Skills = DataDescription;
export type Experience = DataDescription;
export type Education = DataDescription;
export type Certifications = {
  name: string;
  hours: number;
  dateStartedAndCompletion: string;
  url: string | null;
};
export type Projects = DataDescription;

export type Content = {
  [key: string]: DataDescription[];
};
const mySkills: Skills[] = [
  {
    name: "C#",
    level: "Avançado",
    description: null,
    url: null,
  },
  {
    name: ".NET",
    level: "Avançado",
    description: null,
    url: null,
  },
  {
    name: "JavaScript",
    level: "Avançado",
    description: null,
    url: null,
  },
  {
    name: "TypeScript",
    level: "Avançado",
    description: null,
    url: null,
  },
  {
    name: "MSSQL",
    level: "Intermediário",
    description: null,
    url: null,
  },
  {
    name: "Node",
    level: "Avançado",
    description: null,
    url: null,
  },
  {
    name: "Express",
    level: "Avançado",
    description: null,
    url: null,
  },
  {
    name: "Git",
    level: "Avançado",
    description: null,
    url: null,
  },
  {
    name: "Next.js",
    level: "Intermediário",
    description: null,
    url: null,
  },
  {
    name: "EF Core",
    level: "Avançado",
    description: null,
    url: null,
  },
  {
    name: "PostgreSQL",
    level: "Avançado",
    description: null,
    url: null,
  },
  {
    name: "MySQL",
    level: "Intermediário",
    description: null,
    url: null,
  },
  {
    name: "Azure",
    level: "Intermediário",
    description: null,
    url: null,
  },
  {
    name: "Docker",
    level: "Avançado",
    description: null,
    url: null,
  },
  {
    name: "CI/CD",
    level: "Intermediário",
    description: null,
    url: null,
  },
  {
    name: "XUnit",
    level: "Avançado",
    description: null,
    url: null,
  },
  {
    name: "Jest",
    level: "Intermediário",
    description: null,
    url: null,
  },
  {
    name: "OOP",
    level: "Avançado",
    description: null,
    url: null,
  },
  {
    name: "TDD",
    level: "Avançado",
    description: null,
    url: null,
  },
  {
    name: "MVC",
    level: "Avançado",
    description: null,
    url: null,
  },
  {
    name: "DDD",
    level: "Avançado",
    description: null,
    url: null,
  },
  {
    name: "Web Development",
    level: "Avançado",
    description: null,
    url: null,
  },
  {
    name: "Frontend Development",
    level: "Intermediário",
    description: null,
    url: null,
  },
  {
    name: "Backend Development",
    level: "Avançado",
    description: null,
    url: null,
  },
  {
    name: "Full Stack Development",
    level: "Avançado",
    description: null,
    url: null,
  },
  {
    name: "Agile Methodologies",
    level: "Intermediário",
    description: "Falta pratica real",
    url: null,
  },
  {
    name: "Scrum",
    level: "Intermediário",
    description: "Falta pratica real",
    url: null,
  },
  {
    name: "Português",
    level: "Nativo",
    description: null,
    url: null,
  },
  {
    name: "Ingles",
    level: "Avançado",
    description: null,
    url: null,
  },
];

const myExperience: Experience[] = [
  {
    name: "Impar",
    level: "Junior",
    description: "Full Stack Developer",
    url: null,
  },
  {
    name: "Edubrahub",
    level: "Junior",
    description: "Full Stack Developer",
    url: null,
  },
  {
    name: "Freelancer",
    level: "Junior",
    description: "Full Stack Developer",
    url: null,
  },
  {
    name: "VD Tecnologia",
    level: "Estagiário",
    description: "Backend Developer",
    url: null,
  },
];

const myEducation: Education[] = [
  //trocar para time
  {
    name: "Bacharelado em Sistemas de Informação",
    level: "2017 - 2023",
    description: null,
    url: null,
  },
  {
    name: "Universidade Federal do Rio de Janeiro",
    level: "2020 - 2022",
    description: "Matricula trancada",
    url: null,
  },
  {
    name: "Full Cycle",
    level: "2024 - ...",
    description: null,
    url: null,
  },
];

const myCertifications: Certifications[] = [
  //trocar level para horas
  {
    name: "Docker",
    hours: 21,
    dateStartedAndCompletion: "Certificado Docker da Full Cycle",
    url: null,
  },
  {
    name: "Testing React With Jest and RTL",
    hours: 8,
    dateStartedAndCompletion: "Udemy",
    url: null,
  },
  {
    name: "JavaScript Unit Testing",
    hours: 5.5,
    dateStartedAndCompletion: "Udemy",
    url: null,
  },
  {
    name: "Anotações Eficientes e Produtivas",
    hours: 0.2,
    dateStartedAndCompletion: "Linkedin Courses",
    url: null,
  },
  {
    name: "JavaScript e HTML: desenvolva um jogo e pratique lógica de programação",
    hours: 16,
    dateStartedAndCompletion: "De 16/02/2018 a 21/02/2018",
    url: null,
  },
  {
    name: "Java JRE e JDK: compile e execute o seu programa",
    hours: 8,
    dateStartedAndCompletion: "De 28/08/2018 a 26/01/2019",
    url: null,
  },
  {
    name: "C# parte 1: primeiros passos",
    hours: 8,
    dateStartedAndCompletion: "De 28/07/2019 a 08/10/2021",
    url: null,
  },
  {
    name: "C# parte 2: Entendendo a Orientação a Objetos",
    hours: 8,
    dateStartedAndCompletion: "De 04/10/2021 a 04/10/2021",
    url: null,
  },
  {
    name: "C# parte 3: entendendo herança e interface",
    hours: 8,
    dateStartedAndCompletion: "De 04/10/2021 a 07/10/2021",
    url: null,
  },
  {
    name: "C# parte 4: entendendo exceções",
    hours: 8,
    dateStartedAndCompletion: "De 08/10/2021 a 02/01/2022",
    url: null,
  },
  {
    name: "Certificação C# Programming parte 1: Criar tipos",
    hours: 6,
    dateStartedAndCompletion: "De 12/08/2021 a 12/08/2021",
    url: null,
  },
  {
    name: "PHP: conceitos, lidando com dados, loops e mais",
    hours: 6,
    dateStartedAndCompletion: "De 08/09/2021 a 08/09/2021",
    url: null,
  },
  {
    name: "Orientação a Objetos com PHP: Classes, métodos e atributos",
    hours: 8,
    dateStartedAndCompletion: "De 08/09/2021 a 09/09/2021",
    url: null,
  },
  {
    name: "Windows Forms com C#: Formulários, componentes e eventos",
    hours: 14,
    dateStartedAndCompletion: "De 05/08/2021 a 09/08/2021",
    url: null,
  },
  {
    name: "Windows Forms com C#: Menus, outros formulários e validação com login e senha",
    hours: 14,
    dateStartedAndCompletion: "De 09/08/2021 a 12/08/2021",
    url: null,
  },
  {
    name: "Windows Forms com C#: persista os dados no banco de dados",
    hours: 12,
    dateStartedAndCompletion: "De 19/08/2021 a 25/01/2022",
    url: null,
  },
  {
    name: "JavaScript: tipos, variáveis e funções",
    hours: 12,
    dateStartedAndCompletion: "De 15/02/2022 a 17/02/2022",
    url: null,
  },
  {
    name: "JavaScript: Arrays",
    hours: 10,
    dateStartedAndCompletion: "De 17/02/2022 a 18/02/2022",
    url: null,
  },
  {
    name: "API Rest com .NET 5: operações essenciais com verbos HTTP",
    hours: 8,
    dateStartedAndCompletion: "De 04/10/2021 a 30/01/2022",
    url: null,
  },
  {
    name: "JavaScript: objetos",
    hours: 10,
    dateStartedAndCompletion: "De 21/09/2021 a 23/02/2022",
    url: null,
  },
  {
    name: "Testes em .NET: testando software",
    hours: 8,
    dateStartedAndCompletion: "De 24/04/2023 a 25/04/2023",
    url: null,
  },
  {
    name: "Testes em .NET: integrando a aplicação com um banco de dados",
    hours: 8,
    dateStartedAndCompletion: "De 25/04/2023 a 27/04/2023",
    url: null,
  },
  {
    name: "JavaScript: Arrays",
    hours: 8,
    dateStartedAndCompletion: "De 22/06/2023 a 28/06/2023",
    url: null,
  },
  {
    name: "Linux I: conhecendo e utilizando o terminal",
    hours: 4,
    dateStartedAndCompletion: "De 17/09/2017 a 18/09/2017",
    url: null,
  },
  {
    name: "Linux II: programas, processos e pacotes",
    hours: 8,
    dateStartedAndCompletion: "De 18/09/2017 a 20/09/2017",
    url: null,
  },
  {
    name: "Git e Github: controle e compartilhe seu código",
    hours: 6,
    dateStartedAndCompletion: "De 28/07/2019 a 20/09/2021",
    url: null,
  },
  {
    name: "Bootstrap 4: criando uma landing page responsiva",
    hours: 8,
    dateStartedAndCompletion: "De 13/10/2021 a 14/10/2021",
    url: null,
  },
  {
    name: "HTML5 e CSS3 parte 1: crie uma página da Web",
    hours: 8,
    dateStartedAndCompletion: "De 10/10/2021 a 11/10/2021",
    url: null,
  },
  {
    name: "HTML5 e CSS3 parte 2: posicionamento, listas e navegação",
    hours: 8,
    dateStartedAndCompletion: "De 11/10/2021 a 13/10/2021",
    url: null,
  },
  {
    name: "JavaScript: programando a Orientação a Objetos",
    hours: 10,
    dateStartedAndCompletion: "De 30/09/2021 a 30/09/2021",
    url: null,
  },
  {
    name: "React: escrevendo com Typescript",
    hours: 12,
    dateStartedAndCompletion: "De 27/10/2021 a 08/05/2023",
    url: null,
  },
  {
    name: "Tailwind CSS: estilizando a sua página com classes utilitárias",
    hours: 8,
    dateStartedAndCompletion: "De 31/05/2023 a 31/05/2023",
    url: null,
  },
  {
    name: "CSS: Flexbox e layouts responsivos",
    hours: 6,
    dateStartedAndCompletion: "De 30/05/2023 a 31/05/2023",
    url: null,
  },
  {
    name: "React: obtendo dados com React Query",
    hours: 8,
    dateStartedAndCompletion: "De 11/05/2023 a 11/05/2023",
    url: null,
  },
  {
    name: "PostgreSQL: Primeiros passos com suas consultas",
    hours: 8,
    dateStartedAndCompletion: "De 25/09/2017 a 27/09/2017",
    url: null,
  },
  {
    name: "Access: inicie suas consultas com agrupamento, classificação e mais",
    hours: 8,
    dateStartedAndCompletion: "De 18/07/2018 a 31/07/2018",
    url: null,
  },
  {
    name: "SQL Server: Introdução ao SQL com Microsoft SQL Server 2017",
    hours: 12,
    dateStartedAndCompletion: "De 20/08/2021 a 20/08/2021",
    url: null,
  },
  {
    name: "Modelos de Gestão parte 1: componentes essenciais",
    hours: 8,
    dateStartedAndCompletion: "De 25/04/2023 a 26/04/2023",
    url: null,
  },
];

export async function myContent(): Promise<FullFormattedData> {
  var githubServices = githubServicesFactory();
  var projects = await githubServices.getRepositoriesNames();
  return {
    skills: mySkills,
    experience: myExperience,
    education: myEducation,
    certifications: myCertifications,
    projects,
  };
}

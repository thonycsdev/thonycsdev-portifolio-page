import { dataServicesFactory } from "@/factories/dataServicesFactory";
import githubServicesFactory from "@/factories/githubServiceFactory";

export type FullFormattedData = {
  skills: Skills[];
  experience: Experience[];
  education: Education[];
  certifications: Certificate[];
  projects: Projects[];
};

export type DataDescription = {
  name: string;
  level: string | null;
  description: string | null;
  url: string | null;
};

export type Skills = DataDescription;
export type Education = DataDescription;

export type Experience = {
  name: string;
  level: string | null;
  description: string | null;
  startedYear: string;
  endedYear: string | null;
};
export type Certificate = {
  id: number | null;
  name: string;
  hours: number;
  date_started_and_completion: string;
  url: string | null;
};
export type Projects = {
  name: string;
  url: string;
  description: string;
  technology: string;
  stars: number;
  watchers: number;
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
    startedYear: "11/2022",
    endedYear: "11/2023",
  },
  {
    name: "Edubrahub",
    level: "Junior",
    description: "Full Stack Developer",
    startedYear: "06/2022",
    endedYear: "02/2023",
  },
  {
    name: "Freelancer",
    level: "Junior",
    description: "Full Stack Developer",
    startedYear: "06/2020",
    endedYear: "06/2021",
  },
  {
    name: "VD Tecnologia",
    level: "Estagiário",
    description: "Backend Developer",
    startedYear: "03/2020",
    endedYear: "06/2020",
  },
];

const myEducation: Education[] = [
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

export async function myContent(): Promise<FullFormattedData> {
  const certs = await fetch("http://localhost:3000/api/v1/certificate").then(
    (r) => r.json()
  );

  var githubServices = githubServicesFactory();

  var projects = await githubServices.getRepositoriesNames();
  return {
    skills: mySkills,
    experience: myExperience,
    education: myEducation,
    certifications: certs,
    projects,
  };
}

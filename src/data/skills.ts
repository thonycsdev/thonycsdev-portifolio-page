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
export type Certifications = DataDescription;
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
];

const myEducation: Education[] = [
  {
    name: "Bacharelado em Sistemas de Informação",
    level: "2017 - 2023",
    description: null,
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
  {
    name: "Docker",
    level: "Junior",
    description: "Certificado Docker da Full Cycle",
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

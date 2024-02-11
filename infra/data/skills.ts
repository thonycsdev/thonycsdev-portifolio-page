import githubServicesFactory from "@/factories/githubServiceFactory";

export type FullFormattedData = {
  skills: Skill[];
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

export type Skill = DataDescription;
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

export async function myContent(): Promise<FullFormattedData> {
  const certifications = await fetch(
    "http://localhost:3000/api/v1/certificate"
  ).then((r) => r.json());

  const skills = await fetch("http://localhost:3000/api/v1/skill").then((r) =>
    r.json()
  );
  const education = await fetch("http://localhost:3000/api/v1/education").then(
    (r) => r.json()
  );
  const experience = await fetch(
    "http://localhost:3000/api/v1/experience"
  ).then((r) => r.json());

  var githubServices = githubServicesFactory();

  var projects = await githubServices.getRepositoriesNames();
  return {
    skills,
    experience,
    education,
    certifications,
    projects,
  };
}

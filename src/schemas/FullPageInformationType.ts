import { Certificate } from "@/models/certificate";
import { Education } from "@/models/education";
import { Experience } from "@/models/experience";
import { Project } from "@/models/project";
import { Skill } from "@/models/skill";

export type FullPageInformationType = {
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  certifications: Certificate[];
  projects: Project[];
};

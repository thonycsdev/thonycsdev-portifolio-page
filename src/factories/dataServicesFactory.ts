import CertificationService from "@/services/certificationService";
import { GithubServices } from "@/services/githubServices";
import { SkillService } from "@/services/skillService";
import { dataRepositoryFactory } from "./dataRepositoryFactory";
import EducationService from "@/services/educationService";
import ExperienceService from "@/services/experienceService";

export function dataServicesFactory() {
  const {
    certificateRepository,
    skillRepository,
    educationRepository,
    experienceRepository,
  } = dataRepositoryFactory();

  const skillService = new SkillService(skillRepository);
  const certificationService = new CertificationService(certificateRepository);
  const educationService = new EducationService(educationRepository);
  const experienceService = new ExperienceService(experienceRepository);

  const githubService = new GithubServices();

  return {
    skillService,
    githubService,
    certificationService,
    educationService,
    experienceService,
  };
}

import CertificationService from "@/services/certificationService";
import { GithubServices } from "@/services/githubServices";
import { SkillService } from "@/services/skillService";
import { dataRepositoryFactory } from "./dataRepositoryFactory";

export function dataServicesFactory() {
  const { certificateRepository } = dataRepositoryFactory();
  const skillService = new SkillService();
  const certificationService = new CertificationService(certificateRepository);
  const githubService = new GithubServices();

  return { skillService, githubService, certificationService };
}

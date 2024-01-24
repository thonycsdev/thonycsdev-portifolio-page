import { GithubServices } from "@/services/githubServices";
import { SkillService } from "@/services/skillService";

export function dataServicesFactory() {
  const skillService = new SkillService();
  const githubService = new GithubServices();

  return { skillService, githubService };
}

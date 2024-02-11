import githubServicesFactory from "@/factories/githubServiceFactory";
import { FullPageInformationType } from "@/schemas/FullPageInformationType";
export default class DataFetcher {
  private readonly API_URL = process.env.API_URL;
  async fetchMyContent(): Promise<FullPageInformationType> {
    const certifications = await this.fetchCertificates();
    const skills = await this.fetchSkills();
    const education = await this.fetchEducation();
    const experience = await this.fetchExperience();
    const projects = await this.fetchProjects();

    return {
      skills,
      experience,
      education,
      certifications,
      projects,
    };
  }

  async fetchCertificates() {
    return await fetch(`${this.API_URL}/certificate`).then((r) => r.json());
  }
  async fetchSkills() {
    return await fetch(`${this.API_URL}/skill`).then((r) => r.json());
  }
  async fetchEducation() {
    return await fetch(`${this.API_URL}/education`).then((r) => r.json());
  }
  async fetchExperience() {
    return await fetch(`${this.API_URL}/experience`).then((r) => r.json());
  }
  async fetchProjects() {
    var githubServices = githubServicesFactory();
    return await githubServices.getRepositoriesNames();
  }
}

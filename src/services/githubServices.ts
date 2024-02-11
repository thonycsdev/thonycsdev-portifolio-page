import IGithubServices from "./interfaces/IGithubServices";
import axios, { AxiosResponse } from "axios";
import { GithubResponseType } from "@/schemas/githubResponseType";
import formatProjectName from "./uitls/formatProjectName";
import { Project } from "@/models/project";

export class GithubServices implements IGithubServices {
  async getRepositoriesNames(): Promise<Project[]> {
    var repoData = await this.getGithubRepoData();
    return repoData.data
      .sort(
        (a, b) =>
          new Date(b.created_at!).getTime() - new Date(a.created_at!).getTime()
      )
      .map(
        (item) =>
          ({
            name: formatProjectName(item.name),
            description: item.description,
            url: item.html_url,
            stars: item.stargazers_count,
            technology: item.language,
            watchers: item.watchers_count,
          } as Project)
      );
  }
  async getGithubRepoData(): Promise<AxiosResponse<GithubResponseType[]>> {
    var data = axios.get(process.env.GITHUB_URL!);
    return data;
  }
}

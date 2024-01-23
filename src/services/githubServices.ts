import { Projects } from "@/data/skills";
import IGithubServices from "./interfaces/IGithubServices";
import axios, { AxiosResponse } from "axios";
import { GithubResponseType } from "@/schemas/githubResponseType";

export class GithubServices implements IGithubServices {
  async getRepositoriesNames(): Promise<Projects[]> {
    var repoData = await this.getGithubRepoData();
    return repoData.data
      .sort(
        (a, b) =>
          new Date(b.created_at!).getTime() - new Date(a.created_at!).getTime()
      )
      .map(
        (item) =>
          ({
            name: item.name,
            description: item.description,
            url: item.html_url,
          } as Projects)
      );
  }
  async getGithubRepoData(): Promise<AxiosResponse<GithubResponseType[]>> {
    var data = axios.get("https://api.github.com/users/thonycsdev/repos");
    return data;
  }
}

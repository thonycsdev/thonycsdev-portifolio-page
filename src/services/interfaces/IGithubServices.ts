import { Project } from "@/models/project";
import { GithubResponseType } from "@/schemas/githubResponseType";
import { AxiosResponse } from "axios";

export default interface IGithubServices {
  getGithubRepoData(): Promise<AxiosResponse<GithubResponseType[]>>;
  getRepositoriesNames(): Promise<Project[]>;
}

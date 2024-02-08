import { Projects } from "../../../infra/data/skills";
import { GithubResponseType } from "@/schemas/githubResponseType";
import { AxiosResponse } from "axios";

export default interface IGithubServices {
  getGithubRepoData(): Promise<AxiosResponse<GithubResponseType[]>>;
  getRepositoriesNames(): Promise<Projects[]>;
}

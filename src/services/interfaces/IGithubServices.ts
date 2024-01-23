import { GithubResponseType } from "@/schemas/githubResponseType";
import { AxiosResponse } from "axios";

export default interface IGithubServices {
  getGithubRepoData(): Promise<AxiosResponse<GithubResponseType[]>>;
}

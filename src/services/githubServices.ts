import axios, { AxiosResponse } from "axios";
import IGithubServices from "./interfaces/IGithubServices";
import { GithubResponseType } from "@/schemas/githubResponseType";

export class GithubServices implements IGithubServices {
  async getGithubRepoData(): Promise<AxiosResponse<GithubResponseType[]>> {
    var data = axios.get(process.env.GITHUB_URL!);
    return data;
  }
}

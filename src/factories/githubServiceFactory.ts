import { GithubServices } from "@/services/githubServices";

export default function githubServicesFactory() {
  return new GithubServices();
}

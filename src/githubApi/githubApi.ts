import axios, { AxiosResponse } from "axios";

async function getGithubData() {
  var result: AxiosResponse<GithubRepoResponse[]> = await axios.get(
    process.env.GITHUB_URL + "/repos",
  );
  return result;
}
export default { getGithubData };

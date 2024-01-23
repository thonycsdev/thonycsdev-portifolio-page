import { GithubServices } from "@/services/githubServices";

describe("Axios GITHUB API test", () => {
  it("GET REPOS", async () => {
    const githubServices = new GithubServices();
    const data = await githubServices.getGithubRepoData();
    expect(data.status).toBe(200);
    expect(data.data).toEqual([]);
  });
});

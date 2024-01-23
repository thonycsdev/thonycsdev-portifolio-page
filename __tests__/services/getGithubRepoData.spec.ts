import { GithubServices } from "@/services/githubServices";

describe("Axios GITHUB API test", () => {
  it("GET REPOS", async () => {
    const githubServices = new GithubServices();
    const data = await githubServices.getGithubRepoData();
    expect(data.status).toBe(200);
    expect(data.data).toEqual([]);
  });

  it("Get Name of Repos ", async () => {
    const githubServices = new GithubServices();
    const data = await githubServices.getRepositoriesNames();
    expect(data).toBeInstanceOf(Array);
    expect(data.every((item) => typeof item === "string")).toBe(true);
  });
});

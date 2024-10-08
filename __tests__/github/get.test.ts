import githubApi from "@/githubApi/githubApi";
describe("Get data from Github API Tests", () => {
  test("Should return 200", async () => {
    var result = await githubApi.getGithubData();
    expect(result.status).toBe(200);
  });
});

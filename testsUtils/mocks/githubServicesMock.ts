import IGithubServices from "@/services/interfaces/IGithubServices";

export default function mockGitHubServices() {
  jest.mock("@/services/githubServices", () => {
    return {
      GithubServices: jest.fn().mockImplementation((): IGithubServices => {
        return {
          getGithubRepoData: jest.fn().mockResolvedValue({
            data: [],
            status: 200,
          }),
        };
      }),
    };
  });
}

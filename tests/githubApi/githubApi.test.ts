import githubApi from '@/githubApi/githubApi';

function mockGithubRepositoriesResponse(repositories: object[]) {
	jest.spyOn(global, 'fetch').mockResolvedValue({
		json: () => Promise.resolve(repositories)
	} as Response);
}

afterEach(() => {
	jest.restoreAllMocks();
});

describe('githubApi.getGithubData', () => {
	test('Should exclude repositories without a description', async () => {
		mockGithubRepositoriesResponse([
			{ id: 1, description: 'Portfolio page', stargazers_count: 1 },
			{ id: 2, description: null, stargazers_count: 3 },
			{ id: 3, stargazers_count: 2 }
		]);

		const repositories = await githubApi.getGithubData();

		expect(repositories.map((repository) => repository.id)).toEqual([1]);
	});
});

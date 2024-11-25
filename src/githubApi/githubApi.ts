async function getGithubData() {
	var result = await fetch(process.env.GITHUB_URL + '/repos')
		.then((r) => r.json())
		.catch(() => {
			throw new Error('Erro while getting GITHUB Data from its API');
		});

	if (result.message) return [];

	const repos = (result as GithubRepoResponse[])
		.filter((r) => r.description != '' || null || undefined)
		.sort((a, b) => b.stargazers_count - a.stargazers_count)
		.splice(0, 5);

	return repos as GithubRepoResponse[];
}
const githubApi = { getGithubData };
export default githubApi;

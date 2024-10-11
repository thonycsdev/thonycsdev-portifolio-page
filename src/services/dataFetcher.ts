const API_URL = process.env.NEXT_PUBLIC_API_URL;
async function fetchProjects() {
	const response = await fetch(
		API_URL + '/github'
	).then((r) => r.json());
	return response as GithubRepoResponse[];
}

export default { fetchProjects };

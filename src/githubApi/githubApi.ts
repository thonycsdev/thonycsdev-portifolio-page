async function getGithubData() {
  var result = await fetch(process.env.GITHUB_URL + "/repos")
    .then((r) => r.json())
    .catch((e) => console.error(e));
  if (!result) throw new Error("Failed to get Repositories");
  const repos = (result as GithubRepoResponse[])
    .filter((r) => r.description != "" || null || undefined)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .splice(0, 3);

  return repos;
}
export default { getGithubData };

import githubApi from '@/githubApi/githubApi';
import {
	NextApiRequest,
	NextApiResponse
} from 'next';

export default async function handler(
	req: NextApiRequest,
	response: NextApiResponse
) {
	const responseFromGithub =
		await githubApi.getGithubData();
	if (!responseFromGithub)
		return response.status(500).json({
			error: 'Failed to get repositories'
		});

	return response
		.status(200)
		.json(responseFromGithub);
}

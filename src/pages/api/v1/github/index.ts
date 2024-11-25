import githubApi from '@/githubApi/githubApi';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	response: NextApiResponse
) {
	try {
		const responseFromGithub = await githubApi.getGithubData();
		return response.status(200).json(responseFromGithub);
	} catch (err) {
		return response.status(500).json(err);
	}
}

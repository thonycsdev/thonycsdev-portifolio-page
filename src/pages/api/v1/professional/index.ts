import { experienceService } from '@/services/experienceService';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const response = await experienceService.getExperiences();
		return res.status(200).json(response);
	} catch (e) {
		return res.status(500).json(e);
	}
}

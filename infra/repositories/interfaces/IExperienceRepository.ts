import { Experience } from '@/models/experience';

export default interface IExperienceRepository {
	getExperiences(): Promise<Experience[]>;
	getExperienceById(
		id: number
	): Promise<Experience>;
	insertExperience(
		input: Experience
	): Promise<Experience>;
}

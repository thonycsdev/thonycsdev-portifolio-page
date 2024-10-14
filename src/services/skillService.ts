import { Skill } from '@/models/skill';
import ISkillRepository from '../../infra/repositories/interfaces/ISkillRepository';
import { ISkillServices } from './interfaces/ISkillServices';
export class SkillService implements ISkillServices {
	constructor(private readonly skillRepository: ISkillRepository) {}

	async getSkills(): Promise<Skill[]> {
		const result = await this.skillRepository.getSkills();
		return result;
	}
	async getSkillById(id: number): Promise<Skill> {
		return await this.skillRepository.getSkillById(id);
	}
	async insertSkill(input: Skill): Promise<Skill> {
		return await this.insertSkill(input);
	}
}

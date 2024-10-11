import { Skill } from '@/models/skill';
import IDatabase from '../data/IDatabase';
import ISkillRepository from './interfaces/ISkillRepository';

export default class SkillRepository
	implements ISkillRepository
{
	constructor(
		private readonly database: IDatabase
	) {}
	async getSkills(): Promise<Skill[]> {
		var result = await this.database.query(
			'SELECT * FROM skills'
		);
		return result as Skill[];
	}
	async getSkillById(id: number): Promise<Skill> {
		var result = (await this.database.query(
			'SELECT * FROM skills WHERE id = $1',
			[id]
		)) as Skill[];
		return result[0];
	}
	async insertSkill(
		input: Skill
	): Promise<Skill> {
		await this.database.query(
			'INSERT INTO skills (name, level, description) VALUES ($1,$2,$3)',
			[input.name, input.level, input.description]
		);
		return input;
	}
}

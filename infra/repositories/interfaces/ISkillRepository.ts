import { Skill } from '@/models/skill';

export default interface ISkillRepository {
	getSkills(): Promise<Skill[]>;
	getSkillById(id: number): Promise<Skill>;
	insertSkill(input: Skill): Promise<Skill>;
}

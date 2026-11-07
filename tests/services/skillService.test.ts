import { Skill } from '@/models/skill';
import { SkillService } from '@/services/skillService';
import ISkillRepository from '../../infra/repositories/interfaces/ISkillRepository';

describe('SkillService', () => {
	test('Should delegate skill insertion to the repository', async () => {
		const skill: Skill = {
			id: null,
			name: 'TypeScript',
			level: 'Advanced',
			description: 'Typed JavaScript',
			url: null
		};
		const skillRepository: ISkillRepository = {
			getSkills: jest.fn(),
			getSkillById: jest.fn(),
			insertSkill: jest.fn().mockResolvedValue(skill)
		};
		const skillService = new SkillService(skillRepository);

		const insertedSkill = await skillService.insertSkill(skill);

		expect(skillRepository.insertSkill).toHaveBeenCalledTimes(1);
		expect(skillRepository.insertSkill).toHaveBeenCalledWith(skill);
		expect(insertedSkill).toBe(skill);
	});
});

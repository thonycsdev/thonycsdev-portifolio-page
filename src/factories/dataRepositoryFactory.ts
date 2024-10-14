import CertificateRepository from '../../infra/repositories/certificateRepository';
import PostgresDatabase from '../../infra/data/database';
import SkillRepository from '../../infra/repositories/skillRepository';
import EducationRepository from '../../infra/repositories/educationRepository';
import ExperienceRepository from '../../infra/repositories/experienceRepository';

export function dataRepositoryFactory() {
	const database = new PostgresDatabase();
	const certificateRepository =
		new CertificateRepository(database);
	const skillRepository = new SkillRepository(
		database
	);
	const educationRepository =
		new EducationRepository(database);
	const experienceRepository =
		new ExperienceRepository(database);

	return {
		certificateRepository,
		skillRepository,
		educationRepository,
		experienceRepository
	};
}

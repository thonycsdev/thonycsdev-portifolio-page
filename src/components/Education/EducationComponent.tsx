import { Education } from '@/models/education';
import EducationList from './EducationList';

const edu: Education = {
	name: 'UFRJ',
	startedYear: '2019',
	endedYear: '2022',
	id: 1,
	level: 'Bacharel',
	description: 'Faculdade',
	url: null
};
const educations: Education[] = [edu];

export default function EducationComponent() {
	return <EducationList educations={educations} />;
}

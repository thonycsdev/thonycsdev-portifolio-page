import React from 'react';
import ExperienceCard from './ExperienceCard';
import { Experience } from '@/models/experience';

type Props = {
	experience: Experience[];
};
function ExperienceList({ experience }: Props) {
	return (
		<ul className="flex flex-col gap-5 mt-10 lg:flex-row justify-center flex-wrap">
			{experience.map((x, idx) => (
				<ExperienceCard
					experience={x}
					key={idx}
				/>
			))}
		</ul>
	);
}

export default ExperienceList;

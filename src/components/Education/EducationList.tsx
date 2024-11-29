import React from 'react';
import { Education } from '@/models/education';
import EducationCard from './EducationCard';
type Props = {
	educations: Education[];
};
function EducationList({ educations }: Props) {
	return (
		<ul className="flex flex-col gap-5 mt-10 lg:flex-row justify-center flex-wrap">
			{educations.map((x, idx) => (
				<EducationCard education={x} key={idx} />
			))}
		</ul>
	);
}

export default EducationList;

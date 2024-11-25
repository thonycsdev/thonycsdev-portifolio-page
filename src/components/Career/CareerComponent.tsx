import { Experience } from '@/models/experience';
import fetchFromAPI from '@/services/dataFetcher';
import { Grid, Text } from '@chakra-ui/react';
import useSWR from 'swr';
import ExperienceCard from '../Experience/ExperienceCard';
import useScreenSize from '@/hooks/useScreenSize';

export default function CareerComponent() {
	const { isSmall } = useScreenSize();
	const { data, isLoading } = useSWR<Experience[]>(
		'/api/v1/professional',
		fetchFromAPI
	);

	if (isLoading && !data) {
		return <h1>Loading...</h1>;
	}

	return (
		<Grid gridColumnStart={2} gridTemplateRows={'auto'} placeItems={'center'}>
			<Text
				marginY={10}
				borderBottom={'1px'}
				width={'80%'}
				textAlign={'center'}
			>
				Minhas principais experiencias profissionais
			</Text>
			<Grid
				templateColumns={isSmall ? '1' : 'repeat(2, 1fr)'}
				textColor={'whitesmoke'}
				gap={10}
			>
				{data?.map((p) => <ExperienceCard key={p.id} experience={p} />)}
			</Grid>
		</Grid>
	);
}

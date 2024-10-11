import {
	Box,
	Center,
	Flex,
	Text
} from '@chakra-ui/react';
import ProjectCardComponent from './ProjectCardComponent';
import { useEffect, useState } from 'react';
import dataFetcher from '@/services/dataFetcher';

export default function ProjectsSection() {
	const [projects, setProjects] = useState<
		GithubRepoResponse[]
	>([]);
	useEffect(() => {
		dataFetcher
			.fetchProjects()
			.then((p) => setProjects(p.slice(0, 3)));
	}, []);
	if (projects.length == 0 || !projects) {
		return <h1>Loading...</h1>;
	}
	return (
		<Box
			gridColumnStart={{ md: 1 }}
			gridRowStart={{ md: 2 }}
			display={'grid'}
			justifyItems={'center'}
		>
			<Text
				marginY={10}
				borderBottom={'1px'}
				width={'80%'}
				textAlign={'center'}
			>
				Meus principais projetos
			</Text>
			<Flex gap={5} direction={'column'}>
				{projects.map((x) => (
					<ProjectCardComponent
						project={x}
						key={x.id}
					/>
				))}
			</Flex>
		</Box>
	);
}

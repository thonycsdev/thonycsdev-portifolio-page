import { Box, Flex, Text } from '@chakra-ui/react';
import ProjectCardComponent from './ProjectCardComponent';
import { useEffect, useState } from 'react';
import dataFetcher from '@/services/dataFetcher';
import ModalComponent from '../UI/ModalComponent';

export default function ProjectsSection() {
	const [projects, setProjects] = useState<GithubRepoResponse[]>([]);
	const [selectedProject, setSelectedProject] = useState<
		GithubRepoResponse | undefined
	>(undefined);
	const [isModalOpen, setIsModalOpen] = useState(false);
	useEffect(() => {
		dataFetcher.fetchProjects().then((p) => setProjects(p.slice(0, 3)));
	}, []);
	if (projects.length == 0 || !projects) {
		return <h1>Loading...</h1>;
	}

	const handleCardDetailsClick = (project: GithubRepoResponse) => {
		if (!project) return;
		setSelectedProject(project);
		setIsModalOpen(true);
	};

	return (
		<Box
			gridColumnStart={{ md: 1 }}
			gridRowStart={{ md: 2 }}
			display={'grid'}
			justifyItems={'center'}
		>
			<ModalComponent
				onClose={() => setIsModalOpen(false)}
				isOpen={isModalOpen}
				project={selectedProject}
			/>
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
						onDetailsClick={handleCardDetailsClick}
					/>
				))}
			</Flex>
		</Box>
	);
}

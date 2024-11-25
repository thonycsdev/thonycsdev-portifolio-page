import useSWR from 'swr';
import { Box, Flex, Text } from '@chakra-ui/react';
import ProjectCardComponent from './ProjectCardComponent';
import { useState } from 'react';
import ModalComponent from '../UI/ModalComponent';

async function fetchFromAPI(key: string) {
	const response = await fetch(key);
	const responseData = await response.json();
	return responseData;
}

export default function ProjectsSection() {
	const [selectedProject, setSelectedProject] = useState<
		GithubRepoResponse | undefined
	>(undefined);

	const [isModalOpen, setIsModalOpen] = useState(false);

	const { isLoading, data } = useSWR<GithubRepoResponse[]>(
		'/api/v1/github',
		fetchFromAPI
	);

	const handleCardDetailsClick = (project: GithubRepoResponse) => {
		if (!project) return;
		setSelectedProject(project);
		setIsModalOpen(true);
	};
	if (isLoading && !data) {
		return <h1>Loading...</h1>;
	}

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
				{data?.map((x) => (
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

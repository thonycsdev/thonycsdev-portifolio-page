import formatProjectName from '@/services/uitls/formatProjectName';
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Heading
} from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
type ComponentProps = {
	project: GithubRepoResponse;
};
export default function ProjectCardComponent({
	project
}: ComponentProps) {
	const projectName = formatProjectName(
		project.name
	);
	return (
		<>
			<Card
				background={'transparent'}
				minW={'200px'}
				border={'1px'}
			>
				<CardHeader>
					<Text
						textAlign={'center'}
						size={'md'}
						as={'h6'}
						borderBottom={'1px'}
					>
						{projectName}
					</Text>
				</CardHeader>
				<CardBody>{project.description}</CardBody>
				<CardFooter gap={5}>
					<Button
						background={'#E7DEBC'}
						_hover={{ background: '#f2eddb' }}
						boxShadow={'xl'}
						border={'1px'}
					>
						Acessar Código
					</Button>
					<Button
						background={'#E7DEBC'}
						_hover={{ background: '#f2eddb' }}
						boxShadow={'xl'}
						border={'1px'}
					>
						Ver mais detalhes
					</Button>
				</CardFooter>
			</Card>
		</>
	);
}

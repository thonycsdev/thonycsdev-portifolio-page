import formatProjectName from '@/services/uitls/formatProjectName';
import { IoStarSharp } from 'react-icons/io5';
import {
	Box,
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader
} from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
type ComponentProps = {
	project: GithubRepoResponse;
};
export default function ProjectCardComponent({
	project
}: ComponentProps) {
	const router = useRouter();
	const projectName = formatProjectName(
		project.name
	);

	return (
		<>
			<Card
				minW={'200px'}
				background={'feeling.cardBg'}
				textColor={'whitesmoke'}
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
				<CardBody>
					<Text>
						Tecnologia Utilizada:{' '}
						{project.language}
					</Text>
					<Box display={'flex'} gap={3}>
						<Box
							display={'flex'}
							alignItems={'center'}
							gap={1}
						>
							<IoStarSharp
								size={'1.1rem'}
								display={'inline'}
							/>
							<Text>:</Text>
						</Box>
						<Text paddingTop={1}>
							{project.stargazers_count}
						</Text>
					</Box>
				</CardBody>
				<CardFooter
					display={'flex'}
					gap={4}
					justifyContent={'space-between'}
				>
					<Button
						colorScheme="feeling.buttonBg"
						textColor={'whitesmoke'}
						boxShadow={'dark-lg'}
						size={'sm'}
						_hover={{
							transform: 'scale(1.1)'
						}}
						transition={'all 0.3s ease-in-out'}
						onClick={() =>
							router.push(project.html_url)
						}
					>
						<Text
							_hover={{ borderBottom: '1px' }}
							transition={'all 0.1s linear'}
							fontSize={'xs'}
						>
							Acessar Código
						</Text>
					</Button>
					<Button
						colorScheme="feeling.buttonBg"
						textColor={'whitesmoke'}
						boxShadow={'dark-lg'}
						size={'sm'}
						_hover={{
							transform: 'scale(1.1)'
						}}
						transition={'all 0.3s ease-in-out'}
					>
						<Text
							_hover={{ borderBottom: '1px' }}
							transition={'all 0.1s linear'}
							fontSize={'xs'}
						>
							Ver mais detalhes
						</Text>
					</Button>
				</CardFooter>
			</Card>
		</>
	);
}

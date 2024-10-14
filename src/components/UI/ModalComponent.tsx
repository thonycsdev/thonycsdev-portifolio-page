import formatProjectName from '@/services/uitls/formatProjectName';
import {
	Text,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Box
} from '@chakra-ui/react';
import ActionButtonComponent from './ActionButtonComponent';

type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
	project: GithubRepoResponse | undefined;
};
export default function ModalProjectDetailsComponent({
	isOpen,
	onClose,
	project
}: ModalProps) {
	if (!project) return;
	const data = formatProjectData(project);
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>{data.name}</ModalHeader>
				<ModalCloseButton />
				<ModalBody display={'flex'} flexDir={'column'} gap={5}>
					<Text>{data.description}</Text>
					<Box>
						<Text>Criado em: {data.created_at}</Text>
						<Text>ultima atualizacao em: {data.pushed_at}</Text>
					</Box>
				</ModalBody>
				<ModalFooter display={'flex'} gap={5}>
					<ActionButtonComponent text="Acessar Codigo" onClick={() => {}} />
					<ActionButtonComponent text="Fechar" onClick={onClose} />
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}

function formatProjectData(project: GithubRepoResponse) {
	const name = formatProjectName(project.name);
	const description = project.description;
	const created_at = new Date(project.created_at).toLocaleDateString();
	const pushed_at = new Date(project.pushed_at).toLocaleDateString();
	return {
		name,
		created_at,
		pushed_at,
		description
	};
}

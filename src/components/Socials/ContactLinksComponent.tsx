import { Box } from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';
import { CiLinkedin } from 'react-icons/ci';
import { FaRegFilePdf } from 'react-icons/fa6';
export default function ContactLinksComponent() {
	return (
		<Box
			display={'flex'}
			alignItems={'center'}
			justifyContent={'start'}
			gap={15}
		>
			<Box
				opacity={'0.5'}
				_hover={{ opacity: '1' }}
			>
				<AiFillGithub size={'2rem'} />
			</Box>
			<Box
				opacity={'0.5'}
				_hover={{ opacity: '1' }}
			>
				<CiLinkedin size={'2rem'} />
			</Box>
			<Box
				opacity={'0.5'}
				_hover={{ opacity: '1' }}
			>
				<FaRegFilePdf size={'1.5rem'} />
			</Box>
		</Box>
	);
}

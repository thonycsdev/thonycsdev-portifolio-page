import { Center } from '@chakra-ui/react';
import { ReactNode } from 'react';

type HomeCardComponentProps = {
	children: ReactNode;
};
export default function HomeCardComponent({
	children
}: HomeCardComponentProps) {
	return (
		<Center
			rounded={'xl'}
			height={'fit-content'}
			width={'fit-content'}
			border={'1px'}
			borderColor={'gray.600'}
			boxShadow={'2xl'}
			_hover={{ boxShadow: 'dark-lg' }}
			padding={5}
		>
			{children}
		</Center>
	);
}

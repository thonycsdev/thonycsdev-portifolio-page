import {
	Box,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Text
} from '@chakra-ui/react';
import { ReactNode } from 'react';
type CardComponentProps = {
	title: string;
	children: ReactNode;
	footer?: ReactNode;
};
export default function CardComponent({
	title,
	children,
	footer
}: CardComponentProps) {
	return (
		<>
			<Box
				background={'transparent'}
				minW={'200px'}
				border={'1px'}
			>
				<Text
					borderBottom={'1px'}
					borderStyle={'solid'}
					textAlign={'center'}
				>
					{title}
				</Text>
				<Box>{children}</Box>
			</Box>
		</>
	);
}

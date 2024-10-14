import { Button, Text } from '@chakra-ui/react';

type BtnProps = {
	onClick: (obj?: any) => void;
	text: string;
};
export default function ActionButtonComponent({ onClick, text }: BtnProps) {
	return (
		<Button
			colorScheme="feeling.buttonBg"
			textColor={'whitesmoke'}
			boxShadow={'dark-lg'}
			size={'sm'}
			_hover={{
				transform: 'scale(1.1)'
			}}
			transition={'all 0.3s ease-in-out'}
			onClick={onClick}
		>
			<Text
				_hover={{ borderBottom: '1px' }}
				transition={'all 0.1s linear'}
				fontSize={'xs'}
			>
				{text}
			</Text>
		</Button>
	);
}

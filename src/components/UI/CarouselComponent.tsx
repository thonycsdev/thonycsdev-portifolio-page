import { Box } from '@chakra-ui/react';
import CardComponent from './CardComponent';
import CarouselItem from './CarouselItem';

function CarouselComponent() {
	return (
		<CardComponent title="Minhas principais Tecnologias">
			<Box display={'flex'} flexDir={'column'}>
				<CarouselItem
					text="CSharp"
					imgSrc="./csharp_logo.svg"
				/>
				<CarouselItem
					text=".NET Core"
					imgSrc="./net_core_logo.png"
				/>
				<CarouselItem
					text="JavaScript"
					imgSrc="./js_logo.png"
				/>
				<CarouselItem
					text="React"
					imgSrc="./react_icon.png"
				/>
			</Box>
		</CardComponent>
	);
}

export default CarouselComponent;

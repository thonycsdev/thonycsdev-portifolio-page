import {
	Box,
	Grid,
	Image,
	Text
} from '@chakra-ui/react';

type CarouselItemProps = {
	imgSrc: string;
	text: string;
};
export default function CarouselItem({
	text,
	imgSrc
}: CarouselItemProps) {
	return (
		<Grid
			gridTemplateColumns={'repeat(2,1fr)'}
			justifyItems={'center'}
			alignItems={'center'}
		>
			<Image
				src={imgSrc}
				objectFit={'contain'}
				boxSize={50}
				p={5}
			/>
			<Text>{text}</Text>
		</Grid>
	);
}

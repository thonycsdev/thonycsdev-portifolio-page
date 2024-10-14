import { Text, Grid, Box } from '@chakra-ui/react';
import ContactLinksComponent from './Socials/ContactLinksComponent';

function HeroSection() {
	return (
		<Grid width={'100%'} height={'fit-content'} gap={5}>
			<Box justifySelf={'start'}>
				<Text fontSize={'xx-large'} fontWeight={'bold'} fontFamily={'body'}>
					Anthony Coutinho
				</Text>
				<Text fontSize={'large'} fontWeight={'semibold'} justifySelf={'start'}>
					Full stack Developer
				</Text>
				<Text textColor={'feeling.font'}>
					Performance, qualidade e eficiência
				</Text>
			</Box>
			<Box>
				<ContactLinksComponent />
			</Box>
		</Grid>
	);
}

export default HeroSection;

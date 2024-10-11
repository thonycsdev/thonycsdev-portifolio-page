'use client';
import HeroSection from '@/components/HeroSection';
import { Grid } from '@chakra-ui/react';

export default function Home() {
	return (
		<Grid
			id="root_main"
			bgColor={'feeling.background'}
			height={'100%'}
			boxSizing="border-box"
			templateRows={'auto'}
			justifyItems={'center'}
		>
			<HeroSection />
		</Grid>
	);
}

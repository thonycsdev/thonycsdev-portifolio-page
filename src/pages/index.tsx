'use client';
import AboutSection from '@/components/AboutSection';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/Project/ProjectSectionComponent';
import HomeCardComponent from '@/components/UI/HomeCardComponent';
import {
	Box,
	Grid,
	useBreakpointValue
} from '@chakra-ui/react';

export default function Home() {
	const screenSize = useBreakpointValue({
		base: 'small', // For mobile devices
		md: 'medium', // For tablets and small desktops
		lg: 'large' // For larger desktops
	});
	function checkScreenSize() {
		const mobileLayoutElements = [
			<HeroSection />,
			<AboutSection />,
			<ProjectsSection />
		];

		const desktopLayout = [
			<Box>
				<HeroSection />
				<ProjectsSection />
			</Box>,
			<AboutSection />
		];

		if (screenSize != 'small') {
			return desktopLayout;
		}
		return mobileLayoutElements;
	}
	return (
		<Grid
			id="root_main"
			bgColor={'feeling.background'}
			boxSizing="border-box"
			templateRows={'auto'}
			templateColumns={{ md: 'repeat(2,1fr)' }}
			justifyItems={'center'}
		>
			{checkScreenSize().map((element, idx) => (
				<HomeCardComponent key={idx}>
					{element}
				</HomeCardComponent>
			))}
		</Grid>
	);
}

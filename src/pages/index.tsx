'use client';
import AboutSection from '@/components/AboutSection';
import CareerComponent from '@/components/Career/CareerComponent';
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
		const mobileLayoutElements = (
			<Grid
				id="root_main"
				bgColor={'feeling.background'}
				boxSizing="border-box"
				templateRows={'auto'}
				templateColumns={{ md: 'repeat(2,1fr)' }}
				justifyItems={'center'}
			>
				<HeroSection />
				<AboutSection />
				<ProjectsSection />
			</Grid>
		);

		const desktopLayout = (
			<Grid
				id="root_main"
				bgColor={'feeling.background'}
				boxSizing="border-box"
				templateRows={'auto'}
				templateColumns={{ md: 'repeat(2,1fr)' }}
				justifyItems={'center'}
			>
				<Box>
					<HeroSection />
					<ProjectsSection />
				</Box>
				<AboutSection />
			</Grid>
		);

		if (screenSize != 'small') {
			return desktopLayout;
		}
		return mobileLayoutElements;
	}
	const render = checkScreenSize();
	return render;
}

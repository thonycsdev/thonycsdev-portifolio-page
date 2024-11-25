import { useBreakpointValue } from '@chakra-ui/react';
export default function useScreenSize() {
	const screenSize = useBreakpointValue({
		base: 'small', // For mobile devices
		md: 'medium', // For tablets and small desktops
		lg: 'large' // For larger desktops
	});
	function isScreenSizeSmall(screenSize: string | undefined) {
		if (!screenSize) return false;

		if (screenSize === 'small') return true;
		return false;
	}
	const isSmall = isScreenSizeSmall(screenSize);
	return { isSmall };
}

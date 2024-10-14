import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { modalAnatomy as parts } from '@chakra-ui/anatomy';
import { Analytics } from '@vercel/analytics/react';
import { Maitree } from 'next/font/google';
import {
	ChakraProvider,
	createMultiStyleConfigHelpers,
	extendTheme
} from '@chakra-ui/react';

const headerFont = Maitree({
	weight: '400',
	subsets: ['latin']
});
export default function App({ Component, pageProps }: AppProps) {
	const { definePartsStyle, defineMultiStyleConfig } =
		createMultiStyleConfigHelpers(parts.keys);

	const baseStyle = definePartsStyle({
		dialog: {
			bg: 'feeling.background',
			textColor: 'whitesmoke'
		}
	});

	const modalTheme = defineMultiStyleConfig({
		baseStyle
	});
	const theme = extendTheme({
		colors: {
			feeling: {
				1: '#B4BEC9',
				2: '#159A9C',
				background: '#002333',
				4: '#DEEFE7',
				5: '#FFFFFF',
				font: '#7A8B93',
				cardBg: '#012E40',
				buttonBg: '#024959'
			}
		},
		components: { Modal: modalTheme }
	});
	return (
		<ChakraProvider theme={theme}>
			<main className={headerFont.className}>
				<Analytics />
				<Component {...pageProps} />
			</main>
		</ChakraProvider>
	);
}

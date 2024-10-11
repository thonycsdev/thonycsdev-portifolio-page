import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { Maitree } from 'next/font/google';
import {
	ChakraProvider,
	extendTheme
} from '@chakra-ui/react';

const headerFont = Maitree({
	weight: '400',
	subsets: ['latin']
});
export default function App({
	Component,
	pageProps
}: AppProps) {
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
		}
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

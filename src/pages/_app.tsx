import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { Gilda_Display } from 'next/font/google';
import { ChakraProvider } from '@chakra-ui/react';

const gilda = Gilda_Display({
  weight: "400",
  subsets: ["latin"]
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={gilda.className}>
      <ChakraProvider>
        <Analytics />
        <Component {...pageProps} />
      </ChakraProvider>
    </main>
  );
}

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { TranslationContextProvider } from "@/components/Context/TranslationContext";
import { Gilda_Display, Inter } from 'next/font/google'

const gilda = Gilda_Display({
  weight: "400",
  subsets: ["latin"]
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={gilda.className}>
      <Analytics />
      <Head>
        <link rel="shortcut icon" href="/avatar-no-background.png" />
      </Head>
      <TranslationContextProvider>
        <Component {...pageProps} />
      </TranslationContextProvider>
    </main>
  );
}

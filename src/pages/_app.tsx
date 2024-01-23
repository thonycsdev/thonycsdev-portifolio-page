import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />
      <Head>
        <link rel="shortcut icon" href="/avatar-no-background.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { TranslationContextProvider } from "@/components/Context/TranslationContext";
import { Gilda_Display } from 'next/font/google'

const gilda = Gilda_Display({
  weight: "400",
  subsets: ["latin"]
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={gilda.className}>
      <Analytics />
      <TranslationContextProvider>
        <Component {...pageProps} />
      </TranslationContextProvider>
    </main>
  );
}

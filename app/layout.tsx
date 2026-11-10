import type { Metadata } from "next";
import { Bree_Serif, DM_Sans } from "next/font/google";
import "./globals.css";

const serif = Bree_Serif({ weight: "400", subsets: ["latin"], variable: "--font-serif" });
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Anthony Coutinho · Full Stack",
  description: "Portfolio of Anthony Coutinho, full stack software engineer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}

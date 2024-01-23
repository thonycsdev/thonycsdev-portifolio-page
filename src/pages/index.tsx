import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import Tabs from "@/components/Tabs";
import { FullFormattedData, myContent } from "@/data/skills";
import { useEffect } from "react";

type Props = {
  data: FullFormattedData;
};
export default function Home({ data }: Props) {
  useEffect(() => {
    window.alert(
      "Olá, seja bem-vindo(a) ao meu portfólio! O site ainda está em construção!"
    );
    console.log("Olá, seja bem-vindo(a) ao meu portfólio!");
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <Tabs data={data} />
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  const data = await myContent();

  return { props: { data } };
}

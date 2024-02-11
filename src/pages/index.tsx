import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import Tabs from "@/components/Tabs";
import { FullFormattedData, myContent } from "../../infra/data/skills";

type Props = {
  data: FullFormattedData;
};
export default function Home({ data }: Props) {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="px-12 py-4 w-full">
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

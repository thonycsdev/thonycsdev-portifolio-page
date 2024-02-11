import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import Tabs from "@/components/Tabs";
import { FullPageInformationType } from "@/schemas/FullPageInformationType";
import DataFetcher from "@/services/DataFetcher";

type Props = {
  data: FullPageInformationType;
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
  const dataFetcher = new DataFetcher();
  const data = await dataFetcher.fetchMyContent();
  return { props: { data } };
}

import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import HomeCardComponent from "@/components/UI/HomeCardComponent";

export default function Home() {
  return (
    <main className="h-full md:h-screen bg-paper-background flex flex-col justify-center items-start md:p-40 p-5">
      <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-3">
        <div className="md:col-start-1 md:col-end-3">
          <HomeCardComponent content={<HeroSection />} />
        </div>
        <div className="md:row-span-2 md:w-2/3">
          <HomeCardComponent content={<AboutSection />} />
        </div>
        <div className="md:col-span-2 h-full w-full grid md:grid-cols-4 grid-cols-2 gap-5 content-evenly">
          <HomeCardComponent content={<AboutSection />} />
          <HomeCardComponent content={<AboutSection />} />
          <HomeCardComponent content={<AboutSection />} />
          <HomeCardComponent content={<AboutSection />} />
          <HomeCardComponent content={<AboutSection />} />
        </div>
      </div>
    </main>
  );
}


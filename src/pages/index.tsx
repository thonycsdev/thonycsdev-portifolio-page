import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import HomeCardComponent from "@/components/UI/HomeCardComponent";

export default function Home() {
  return (
    <main className="h-full md:h-screen bg-paper-background flex flex-col justify-center items-start p-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-5 gap-3">
        <div className="row-span-2 md:row-span-3 ">
          <HomeCardComponent content={<HeroSection />} />
        </div>
        <div>
          <HomeCardComponent content={<AboutSection />} />
        </div>
        <div>
          <HomeCardComponent content={<AboutSection />} />
        </div>
        <div>
          <HomeCardComponent content={<AboutSection />} />
        </div>
      </div>
    </main>
  );
}


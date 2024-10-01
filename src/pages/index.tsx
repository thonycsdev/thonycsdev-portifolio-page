import AboutSection from "@/components/AboutSection";
import CareerComponent from "@/components/Career/CareerComponent";
import EducationComponent from "@/components/Education/EducationComponent";
import HeroSection from "@/components/HeroSection";
import FeaturedProjectsComponents from "@/components/Project/ProjectList";
import LinkedinComponent from "@/components/Socials/LinkedinComponent";
import HomeCardComponent from "@/components/UI/HomeCardComponent";

export default function Home() {
  return (
    <main className="h-full md:h-screen bg-gradient-to-br from-[#E7DEBC] to-paper-background flex flex-col justify-center items-start md:p-40 p-5 font-medium">
      <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-3">
        <div className="md:col-start-1 md:col-end-3">
          <HomeCardComponent content={<HeroSection />} />
        </div>
        <div className="md:row-span-2 md:w-2/3">
          <HomeCardComponent content={<AboutSection />} />
        </div>
        <div className="md:col-span-2 h-full w-full grid md:grid-cols-4 grid-cols-2 gap-5 grid-flow-row">
          <div className="">
            <HomeCardComponent content={<EducationComponent />} />
          </div>
          <div className="row-start-1 row-end-1 col-span-2">
            <HomeCardComponent content={<CareerComponent />} />
          </div>
          <div className="row-start-1 row-end-2">
            <HomeCardComponent content={<FeaturedProjectsComponents projects={[]} />} />
          </div>
          <div className="row-start-2 row-end-2 col-span-full">
            <HomeCardComponent content={<LinkedinComponent />} />
          </div>
        </div>
      </div>
    </main>
  );
}


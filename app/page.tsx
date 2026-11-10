import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { TopBar } from "@/components/layout/TopBar";
import { About } from "@/components/sections/About";
import { AiWorkflow } from "@/components/sections/AiWorkflow";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { WhyMe } from "@/components/sections/WhyMe";

export default function Home() {
  return (
    <>
      <TopBar />
      <SiteHeader />
      <main>
        <Hero />
        <AiWorkflow />
        <About />
        <Experience />
        <Projects />
        <WhyMe />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}

import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import { useEffect } from "react";

export default function Home() {
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
      </div>
    </main>
  );
}

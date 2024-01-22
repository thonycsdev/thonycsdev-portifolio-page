/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

function HeroSection() {
  return (
    <section>
      <div className="flex-col flex lg:flex-row lg:justify-center items-center">
        <div className="self-center">
          <h1 className="text-white mb-4 text-4xl  lg:text-6xl font-extrabold">
            Olá, Eu sou{" "}
            <span className="text-[#64FFDA]">
              <br />
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Anthony",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Full Stack Developer",
                  1000,
                  "Backend Developer",
                  1000,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-white text-lg mb-6 lg:text-xl text-center lg:text-left">
            Bem-vindo ao meu portfólio! Sou um desenvolvedor full stack com
            enfase no backend. Espero que goste do meu trabalho!
          </p>
          <div className="mx-auto h-auto flex flex-col items-center justify-center lg:justify-start lg:flex-row">
            <button className="px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-emerald-700 via-emerald-400 to-lime-300 hover:bg-slate-200 text-white font-extrabold mt-3 w-3/5 max-w-96">
              Hire Me
            </button>
            <button className="px-6 py-3 rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border w-3/5 max-w-96  border-white mt-3">
              Download CV
            </button>
          </div>
        </div>
        <div className="self-center mt-4 lg:mt-0 mb-6">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              alt="avatar"
              src="/avatar-no-background.png"
              width={300}
              height={300}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

function HeroSection() {
  return (
    <section>
      <div className="flex flex-col">
        <div className="self-center">
          <h1 className="text-white mb-4 text-4xl  lg:text-6xl font-extrabold">
            Hi, I'm <span className="text-[#64FFDA]">Anthony</span>
          </h1>
          <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus a maiores aliquid illo suscipit asperiores,
            exercitationem ratione consequuntur temporibus obcaecati id
            voluptates numquam recusandae, nisi nostrum esse alias maxime earum?
          </p>
        </div>
        <div>
          <button className="px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black">
            Hire Me
          </button>
          <button className="px-6 py-3 rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border border-white mt-3">
            Download CV
          </button>
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

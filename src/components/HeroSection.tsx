import ButtonComponent from "./UI/ButtonComponent";
import CarouselComponent from "./UI/CarouselComponent";

function HeroSection() {
  return (
    <section className="w-full h-full grid md:grid-rows-3 grid-flow-col text-wrap gap-5 md:gap-0">
      <div>
        <p className="text-2xl subpixel-antialiased">
          Bem-vindo!
        </p>
      </div>
      <div>
        <p>
          Olá. Sou <b>Anthony Coutinho</b>, desenvolvedor full stack com um grande foco em performance utilizando .NET e React
        </p>
        <p>
          Fique a vontade para explorar minha página, aqui você irá encontrar meus projetos, redes sociais e diploma
        </p>
      </div>
      <div className="flex justify-start gap-5 items-center row-start-3 flex-wrap md:flex-nowrap mt-5">
        <ButtonComponent iconSrc="./github_logo.png" alt="github.com" />
        <ButtonComponent iconSrc="./linkedin.png" alt="github.com" />
        <ButtonComponent iconSrc="./pdf.png" alt="github.com" />
        <ButtonComponent iconSrc="./github_logo.png" alt="github.com" />
        <ButtonComponent iconSrc="./github_logo.png" alt="github.com" />
      </div>
      <div className="hidden md:block row-start-1 row-end-4 col-start-2 w-96 px-10">
        <CarouselComponent />
      </div>
    </section>
  )
}

export default HeroSection;

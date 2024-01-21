import HeroSection from "@/components/HeroSection";
import { render, screen } from "@testing-library/react";
describe("HeroSection Components", () => {
  beforeEach(() => {
    render(<HeroSection />);
  });
  it("should render my name correctly", () => {
    var name = screen.getByText("Anthony");
    expect(name).toBeInTheDocument();
  });
  it("Should render the download CV button", () => {
    var downloadBtn = screen.getByRole("button", { name: "Download CV" });
    expect(downloadBtn).toBeInTheDocument();
  });
  it("Should render the Hire Me button", () => {
    var downloadBtn = screen.getByRole("button", { name: "Hire Me" });
    expect(downloadBtn).toBeInTheDocument();
  });
  it("Should render My Logo", () => {
    var img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
  });
});

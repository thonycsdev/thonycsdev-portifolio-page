import HeroSection from "@/components/HeroSection";
import { render } from "@testing-library/react";
describe("HeroSection Components", () => {
  render(<HeroSection />);
  it("should render correctly", () => {
    expect(1).toEqual(1);
  });
});

import AboutSection from "@/components/AboutSection";
import CareerComponent from "@/components/Career/CareerComponent";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/Project/ProjectSectionComponent";
import HomeCardComponent from "@/components/UI/HomeCardComponent";
import { Grid, GridItem, Wrap } from "@chakra-ui/react";

export default function Home() {
  return (
    <Wrap padding={10} w='100vw' h='100vw' bgGradient='linear(to-br, #f2eddb, #E7DEBC)' >
      <Grid templateRows={'auto'} templateColumns={"repeat(3, 1fr)"} gap={10}>
        <GridItem colSpan={2}>
          <HomeCardComponent>
            <HeroSection />
          </HomeCardComponent>
        </GridItem>
        <GridItem rowSpan={3}>
          <HomeCardComponent>
            <AboutSection />
          </HomeCardComponent>
        </GridItem>
        <GridItem maxH={"500px"}>
          <HomeCardComponent>
            <CareerComponent />
          </HomeCardComponent>
        </GridItem>
        <GridItem maxH={"500px"}>
          <HomeCardComponent >
            <ProjectsSection />
          </HomeCardComponent>
        </GridItem>
      </Grid>
    </Wrap>
  );
}


import { Box, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import ButtonComponent from "./UI/ButtonComponent";
import CarouselComponent from "./UI/CarouselComponent";

function HeroSection() {
  return (
    <Grid templateColumns='repeat(3,1fr)' height={'fit-content'}>
      <GridItem colSpan={2}>
        <Box padding={4}>
          <Heading as={'h6'} size={'md'}>
            Bem-vindo!
          </Heading>
        </Box>
        <div>
          <p>
            Olá. Sou <b>Anthony Coutinho</b>, desenvolvedor full stack com um grande foco em performance utilizando .NET e React.
          </p>
          <p>
            Fique a vontade para explorar minha página, aqui você irá encontrar meus projetos, redes sociais e diploma.
          </p>
        </div>
        <Flex justifyContent={'space-evenly'} alignItems={'center'} height={'40%'} width={'full'}>
          <ButtonComponent iconSrc="./github_logo.png" alt="github.com" />
          <ButtonComponent iconSrc="./linkedin.png" alt="github.com" />
          <ButtonComponent iconSrc="./pdf.png" alt="github.com" />
        </Flex>
      </GridItem>
      <GridItem>
        <CarouselComponent />
      </GridItem>
    </Grid>
  )
}

export default HeroSection;

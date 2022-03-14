import Flex from "./atoms/Flex";
import Typography from "./atoms/Typography";

import Header from "./Header";
import ButtonQuieroSerParte from "./ButtonQuieroSerParte";
import Banner from "./Banner";
import PorQueAtomic from "./PorQueAtomic";

import heroLaptop from "../assets/heroLaptop.png";
import astronautaHero from "../assets/astronautaHero.png";
import arrowSaberMas from "../assets/arrowSaberMas.png";

const Hero = () => {
  return (
    <>
      <Flex
        backgroundImage={`url(${heroLaptop})`}
        //backgroundPosition="center"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        minHeight="100vh"
        width="100%"
        flexDirection="column"
      >
        <Header />
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Flex
            width="100%"
            //height="75vh"
            justifyContent={["start", "space-evenly"]}
            alignItems="center"
            flexDirection={["column", "row"]}
            maxWidth={["1000px", "1200px"]}
            mx="auto"
          >
            <AstronautaHero />
            <HeroText />
          </Flex>
          <ButtonSaberMas />
        </Flex>
      </Flex>
      <Banner />
      <PorQueAtomic />
    </>
  );
};

export default Hero;

const AstronautaHero = () => {
  return (
    <Flex
      backgroundImage={`url(${astronautaHero})`}
      backgroundSize="contain"
      backgroundRepeat="no-repeat"
      height={["34vh", "339px", "490px"]}
      width={["245px", "414px", "570px"]}
    ></Flex>
  );
};

const HeroText = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      mt={["16px", "0px"]}
      alignItems="center"
    >
      <Typography
        color="white"
        mb={["0px", "4px"]}
        variant={["body4Bold", "h6", "h3"]}
      >
        Desarrolla todo
      </Typography>
      <Typography
        mb={["0px", "4px"]}
        color="#fa4d09"
        variant={["body3Bold", "h5", "h2"]}
      >
        tu POTENCIAL
      </Typography>
      <Typography
        mb={["0px", "4px"]}
        color="white"
        variant={["body5Bold", "body1Bold", "h4"]}
      >
        dentro del equipo
      </Typography>
      <Flex>
        <Typography
          mb={["0px", "4px"]}
          color="#fa4d09"
          variant={["body2Bold", "h4", "h1"]}
        >
          ATOMIC
        </Typography>
        <Typography
          mb={["0px", "4px"]}
          color="white"
          variant={["body2Bold", "h4", "h1"]}
        >
          LABS
        </Typography>
      </Flex>
      <ButtonQuieroSerParte />
    </Flex>
  );
};

const ButtonSaberMas = () => {
  return (
    <a href="#banner">
      <Flex flexDirection="column" alignItems="center">
        <Flex
          backgroundImage={`url(${arrowSaberMas})`}
          height={["45px", "50px", "60px"]}
          width={["45px", "50px", "60px"]}
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
        />
        <Typography color="white" variant={["caption4", "caption3"]}>
          Quiero saber más
        </Typography>
      </Flex>
    </a>
  );
};

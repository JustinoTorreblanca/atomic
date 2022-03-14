import Flex from "./atoms/Flex";
import Box from "./atoms/Box";
import Typography from "./atoms/Typography";

import imgExplora from "../assets/explora.png";
import imgImagina from "../assets/imagina.png";
import imgConquista from "../assets/conquista.png";
import Proceso from "./Proceso";

const Banner = () => {
  return (
    <Flex
      flexDirection="column"
      width="100%"
      minHeight="100vh"
      justifyContent="flex-start"
      pt="2em"
      alignItems="center"
      backgroundColor={"#072348"}
      id="banner"
    >
      <Typography
        color="white"
        variant={["body5Bold", "h6"]}
        mb={["0px", "15px"]}
      >
        SOMOS EL BRAZO DERECHO
      </Typography>
      <Typography color="#fa4d09" variant={["body5Bold", "h6"]}>
        DE LA TECNOLOGÍA
      </Typography>

      <CardContainer />

      <Proceso />
    </Flex>
  );
};

export default Banner;

const CardContainer = () => {
  return (
    <Flex
      flexWrap={["wrap"]}
      style={{ gap: "20px" }}
      maxWidth={["320px", "unset"]}
      py="20px"
      mt={["10px", "50px"]}
      justifyContent="center"
      alignItems="center"
    >
      <CardExplora />
      <CardImagina />
      <CardConquista />
    </Flex>
  );
};

const CardExplora = () => {
  const CARDS_CONTENT = [
    {
      image: imgExplora,
      title: "EXPLORA",
      text: {
        firstLine: { regular: "Inovación ", bold: "y creación tecnológica" },
        secondLine: { bold: "UI/UX" },
        thirdLine: { bold: "Innovación" },
      },
    },
    {
      image: imgImagina,
      title: "IMAGINA",
      text: {
        firstLine: { bold: "Estrategia ", regular: "Digital" },
        secondLine: { regular: "Big Data & ", bold: "Analysis" },
        thirdLine: { bold: "Consultoría ", regular: "Tecnológica" },
        fourthLine: { bold: "Reducción ", regular: "de costos TI" },
      },
    },
    {
      image: imgConquista,
      title: "CONQUISTA",
      text: {
        firstLine: { regular: "Desarrollo tecnológico ", bold: "a la medida" },
        secondLine: { bold: "Ciberseguridad" },
        thirdLine: { bold: "Servicios de la Nube" },
      },
    },
  ];

  return (
    <>
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        backgroundColor="white"
        width={["300px", "320px"]}
        minHeight="280px"
        pt="15px"
        pb="30px"
        px="20px"
        //my="20px"
        borderRadius="5px"
      >
        <Flex
          backgroundImage={`url(${imgExplora})`}
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          height={["115px", "200px"]}
          width={["125px", "200px"]}
        />
        <Flex
          flexDirection="row"
          width="100%"
          justifyContent="center"
          my="10px"
        >
          <Flex width="15%" borderBottom="3px solid #fa4d09 "></Flex>
          <Flex width="2.5%" borderBottom="3px solid #fa4d09 " mx="10px"></Flex>
          <Flex width="15%" borderBottom="3px solid #fa4d09 "></Flex>
        </Flex>
        <Typography
          color="#fa4d09"
          variant="caption1ExtraBold"
          mb={["8px", "20px"]}
        >
          EXPLORA
        </Typography>
        <Box as="ul" ml="20px">
          <Typography
            as="li"
            variant="caption5"
            textAlign="left"
            color="black"
            mb="5px"
          >
            Inovación y <b>creación tecnológica</b>
          </Typography>
          <Typography
            as="li"
            variant="caption5"
            display="list-item"
            textAlign="left"
            color="black"
            mb="5px"
          >
            <b>UI/UX</b>
          </Typography>
          <Typography
            as="li"
            variant="caption5"
            display="list-item"
            textAlign="left"
            color="black"
          >
            <b>Innovación</b>
          </Typography>
        </Box>
      </Flex>
    </>
  );
};

const CardImagina = () => {
  return (
    <>
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        backgroundColor="white"
        width={["300px", "320px"]}
        minHeight="280px"
        pt="15px"
        pb="30px"
        mx={["0px", "15px"]}
        my={["0px", "15px"]}
        borderRadius="5px"
      >
        <Flex
          backgroundImage={`url(${imgImagina})`}
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          height={["115px", "200px"]}
          width={["125px", "200px"]}
        />
        <Flex
          flexDirection="row"
          width="100%"
          justifyContent="center"
          my="10px"
        >
          <Flex width="15%" borderBottom="3px solid #fa4d09 "></Flex>
          <Flex width="2.5%" borderBottom="3px solid #fa4d09 " mx="10px"></Flex>
          <Flex width="15%" borderBottom="3px solid #fa4d09 "></Flex>
        </Flex>
        <Typography
          color="#fa4d09"
          variant="caption1ExtraBold"
          mb={["8px", "20px"]}
        >
          IMAGINA
        </Typography>
        <Box as="ul" ml="20px">
          <Typography
            as="li"
            variant="caption5"
            textAlign="left"
            color="black"
            mb="5px"
          >
            <b>Estrategia</b> Digital
          </Typography>
          <Typography
            as="li"
            variant="caption5"
            display="list-item"
            textAlign="left"
            color="black"
            mb="5px"
          >
            Big Data & <b>Analysis</b>
          </Typography>
          <Typography
            as="li"
            variant="caption5"
            display="list-item"
            textAlign="left"
            color="black"
            mb="5px"
          >
            <b>Consultoría </b>Tecnológica
          </Typography>
          <Typography
            as="li"
            variant="caption5"
            display="list-item"
            textAlign="left"
            color="black"
          >
            <b>Reducción</b>de costos TI
          </Typography>
        </Box>
      </Flex>
    </>
  );
};
const CardConquista = () => {
  return (
    <>
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        backgroundColor="white"
        width={["300px", "320px"]}
        minHeight="280px"
        pt="15px"
        pb="30px"
        //px="20px"
        //mb="20px"
        borderRadius="5px"
      >
        <Flex
          backgroundImage={`url(${imgConquista})`}
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          height={["115px", "200px"]}
          width={["125px", "200px"]}
        />
        <Flex
          flexDirection="row"
          width="100%"
          justifyContent="center"
          my="10px"
        >
          <Flex width="15%" borderBottom="3px solid #fa4d09 "></Flex>
          <Flex width="2.5%" borderBottom="3px solid #fa4d09 " mx="10px"></Flex>
          <Flex width="15%" borderBottom="3px solid #fa4d09 "></Flex>
        </Flex>
        <Typography
          color="#fa4d09"
          variant="caption1ExtraBold"
          mb={["8px", "20px"]}
        >
          CONQUISTA
        </Typography>
        <Box as="ul" ml="20px" px={["20px", "30px"]}>
          <Typography
            as="li"
            variant="caption5"
            textAlign="left"
            color="black"
            mb="5px"
          >
            Desarrollo tecnológico <b>a la medida</b>
          </Typography>
          <Typography
            as="li"
            variant="caption5"
            display="list-item"
            textAlign="left"
            color="black"
            mb="5px"
          >
            <b>Ciberseguridad</b>
          </Typography>
          <Typography
            as="li"
            variant="caption5"
            display="list-item"
            textAlign="left"
            color="black"
            mb="5px"
          >
            <b>Servicios de la Nube</b>
          </Typography>
        </Box>
      </Flex>
    </>
  );
};

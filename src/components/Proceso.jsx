import Flex from "./atoms/Flex";
import Typography from "./atoms/Typography";

import pasosContratacion from "../assets/pasosContratacion.png";
import "../App.css";
import ButtonQuieroSerParte from "./ButtonQuieroSerParte";

const Proceso = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      pt={["30px", "90px"]}
      // minHeight="100vh"
    >
      <Flex
        maxWidth={["320px", "unset"]}
        flexDirection="column"
        mb={["20px"]}
        alignItems="center"
      >
        <Typography
          variant={["body2Bold", "h6"]}
          color="white"
          mb={["0px", "25px"]}
        >
          ¡TE ENCANTARÁ
        </Typography>
        <Typography variant={["body2Bold", "h6"]} color="#fa4d09">
          TRABAJAR CON NOSOTROS!
        </Typography>
        <Flex
          backgroundImage={`url(${pasosContratacion})`}
          width={["91%", "120%", "163%"]}
          maxWidth={["314px", "unset"]}
          height={["205px", "215px", "365px"]}
          justifyContent="center"
          backgroundSize={["cover", "cover", "contain"]}
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          mt={["20px"]}
        />
      </Flex>
      <PasosContratacion />
      <ButtonQuieroSerParte />

      <Flex
        flexDirection={["column", "row"]}
        justifyContent={["center"]}
        alignItems="center"
        mt="70px"
        mb={["160px", "300px"]}
      >
        <Typography variant={["body2Bold", "h6"]} color="white">
          ¿POR QUÉ &nbsp;
        </Typography>
        <Typography variant={["body2Bold", "h6"]} color="#fa4d09">
          ATOMIC?
        </Typography>
      </Flex>
    </Flex>
  );
};

export default Proceso;

const PasosContratacion = () => {
  return (
    <Flex
      flexDirection={["column", "row"]}
      mb={["20px", "40px", "60px"]}
      color="white"
      justifyContent="space-between"
      alignItems="center"
      maxWidth={["812px", "856px", "900px"]}
    >
      <Typography
        variant={["caption5", "caption5", "caption6"]}
        my={["10px", "0px"]}
        mx={["0px", "20px"]}
      >
        Contratación remota
      </Typography>

      <Arrow />

      <Typography
        variant={["caption5", "caption5", "caption6"]}
        my={["10px", "0px"]}
        mx={["0px", "20px"]}
      >
        Entrevista con el área de RH
      </Typography>

      <Arrow />

      <Typography
        variant={["caption5", "caption5", "caption6"]}
        my={["10px", "0px"]}
        mx={["0px", "20px"]}
      >
        Prueba práctica
      </Typography>

      <Arrow />

      <Typography
        variant={["caption5", "caption5", "caption6"]}
        my={["10px", "0px"]}
        mx={["0px", "20px"]}
      >
        Entrevista técnica
      </Typography>
    </Flex>
  );
};

const Arrow = () => {
  return (
    <svg
      className="arrow"
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 330 330"
      fill="#fa4d09"
      width="25px"
      height="25px"
    >
      <path
        id="XMLID_27_"
        d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
	        s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
	        c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
      />
    </svg>
  );
};

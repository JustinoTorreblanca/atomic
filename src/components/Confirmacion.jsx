import Flex from "./atoms/Flex";
import Typography from "./atoms/Typography";
import Box from "./atoms/Box";

import OrangeButton from "./OrangeButton";

import number3Red from "../assets/number3Red.png";

const Confirmacion = () => {
  return (
    <Flex flexDirection="row" width="100%" justifyContent={["center"]}>
      <Flex
        width={["93%", "100%"]}
        justifyContent="center"
        flexDirection="column"
        maxWidth={["320px", "480px", "610px"]}
      >
        <Flex
          display="flex"
          alignItems="start"
          flexDirection="column"
          justifyContent="center"
          mb={["15px"]}
          width={["100%"]}
        >
          <Typography variant={["caption2", "caption1"]} color="white">
            TUS DATOS
          </Typography>
          <Typography variant={["caption2", "caption1"]} color="#fa4d09">
            HAN SIDO ENVIADOS&nbsp;
          </Typography>

          <Typography variant={["caption2", "caption1"]} color="#fa4d09">
            CON ÉXITO
          </Typography>
        </Flex>
        <Typography
          variant={["caption4", "caption3"]}
          color="white"
          textAlign="left"
          mb={["10px"]}
        >
          En breve recibirás un correo de confirmación por parte del equipo de
          AtomicLabs.
        </Typography>
        <Typography
          variant={["caption9", "caption4"]}
          color="white"
          textAlign="left"
          mb={["20px"]}
        >
          Recuerda revisar tu bandeja de SPAM
          <br />
          ¡Esperamos verte pronto!
        </Typography>
      </Flex>
    </Flex>
  );
};

export default Confirmacion;

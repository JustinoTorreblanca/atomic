import Flex from "./atoms/Flex";
import Typography from "./atoms/Typography";
import Box from "./atoms/Box";

import OrangeButton from "./OrangeButton";

import number3Red from "../assets/number3Red.png";

const FormCodigoVerificacion = ({
  nextStep,
  prevStep,
  formData,
  setFormData,
}) => {
  return (
    <Flex
      justifyContent={["center", "flex-start"]}
      alignItems="center"
      //px={["0px", "60px"]}
      pb={["30px"]}
      mt={["20px"]}
      width="100%"
      flexDirection={["column", "row"]}
      maxWidth="1200px"
    >
      <Flex
        width={["93%", "100%"]}
        justifyContent="space-around"
        flexDirection="column"
        maxWidth={["320px", "480px", "610px"]}
        mr={["0px", "auto"]}
      >
        <Box
          as="button"
          backgroundColor="transparent"
          border="none"
          width={["85px"]}
          mb="10px"
          onClick={prevStep}
          textAlign="left"
        >
          <Typography variant="caption9" color="white">
            <b>&lt;</b> Regresar
          </Typography>
        </Box>
        <Flex
          display="flex"
          alignItems="center"
          mb={["15px"]}
          width={["108%", "100%"]}
        >
          <Box
            backgroundImage={`url(${number3Red})`}
            height="28px"
            width="28px"
            backgroundSize="cover"
            mr={["3px"]}
            alignItems="center"
          />
          <Typography
            variant={["caption2", "caption2", "caption1"]}
            color="white"
          >
            CÓDIGO DE&nbsp;
          </Typography>
          <Typography
            variant={["caption2", "caption2", "caption1"]}
            color="#fa4d09"
          >
            VERIFICACIÓN
          </Typography>
        </Flex>
        <Typography
          variant={["caption4", "caption4", "caption3"]}
          color="white"
          textAlign="left"
          mb={["10px"]}
        >
          Te enviamos un SMS al número:
          <br />
          +52 55 1850 9196
        </Typography>
        <Typography
          variant={["caption4"]}
          color="white"
          textAlign="left"
          mb={["20px"]}
        >
          Ingresa el código de verificación:
        </Typography>
        <form>
          <Flex
            flexDirection="column"
            alignItems="flex-start"
            color="white"
            position="relative"
            width="100%"
          >
            <label>
              <Typography variant={["caption9"]}>
                Código de verificación
              </Typography>
            </label>
            <input
              type="num"
              value={formData?.codigoVerificacion}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  codigoVerificacion: event.target.value,
                })
              }
            />
          </Flex>
        </form>
        <Typography
          color="white"
          variant={["caption9"]}
          textAlign="left"
          mt={["10px", "20px"]}
        >
          ¿No recibiste el código? <b>Reenviar código</b>
        </Typography>
        <OrangeButton
          text="Validar Código"
          nextStep={nextStep}
          val={formData.codigoVerificacion === "" ? "disabled" : ""}
        />
      </Flex>
    </Flex>
  );
};

export default FormCodigoVerificacion;

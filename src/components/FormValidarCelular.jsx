import Flex from "./atoms/Flex";
import Typography from "./atoms/Typography";
import Box from "./atoms/Box";

import OrangeButton from "./OrangeButton";

import number2Red from "../assets/number2Red.png";

const FormValidarCelular = ({ nextStep, formData, setFormData, prevStep }) => {
  //debugger;
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
        width={["85%", "100%"]}
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
        <Flex display="flex" alignItems="center" mb={["15px"]}>
          <Box
            backgroundImage={`url(${number2Red})`}
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
            VALIDA TU&nbsp;
          </Typography>
          <Typography
            variant={["caption2", "caption2", "caption1"]}
            color="#fa4d09"
          >
            CELULAR
          </Typography>
        </Flex>
        <Typography
          variant={["caption4", "caption4", "caption3"]}
          color="white"
          textAlign="left"
          mb={["10px"]}
        >
          Necesitamos validar tu número para continuar:
        </Typography>
        <Typography
          variant={["caption9"]}
          color="white"
          textAlign="left"
          mb={["20px"]}
        >
          Ingresa tu número a 10 dígitos y te enviaremos un código SMS.
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
              <Typography variant={["caption4"]}>Número de Celular</Typography>
            </label>
            <input
              type="tel"
              pattern="/^\d{10}$/"
              required
              value={formData?.celular}
              onChange={(event) =>
                setFormData({ ...formData, celular: event.target.value })
              }
            />
          </Flex>
        </form>
        <OrangeButton
          text="Continuar"
          nextStep={nextStep}
          val={formData.celular === "" ? "disabled" : ""}
        />
      </Flex>
    </Flex>
  );
};
export default FormValidarCelular;

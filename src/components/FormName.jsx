import Flex from "./atoms/Flex";
import Typography from "./atoms/Typography";
import Box from "./atoms/Box";

import OrangeButton from "./OrangeButton";

import number1 from "../assets/number1.png";

const FormNameSurname = ({ nextStep, formData, setFormData, completeForm }) => {
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
        <Flex display="flex" alignItems="center" mb={["15px"]}>
          <Box
            backgroundImage={`url(${number1})`}
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
            TE QUEREMOS&nbsp;
          </Typography>
          <Typography
            variant={["caption2", "caption2", "caption1"]}
            color="#fa4d09"
          >
            CONOCER
          </Typography>
        </Flex>
        <Typography
          variant={["caption4", "caption4", "caption3"]}
          color="white"
          textAlign="left"
          mb={["20px"]}
        >
          Queremos saber que eres tú, por favor ingresa los siguientes datos:
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
              <Typography variant={["caption4"]}>Nombre(s)</Typography>
            </label>
            <input
              type="name"
              required
              pattern="[A-Za-z]{5}"
              title="Username should only contain 5 characters at least"
              value={formData?.nombre}
              onChange={(event) =>
                setFormData({ ...formData, nombre: event.target.value })
              }
            />

            <label>
              <Typography variant={["caption4"]}>Apellidos</Typography>
            </label>
            <input
              type="text"
              required
              value={formData?.apellido}
              onChange={(event) =>
                setFormData({ ...formData, apellido: event.target.value })
              }
            ></input>
          </Flex>
        </form>

        <OrangeButton
          text="Enviar"
          nextStep={nextStep}
          val={
            formData.apellido === "" || formData.nombre === "" ? "disabled" : ""
          }
          //disabled={{ ...formData, apellido: "", name: "" } ? "disabled" : ""}
        />
      </Flex>
    </Flex>
  );
};

export default FormNameSurname;

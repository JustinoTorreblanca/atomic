import Flex from "./atoms/Flex";
import Typography from "./atoms/Typography";
import Box from "./atoms/Box";

import OrangeButton from "./OrangeButton";

import number4Red from "../assets/number4Red.png";
import terminos from "../assets/terminos.png";

import { useState } from "react";

const TerminosCondiciones = ({ nextStep, prevStep, formData, setFormData }) => {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Flex
        justifyContent={["center", "flex-start"]}
        alignItems="center"
        //px={["0px", "60px"]}
        pb={["30px"]}
        mt={["20px"]}
        width="100%"
        flexDirection={["column", "row"]}
        maxWidth="1200px"
        position="relative"
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
          <Flex
            display="flex"
            alignItems="center"
            mb={["15px"]}
            width={["108%", "100%"]}
          >
            <Box
              backgroundImage={`url(${number4Red})`}
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
              TÉRMINOS Y&nbsp;
            </Typography>
            <Typography
              variant={["caption2", "caption2", "caption1"]}
              color="#fa4d09"
            >
              CONDICIONES
            </Typography>
          </Flex>
          <Typography
            variant={["caption4", "caption4", "caption3"]}
            color="white"
            textAlign="left"
            mb={["10px"]}
          >
            Por favor revisa nuestros términos y condiciones para este servicio:
          </Typography>
          <Typography
            variant={["caption4"]}
            as="button"
            backgroundColor="transparent"
            color="white"
            textAlign="left"
            mb={["20px"]}
            style={{ textDecoration: "underline", border: "none" }}
            onClick={openModal}
          >
            Consulta Términos y condiciones
          </Typography>
          <form>
            <Flex
              flexDirection="row"
              alignItems="flex-start"
              color="white"
              position="relative"
              width="100%"
            >
              <input
                type="checkbox"
                className="checkbox-terminos"
                onChange={(event) =>
                  setFormData({ ...formData, aceptaTerminos: true })
                }
              />
              <label>
                <Typography variant={["caption9"]}>
                  Acepto los Términos y Condiciones
                </Typography>
              </label>
            </Flex>
          </form>

          <OrangeButton
            text="Enviar"
            nextStep={() => [nextStep(), console.log(formData)]}
            val={formData.aceptaTerminos === false ? "disabled" : ""}
          />
        </Flex>
      </Flex>
      <ModalTerminos isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default TerminosCondiciones;

export const ModalTerminos = ({ isOpen, closeModal }) => {
  return (
    <Box
      position="fixed"
      width="100%"
      height="100vh"
      justifyContent="center"
      backgroundColor="rgba(0,0,0, 0.75)"
      alignItems="center"
      top="0vh"
      right="0vh"
      className={`modal ${isOpen && "is-open"}`}
      zIndex="2"
    >
      <Flex
        backgroundImage={`url(${terminos})`}
        height={["290px", "380px"]}
        width={["300px", "400px"]}
        backgroundSize="cover"
        backgroundPosition="center"
        justifyContent="start"
        maxWidth={["680px"]}
        className={`modal ${isOpen && "is-open"}`}
      />
      <Flex
        as="button"
        borderRadius="20px"
        backgroundColor="#fa4d09"
        border="none"
        color="white"
        width={["150px"]}
        height="30px"
        p="10px"
        justifyContent="center"
        alignItems="center"
        mt="16px"
        onClick={closeModal}
      >
        <Typography variant={["caption8"]} color="white">
          Acepto
        </Typography>
      </Flex>
    </Box>
  );
};

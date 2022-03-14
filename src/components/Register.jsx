import Flex from "./atoms/Flex";
import Box from "./atoms/Box";

import { useState } from "react";

import Header from "./Header";
import FormCodigoVerificacion from "./FormCodigoVerificacion";
import FormValidarCelular from "./FormValidarCelular";
import FormNameSurname from "./FormName";
import TerminosCondiciones from "./TerminosCondiciones";

import number1 from "../assets/number1.png";
import number2 from "../assets/number2.png";
import number3 from "../assets/number3.png";
import number4 from "../assets/number4.png";
import firstStep from "../assets/firstStep.png";
import redCheck from "../assets/redCheck.png";
import number2Red from "../assets/number2Red.png";
import number3Red from "../assets/number3Red.png";
import number4Red from "../assets/number4Red.png";
import Confirmacion from "./Confirmacion";

const Register = () => {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    celular: "",
    codigoVerificacion: "",
    aceptaTerminos: false,
    date: new Date(),
  });

  function nextStep() {
    setPage((page) => page + 1);
  }

  function prevStep() {
    setPage((page) => page - 1);
  }

  return (
    <Flex
      backgroundColor="#051d3c"
      width="100%"
      minHeight="100vh"
      justifyContent="flex-start"
      alignItems="center"
      flexDirection="column"
    >
      <Header />

      <Flex
        flexDirection="row"
        width="100%"
        justifyContent={["space-evenly"]}
        minWidth={["320px", "768px", "1152px"]}
      >
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          {page > 4 ? <Confirmacion /> : <ProgressBar page={page} />}

          {page === 1 && (
            <FormNameSurname
              nextStep={nextStep}
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {page === 2 && (
            <FormValidarCelular
              nextStep={nextStep}
              prevStep={prevStep}
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {page === 3 && (
            <FormCodigoVerificacion
              nextStep={nextStep}
              prevStep={prevStep}
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {page === 4 && (
            <TerminosCondiciones
              nextStep={nextStep}
              prevStep={prevStep}
              page={page}
              formData={formData}
              setFormData={setFormData}
            />
          )}
        </Flex>
        <Box
          display={["none", "flex"]}
          backgroundImage={`url(${firstStep})`}
          backgroundPosition="center"
          backgroundSize="cover"
          width={["0px", "250px", "310px"]}
          height={["0px", "310px", "370px"]}
        />
      </Flex>
    </Flex>
  );
};

export default Register;

const ProgressBar = (page) => {
  return (
    <Flex
      height="20px"
      width="93%"
      borderRadius="20px"
      backgroundColor="white"
      mt="30px"
      mr={["0px", "auto"]}
      mb={["15px"]}
      maxWidth={["280px", "unset"]}
      minWidth={["280px", "435px"]}
      /* maxWidth="1000px" */
    >
      <Box
        className={page.page === 1 ? "redStep1" : "borderUnset1"}
        height="20px"
        width="25%"
        position="relative"
      >
        <Box
          backgroundImage={`url(${page.page === 1 ? number1 : redCheck})`}
          width="24px"
          height="24px"
          position="absolute"
          right="-10px"
          top="-33px"
          backgroundPosition="center"
          backgroundSize="cover"
        />
      </Box>
      <Box
        height="20px"
        width="25%"
        position="relative"
        className={
          (page.page > 1 ? "red" : "") &&
          (page.page === 2 ? "redStep2" : "borderUnset")
        }
      >
        <Box
          backgroundImage={`url(${
            (page.page < 2 ? number2 : number2Red) &&
            (page.page > 2 ? redCheck : number2)
          })`}
          width="24px"
          height="24px"
          position="absolute"
          right="-10px"
          top="-33px"
          backgroundPosition="center"
          backgroundSize="cover"
        />
      </Box>
      <Box
        height="20px"
        width="25%"
        position="relative"
        className={
          (page.page > 2 ? "red" : "") &&
          (page.page === 3 ? "redStep2" : "borderUnset")
        }
      >
        <Box
          backgroundImage={`url(${
            (page.page < 3 ? number3 : number3Red) &&
            (page.page > 3 ? redCheck : number3)
          })`}
          width="24px"
          height="24px"
          position="absolute"
          right="-10px"
          top="-33px"
          backgroundPosition="center"
          backgroundSize="cover"
        />
      </Box>
      <Box
        height="20px"
        width="25%"
        position="relative"
        className={page.page > 3 ? "red" : ""}
        borderTopRightRadius="10px"
        borderBottomRightRadius="10px"
      >
        <Box
          backgroundImage={`url(${
            (page.page > 4 ? redCheck : number4) &&
            (page.page === 4 ? number4Red : number4)
          })`}
          width="24px"
          height="24px"
          position="absolute"
          right="-10px"
          top="-33px"
          backgroundPosition="center"
          backgroundSize="cover"
        />
      </Box>
    </Flex>
  );
};

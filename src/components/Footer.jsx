import Flex from "./atoms/Flex";
import Typography from "./atoms/Typography";

import twitterLogo from "../assets/twitterLogo.png";
import linkedinLogo from "../assets/linkedinLogo.png";

import { useState } from "react";

import { ModalTerminos } from "./TerminosCondiciones";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Flex
      backgroundColor="#000000"
      color="white"
      width="100%"
      minHeight={["200px", "50px"]}
      justifyContent={["space-around"]}
      alignItems="center"
      px={["16px"]}
      py={["16px"]}
      flexDirection={["column", "row"]}
    >
      <Typography variant="caption8">
        © 2020 AtomicLabs. Todos los derechos reservados.
      </Typography>
      <Typography
        variant="caption8"
        as="a"
        style={{ textDecoration: "underline" }}
        onClick={openModal}
      >
        Aviso de privacidad
      </Typography>
      <Flex flexDirection="column">
        <Flex flexDirection="row" justifyContent={["space-around"]}>
          <a
            href="https://www.linkedin.com/company/atomic-mexico/"
            target="_blank"
            rel="noreferrer"
          >
            <Flex
              backgroundImage={`url(${linkedinLogo})`}
              backgroundSize={["cover"]}
              backgroundRepeat="no-repeat"
              backgroundPosition="center"
              width="32px"
              height="32px"
              mr={["20px", "20px", "30px"]}
            />
          </a>
          <a
            href="https://twitter.com/atomicmexico"
            target="_blank"
            rel="noreferrer"
          >
            <Flex
              backgroundImage={`url(${twitterLogo})`}
              backgroundSize={["cover"]}
              backgroundRepeat="no-repeat"
              backgroundPosition="center"
              width="34px"
              height="32px"
            />
          </a>
        </Flex>
      </Flex>
      <ModalTerminos isOpen={isOpen} closeModal={closeModal} />
    </Flex>
  );
};

export default Footer;

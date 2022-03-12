import Flex from "./atoms/Flex";
import Typography from "./atoms/Typography";

import twitterLogo from "../assets/twitterLogo.png";
import linkedinLogo from "../assets/linkedinLogo.png";

const Footer = () => {
  return (
    <Flex
      backgroundColor="#000000"
      color="white"
      width="100%"
      minHeight={["200px", "120px"]}
      justifyContent={["space-around"]}
      alignItems="center"
      px={["16px"]}
      py={["16px"]}
      flexDirection={["column", "row"]}
    >
      <Typography variant="caption8">
        © 2020 AtomicLabs. Todos los derechos reservados.
      </Typography>
      <Typography variant="caption8" style={{ textDecoration: "underline" }}>
        Aviso de privacidad
      </Typography>
      <Flex flexDirection="column">
        <Flex flexDirection="row" justifyContent={["space-around"]}>
          <Flex
            backgroundImage={`url(${linkedinLogo})`}
            backgroundSize={["cover"]}
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
            width="32px"
            height="32px"
            mr={["20px", "20px", "30px"]}
          />
          <Flex
            backgroundImage={`url(${twitterLogo})`}
            backgroundSize={["cover"]}
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
            width="34px"
            height="32px"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;

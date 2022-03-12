import Flex from "./atoms/Flex";
import Typography from "./atoms/Typography";

const ButtonQuieroSerParte = () => {
  return (
    <Flex
      as="button"
      border="none"
      borderRadius="20px"
      width={["215px", "225px", "270px"]}
      backgroundColor="white"
      py="10px"
      justifyContent="center"
      my={["15px"]}
    >
      <Typography
        color="#00609c"
        fontWeight="700"
        fontSize={["18px", "18px", "20px"]}
      >
        ¡Quiero ser parte!
      </Typography>
    </Flex>
  );
};
export default ButtonQuieroSerParte;

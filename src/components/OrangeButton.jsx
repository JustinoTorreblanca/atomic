import Flex from "./atoms/Flex";
import Typography from "./atoms/Typography";

const OrangeButton = ({ text, nextStep, val }) => {
  //debugger;
  return (
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
      mr={["auto", "0px"]}
      ml={["auto"]}
      onClick={nextStep}
      disabled={val}
    >
      <Typography variant={["caption8"]}>{text}</Typography>
    </Flex>
  );
};

export default OrangeButton;

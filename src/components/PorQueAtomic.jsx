import Flex from "./atoms/Flex";
import Typography from "./atoms/Typography";
import trabajoEquipo from "../assets/trabajoEquipo.png";
import tecnologia from "../assets/tecnologia.png";
import actividadesRecreativas from "../assets/actividadesRecreativas.png";
import check from "../assets/check.png";
import ButtonQuieroSerParte from "./ButtonQuieroSerParte";

const PorQueAtomic = () => {
  return (
    <Flex backgroundColor="#072348" position="relative">
      <Flex
        flexDirection="column"
        alignItems="center"
        backgroundColor="#00609c"
        position="relative"
        width="100%"
        borderTopRightRadius={["90px", "140px"]}
        borderTopLeftRadius={["90px", "140px"]}
        className="container"
        //maxHeight={["1633px", " 1346px", "1357px"]}
      >
        <Beneficios />
      </Flex>
    </Flex>
  );
};

export default PorQueAtomic;

const Beneficios = () => {
  return (
    <Flex
      flexWrap={["wrap"]}
      style={{ gap: "35px" }}
      position={"absolute"}
      top={["-115px", "-175px", "-200px"]}
      py="20px"
      my={["10px", "50px"]}
      justifyContent="center"
      alignItems="center"
      maxWidth="1440px"
    >
      <Flex
        flexDirection="column"
        alignItems="center"
        //position="absolute"
        top={["-85px"]}
        minWidth="300px"
        maxWidth={["320px", "320px", "395px"]}
      >
        <Flex
          backgroundSize={["cover"]}
          backgroundImage={`url(${tecnologia})`}
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          height={["190px", "240px", "280px"]}
          width={["150px", "185px", "200px"]}
        />

        <Flex alignItems="center" mb="8px">
          <Check />
          <Typography
            variant={["caption5", "caption5", "caption6"]}
            color="white"
            textAlign="left"
          >
            Usamos las tecnologías más modernas.
          </Typography>
        </Flex>
        <Flex alignItems="center" mb="8px">
          <Check />
          <Typography
            variant={["caption5", "caption5", "caption6"]}
            color="white"
            textAlign="left"
          >
            Innovamos y creamos proyectos retadores.
          </Typography>
        </Flex>
      </Flex>

      <Flex
        flexDirection="column"
        alignItems="center"
        //position="absolute"
        top={["-85px"]}
        minWidth="300px"
        maxWidth={["320px", "320px", "395px"]}
      >
        <Flex
          backgroundSize={["cover"]}
          backgroundImage={`url(${trabajoEquipo})`}
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          height={["190px", "220px", "280px"]}
          width={["150px", "185px", "200px"]}
          mb={["20px", "30px"]}
          mt={["-20px", "-20px", "-40px"]}
        />

        <Flex alignItems="center" mb="8px">
          <Check />
          <Typography
            variant={["caption5", "caption5", "caption6"]}
            color="white"
            textAlign="left"
          >
            ¡Trabajamos en equipo rumbo al éxito!
          </Typography>
        </Flex>
        <Flex alignItems="center" mb="8px">
          <Check />
          <Typography
            variant={["caption5", "caption5", "caption6"]}
            color="white"
            textAlign="left"
          >
            No tenemos código de vestimenta.
          </Typography>
        </Flex>
      </Flex>

      <Flex
        flexDirection="column"
        alignItems="center"
        //position="absolute"
        top={["-85px"]}
        minWidth="300px"
        maxWidth={["320px", "320px", "395px"]}
      >
        <Flex
          backgroundSize={["cover"]}
          backgroundImage={`url(${actividadesRecreativas})`}
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          height={["190px", "240px", "280px"]}
          width={["140px", "174px", "200px"]}
          mb={["20px", "30px"]}
          mt={["-20px", "-20px", "-40px"]}
        />

        <Flex alignItems="center" mb="8px">
          <Check />
          <Typography
            variant={["caption5", "caption5", "caption6"]}
            color="white"
            textAlign="left"
          >
            Realizamos actividades para tu bienestar.
          </Typography>
        </Flex>
        <Flex alignItems="center" mb="8px">
          <Check />
          <Typography
            variant={["caption5", "caption5", "caption6"]}
            color="white"
            textAlign="left"
          >
            ¡Tenemos un parque frente a la oficina!
          </Typography>
        </Flex>
      </Flex>

      <TablaCaracteristicas />
      <Flex width="100%" justifyContent="center">
        <ButtonQuieroSerParte />
      </Flex>
    </Flex>
  );
};

const Check = () => {
  return (
    <Flex
      height={["32px", "50px"]}
      width={["32px", "50px"]}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="contain"
      backgroundImage={`url(${check})`}
      ml={["20px"]}
      mr={["10px"]}
    />
  );
};

const TablaCaracteristicas = () => {
  return (
    <Flex
      //position="absolute"
      //bottom={["55px"]}
      backgroundColor="white"
      borderRadius="10px"
      //width={["300px"]}
      //overflow={["scroll"]}
      mt={["10px", "10px", "40px"]}
      className="tableContainer"
    >
      <table>
        <tbody>
          <tr>
            <th className="alignLeft">
              <Typography color="#0d2442" variant="caption7">
                CARACTERISTICAS
              </Typography>
            </th>
            <th width="150px" className="borderLeft">
              <Typography color="#0d2442" variant="caption7">
                OTROS
              </Typography>
            </th>
            <th width="220px" className="headAtomic">
              <Typography color="#0d2442" variant="caption1">
                ATOMIC
              </Typography>
            </th>
          </tr>

          <tr>
            <td className="alignLeft borderTopBottom">
              <Typography variant={["caption3"]} color="#0d2442">
                Equipo inclusivo, honesto y auténtico
              </Typography>
            </td>
            <td className="borderLeft borderTopBottom">
              <Flex
                backgroundImage={`url(${check})`}
                backgroundPosition="center"
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                width="20px"
                height="20px"
                mx="auto"
              />
            </td>
            <td className="columnAtomic borderAtomic">
              <Flex
                backgroundImage={`url(${check})`}
                backgroundPosition="center"
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                width="24px"
                height="24px"
                mx="auto"
                className="columnAtomic"
              />
            </td>
          </tr>

          <tr>
            <td className="alignLeft">
              <Typography variant={["caption3"]} color="#0d2442">
                Puntualidad es nuestro segundo nombre
              </Typography>
            </td>
            <td className="borderLeft">
              <Flex
                backgroundImage={`url(${check})`}
                backgroundPosition="center"
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                width="20px"
                height="20px"
                mx="auto"
              />
            </td>
            <td className="columnAtomic ">
              <Flex
                backgroundImage={`url(${check})`}
                backgroundPosition="center"
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                width="24px"
                height="24px"
                mx="auto"
                className="columnAtomic"
              />
            </td>
          </tr>

          <tr>
            <td className="alignLeft borderTopBottom">
              <Typography variant={["caption3"]} color="#0d2442">
                Siempre innovamos en nuestros productos
              </Typography>
            </td>
            <td className="borderLeft borderTopBottom">
              <Flex
                backgroundImage={`url(${check})`}
                backgroundPosition="center"
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                width="20px"
                height="20px"
                mx="auto"
              />
            </td>

            <td className="columnAtomic borderAtomic">
              <Flex
                backgroundImage={`url(${check})`}
                backgroundPosition="center"
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                width="24px"
                height="24px"
                mx="auto"
              />
            </td>
          </tr>
          <tr>
            <td className="alignLeft">
              <Typography variant={["caption3"]} color="#0d2442">
                Te ayudamos a crecer e implementar nuevos conocimientos
              </Typography>
            </td>
            <td className="borderLeft"></td>

            <td className="columnAtomic">
              <Flex
                backgroundImage={`url(${check})`}
                backgroundPosition="center"
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                width="24px"
                height="24px"
                mx="auto"
              />
            </td>
          </tr>

          <tr>
            <td className="alignLeft borderTopBottom">
              <Typography variant={["caption3"]} color="#0d2442">
                Nos preocupamos por tu bienestar
              </Typography>
            </td>
            <td className="borderLeft borderTopBottom"></td>
            <td className="columnAtomic borderAtomic">
              <Flex
                backgroundImage={`url(${check})`}
                backgroundPosition="center"
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                width="24px"
                height="24px"
                mx="auto"
              />
            </td>
          </tr>

          <tr className="paddingBottom">
            <td className="alignLeft">
              <Typography variant={["caption3"]} color="#0d2442">
                El respeto es una parte fundamental
              </Typography>
            </td>
            <td className="borderLeft"></td>
            <td
              className="columnAtomic"
              style={{ borderBottomRightRadius: "10px" }}
            >
              <Flex
                backgroundImage={`url(${check})`}
                backgroundPosition="center"
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                width="24px"
                height="24px"
                mx="auto"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </Flex>
  );
};

import Hero from "./components/Hero";
import GlobalStyle from "./GlobalStyles";
import Flex from "./components/atoms/Flex";
import Banner from "./components/Banner";
import PorQueAtomic from "./components/PorQueAtomic";
import Footer from "./components/Footer";

function App() {
  return (
    <Flex flexDirection="column">
      <GlobalStyle />

      <Hero />
      <Banner />
      <PorQueAtomic />
      <Footer />
    </Flex>
  );
}

export default App;

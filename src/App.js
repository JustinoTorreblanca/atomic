import GlobalStyle from "./GlobalStyles";

import Hero from "./components/Hero";
import Flex from "./components/atoms/Flex";
import Footer from "./components/Footer";
import Register from "./components/Register";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Flex flexDirection="column">
      <GlobalStyle />
      <Router>
        <Routes>
          <Route exact path="/*" element={<Hero />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>

        <Footer />
      </Router>
    </Flex>
  );
}

export default App;

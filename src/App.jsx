import { ChakraProvider, theme } from "@chakra-ui/react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { About } from "./modules/About/About";
import { Contact } from "./modules/Contact/Contact";
import { Faq } from "./modules/Faq/Faq";
import { Hero } from "./modules/Hero/Hero";
import { Service } from "./modules/Service/Service";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Service />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

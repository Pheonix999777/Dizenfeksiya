import { ChakraProvider } from "@chakra-ui/react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { About } from "./modules/About/About";
import { Contact } from "./modules/Contact/Contact";
import { Faq } from "./modules/Faq/Faq";
import { Hero } from "./modules/Hero/Hero";
import { Service } from "./modules/Service/Service";
import "./modules/Translations/Translations";

function App() {
  return (
    <>
      <ChakraProvider>
        <Header />
        <Hero />
        <About />
        <Service />
        <Faq />
        <Contact />
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default App;

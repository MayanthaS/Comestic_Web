import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Header from "./Component/Header.jsx";
import Hero from "./Component/Hero.jsx";
import Services from "./Component/Services.jsx";
import About from "./Component/About.jsx";
import Specialist from "./Component/Specialist.jsx";
import Contact from "./Component/Contact.jsx";
import Footer from "./Component/Footer.jsx";
const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <div>
      <Header />
      <Hero />
      <Services/>
      <About/>
      <Specialist/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;

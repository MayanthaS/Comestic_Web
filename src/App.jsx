import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Header from "./Component/Header.jsx";
import Hero from "./Component/Hero.jsx";

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
    </div>
  );
};

export default App;

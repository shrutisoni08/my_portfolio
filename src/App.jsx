import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      {/* <title>My Portfolio</title> */}
      <BrowserRouter>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Work />
        <Projects />
        <Contact />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

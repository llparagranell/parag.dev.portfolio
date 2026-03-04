import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Contact from "./components/Contact";

const Portfolio = () => (
  <div style={{ color: "#e5e7eb", fontFamily: "Poppins, sans-serif", scrollBehavior: "smooth" }}>
    <GlobalStyles />
    <Navbar />
    <Hero />
    <Skills />
    <Projects />
    <Achievements />
    <Education />
    <Contact />
  </div>
);

export default Portfolio;

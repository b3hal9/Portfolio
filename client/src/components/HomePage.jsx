import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import HomeSection from "./layouts/HomeSection";
import About from "./layouts/About";
import Services from "./layouts/Services";
import Education from "./layouts/Education";
import Footer from "./common/Footer";
import Projects from "./layouts/Projects";
import Contact from "./layouts/Contact";

const HomePage = () => {
  return (
    <Router>
      <Navbar />

      <HomeSection />
      <About />
      <Services />
      <Education />
      <Projects />
      <Contact />
      <Footer />
      <button
        class="top fas fa-arrow-up"
        style={{ display: "inline-block" }}
      ></button>
    </Router>
  );
};

export default HomePage;

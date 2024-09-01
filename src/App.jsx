import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Projects from "./components/MyProjects/Projects";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Header />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

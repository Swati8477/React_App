import React from "react";
import Navbar from "./NavBar/Navbar";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import About from "./Comp/About";
import Contact from "./Comp/Contact";
import { Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
};

const Aboutus = () => {
  return (
    <>
      <Navbar />
      <About />
    </>
  );
};

const Service = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Sunfox Technology Service Page</h1>
      </section>
    </>
  );
};

const Contactus = () => {
  return (
    <>
      <Navbar />
      <Contact />
    </>
  );
};

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />

      <Route path="/about" element={<Aboutus />} />

      <Route path="/service" element={<Service />} />

      <Route path="/contact" element={<Contactus />} />
    </Routes>
  );
};

export default App;

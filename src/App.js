import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import ContactForm from "./components/contactform/ContactForm";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="max-w-screen-2x1 mx-auto px-16">
    <Navbar />
    <Banner />
    <Projects />
    <Skills />
    <ContactForm />
    <Footer />
      </div>
    </div>
  );
}

export default App;

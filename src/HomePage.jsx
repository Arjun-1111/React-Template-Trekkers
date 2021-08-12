import React from "react";

// components
import Navbar from "./components/Navbar/Navbar.component";
import Hero from "./components/Hero/Hero.component";
import About from "./components/About/About.component";
import MidParallax from "./components/MidParallax/MidParallax.component";
import PopularTrek from "./components/PopularTrek/PopularTrek.component";
import Contact from "./components/Contact/Contact.component";
import Footer from "./components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <MidParallax
        Text="“Climb mountains, not so the world can see you, but so you can see the
        world!”"
      />
      <PopularTrek title="Popular Treks" />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;

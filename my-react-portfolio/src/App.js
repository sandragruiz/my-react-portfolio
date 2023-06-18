import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/AboutMe";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import React, { useEffect } from 'react';


function App() {
// Event listener for smooth scrolling
  useEffect(() => {
    const handleSmoothScroll = (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach((link) => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Clean up the event listener when the component unmounts
    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

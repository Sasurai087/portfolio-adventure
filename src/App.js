import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Cards from './components/Cards';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Cards />
      <About />
      <Contact />
    </>
  );
}

export default App;

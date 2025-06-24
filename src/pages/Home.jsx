import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/home.css';
import Hero from '../components/Hero';
import About from '../components/About';
import Episodes from '../components/Episodes';
import Footer from '../components/Footer';
import headphone from '/headphone_graphic.png';
import microphone from '/microphone_graphic.png';

export default function HomePage() {
  return (
    <div className="min-h-screen" id="home-container">
      <div className="graphic-container">
        <img src={headphone} alt="headphone" className="floating headphone headphone-1" />
        <img src={headphone} alt="headphone" className="floating headphone headphone-2" />
        <img src={headphone} alt="headphone" className="floating headphone headphone-3" />
        <img src={microphone} alt="microphone" className="floating mic mic-1" />
        <img src={microphone} alt="microphone" className="floating mic mic-2" />
        <img src={microphone} alt="microphone" className="floating mic mic-3" />
      </div>
      <Navbar />
      <Hero />
      <div className="bottom-half">
        <About />
        <Episodes />
      </div>
  
      <Footer />
    </div>
  );
}

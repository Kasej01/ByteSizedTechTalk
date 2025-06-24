import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/home.css';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import headphone from '/headphone_graphic.png';
import microphone from '/microphone_graphic.png';
// import Episodes from './components/Episodes';
// import Footer from './components/Footer';

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
      <AboutSection />
      {/*
      <Episodes />
      <Footer /> */}
    </div>
  );
}

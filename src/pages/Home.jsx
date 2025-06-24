import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/home.css';
// import Hero from './components/Hero';
// import About from './components/About';
// import Episodes from './components/Episodes';
// import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen" id="home-container">
      <Navbar />
      {/*<Hero />
      <About />
      <Episodes />
      <Footer /> */}
    </div>
  );
}

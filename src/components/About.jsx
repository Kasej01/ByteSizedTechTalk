import React from 'react';
import '../styles/about.css';

export default function About() {
  return (
    <div id="about-container">
      <div className="about-grid">
        <div className="about-text">
          <h2 className="about-title">Big Tech Ideas. <br />Byte-Sized.</h2>
          <p className="about-desc">
            This podcast aims to break down big tech topics—like AI, electricity, super-computing, emerging innovations, and more—into simple, 
            clear conversations for everyone, whether you're a tech expert or just curious. Let's grow our tech knowledge together.
          </p>
        </div>
        <div className="about-quote">
          <blockquote>
            "If you can't explain it simply, you don't understand it well enough." <br />– Albert Einstein
          </blockquote>
        </div>
      </div>
    </div>
  );
}

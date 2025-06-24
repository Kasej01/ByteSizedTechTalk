import React from 'react';
import '../styles/hero.css';

export default function Hero() {
  return (
    <div id="hero-container">
      <section className="hero-section">
        <div className="hero-background">
          <div className="grid-container">
            {/* Left Side */}
            <div className="hero-content">
              <h1 id="hero-title">Learning Tech, The Easy Way</h1>
              <button id="hero-button">Listen Now</button>
            </div>

            {/* Right Side */}
            <div className="social-media">
              <h2 className="social-title">Listen on:</h2>
              <ul className="podcast-links">
                <li>
                  <a
                    href="https://open.spotify.com/show/your-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    🎵 Spotify
                  </a>
                </li>
                <li>
                  <a
                    href="https://music.amazon.com/podcasts/your-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    📦 Amazon Music
                  </a>
                </li>
                <li>
                  <a
                    href="https://podcasts.apple.com/us/podcast/your-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    🍏 Apple Podcasts
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import '../styles/hero.css';
import SpotifyLogo from '/spotify_logo.png';
import AmazonLogo from '/amazon_music_logo.png';
import AppleLogo from '/apple_logo.png';

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
                  <img className="social-img" src={SpotifyLogo}/>Spotify
                  </a>
                </li>
                <li>
                  <a
                    href="https://music.amazon.com/podcasts/your-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                  <img className="social-img" src={AmazonLogo}/>Amazon Music
                  </a>
                </li>
                <li>
                  <a
                    href="https://podcasts.apple.com/us/podcast/your-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                  <img className="social-img" src={AppleLogo}/> Apple Podcasts
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

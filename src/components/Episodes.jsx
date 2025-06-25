import React from 'react';
import '../styles/episodes.css';
import SpotifyLogo from '/spotify_logo.png';
import AmazonLogo from '/amazon_music_logo.png';
import AppleLogo from '/apple_logo.png';


export default function Episodes() {
  return (
    <div className="min-h-screen" id="episodes-container">
      <h1 id="episodes-title">Latest Episode</h1>

      <p className="episodes-desc">Available On: </p>
      <a href="https://open.spotify.com/show/your-link"><img src={SpotifyLogo} className="social-logo"></img></a>
      <a href="https://music.amazon.com/podcasts/your-link"><img src={AmazonLogo} className="social-logo"></img></a>
      <a href="https://podcasts.apple.com/us/podcast/your-link"><img src={AppleLogo} className="social-logo"></img></a>
      
    </div>
  );
}

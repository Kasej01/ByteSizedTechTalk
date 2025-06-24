import React from 'react';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content footer-grid-container">
        {/* Branding */}
        <div className="footer-brand">
          <h3 className="footer-title">ByteSizedTech</h3>
          <p className="footer-text">Tech made simple, one byte at a time.</p>
        </div>

        {/* Social Media Icons */}
        <div className="footer-media-icons">
        <h4 className="footer-title">Follow Us</h4>
          <ul className="media-links">
            <li><a href="https://instagram.com/yourhandle" target="_blank" rel="noreferrer" className="footer-text">📸 Instagram</a></li>
            <li><a href="https://tiktok.com/@yourhandle" target="_blank" rel="noreferrer" className="footer-text">🎵 TikTok</a></li>
            <li><a href="https://facebook.com/yourpage" target="_blank" rel="noreferrer" className="footer-text">📘 Facebook</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4 className="footer-title">Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/episodes">Episodes</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Podcast Platforms */}
        <div className="footer-social">
          <h4 className="footer-title">Listen On</h4>
          <ul className="platform-links">
            <li><a href="https://open.spotify.com/show/yourlink" target="_blank" rel="noreferrer" className="footer-text">Spotify</a></li>
            <li><a href="https://music.amazon.com/podcasts/yourlink" target="_blank" rel="noreferrer" className="footer-text">Amazon Music</a></li>
            <li><a href="https://podcasts.apple.com/yourlink" target="_blank" rel="noreferrer" className="footer-text">Apple Podcasts</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ByteSizedTech. All rights reserved.</p>
      </div>
    </footer>
  );
}

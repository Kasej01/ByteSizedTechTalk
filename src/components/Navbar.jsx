import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <nav className="navbar navbar-expand-md nav-container navbar-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">ByteSizedTech</Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setExpanded(prev => !prev)}
          aria-controls="navbarContent"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`} id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={() => setExpanded(false)}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#episodes" onClick={() => setExpanded(false)}>Episodes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={() => setExpanded(false)}>Contact</a>
            </li>
            <li className="nav-item ms-md-3">
                <a href="mailto:bytesizedtechtalk@gmail.com" className="nav-link" aria-label="Email">
                    <i className="bi bi-envelope-fill"></i>
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="https://your-podcast-link.com"
                    target="_blank"
                    rel="noreferrer"
                    className="nav-link"
                    aria-label="Podcast"
                >
                    <i className="bi bi-mic-fill"></i>
                </a>
            </li>


          </ul>
        </div>
      </div>
    </nav>
  );
}

import React from 'react';
import '../styles/episodes.css';


export default function Episodes() {
  return (
    <div className="min-h-screen" id="episodes-container">
      <h1 id="episodes-title">Latest Episodes</h1>

      <button id="episodes-button" href="/Episodes">More Episodes...</button>
    </div>
  );
}

import React, { useEffect } from 'react';
import '../styles/questions.css';

export default function Questions() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://form.jotform.com/jsform/251754487860064';
    script.type = 'text/javascript';
    script.async = true;

    const container = document.getElementById('jotform-container');
    container.innerHTML = ''; // Clear in case it's re-rendered
    container.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen" id="questions-container">
      <h1 id="questions-title">Got a Tech Question or Topic Request?</h1>
      <h4 id="questions-desc">Submit it here - you might be featured in a future episode.</h4>
      <div id="jotform-container" className="questions-form"></div>

      <h4 id="email">Or email us @ ByteSizedTechTalk@gmail.com</h4>
    </div>
  );
}

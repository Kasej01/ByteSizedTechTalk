import React from 'react';
import '../styles/questions.css';

export default function Questions() {
  return (
    <div className="min-h-screen" id="questions-container">
        <h1 id="questions-title">Got a Tech Question or Topic Request?</h1>
        <h4 id="questions-desc">Submit it here - you might be featured in a future episode.</h4>
        <form
            action="https://getform.io/f/akknxyoa"
            method="POST"
            className="questions-form"
            >
            <input type="text" name="name" placeholder="Your name" required className="form-input form-name"/>
            <input type="email" name="email" placeholder="Your email (optional)"  className="form-input form-email"/>
            <textarea
                name="question"
                placeholder="What's your question?"
                required
                className="form-input form-question"
            />
            <button type="submit" id="questions-button" className="form-submit">Ask ByteSizedTech</button>
        </form>
    </div>
  );
}

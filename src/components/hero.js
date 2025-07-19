import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div style={{ textAlign: 'center', padding: '100px' }}>
      <h1>Build amazing projects with React</h1>
      <p>Start learning and create something awesome today. React helps you build fast, interactive UIs easily.</p>
      <Link to="/todo">
        <button>Get Started</button>
      </Link>
    </div>
  );
}

export default Hero;

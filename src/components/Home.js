import React from 'react';

function Home() {
  return (
    <section className="home-section">
      <div className="hero-banner">
        <h1>Welcome!</h1>
      </div>
      <div className="intro-content">
        <p>
          I'm a passionate and experienced Software Engineer with a strong background in
          full-stack development, embedded systems, and artificial intelligence.
          I thrive on solving complex problems and building innovative solutions.
        </p>
        <p>
          My expertise includes JavaScript (React, Node.js), Python, C/C++, and various
          tools and technologies related to AI/ML and embedded programming. I'm always
          eager to learn and apply new skills to create impactful software.
        </p>
        <p>
          This website showcases some of my key projects, work experience, and the
          skills I've developed throughout my career. Feel free to explore and get in touch!
        </p>
      </div>
      <div className="call-to-action">
        <button>View My Work</button>
      </div>
    </section>
  );
}

export default Home;

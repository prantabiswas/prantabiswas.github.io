import React from 'react';

function Skills() {
  return (
    <div>
      <h2>My Skills</h2>
      <p>A collection of technologies and tools I'm proficient with.</p>

      <h3>Programming Languages</h3>
      <ul className='skills-list'>
        <li>JavaScript (ES6+)</li>
        <li>Python</li>
        <li>Java</li>
        <li>C/C++</li>
        <li>TypeScript</li>
      </ul>

      <h3>Frontend Development</h3>
      <ul className='skills-list'>
        <li>React</li>
        <li>Redux</li>
        <li>HTML5</li>
        <li>CSS3/Sass</li>
        <li>Webpack</li>
      </ul>

      <h3>Backend Development</h3>
      <ul className='skills-list'>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>REST APIs</li>
        <li>GraphQL</li>
        <li>SQL (PostgreSQL, MySQL)</li>
        <li>NoSQL (MongoDB)</li>
      </ul>

      <h3>Embedded Systems</h3>
      <ul className='skills-list'>
        <li>Microcontrollers (e.g., ARM, AVR)</li>
        <li>RTOS</li>
        <li>IoT Protocols (MQTT, CoAP)</li>
      </ul>

      <h3>AI/Machine Learning</h3>
      <ul className='skills-list'>
        <li>TensorFlow</li>
        <li>PyTorch</li>
        <li>Scikit-learn</li>
        <li>NLP</li>
      </ul>

      <h3>Tools & Others</h3>
      <ul className='skills-list'>
        <li>Git & GitHub</li>
        <li>Docker</li>
        <li>Agile/Scrum</li>
        <li>CI/CD</li>
      </ul>
    </div>
  );
}

export default Skills;

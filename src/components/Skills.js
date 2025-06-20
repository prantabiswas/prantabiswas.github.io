import React from 'react';
// import './Skills.css'; // If you decide to create a separate CSS file

function Skills() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['JavaScript (ES6+)', 'Python', 'Java', 'C/C++', 'TypeScript']
    },
    {
      category: 'Frontend Development',
      skills: ['React', 'Redux', 'HTML5', 'CSS3/Sass', 'Webpack', 'Tailwind CSS']
    },
    {
      category: 'Backend Development',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'SQL (PostgreSQL, MySQL)', 'NoSQL (MongoDB)']
    },
    {
      category: 'AI/Machine Learning',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'Pandas']
    },
    {
      category: 'Embedded Systems',
      skills: ['Microcontrollers (ARM, AVR)', 'RTOS', 'IoT Protocols (MQTT, CoAP)', 'PlatformIO']
    },
    {
      category: 'Tools & DevOps',
      skills: ['Git & GitHub', 'Docker', 'CI/CD (Jenkins, GitHub Actions)', 'AWS', 'Firebase']
    }
  ];

  return (
    <section className="skills-section">
      <h2>My Skills</h2>
      <p className="skills-intro">A collection of technologies and tools I'm proficient with, organized by category.</p>
      <div className="skills-grid">
        {skillCategories.map((categoryItem) => (
          <div key={categoryItem.category} className="skill-card">
            <h3>{categoryItem.category}</h3>
            <ul className="skill-list">
              {categoryItem.skills.map((skill) => (
                <li key={skill} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

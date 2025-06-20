import React from 'react';

function Projects() {
  return (
    <div>
      <h2>My Projects</h2>
      <p>Here are some of the projects I've worked on, showcasing my skills and passion for development.</p>

      {/* Project Item 1 */}
      <div className='project-item' style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: '1px solid #eee' }}>
        <h3>Project Title 1</h3>
        <p><strong>Technologies Used:</strong> React, Node.js, MongoDB</p>
        <p>A brief description of the project, its goals, and your role. Highlight key features and achievements.</p>
        {/* <a href='#' target='_blank' rel='noopener noreferrer'>View Project/Demo</a> | <a href='#' target='_blank' rel='noopener noreferrer'>View Code</a> */}
      </div>

      {/* Project Item 2 */}
      <div className='project-item' style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: '1px solid #eee' }}>
        <h3>Project Title 2</h3>
        <p><strong>Technologies Used:</strong> Python, TensorFlow, Embedded C</p>
        <p>Another project description. Focus on different skills or challenges, perhaps related to AI or embedded systems.</p>
        {/* <a href='#' target='_blank' rel='noopener noreferrer'>View Project/Demo</a> | <a href='#' target='_blank' rel='noopener noreferrer'>View Code</a> */}
      </div>

      {/* Add more project items as needed */}
    </div>
  );
}

export default Projects;

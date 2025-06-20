import React from 'react';
// import './Projects.css'; // If you decide to create a separate CSS file

function Projects() {
  // Sample project data - replace with actual or more detailed data
  const projectData = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform with product listings, cart functionality, and user accounts. Focused on a seamless user experience.',
      technologies: 'React, Node.js, Express, MongoDB, Stripe API',
      demoLink: '#', // Replace with actual link
      codeLink: '#', // Replace with actual link
    },
    {
      id: 2,
      title: 'AI Powered Smart Thermostat',
      description: 'Developed firmware and cloud connectivity for a smart thermostat that learns user preferences using ML.',
      technologies: 'Python, TensorFlow Lite, C++, AWS IoT',
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 3,
      title: 'Portfolio Website (This one!)',
      description: 'A responsive personal portfolio website to showcase projects, skills, and experience. Built with React and modern CSS.',
      technologies: 'React, JavaScript, HTML, CSS',
      // demoLink: '#', // No demo link for itself usually
      codeLink: '#', // Link to its own repo if public
    }
  ];

  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <p className="projects-intro">Here are some of the projects I've worked on, showcasing my skills and passion for development.</p>
      <div className="projects-grid">
        {projectData.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-technologies">
              <strong>Technologies Used:</strong> {project.technologies}
            </p>
            <div className="project-links">
              {project.demoLink && project.demoLink !== '#' && (
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link-button">View Demo</a>
              )}
              {project.codeLink && project.codeLink !== '#' && (
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link-button">View Code</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

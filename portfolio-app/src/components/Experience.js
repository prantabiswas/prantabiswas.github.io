import React from 'react';

function Experience() {
  return (
    <div>
      <h2>Work Experience</h2>
      <p>A timeline of my professional roles and responsibilities.</p>

      {/* Experience Item 1 */}
      <div className='experience-item' style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: '1px solid #eee' }}>
        <h3>Senior Software Engineer at Company X</h3>
        <p><strong>Duration:</strong> January 2020 - Present</p>
        <ul>
          <li>Led development of feature Y using React and Node.js.</li>
          <li>Contributed to embedded systems project Z with C++.</li>
          <li>Mentored junior developers.</li>
        </ul>
      </div>

      {/* Experience Item 2 */}
      <div className='experience-item' style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: '1px solid #eee' }}>
        <h3>Software Developer at Company A</h3>
        <p><strong>Duration:</strong> June 2017 - December 2019</p>
        <ul>
          <li>Developed and maintained web applications using Python (Django/Flask).</li>
          <li>Worked on AI-driven data analysis tools.</li>
          <li>Collaborated in an Agile team environment.</li>
        </ul>
      </div>

      {/* Add more experience items as needed */}
    </div>
  );
}

export default Experience;

import React, { useState } from 'react';

const Navigation = () => {
    const [activeSection, setActiveSection] = useState('About Me');

  return (
    <nav>
      <ul>
        <li>
            <a href="#about" 
            className={activeSection === 'About Me' ? 'active' : ''}
            onClick={() => setActiveSection('About Me')}>About Me</a>
        </li>
        <li>
            <a href="#portfolio" 
            className={activeSection === 'Portfolio' ? 'active' : ''}
            onClick={() => setActiveSection('Portfolio')}>Portfolio</a>
        </li>
        <li>
            <a href="#contact" 
            className={activeSection === 'Contact' ? 'active' : ''}
            onClick={() => setActiveSection('Contact')}>Contact</a>
        </li>
        <li>
            <a href="#resume" 
            className={activeSection === 'Resume' ? 'active' : ''}
            onClick={() => setActiveSection('Resume')}>Resume</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

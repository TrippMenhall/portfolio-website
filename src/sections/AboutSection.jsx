import React from 'react';
import './AboutSection.modules.css';

export default function AboutSection({ scrollToSection }) {
  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <>
      <div className='about'>
        <p>Hi, I'm Dalton Menhall, but most people know me as <a href="#" className="name-hover">Tripp</a>. I'm a sophomore at Quinnipiac University studying Software Engineering and Cybersecurity, with a strong foundation in full-stack development, object-oriented programming, UI/UX design, and algorithm design. I'm proficient in Java, JavaScript, Kotlin, and React, and I focus on building scalable applications using Agile methodologies and modular code practices.</p>
        <p>I'm currently developing an <a href="#" onClick={(e) => handleSectionClick(e, 'projects')}>Android app</a> that pulls live NHL game data via a public API, using the MVVM architecture with Jetpack components. At the same time, I'm sharpening my front-end web skills in JavaScript, CSS, and React. Overall, my biggest strengths in coding are breaking down complex problems, rapidly identifying bugs, and translating high-level requirements into intuitive, user-focused solutions.</p>
        <p>This summer, I'll be joining Virtru as a <a href="#" onClick={(e) => handleSectionClick(e, 'experience')}>Software Development Intern</a>, where I'm excited to gain hands-on industry experience. Outside of tech, I enjoy playing volleyball and capturing sports through photography and videography.</p>
      </div>
    </>
  );
} 
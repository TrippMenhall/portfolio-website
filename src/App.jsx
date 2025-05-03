import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import SocialButton from './SocialButton';
import githubMark from './assets/github-icon.svg';
import linkedMark from './assets/linkedIn-icon.svg';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import PhotoPortfolioButton from './components/PhotoPortfolioButton';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
];

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isTripp, setIsTripp] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [hideTooltip, setHideTooltip] = useState(false);
  const sectionRefs = useRef({});
  const mainContentRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const offset = 100;
    const element = sectionRefs.current[sectionId];
    const mainContent = mainContentRef.current;
    const y = element.offsetTop - offset;
    mainContent.scrollTo({ top: y, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = mainContentRef.current.scrollTop + 120; // offset for header
      let currentSection = 'about';
      for (const section of sections) {
        const ref = sectionRefs.current[section.id];
        if (ref && ref.offsetTop <= scrollPosition) {
          currentSection = section.id;
        }
      }
      setActiveSection(currentSection);
    };
    const mainContent = mainContentRef.current;
    mainContent.addEventListener('scroll', handleScroll);
    return () => mainContent.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNameClick = () => {
    setIsTripp((prev) => !prev);
    setAnimate(true);
    setHideTooltip(true);
    setTimeout(() => setAnimate(false), 500);
    setTimeout(() => setShowTooltip(false), 500); // Remove from DOM after fade
  };

  return (
    <div className="outer-container">
      <div className="container">
        <aside className="sidebar">
          <div style={{ position: 'relative' }}>
            {showTooltip && (
              <div className={`nickname-tooltip${hideTooltip ? ' hide' : ''}`}>
                Click to see my nickname ↓
                <div className="nickname-tooltip-arrow" />
              </div>
            )}
            <h1
              className={`sidebar-title clickable-name${isTripp ? ' tripp' : ''}${animate ? ' animate' : ''}`}
              onClick={handleNameClick}
            >
              {isTripp ? 'Tripp Menhall' : 'Dalton Menhall'}
            </h1>
            <h2 className="sidebar-role">Software Engineer</h2>
            <p className="sidebar-desc">
              Sophomore studying Software Engineering at Quinnipiac University.
            </p>
            <nav className="section-list">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`section-link${activeSection === section.id ? ' active' : ''}`}
                  onClick={e => {
                    e.preventDefault();
                    scrollToSection(section.id);
                  }}
                >
                  {section.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="sidebar-footer">
            <SocialButton image={githubMark} link="https://github.com/TrippMenhall" alt="GitHub" />
            <SocialButton image={linkedMark} link="https://www.linkedin.com/in/dalton-menhall/" alt="LinkedIn" />
          </div>
        </aside>
        <main className="main-content" ref={mainContentRef}>
          <section
            id="about"
            ref={el => (sectionRefs.current['about'] = el)}
            className="section"
          >
            <AboutSection scrollToSection={scrollToSection} />
          </section>
          <section
            id="experience"
            ref={el => (sectionRefs.current['experience'] = el)}
            className="section"
          >
            <ExperienceSection />
          </section>
          <section
            id="projects"
            ref={el => (sectionRefs.current['projects'] = el)}
            className="section"
          >
            <ProjectsSection />
          </section>
          <div className='photo-text'>
            <p>Photography & Videography Portfolio: </p>
            <PhotoPortfolioButton />
          </div>
          <div className='foot-text'>
            <p>Coded in <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Visual Studio Code</a> by me. Built with <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a> and <a href="https://vite.dev/" target="_blank" rel="noopener noreferrer">Vite</a>. Deployed with <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">Vercel</a>. Text is the <a href="https://rsms.me/inter/" target="_blank" rel="noopener noreferrer">Inter</a> typeface. Design inspired by <a href="https://brittanychiang.com/" target="_blank" rel="noopener noreferrer">Brittany Chiang</a>.</p>
          </div>
        </main>
      </div>
    </div>
  );
}

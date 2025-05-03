import React from 'react';
import ExperienceCard from './ExperienceCard';
import styles from './ExperienceSection.module.css';

export default function ExperienceSection() {
  return (
    <div>
      <ExperienceCard
        startYear={2025}
        endYear={-1}
        title="Software Development Intern"
        company="Virtru"
        companyUrl="https://www.virtru.com/"
        description="I will be spending 10 weeks this summer contributing to front-end development. I'll be working closely with the engineering team to implement and refine user-facing features, focusing on clean, responsive design and functional UI components. Using Jira for agile task management, I'll participate in sprints and collaborate with my peers to deliver production-quality software. This internship will strengthen my skills in modern web development and give me hands-on experience building secure, user-friendly interfaces at a privacy-focused tech company."
        languages={['JavaScript', 'CSS', 'JSON', 'React', 'Jira']}
      />
      <ExperienceCard
        startYear={2023}
        endYear={-1}
        title="Sophomore"
        company="Quinnipiac University"
        companyUrl="https://www.qu.edu/"
        description="Description"
        languages={['3.68', 'Dean\'s List', 'Class of 2027']}
      />
      <a
        href="/portfolio-website/resume.pdf"
        className={styles.resumeLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Full Resume <span className={styles.resumeArrow}>↗</span>
      </a>
    </div>
  );
} 
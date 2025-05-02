import React from 'react';
import ExperienceCard from './ExperienceCard';
import styles from './ExperienceSection.module.css';

export default function ExperienceSection() {
  return (
    <div>
      <ExperienceCard
        startYear={2025}
        endYear={-1}
        title="Software Engineering Intern"
        company="Virtru"
        companyUrl="https://www.virtru.com/"
        description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing elit quisque faucibus ex sapien. Quisque faucibus ex sapien vitae pellentesque sem placerat. Vitae pellentesque sem placerat in id cursus mi."
        languages={['JavaScript', 'CSS', 'JSON', 'React', 'Jira']}
      />
      <ExperienceCard
        startYear={2022}
        endYear={2025}
        title="Roblox Games Tester"
        company="Vitash Studios"
        companyUrl="https://www.roblox.com/communities/34829731/Vitash-Studios#!/about"
        description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing elit quisque faucibus ex sapien. Quisque faucibus ex sapien vitae pellentesque sem placerat. Vitae pellentesque sem placerat in id cursus mi."
        languages={['PlayTesting', 'Roblox', 'Luau']}
      />
      <a
        href="/resume.pdf"
        className={styles.resumeLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Full Resume <span className={styles.resumeArrow}>↗</span>
      </a>
    </div>
  );
} 
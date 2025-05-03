import React from 'react';
import styles from './ProjectCard.module.css';

export default function ProjectCard({
  imageRef,
  title,
  projectUrl,
  description,
  languages = [],
}) {
  const handleCardClick = () => {
    if (projectUrl) {
      window.open(projectUrl, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <div
      className={styles.card}
      tabIndex={0}
      onClick={handleCardClick}
      role="button"
      style={{ cursor: projectUrl ? 'pointer' : 'default' }}
    >
      <div className={styles.leftCol}>
        <img src={imageRef} alt="Project preview" className={styles.image} />
      </div>
      <div className={styles.rightCol}>
        <div className={styles.header}>
          <span className={styles.title}>
            {title}<span className={styles.arrow}>↗</span>
          </span>
        </div>
        <div className={styles.description}>{description}</div>
        <div className={styles.languages}>
          {languages.map((lang) => (
            <span className={styles.language} key={lang}>
              {lang}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
} 
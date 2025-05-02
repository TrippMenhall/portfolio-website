import React from 'react';
import styles from './ExperienceCard.module.css';

export default function ExperienceCard({
  startYear,
  endYear,
  title,
  company,
  companyUrl,
  description,
  languages
}) {
  const handleCardClick = () => {
    if (companyUrl) {
      window.open(companyUrl, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <div
      className={styles.card}
      tabIndex={0}
      onClick={handleCardClick}
      role="button"
      style={{ cursor: companyUrl ? 'pointer' : 'default' }}
    >
      <div className={styles.leftCol}>
        <span className={styles.years}>
          {startYear} — {endYear === -1 ? 'PRESENT' : endYear}
        </span>
      </div>
      <div className={styles.rightCol}>
        <div className={styles.header}>
          <span className={styles.title}>
            {title}
            {company && (
              <>
                {' · '}
                <span className={styles.company}>
                  {company} <span className={styles.arrow}>↗</span>
                </span>
              </>
            )}
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
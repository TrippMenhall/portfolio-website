import React from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  return (
    <>
      <ProjectCard
        image="https://placehold.co/600x400/EEE/31343C"
        title="NHLive"
        projectUrl="https://github.com/Terinko/NHLive/"
        description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing elit quisque faucibus ex sapien. Quisque faucibus ex sapien vitae pellentesque sem placerat. Vitae pellentesque sem placerat in id cursus mi."
        languages={['Kotlin', 'API', 'Database', 'UI Tests']}
      />
      <ProjectCard
        image="https://placehold.co/600x400/EEE/31343C"
        title="AvengHERs"
        projectUrl="https://github.com/TrippMenhall/AvengHERs"
        description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing elit quisque faucibus ex sapien. Quisque faucibus ex sapien vitae pellentesque sem placerat. Vitae pellentesque sem placerat in id cursus mi."
        languages={['Java', 'Agile', 'Team Project']}
      />
    </>
  );
} 
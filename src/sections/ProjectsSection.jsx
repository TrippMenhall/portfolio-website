import React from 'react';
import ProjectCard from './ProjectCard';
import AvengHERsImage from '../images/AvengHERs.png';
import NHLiveImage from '../images/NHLive.png';

export default function ProjectsSection() {
  return (
    <>
      <ProjectCard
        imageRef={NHLiveImage}
        title="NHLive"
        projectUrl="https://github.com/Terinko/NHLive/"
        description="An Android app for NHL fans, offering live scores, in-depth game stats, and a “Star of the Week” feature all in a clean, minimal interface. Users can toggle between light and dark modes, favorite teams, and get details on games with just a tap. Built using the NHL API, the app ensures real-time updates and information. NHLive is a professional, fan-first alternative to generic sports apps."
        languages={['Kotlin', 'API', 'Database', 'UI Tests']}
      />
      <ProjectCard
        imageRef={AvengHERsImage}
        title="AvengHERs"
        projectUrl="https://github.com/TrippMenhall/AvengHERs"
        description="A local multiplayer Java platformer where players battle as iconic Marvel heroes. Choose between Hulk, Iron Man, Captain America, or Spider-Man, each equipped with unique custom projectiles to dominate the battlefield. The game features arenas where players can strategically jump, dodge, and fight for victory. With multiple level options and fast-paced gameplay, AvengHERs delivers classic couch multiplayer fun with a superhero twist."
        languages={['Java', 'Git', 'Agile']}
      />
    </>
  );
} 
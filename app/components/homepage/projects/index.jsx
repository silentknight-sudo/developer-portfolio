import React from 'react';
import { projectsData } from '../../../../utils/data/projects-data'; 
import ProjectCard from './project-card';

const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const Projects = () => {
  const projectPairs = chunkArray(projectsData, 2);

  return (
    <div
      className="horizontal-scroll-container"
      style={{
        display: 'flex',
        overflowX: 'auto',
        scrollSnapType: 'x mandatory',
        gap: '1rem',
        paddingBottom: '1rem',
      }}
    >
      {projectPairs.map((pair, index) => (
        <div
          key={index}
          className="project-pair-block"
          style={{
            flex: '0 0 80%', 
            display: 'flex',
            gap: '1rem',
            scrollSnapAlign: 'start',
          }}
          id={`sticky-card-block-${index + 1}`}
        >
          {pair.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Projects;

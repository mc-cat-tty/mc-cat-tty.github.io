import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  return (
    <div className="animate-fade-in py-8 space-y-8">
      <div className="space-y-2">
        <h1 className="font-serif text-3xl font-bold text-ink">Projects</h1>
        <p className="font-sans text-stone-600">
          Personal and academic projects I developed during my journey.
          Most of the contributions to the organizations I belonged to are not listed here.
          You can find them on GitHub:
          <a href="https://github.com/mmr-driverless">MMR Driverless</a>,
          <a href="https://github.com/MMR-Electric-Driverless">MMR E-Driverless</a>,
          <a href="https://github.com/HackingMoRe">HackingMoRe</a>,
          <a href="https://github.com/ITIS-Enrico-Fermi">ITIS E. Fermi</a>.
          A comprehensive explanation of the HackingMoRe infrastructure has been published <a href="https://ieeexplore.ieee.org/document/11261629">here</a>.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
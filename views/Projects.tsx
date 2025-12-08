import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  return (
    <div className="animate-fade-in py-8 space-y-8">
      <div className="space-y-2">
        <h1 className="font-serif text-3xl font-bold text-ink">Projects</h1>
        <p className="font-sans text-stone-600">
          Personal and academic projects I developed or co-developed.
          Most of the contributions to the organizations I have been a member of are not listed here.<br></br>
          You can find them on GitHub:&ensp;
          <a 
            href="https://github.com/mmr-driverless"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-ink border-b-2 border-stone-400 hover:border-ink hover:bg-stone-200/50 transition-all duration-200"
          >MMR Driverless</a>,&ensp;
          <a 
            href="https://github.com/MMR-Electric-Driverless"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-ink border-b-2 border-stone-400 hover:border-ink hover:bg-stone-200/50 transition-all duration-200"
          >MMR E-Driverless</a>,&ensp;
          <a 
            href="https://github.com/HackingMoRe"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-ink border-b-2 border-stone-400 hover:border-ink hover:bg-stone-200/50 transition-all duration-200"
          >HackingMoRe</a>, and&ensp;
          <a 
            href="https://github.com/ITIS-Enrico-Fermi"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-ink border-b-2 border-stone-400 hover:border-ink hover:bg-stone-200/50 transition-all duration-200"
          >ITIS E. Fermi</a>.<br></br>
          
          A comprehensive explanation of the HackingMoRe infrastructure has been published&ensp;
          <a 
            href="https://ieeexplore.ieee.org/document/11261629"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-ink border-b-2 border-stone-400 hover:border-ink hover:bg-stone-200/50 transition-all duration-200"
          >here</a>.
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
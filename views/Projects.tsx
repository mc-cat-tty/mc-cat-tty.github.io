import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  return (
    <div className="animate-fade-in py-8 space-y-8">
      <div className="space-y-2 border-l-4 border-stone-800 pl-6">
        <h1 className="font-serif text-3xl font-bold text-ink">Projects</h1>
        <p className="font-sans text-stone-600">
          A selection of things I've built, broken, and fixed again.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
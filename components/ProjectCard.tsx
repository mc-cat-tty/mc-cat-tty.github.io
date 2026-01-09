import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const Wrapper = project.link ? 'a' : 'div';
  const wrapperProps = project.link 
    ? { 
        href: project.link, 
        target: '_blank', 
        rel: 'noopener noreferrer',
        className: "block h-full"
      } 
    : { className: "h-full" };

  const imageFit = project.imageFit || 'cover';
  const imageContainerClass = imageFit === 'contain' ? 'bg-white' : 'bg-stone-200';
  const imageClass = imageFit === 'contain' ? 'object-contain' : 'object-cover';

  return (
    <Wrapper {...wrapperProps}>
      <div className="group flex flex-col h-full bg-card border border-stone-300/50 rounded-lg overflow-hidden transition-all duration-200 active:scale-[0.98] active:border-stone-400">
        <div className={`h-48 overflow-hidden ${imageContainerClass}`}>
          <img
            src={project.imageUrl}
            alt={project.title}
            className={`w-full h-full ${imageClass}`}
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-serif font-bold text-xl text-ink group-hover:text-stone-600 transition-colors">
              {project.title}
            </h3>
            {project.link && (
               <svg 
               xmlns="http://www.w3.org/2000/svg" 
               className="h-5 w-5 text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity" 
               fill="none" 
               viewBox="0 0 24 24" 
               stroke="currentColor"
             >
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
             </svg>
            )}
          </div>
          <p className="font-sans text-stone-600 mb-4 flex-grow leading-relaxed">
            {project.description}
            {project.readMore && (
            <a 
              href={project.readMore}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link inline-flex items-center ml-2 px-2 py-0.5 text-xs font-sans border rounded bg-[#f5f4ed] border-[#d1cfc5] text-[#73726c] hover:border-[#b8b6ad] hover:bg-[#d1cfc5] transition-colors align-middle"
              aria-label={`Read more about ${project.courseTitle}`}
            >
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          )}
          </p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-bold font-sans uppercase tracking-wider border border-stone-300 rounded-md text-stone-500 bg-paper/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProjectCard;
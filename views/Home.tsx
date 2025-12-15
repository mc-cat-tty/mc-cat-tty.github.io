import React from 'react';
import { Link } from 'react-router-dom';
import { PERSONAL_INFO, PROJECTS, NOTES } from '../constants';
import ProjectCard from '../components/ProjectCard';
import NoteCard from '../components/NoteCard';

const LINK_REGEX = /\[(.+?)\]\((.+?)\)/g;

function HyperlinkReplace(str) {
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = LINK_REGEX.exec(str)) !== null) {
    const textBefore = str.substring(lastIndex, match.index);
    if (textBefore) {
      parts.push(textBefore);
    }

    const linkText = match[1];
    const url = match[2];

    parts.push(
      <a key={match.index} href={url} target="_blank" rel="noopener noreferrer" className="font-bold text-ink border-b-2 border-stone-400 hover:border-ink hover:bg-stone-200/50 transition-all duration-200">
        {linkText}
      </a>
    );

    lastIndex = match.index + match[0].length;
  }

  // 3. Add any remaining text after the last link
  const textAfter = str.substring(lastIndex);
  if (textAfter) {
    parts.push(textAfter);
  }

  return <p>{parts}</p>;
}

const SocialButton: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="h-10 w-10 flex items-center justify-center rounded-lg border border-stone-300 text-stone-500 hover:bg-ink hover:text-paper hover:border-ink transition-all duration-200"
    aria-label={label}
  >
    {icon}
  </a>
);

const SocialLinks: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex gap-3 ${className}`}>
    <SocialButton 
      href={PERSONAL_INFO.socials.linkedin}
      label="LinkedIn"
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      }
    />
    <SocialButton 
      href={PERSONAL_INFO.socials.github}
      label="GitHub"
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      }
    />
    <SocialButton 
      href={PERSONAL_INFO.socials.strava}
      label="Strava"
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.387 17.944l-2.089-4.116h-3.065l5.154 10.172 5.155-10.172h-3.066l-2.089 4.116zm-4.009-4.405l-4.136-8.163-4.137 8.163h3.088l1.049-2.055 1.048 2.055h3.088z"/>
        </svg>
      }
    />
  </div>
);

const Home: React.FC = () => {
  // Get previews (first 2 items)
  const projectPreview = PROJECTS.slice(0, 2);
  const notesPreview = NOTES.slice(0, 2);

  return (
    <div className="animate-fade-in space-y-20 py-8">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start gap-6">
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 rounded-3xl translate-x-2 translate-y-2"></div>
            <img
              src={PERSONAL_INFO.avatar}
              alt={PERSONAL_INFO.name}
              className="relative w-full h-full object-cover rounded-3xl border-2 border-stone-800"
            />
          </div>
          {/* Desktop Socials: Hidden on mobile, Flex on desktop */}
          <div className="hidden md:flex w-64 justify-center">
            <SocialLinks />
          </div>
        </div>
        
        <div className="w-full md:w-2/3 text-center md:text-left space-y-6">
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-ink leading-tight">
            Hi, I'm <span className="text-stone-500">{PERSONAL_INFO.name.split(' ')[0]}!</span>
          </h1>
          <h2 className="font-sans text-xl md:text-2xl font-medium text-ink-light">
            {PERSONAL_INFO.role}
          </h2>
          <p className="font-sans text-lg text-stone-600 leading-relaxed max-w-2xl text-left">
            {PERSONAL_INFO.bio.split('\n').map(str => <p>{HyperlinkReplace(str)}</p>)}
          </p>
          
          {/* Mobile Socials: Flex on mobile, Hidden on desktop */}
          <div className="flex md:hidden justify-center pt-4">
             <SocialLinks />
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="space-y-8">
        <div className="flex justify-between items-end border-b-2 border-stone-200 pb-4">
          <h2 className="font-serif text-3xl font-bold text-ink">Latest Projects</h2>
          <Link 
            to="/projects" 
            className="font-sans font-bold text-sm text-stone-500 hover:text-ink transition-colors flex items-center gap-1 group"
          >
            View all 
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectPreview.map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </section>

      {/* Notes Preview */}
      <section className="space-y-8">
        <div className="flex justify-between items-end border-b-2 border-stone-200 pb-4">
          <h2 className="font-serif text-3xl font-bold text-ink">Recent Notes</h2>
          <Link 
            to="/notes" 
            className="font-sans font-bold text-sm text-stone-500 hover:text-ink transition-colors flex items-center gap-1 group"
          >
            View all 
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          {notesPreview.map((note) => (
            <NoteCard note={note} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
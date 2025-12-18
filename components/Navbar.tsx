import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 rounded-lg transition-all duration-300 font-sans font-semibold text-sm tracking-wide ${
      isActive
        ? 'bg-ink text-paper shadow-sm'
        : 'text-ink-light hover:text-ink hover:bg-black/5'
    }`;

  return (
    <nav className="sticky top-0 z-[100] w-full bg-paper/95 backdrop-blur-sm pt-5 pb-4">
      <div className="max-w-4xl mx-auto px-6 flex justify-center items-center">
        <div className="flex space-x-2 bg-accent/20 p-1.5 rounded-xl border border-accent/10">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>
          <NavLink to="/notes" className={linkClass}>
            Notes
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
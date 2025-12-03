import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 mt-12 border-t border-stone-300 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <p className="font-sans text-stone-500 text-sm">
          &copy; {new Date().getFullYear()} Alex Dillhoff. Built with React & Tailwind.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
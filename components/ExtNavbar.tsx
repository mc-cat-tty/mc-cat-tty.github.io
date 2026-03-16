import React from 'react';

const ExtNavbar: React.FC = ({title}) => (
  <nav class="sticky top-0 z-[100] w-full bg-paper/95 backdrop-blur-sm py-6 border-b border-stone-300/30 print:hidden">
      <div class="max-w-4xl mx-auto px-6 relative flex items-center">
          <a href="/" class="inline-flex items-center text-stone-500 hover:text-ink transition-colors font-semibold text-sm group shrink-0 relative z-20">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Home
          </a>
          
          <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <span class="font-sans font-bold text-ink text-sm md:text-base truncate sm:block max-w-md px-4 pointer-events-auto">
                  {title}
              </span>
          </div>
      </div>
  </nav>
);

export default ExtNavbar;
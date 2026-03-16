import React from 'react';

const BlogHeader: React.FC = ({title, tags}) => (
    <header class="mb-12 border-b-2 border-stone-800 pb-4">
      <div class="mb-4 flex flex-wrap gap-2">
        {
          tags.map(
            tag => (
              <span class="px-2 py-1 text-xs font-bold font-sans uppercase tracking-wider border border-stone-300 rounded-md text-stone-500 bg-paper/50">
                {tag}
              </span>
            )
          )
        }
      </div>
      <h1 class="font-sans text-4xl md:text-5xl font-bold text-ink leading-tight">
          {title}
      </h1>
  </header>
);

export default BlogHeader;

import React from 'react';

const RevolutBreakeven: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-stone-300 selection:text-ink flex flex-col">
      {/* Main Content */}
      <main className="flex-grow max-w-3xl mx-auto w-full px-6 py-12">
        {/* Header */}
        <header className="mb-12 border-b-2 border-stone-800 pb-4">
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="px-2 py-1 text-xs font-bold font-sans uppercase tracking-wider border border-stone-300 rounded-md text-stone-500 bg-paper/50">
              React
            </span>
            <span className="px-2 py-1 text-xs font-bold font-sans uppercase tracking-wider border border-stone-300 rounded-md text-stone-500 bg-paper/50">
              TypeScript
            </span>
            <span className="px-2 py-1 text-xs font-bold font-sans uppercase tracking-wider border border-stone-300 rounded-md text-stone-500 bg-paper/50">
              Vite
            </span>
          </div>
          <h1 className="font-sans text-4xl md:text-5xl font-bold text-ink leading-tight">
            Revolut Break-even Calculator
          </h1>
        </header>

        {/* Article Body */}
        <article className="font-sans text-stone-700 leading-relaxed text-lg">
          <section id="introduction" className="mb-16 scroll-mt-28">
            <h2 className="font-sans text-2xl font-bold text-ink mb-4">
              Coming soon
            </h2>
            <p className="mb-6">
              This page is under construction. Please check back later.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
};

export default RevolutBreakeven;

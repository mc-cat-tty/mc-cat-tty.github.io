import React from 'react';
import { NOTES } from '../constants';
import NoteCard from '../components/NoteCard';
import Footer from '../components/Footer';

const Notes: React.FC = () => {
  return (
    <div className="animate-fade-in py-8 flex flex-col">
      <div className="space-y-2 mb-8">
        <h1 className="font-serif text-3xl font-bold text-ink">Notes</h1>
        <p className="font-sans text-stone-600">
          Notes of (some of) the academic courses I attended so far. Typewritten with love and <a className="font-bold text-ink">100% reviewed by a human.</a> No LLMs were harmed during the process.<br></br>
          Below, you can find a <a className="font-bold text-ink">legend</a> of the <a className="font-bold text-ink">progress indicators</a> visible for each note.
          The indicators show the progress of each note-taking phase: <a className="font-bold text-ink">lectures</a>, review of the <a className="font-bold text-ink">text</a> and the formulas, and review of the <a className="font-bold text-ink">figures</a>, including diagrams, tables, illustrations and images.
        </p>

        {/* Legend */}
        <div className="flex items-center gap-6 pt-3">
           <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#52525b" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" fill="#9BA896"/>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" fill="#9BA896"/>
              </svg>
              <span className="text-xs uppercase font-bold text-stone-600 tracking-widest pt-0.5">Lectures</span>
           </div>
           <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#52525b" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" fill="#E39587"/>
                <path d="M15 5l4 4" />
              </svg>
              <span className="text-xs uppercase font-bold text-stone-600 tracking-widest pt-0.5">Text</span>
           </div>
           <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#52525b" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" fill="#C4A7E7"/>
                <circle cx="13.5" cy="6.5" r="1.5" fill="#FFFFFF" stroke="none" />
                <circle cx="17.5" cy="10.5" r="1.5" fill="#FFFFFF" stroke="none" />
                <circle cx="8.5" cy="7.5" r="1.5" fill="#FFFFFF" stroke="none" />
              </svg>
              <span className="text-xs uppercase font-bold text-stone-600 tracking-widest pt-0.5">Figures</span>
           </div>
        </div>

      </div>

      <div className="flex flex-col gap-4">
        {NOTES.map((note) => (
          <NoteCard note={note} />
        ))}
      </div>
      
      <Footer/>
    </div>
  );
};

export default Notes;
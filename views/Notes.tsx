import React from 'react';
import { NOTES } from '../constants';
import NoteCard from '../components/NoteCard';

const Notes: React.FC = () => {
  return (
    <div className="animate-fade-in py-8 space-y-8">
      <div className="space-y-2 border-l-4 border-stone-800 pl-6">
        <h1 className="font-serif text-3xl font-bold text-ink">Notes</h1>
        <p className="font-sans text-stone-600">
          Condensed knowledge from my academic coursework and independent research.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {NOTES.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default Notes;
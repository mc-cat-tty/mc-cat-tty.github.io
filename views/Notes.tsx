import React, { useState, useEffect } from 'react';
import { NOTES } from '../constants';
import NoteCard from '../components/NoteCard';

const Notes: React.FC = () => {
  const [pageUrl, setPageUrl] = useState('');

  useEffect(() => {
    // Set the URL only after mounting to ensure window is available
    setPageUrl(window.location.href);
  }, []);

  return (
    <div className="animate-fade-in py-8 flex flex-col">
      <div className="space-y-2 mb-8">
        <h1 className="font-serif text-3xl font-bold text-ink">Notes</h1>
        <p className="font-sans text-stone-600">
          Notes of (some of) the academic courses I attended so far. Typewritten with love and 100% reviewed by a human.
          No LLMs were harmed during the process.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {NOTES.map((note) => (
          <NoteCard note={note} />
        ))}
      </div>

      <div className="mt-24">
        <div className="border-t-2 border-dashed border-stone-300 w-full mb-8"></div>
        
        <div className="flex flex-col items-center justify-center gap-5">
          <span className="font-serif font-bold text-lg text-ink">Share this page:</span>
          
          <div className="p-3 bg-white rounded-xl shadow-sm border border-stone-200">
            {pageUrl && (
              <img 
                src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(pageUrl)}&color=1c1917&bgcolor=ffffff`}
                alt="QR Code"
                className="w-32 h-32 block mix-blend-multiply"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
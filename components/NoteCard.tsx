import React from 'react';
import { Note } from '../types';

interface NoteCardProps {
  note: Note;
}

const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
  const handleDownload = () => {
    fetch(`${note.downloadUrl}/releases/latest`, {redirect: "follow"}).then(
      response => {
        if (response.status / 100 != 2) return null;
        return response.json();
      }
    ).then(
      data => {
        if (!data) return null;
        console.log(data);
        const a = document.createElement('a');
        a.href = data.assets[0].browser_download_url;
        a.download = '';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    )
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 bg-card border border-stone-300/50 rounded-lg transition-colors duration-200">
      <div className="flex-1 w-full md:w-auto pr-0 md:pr-6 mb-5 md:mb-0">
        <div className="flex flex-col-reverse items-start gap-1 md:flex-row md:items-baseline md:gap-0 md:space-x-3 mb-2 md:mb-1">
          <h3 className="font-serif font-bold text-lg text-ink">{note.courseTitle}</h3>
          <span className="text-xs font-sans font-semibold text-stone-400 uppercase tracking-wide">
            {note.date}
          </span>
        </div>
        <p className="font-sans text-stone-600 text-sm leading-relaxed">
          {note.description}
        </p>
      </div>
      
      <button
        onClick={handleDownload}
        className="w-full md:w-auto flex-shrink-0 flex items-center justify-center px-4 py-2 md:px-5 md:py-2.5 bg-ink text-paper font-sans font-bold text-sm rounded-lg border border-transparent hover:bg-stone-700 active:scale-95 transition-all duration-200 group shadow-sm"
        aria-label={`Download ${note.courseTitle} notes`}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-4 w-4 mr-2" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Download
        <span className="ml-2 text-xs opacity-60 font-normal">({note.size})</span>
      </button>
    </div>
  );
};

export default NoteCard;
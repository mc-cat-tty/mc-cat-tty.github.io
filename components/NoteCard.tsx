import React, { useState, useEffect } from 'react';
import { Note } from '../types';

interface NoteCardProps {
  note: Note;
}

const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
  // Manifest Structure: {
  //     "course_start": date str,
  //     "course_end": date str,
  //     "review_progress": date str,
  //     "visual_progress": date str,
  // };
    const [progressData, setProgressData] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);
    const [downloadUrl, setDownloadUrl] = useState(false);

    const createProgressData = (manifestStr) => {
        const manifestJson = JSON.parse(manifestStr);
        const todayDate = new Date();
        const courseStartDate = new Date(manifestJson.course_start);
        const courseEndDate = new Date(manifestJson.course_end);
        const textualProgressDate = new Date(manifestJson.textual_progress);
        const visualProgressDate = new Date(manifestJson.visual_progress);
        const overallPeriod = Math.abs(courseEndDate.valueOf() - courseStartDate.valueOf());
        return {
            'courseStart': courseStartDate.toLocaleDateString('en-US', {'month': 'short', 'day': 'numeric'}),
            'courseEnd': courseEndDate.toLocaleDateString('en-US', {'month': 'short', 'day': 'numeric'}),
            'textualProgressDate': textualProgressDate.toLocaleDateString('en-US', {'month': 'short', 'day': 'numeric'}),
            'visualProgressDate': visualProgressDate.toLocaleDateString('en-US', {'month': 'short', 'day': 'numeric'}),
            'lecturesProgressDate': (todayDate > courseEndDate ? courseEndDate : todayDate).toLocaleDateString('en-US', {'month': 'short', 'day': 'numeric'}),
            'textualProgressPercentage': 100 * Math.min(
                Math.abs(textualProgressDate.valueOf() - courseStartDate.valueOf()) / overallPeriod,
                1
            ),
            'visualProgressPercentage': 100 * Math.min(
                Math.abs(visualProgressDate.valueOf() - courseStartDate.valueOf()) / overallPeriod,
                1
            ),
            'lecturesProgressPercentage': 100 * Math.min(
                Math.abs(todayDate.valueOf() - courseStartDate.valueOf()) / overallPeriod,
                1
            ),
        };
    }

    const ProgressLayer = ({ 
        dateAtProgress, 
        percentageProgress, 
        barColorClass, 
        zIndex, 
        illustration,
        label,
        barHeight
    }: { 
        dateAtProgress: string; 
        percentageProgress: number;
        barColorClass: string;
        zIndex: number;
        illustration: React.ReactNode;
        label: string;
        barHeight: string;
    }) => {
        return (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex }}>
            {/* The Colored Bar Trail */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 h-full flex items-center pr-2">
                <div 
                    className={`${barColorClass} rounded-full transition-all duration-1000 ease-out shadow-sm`}
                    style={{ width: `${percentageProgress}%`, height: barHeight }}
                ></div>
            </div>

            {/* The Indicator Illustration */}
            <div 
            className={`absolute top-1/2 -translate-y-1/2 transition-all duration-1000 ease-out group/marker pointer-events-auto`}
            style={{ left: `${percentageProgress}%` }}
            >
            <div className={`-translate-x-1/2 relative`}>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover/marker:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap bg-stone-800 text-paper text-xs font-medium px-3 py-1.5 rounded shadow-lg z-50">
                {label}: {percentageProgress}% {dateAtProgress && <span className="opacity-75 mx-1">• {dateAtProgress}</span>}
                {/* Little triangle arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-stone-800"></div>
                </div>
                
                {/* Illustration Icon */}
                <div className="transform group-hover/marker:scale-110 transition-transform duration-200 drop-shadow-md">
                {illustration}
                </div>
            </div>
            </div>
        </div>
        );
    };

    useEffect(() => {
        let isMounted = true;

        const fetchNoteData = async () => {
            setIsLoading(true);
            try {
                fetch(`${note.downloadUrl}/releases/latest`, {redirect: "follow"}).then(
                    response => {
                        if (response.status / 100 != 2) return null;
                        return response.json();
                    }
                ).then(
                    data => {
                        if (!data) return null;
                        if (isMounted) {
                            setProgressData(createProgressData(data.body));
                            setDownloadUrl(data.assets[0].browser_download_url);
                        }
                    }
                );
            }
            catch (error) {
                console.error("Failed to fetch note data:", error);
            }
            finally {
                if (isMounted) setIsLoading(false);
            }
        };

        fetchNoteData();

        return () => { isMounted = false; };
    }, []);


    return (
    <div className={`flex flex-col md:flex-row justify-between items-start md:items-center p-6 bg-card border border-stone-300/50 rounded-lg transition-colors duration-200 ${isLoading ? 'opacity-90' : 'opacity-100'}`}>
      <div className="flex-1 w-full md:w-auto pr-0 md:pr-6 mb-5 md:mb-0">
        <div className="flex flex-col-reverse items-start gap-1 md:flex-row md:items-baseline md:gap-0 md:space-x-3 mb-2 md:mb-1">
          <h3 className="font-serif font-bold text-lg text-ink">{note.courseTitle}</h3>
          <span className="text-xs font-sans font-semibold text-stone-400 uppercase tracking-wide">
            {note.date}
          </span>
        </div>
        <p className="font-sans text-stone-600 text-base leading-relaxed">
          {note.description}
        </p>
        
        {/* Progress Indicator */}
        {progressData !== undefined && (
          <div className="mt-6 w-full pb-2">
            <div className="flex items-center gap-4">
              <span className={`text-xs font-sans font-bold text-stone-400 uppercase tracking-wider min-w-[3rem] text-left transition-opacity duration-500 ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
                {progressData.courseStart}
              </span>
              
              {/* Main Track Container */}
              <div className="relative flex-grow h-2 bg-stone-200 rounded-full mx-1">
                
                {/* 1. Lectures: Book (Back Layer) - Pastel Salvia (Sage Green) */}
                <ProgressLayer 
                  dateAtProgress={progressData.lecturesProgressDate}
                  percentageProgress={progressData.lecturesProgressPercentage}
                  barColorClass="bg-[#9BA896]"
                  zIndex={10}
                  barHeight="100%"
                  label="Lectures"
                  illustration={
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#52525b" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" fill="#9BA896"/>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" fill="#9BA896"/>
                    </svg>
                  }
                />

                {/* 2. Text Review: Pencil (Middle Layer) - Pastel Coral */}
                <ProgressLayer 
                  dateAtProgress={progressData.textProgressDate}
                  percentageProgress={progressData.textProgressPercentage}
                  barColorClass="bg-[#E39587]"
                  zIndex={20}
                  barHeight="70%"
                  label="Text"
                  illustration={
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#52525b" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" fill="#E39587"/>
                      <path d="M15 5l4 4" />
                    </svg>
                  }
                />

                {/* 3. Figures Review: Palette (Front Layer) - Pastel Purple */}
                <ProgressLayer 
                  dateAtProgress={progressData.visualProgressDate}
                  percentageProgress={progressData.visualProgressPercentage}
                  barColorClass="bg-[#C4A7E7]"
                  zIndex={30}
                  barHeight="40%"
                  label="Figures"
                  illustration={
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#52525b" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" fill="#C4A7E7"/>
                      <circle cx="13.5" cy="6.5" r="1.5" fill="#FFFFFF" stroke="none" />
                      <circle cx="17.5" cy="10.5" r="1.5" fill="#FFFFFF" stroke="none" />
                      <circle cx="8.5" cy="7.5" r="1.5" fill="#FFFFFF" stroke="none" />
                    </svg>
                  }
                />
              </div>
              
              <span className={`text-xs font-sans font-bold text-stone-400 uppercase tracking-wider min-w-[3rem] text-right transition-opacity duration-500 ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
                {progressData.courseEnd}
              </span>
            </div>
          </div>
        )}
      </div>
      
      <a href={downloadUrl} download="">
        <button
            className={`w-full md:w-auto flex-shrink-0 flex items-center justify-center px-4 py-2 md:px-5 md:py-2.5 bg-ink text-paper font-sans font-bold text-sm rounded-lg border border-transparent transition-all duration-200 group shadow-sm mt-2 md:mt-0  ${isLoading ? 'opacity-50' : 'opacity-100 hover:bg-stone-700 active:scale-95'}`}
            aria-label={`Download ${note.courseTitle} notes`}
            disabled={isLoading}
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
      </a>
    </div>
  );
};

export default NoteCard;
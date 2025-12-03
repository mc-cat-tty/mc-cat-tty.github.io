import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Projects from './views/Projects';
import Notes from './views/Notes';

// Wrapper to help with scroll restoration or layout specific logic if needed
const ContentWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  
  // Simple fade-in effect keying on location path
  return (
    <main key={location.pathname} className="flex-grow max-w-4xl mx-auto w-full px-6 pb-12 transition-opacity duration-300">
      {children}
    </main>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col font-sans selection:bg-stone-300 selection:text-ink">
        <Navbar />
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/notes" element={<Notes />} />
          </Routes>
        </ContentWrapper>
      </div>
    </HashRouter>
  );
};

export default App;
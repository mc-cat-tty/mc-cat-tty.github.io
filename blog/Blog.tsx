import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ADAssignments from './posts/ADAssignments';
import LLVMBackendAssignments from './posts/LLVMBackendAssignments';

const Blog: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col font-sans selection:bg-stone-300 selection:text-ink">
        <Routes>
          <Route path="/ad-assignments" element={<ADAssignments />} />
          <Route path="/llvm-backend-assignments" element={<LLVMBackendAssignments />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default Blog;
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ExtNavbar from '@/components/ExtNavbar';

const LLVMBackendAssignments: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-stone-300 selection:text-ink">
      <ExtNavbar title='LLVM Backend Assignments'/>
    </div>
  );
};

export default LLVMBackendAssignments;
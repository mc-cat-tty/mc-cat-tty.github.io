import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ExtNavbar from '@/components/ExtNavbar';
import BlogHeader from '@/components/BlogHeader';

const ADAssignments: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-stone-300 selection:text-ink">
      <ExtNavbar title='AD Vehicles Assignments'/>
      <main class="flex-grow max-w-3xl mx-auto w-full px-6 py-12">
        <BlogHeader title='Autonomous Driving Assignments' tags={['Python3', 'C++', 'PCL', 'Eigen3', 'Numpy', 'Matplotlib']} />
        {/* // content */}
      </main>
    </div>
  );
};

export default ADAssignments;
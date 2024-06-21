import React from 'react';

const Loading = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 animate-pulse">
      <div className="bg-neutral-800 h-96 rounded-md mb-4"></div>
      
      <div className="bg-neutral-800 h-8 w-2/3 rounded mb-4"></div>
      
      <div className="flex items-center text-sm text-neutral-800 mb-4 space-x-2">
        <div className="bg-neutral-800 h-4 w-20 rounded"></div>
        <div className="bg-neutral-800 h-4 w-20 rounded"></div>
      </div>
      
      <div className="bg-neutral-800 h-64 rounded"></div>
    </div>
  );
};

export default Loading;

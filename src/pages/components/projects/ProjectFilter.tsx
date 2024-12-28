import React from 'react';

export function ProjectFilter() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <button className="px-4 py-2 rounded-full bg-indigo-600 text-white">
        All
      </button>
      <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300">
        Frontend
      </button>
      <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300">
        Backend
      </button>
      <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300">
        Full Stack
      </button>
    </div>
  );
}
import React from 'react';
import { useProfile } from '../../../hooks/useProfile';
import { useProjects } from '../../../hooks/useProjects';

export function Dashboard() {
  const { profile } = useProfile();
  const { projects } = useProjects();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Profile Overview</h2>
          {profile && (
            <div className="space-y-2">
              <p>Name: {profile.name}</p>
              <p>Title: {profile.title}</p>
              <p>Location: {profile.location}</p>
            </div>
          )}
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Projects Overview</h2>
          <p>Total Projects: {projects.length}</p>
          <p>Featured Projects: {projects.filter(p => p.featured).length}</p>
        </div>
      </div>
    </div>
  );
}
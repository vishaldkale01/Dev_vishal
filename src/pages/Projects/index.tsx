import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from '../components/projects/ProjectCard';
import { ProjectFilter } from '../components/projects/ProjectFilter';
import { useProjects } from '../hooks/useProjects';

export function Projects() {
  const { projects, loading } = useProjects();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">My Projects</h1>
          <p className="mt-4 text-xl text-gray-600">
            A collection of my recent work
          </p>
        </div>

        <ProjectFilter />

        {loading ? (
          <div className="text-center">Loading projects...</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
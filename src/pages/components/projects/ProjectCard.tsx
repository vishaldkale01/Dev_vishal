import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../../types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  console.log("project" , project);
  
  return (
    
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card"
      // className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-80 h-80 object-cover mx-auto mt-5"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
        <p className="mt-2 text-gray-600">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex space-x-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-500"
            >
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-500"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
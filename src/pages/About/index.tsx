import React from 'react';
import { motion } from 'framer-motion';

export function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">About Me</h1>
          <p className="mt-4 text-xl text-gray-600">
            Passionate backend developer with expertise in building scalable solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Experience</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="font-medium text-lg">Senior Backend Developer</h3>
                <p className="text-gray-600">2020 - Present</p>
                <p className="mt-2">Leading backend development for scalable web applications</p>
              </div>
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="font-medium text-lg">Full Stack Developer</h3>
                <p className="text-gray-600">2018 - 2020</p>
                <p className="mt-2">Developed and maintained full-stack applications</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Education</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="font-medium text-lg">Master's in Computer Science</h3>
                <p className="text-gray-600">2016 - 2018</p>
                <p className="mt-2">Specialized in Distributed Systems</p>
              </div>
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="font-medium text-lg">Bachelor's in Software Engineering</h3>
                <p className="text-gray-600">2012 - 2016</p>
                <p className="mt-2">Focus on Software Architecture and Design</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
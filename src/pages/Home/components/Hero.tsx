import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useProfile } from '../../../hooks/useProfile';

export function Hero() {
  const { profile, isLoading } = useProfile();

  if (isLoading) {
    return <div className="animate-pulse h-96 bg-gray-100 dark:bg-gray-800 rounded-lg" />;
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-20"
    >
      {profile?.avatarUrl && (
        <img
          src={profile.avatarUrl}
          alt={profile.name}
          className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-primary-500"
        />
      )}
      <h1 className="text-4xl md:text-6xl font-bold mb-4">{profile?.name}</h1>
      <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">{profile?.title}</h2>
      <p className="max-w-2xl mx-auto text-lg mb-12">{profile?.bio}</p>
      
      <div className="flex justify-center space-x-6">
        <a href={profile?.githubUrl} className="btn-secondary" target="_blank" rel="noopener noreferrer">
          <Github className="w-5 h-5 mr-2" />
          GitHub
        </a>
        <a href={profile?.linkedinUrl} className="btn-secondary" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-5 h-5 mr-2" />
          LinkedIn
        </a>
        <a href={`mailto:${profile?.email}`} className="btn-secondary">
          <Mail className="w-5 h-5 mr-2" />
          Contact
        </a>
      </div>
    </motion.div>
  );
}
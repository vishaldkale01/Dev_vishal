import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useProfile } from '../../hooks/useProfile';

export function SocialLinks() {
  const { profile } = useProfile();

  if (!profile) return null;

  return (
    <div className="flex space-x-6">
      <a
        href={profile.githubUrl}
        className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <Github className="w-6 h-6" />
      </a>
      <a
        href={profile.linkedinUrl}
        className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-6 h-6" />
      </a>
      <a
        href={`mailto:${profile.email}`}
        className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
        aria-label="Email"
      >
        <Mail className="w-6 h-6" />
      </a>
    </div>
  );
}
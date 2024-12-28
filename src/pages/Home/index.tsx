import React from 'react';
import { Hero } from './components/Hero';
import { FeaturedProjects } from './components/FeaturedProjects';

export function Home() {
  return (
    <div className="animate-fade-in">
      <Hero />
      <FeaturedProjects />
    </div>
  );
}
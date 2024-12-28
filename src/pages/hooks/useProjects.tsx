import { useState, useEffect } from 'react';
import { Project } from '../../types';
import { useProjects as useProjectsHook } from '../../hooks/useProjects';

export function useProjects() {
  const { projects, isLoading } = useProjectsHook({ featured: true }); // Use the imported hook

  const [processedProjects, setProcessedProjects] = useState<Project[]>([]);

  useEffect(() => {
    if (!isLoading && projects.length > 0) {
      // Simulate data processing or a mock delay
      const mockProjects: Project[] = projects;
      setTimeout(() => {
        setProcessedProjects(mockProjects);
      }, 1000);
    }
  }, [isLoading, projects]);
  console.log("processedProjects" , processedProjects);
  
  return { projects: processedProjects, loading: isLoading };
}

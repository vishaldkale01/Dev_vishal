import { useEffect, useState } from 'react';
import { Project } from '../types';
import { supabase } from '../lib/supabase';

interface UseProjectsOptions {
  featured?: boolean;
}

export function useProjects(options: UseProjectsOptions = {}) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        let query = supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false });
        console.log("options" , options);
        
        if (options.featured) {
          query = query.eq('featured', true);
        }

        const { data, error: queryError } = await query;

        if (queryError) throw queryError;
        setProjects(data || []);
        console.log("data" , data);
        
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch projects'));
      } finally {
        setIsLoading(false);
      }
    }

    fetchProjects();
  }, [options.featured]);

  return { projects, isLoading, error };
}
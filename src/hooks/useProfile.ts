import { useEffect, useState } from 'react';
import { Profile } from '../types';
import { supabase } from '../lib/supabase';

export function useProfile() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const { data, error: queryError } = await supabase
          .from('profiles')
          .select('*')
          .limit(1)
          .maybeSingle();

        if (queryError) throw queryError;
        setProfile(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch profile'));
      } finally {
        setIsLoading(false);
      }
    }

    fetchProfile();
  }, []);

  return { profile, isLoading, error };
}
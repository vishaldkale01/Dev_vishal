  export interface Project {
  map(arg0: (project: any, index: any) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  createdAt: string;
  demoUrl?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  proficiency: number;
}

export interface Profile {
  id: string;
  name: string;
  title: string;
  bio: string;
  avatarUrl: string;
  location: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
}
/*
  # Initial Schema Setup for Portfolio Website

  1. New Tables
    - `profiles`
      - `id` (uuid, primary key)
      - `name` (text)
      - `title` (text)
      - `bio` (text)
      - `avatar_url` (text)
      - `location` (text)
      - `email` (text)
      - `github_url` (text)
      - `linkedin_url` (text)
    
    - `projects`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `technologies` (text array)
      - `image_url` (text)
      - `live_url` (text, optional)
      - `github_url` (text, optional)
      - `featured` (boolean)
      - `created_at` (timestamptz)
    
    - `skills`
      - `id` (uuid, primary key)
      - `name` (text)
      - `category` (text, enum)
      - `proficiency` (integer)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access
    - Add policies for authenticated admin write access
*/

-- Create enum for skill categories
CREATE TYPE skill_category AS ENUM ('frontend', 'backend', 'database', 'tools');

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  title text NOT NULL,
  bio text NOT NULL,
  avatar_url text,
  location text,
  email text NOT NULL,
  github_url text,
  linkedin_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  technologies text[] NOT NULL,
  image_url text NOT NULL,
  live_url text,
  github_url text,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create skills table
CREATE TABLE IF NOT EXISTS skills (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category skill_category NOT NULL,
  proficiency integer NOT NULL CHECK (proficiency >= 0 AND proficiency <= 100),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;

-- Create policies for profiles
CREATE POLICY "Allow public read access to profiles"
  ON profiles
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to manage profiles"
  ON profiles
  USING (auth.role() = 'authenticated');

-- Create policies for projects
CREATE POLICY "Allow public read access to projects"
  ON projects
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to manage projects"
  ON projects
  USING (auth.role() = 'authenticated');

-- Create policies for skills
CREATE POLICY "Allow public read access to skills"
  ON skills
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to manage skills"
  ON skills
  USING (auth.role() = 'authenticated');

-- Create updated_at triggers
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON projects
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_skills_updated_at
  BEFORE UPDATE ON skills
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();
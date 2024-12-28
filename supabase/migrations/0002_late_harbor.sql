/*
  # Add Initial Profile Data

  1. Changes
    - Insert initial profile data for the portfolio
*/

INSERT INTO profiles (name, title, bio, email, location, github_url, linkedin_url, avatar_url)
VALUES (
  'Vishal Kale',
  'Backend Developer as well full stack',
  'Passionate developer with expertise in React, Node.js, and cloud technologies. Building elegant solutions to complex problems.',
  'vishaldkale0@gmail.com',
  'Sambhaji Nagar (Aurangabad) 431001',
  'https://github.com/vishaldkale01',
  'https://www.linkedin.com/in/vishal-kale-72b261218/',
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300&h=300'
) ON CONFLICT DO NOTHING;
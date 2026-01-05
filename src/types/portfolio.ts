export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  gradient?: string;
  tags: string[];
  category: 'web' | 'mobile' | 'ai' | 'design';
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Skill {
  id: string;
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'design' | 'other';
  icon?: string;
}

export interface TimelineEvent {
  id: string;
  year: number;
  title: string;
  description: string;
  type: 'education' | 'work' | 'achievement';
}

export type SocialPlatform = 'github' | 'linkedin' | 'twitter' | 'email';

export type TechCategory = 'frontend' | 'backend' | 'design' | 'other';

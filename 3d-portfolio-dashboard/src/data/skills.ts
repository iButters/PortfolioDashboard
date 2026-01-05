export interface SkillCategory {
  category: string;
  value: number;
}

export interface TopSkill {
  name: string;
  percentage: number;
  color: string;
}

export interface TechBadge {
  name: string;
  category: 'frontend' | 'backend' | 'design' | 'devops' | 'database' | 'other';
}

export const skillCategories: SkillCategory[] = [
  { category: 'Frontend', value: 95 },
  { category: 'Backend', value: 85 },
  { category: 'Design', value: 90 },
  { category: 'DevOps', value: 75 },
  { category: 'Mobile', value: 80 },
  { category: 'Soft Skills', value: 92 },
];

export const topSkills: TopSkill[] = [
  { name: 'React', percentage: 95, color: 'var(--color-primary-500)' },
  { name: 'TypeScript', percentage: 90, color: 'var(--color-accent-500)' },
  { name: 'Node.js', percentage: 85, color: 'var(--color-success-500)' },
  { name: 'Figma', percentage: 90, color: 'var(--color-warning-500)' },
  { name: 'Python', percentage: 80, color: 'var(--color-error-500)' },
  { name: 'React Native', percentage: 80, color: 'var(--color-primary-400)' },
];

export const techStack: TechBadge[] = [
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Python', category: 'backend' },
  { name: 'Figma', category: 'design' },
  { name: 'Git', category: 'devops' },
  { name: 'Docker', category: 'devops' },
  { name: 'AWS', category: 'devops' },
  { name: 'MongoDB', category: 'database' },
  { name: 'PostgreSQL', category: 'database' },
  { name: 'GraphQL', category: 'backend' },
  { name: 'Next.js', category: 'frontend' },
];

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  organization: string;
  type: 'work' | 'education' | 'achievement';
  description: string;
  icon: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: '1',
    year: '2026',
    title: 'Senior Full-Stack Developer',
    organization: 'TechCorp',
    type: 'work',
    description: 'Leading development of enterprise-scale applications with React, TypeScript, and Node.js. Mentoring junior developers and architecting scalable solutions.',
    icon: 'briefcase',
  },
  {
    id: '2',
    year: '2024',
    title: 'Team Lead & Mentor',
    organization: 'StartupHub',
    type: 'work',
    description: 'Managed a team of 8 developers, implemented agile workflows, and increased project delivery efficiency by 40%. Conducted weekly mentoring sessions.',
    icon: 'users',
  },
  {
    id: '3',
    year: '2023',
    title: 'Launched Personal SaaS Product',
    organization: 'Independent',
    type: 'achievement',
    description: 'Built and launched a project management tool that gained 1,000+ active users in the first 6 months. Full-stack development with monetization strategy.',
    icon: 'rocket',
  },
  {
    id: '4',
    year: '2022',
    title: 'Founded Creative Agency',
    organization: 'RiveraDigital',
    type: 'achievement',
    description: 'Established a digital agency specializing in web development and UX design. Completed 30+ client projects with a 98% satisfaction rating.',
    icon: 'star',
  },
  {
    id: '5',
    year: '2020',
    title: 'Computer Science Degree',
    organization: 'Tech University',
    type: 'education',
    description: 'Graduated with honors (GPA 3.9/4.0). Specialized in software engineering and human-computer interaction. Led multiple hackathon teams to victory.',
    icon: 'graduation-cap',
  },
  {
    id: '6',
    year: '2018',
    title: 'First Line of Code',
    organization: 'Self-Taught',
    type: 'achievement',
    description: 'Started my coding journey with HTML, CSS, and JavaScript. Built my first interactive website and fell in love with problem-solving through code.',
    icon: 'code',
  },
];

import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Built with React and TypeScript on the frontend, Node.js and PostgreSQL on the backend. Features include product search, cart management, order tracking, and analytics.',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
    category: 'web',
    featured: true,
    demoUrl: 'https://ecommerce-demo.mayarivera.dev',
    githubUrl: 'https://github.com/mayarivera/ecommerce-platform',
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description:
      'Collaborative task management tool with drag-and-drop functionality, team workspaces, and real-time updates. Features kanban boards, calendar views, and productivity analytics. Built with React Query for efficient data fetching and WebSocket for live collaboration.',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'React Query'],
    category: 'web',
    featured: false,
    demoUrl: 'https://tasks.mayarivera.dev',
    githubUrl: 'https://github.com/mayarivera/task-manager',
  },
  {
    id: 'project-3',
    title: 'Fitness Tracker',
    description:
      'Mobile fitness application with workout tracking, nutrition logging, and progress visualization. Integrates with wearable devices and provides personalized workout recommendations. Built with React Native for cross-platform compatibility and Redux for state management.',
    gradient: 'linear-gradient(135deg, #10b981 0%, #14b8a6 100%)',
    tags: ['React Native', 'Redux', 'Firebase', 'HealthKit', 'Expo'],
    category: 'mobile',
    featured: false,
    demoUrl: 'https://apps.apple.com/fitness-tracker',
  },
  {
    id: 'project-4',
    title: 'AI Chatbot Assistant',
    description:
      'Intelligent conversational AI assistant powered by OpenAI GPT-4. Features context-aware responses, multi-language support, and integration with external APIs. Includes sentiment analysis, intent recognition, and custom training capabilities for domain-specific knowledge.',
    gradient: 'linear-gradient(135deg, #f97316 0%, #dc2626 100%)',
    tags: ['Python', 'OpenAI', 'FastAPI', 'LangChain', 'Vector DB'],
    category: 'ai',
    featured: false,
    demoUrl: 'https://chatbot.mayarivera.dev',
    githubUrl: 'https://github.com/mayarivera/ai-chatbot',
  },
  {
    id: 'project-5',
    title: 'Portfolio Website',
    description:
      'Modern, animated portfolio website showcasing projects and skills with stunning 3D effects and smooth transitions. Features include dark mode, responsive design, and performance optimization. Built with Framer Motion for beautiful animations and Three.js for 3D elements.',
    gradient: 'linear-gradient(135deg, #667eea 0%, #06b6d4 100%)',
    tags: ['React', 'Framer Motion', 'Three.js', 'TypeScript', 'Vite'],
    category: 'web',
    featured: true,
    demoUrl: 'https://mayarivera.dev',
    githubUrl: 'https://github.com/mayarivera/portfolio',
  },
  {
    id: 'project-6',
    title: 'Weather Dashboard',
    description:
      'Real-time weather monitoring dashboard with interactive maps, hourly and weekly forecasts, and severe weather alerts. Features include location search, favorite locations, and historical weather data visualization. Integrates with OpenWeatherMap API for accurate data.',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
    tags: ['React', 'OpenWeather API', 'D3.js', 'Mapbox', 'Chart.js'],
    category: 'web',
    featured: false,
    demoUrl: 'https://weather.mayarivera.dev',
    githubUrl: 'https://github.com/mayarivera/weather-dashboard',
  },
  {
    id: 'project-7',
    title: 'Design System',
    description:
      'Comprehensive design system with 50+ reusable components, documentation, and Storybook integration. Includes design tokens, accessibility guidelines, and automated visual regression testing. Built with atomic design principles and fully customizable with CSS-in-JS.',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #f97316 100%)',
    tags: ['Figma', 'Storybook', 'React', 'CSS Modules', 'TypeScript'],
    category: 'design',
    featured: true,
    demoUrl: 'https://design.mayarivera.dev',
    githubUrl: 'https://github.com/mayarivera/design-system',
  },
  {
    id: 'project-8',
    title: 'Meditation App',
    description:
      'Mindfulness and meditation mobile app with guided sessions, breathing exercises, and progress tracking. Features include customizable timers, ambient sounds, and daily reminders. Built with React Native and includes offline functionality for on-the-go meditation.',
    gradient: 'linear-gradient(135deg, #14b8a6 0%, #10b981 100%)',
    tags: ['React Native', 'TypeScript', 'Audio API', 'AsyncStorage', 'Animations'],
    category: 'mobile',
    featured: false,
    demoUrl: 'https://apps.apple.com/meditation-app',
  },
];

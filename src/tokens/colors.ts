// Color Design Tokens - Cyber Purple Theme
export const colors = {
  // Primary Colors
  primary: '#8B5CF6',
  primaryLight: '#A78BFA',
  primaryDark: '#7C3AED',
  
  // Secondary Colors
  secondary: '#06B6D4',
  secondaryLight: '#22D3EE',
  secondaryDark: '#0891B2',
  
  // Accent Colors
  accent: '#EC4899',
  accentLight: '#F472B6',
  accentDark: '#DB2777',
  
  // Background Gradients
  bgDarkStart: '#0F172A',
  bgDarkEnd: '#1E293B',
  bgDark: '#0F172A',
  
  // Surface Colors (Glassmorphism)
  surface: 'rgba(255, 255, 255, 0.05)',
  surfaceHover: 'rgba(255, 255, 255, 0.08)',
  surfaceActive: 'rgba(255, 255, 255, 0.12)',
  
  // Text Colors
  textPrimary: '#F8FAFC',
  textSecondary: '#CBD5E1',
  textMuted: '#94A3B8',
  textInverse: '#0F172A',
  
  // Border Colors
  border: 'rgba(255, 255, 255, 0.1)',
  borderHover: 'rgba(255, 255, 255, 0.2)',
  
  // Semantic Colors
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',
  
  // Glow Colors (for effects)
  glowPrimary: 'rgba(139, 92, 246, 0.5)',
  glowSecondary: 'rgba(6, 182, 212, 0.5)',
  glowAccent: 'rgba(236, 72, 153, 0.5)',
} as const;

export type ColorToken = keyof typeof colors;

// Shadow Design Tokens - Multi-layer shadows for depth
export const shadows = {
  // Regular Shadows
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  
  // 3D Lift Shadows (for cards)
  lift: '0 20px 40px rgba(0, 0, 0, 0.3), 0 10px 20px rgba(0, 0, 0, 0.2)',
  liftHover: '0 30px 60px rgba(0, 0, 0, 0.4), 0 15px 30px rgba(0, 0, 0, 0.3)',
  
  // Glow Shadows (colored)
  glowPrimary: '0 0 20px rgba(139, 92, 246, 0.3), 0 0 40px rgba(139, 92, 246, 0.15)',
  glowSecondary: '0 0 20px rgba(6, 182, 212, 0.3), 0 0 40px rgba(6, 182, 212, 0.15)',
  glowAccent: '0 0 20px rgba(236, 72, 153, 0.3), 0 0 40px rgba(236, 72, 153, 0.15)',
  
  // Inner Shadows (for glassmorphism)
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  
  // None
  none: 'none',
} as const;

export type ShadowToken = keyof typeof shadows;

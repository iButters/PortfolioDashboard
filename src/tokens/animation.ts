// Animation Design Tokens
export const animation = {
  // Durations
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '600ms',
    slower: '900ms',
  },
  
  // Easing Functions
  ease: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
} as const;

export type AnimationToken = keyof typeof animation;

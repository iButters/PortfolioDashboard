// Responsive Breakpoints
export const breakpoints = {
  mobile: 375,
  tablet: 768,
  desktop: 1024,
  wide: 1920,
} as const;

export type BreakpointToken = keyof typeof breakpoints;

import { useEffect, useState } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

/**
 * Hook to track cursor position for spotlight effect
 */
export const useCursorGlow = () => {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return position;
};

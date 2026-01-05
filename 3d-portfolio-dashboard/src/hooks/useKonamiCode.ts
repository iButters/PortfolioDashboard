import { useEffect, useState } from 'react';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'KeyB',
  'KeyA',
];

/**
 * Hook to detect Konami Code input
 * Returns true when the code is entered correctly
 */
export const useKonamiCode = (): boolean => {
  const [isActivated, setIsActivated] = useState(false);
  const [, setKeys] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKeys((prevKeys) => {
        const newKeys = [...prevKeys, e.code].slice(-KONAMI_CODE.length);
        
        // Check if the sequence matches
        const isMatch = KONAMI_CODE.every((key, index) => key === newKeys[index]);
        
        if (isMatch && !isActivated) {
          setIsActivated(true);
          // Reset after 10 seconds
          setTimeout(() => {
            setIsActivated(false);
            setKeys([]);
          }, 10000);
        }
        
        return newKeys;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isActivated]);

  return isActivated;
};

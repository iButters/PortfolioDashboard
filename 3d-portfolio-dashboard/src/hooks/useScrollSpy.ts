import { useState, useEffect } from 'react';

/**
 * Hook to track which section is currently visible in the viewport
 * Uses scroll position calculation for reliable active section detection
 * @param sectionIds - Array of section IDs to observe
 * @returns Currently active section ID or null
 */
export const useScrollSpy = (
  sectionIds: string[]
): string | null => {
  const [activeSection, setActiveSection] = useState<string | null>(sectionIds[0] || null);

  useEffect(() => {
    const navHeight = 80;
    const offset = navHeight + 10; // Small buffer for better UX

    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // Find which section we're currently in
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          
          // Check if we've scrolled past this section's top
          if (scrollPosition >= sectionTop) {
            setActiveSection(sectionIds[i]);
            return;
          }
        }
      }

      // Default to first section if we're at the top
      setActiveSection(sectionIds[0] || null);
    };

    // Initial check
    handleScroll();

    // Throttle scroll events for performance (60fps = ~16ms)
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener, { passive: true });

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, [sectionIds]);

  return activeSection;
};

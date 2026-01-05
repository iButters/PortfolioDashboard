import { useEffect, useState } from 'react';
import { usePortfolioStore } from '../../../store/portfolioStore';
import { GradientBackground } from './GradientBackground';
import { ParticleBackground } from './ParticleBackground';
import { GridBackground } from './GridBackground';
import styles from './Background.module.css';

export const Background = () => {
  const background = usePortfolioStore((state) => state.background);
  const [currentBg, setCurrentBg] = useState(background);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (background !== currentBg) {
      setIsTransitioning(true);
      
      // Wait for fade out
      const timeout = setTimeout(() => {
        setCurrentBg(background);
        setIsTransitioning(false);
      }, 300); // Match CSS transition duration

      return () => clearTimeout(timeout);
    }
  }, [background, currentBg]);

  const renderBackground = () => {
    switch (currentBg) {
      case 'particles':
        return <ParticleBackground />;
      case 'grid':
        return <GridBackground />;
      case 'gradient':
      default:
        return <GradientBackground />;
    }
  };

  return (
    <div className={`${styles.backgroundWrapper} ${isTransitioning ? styles.transitioning : ''}`}>
      {renderBackground()}
    </div>
  );
};

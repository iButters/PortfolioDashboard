import { useEffect, useRef } from 'react';
import styles from './GradientBackground.module.css';

export const GradientBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Trigger animation start
    container.classList.add(styles.animated);

    return () => {
      container.classList.remove(styles.animated);
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.gradientBackground}>
      <div className={`${styles.gradient} ${styles.gradient1}`} />
      <div className={`${styles.gradient} ${styles.gradient2}`} />
      <div className={`${styles.gradient} ${styles.gradient3}`} />
      <div className={styles.overlay} />
    </div>
  );
};

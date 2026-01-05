import { useEffect, useRef } from 'react';
import styles from './GridBackground.module.css';

export const GridBackground = () => {
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
    <div ref={containerRef} className={styles.gridBackground}>
      <div className={styles.gridContainer}>
        <div className={styles.grid}>
          {/* Horizontal lines */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`h-${i}`}
              className={`${styles.gridLine} ${styles.horizontal}`}
              style={{ '--index': i } as React.CSSProperties}
            />
          ))}
          {/* Vertical lines */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`v-${i}`}
              className={`${styles.gridLine} ${styles.vertical}`}
              style={{ '--index': i } as React.CSSProperties}
            />
          ))}
        </div>
      </div>
      <div className={styles.overlay} />
      <div className={styles.fogBottom} />
    </div>
  );
};

import { usePortfolioStore } from '../../../store/portfolioStore';
import styles from './BackgroundController.module.css';

export const BackgroundController = () => {
  const { background, setBackground } = usePortfolioStore();

  const backgrounds = [
    { id: 'grid' as const, label: 'Grid', icon: '🌐' },
    { id: 'particles' as const, label: 'Particles', icon: '✨' },
    { id: 'gradient' as const, label: 'Gradient', icon: '🌈' },
  ];

  return (
    <div className={styles.controller}>
      <div className={styles.label}>Background</div>
      <div className={styles.buttons}>
        {backgrounds.map((bg) => (
          <button
            key={bg.id}
            className={`${styles.button} ${background === bg.id ? styles.active : ''}`}
            onClick={() => setBackground(bg.id)}
            aria-label={`Switch to ${bg.label} background`}
            title={bg.label}
          >
            <span className={styles.icon}>{bg.icon}</span>
            <span className={styles.text}>{bg.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './ProgressBar.module.css';

export type ProgressBarVariant = 'primary' | 'secondary' | 'accent' | 'success';
export type ProgressBarSize = 'sm' | 'md' | 'lg';

export interface ProgressBarProps {
  value: number; // 0-100
  max?: number;
  variant?: ProgressBarVariant;
  size?: ProgressBarSize;
  showLabel?: boolean;
  label?: string;
  animated?: boolean;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  variant = 'primary',
  size = 'md',
  showLabel = false,
  label,
  animated = true,
  className = '',
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setDisplayValue(percentage);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setDisplayValue(percentage);
    }
  }, [percentage, animated]);

  const containerClasses = [
    styles.container,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const barClasses = [
    styles.bar,
    styles[size],
  ]
    .filter(Boolean)
    .join(' ');

  const fillClasses = [
    styles.fill,
    styles[variant],
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClasses}>
      {(showLabel || label) && (
        <div className={styles.labelContainer}>
          {label && <span className={styles.label}>{label}</span>}
          {showLabel && <span className={styles.percentage}>{Math.round(displayValue)}%</span>}
        </div>
      )}
      <div className={barClasses}>
        <motion.div
          className={fillClasses}
          initial={{ width: 0 }}
          animate={{ width: `${displayValue}%` }}
          transition={{
            duration: animated ? 1 : 0,
            ease: 'easeOut',
          }}
        >
          <div className={styles.glow} />
        </motion.div>
      </div>
    </div>
  );
};

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Text, ProgressBar } from '@/components/atoms';
import styles from './SkillBar.module.css';

export interface SkillBarProps {
  skill: string;
  level: number; // 0-100
  variant?: 'primary' | 'secondary' | 'accent';
  orientation?: 'horizontal' | 'vertical';
  delay?: number;
}

export const SkillBar: React.FC<SkillBarProps> = ({
  skill,
  level,
  variant = 'primary',
  orientation = 'horizontal',
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const isVertical = orientation === 'vertical';

  return (
    <motion.div
      ref={ref}
      className={`${styles.skillBar} ${isVertical ? styles.vertical : styles.horizontal}`}
      initial={{ opacity: 0, x: isVertical ? 0 : -20, y: isVertical ? 20 : 0 }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <div className={styles.header}>
        <Text variant="body" className={styles.skillName}>
          {skill}
        </Text>
        <Text variant="caption" className={styles.percentage}>
          {isInView ? level : 0}%
        </Text>
      </div>
      <motion.div
        className={styles.progressWrapper}
        initial={{ scale: isVertical ? 0 : 1, scaleX: isVertical ? 1 : 0 }}
        animate={isInView ? { scale: 1, scaleX: 1 } : {}}
        transition={{
          duration: 1,
          delay: delay + 0.2,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
        style={{ transformOrigin: isVertical ? 'bottom' : 'left' }}
      >
        <ProgressBar
          value={isInView ? level : 0}
          variant={variant}
          animated
          className={styles.progressBar}
        />
      </motion.div>
    </motion.div>
  );
};

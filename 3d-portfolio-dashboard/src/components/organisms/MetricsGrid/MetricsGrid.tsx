import { type FC } from 'react';
import { motion } from 'framer-motion';
import { MetricCard } from '@/components/molecules';
import type { IconName } from '@/components/atoms/Icon/Icon';
import styles from './MetricsGrid.module.css';

export interface Metric {
  value: number;
  label: string;
  icon: IconName;
  suffix?: string;
  prefix?: string;
}

export interface MetricsGridProps {
  metrics?: Metric[];
  className?: string;
}

// Default metrics for Maya Rivera's portfolio
const defaultMetrics: Metric[] = [
  {
    value: 42,
    label: 'Projects Completed',
    icon: 'code',
    suffix: '+',
  },
  {
    value: 5,
    label: 'Years Experience',
    icon: 'calendar',
    suffix: '',
  },
  {
    value: 18,
    label: 'Technologies Mastered',
    icon: 'star',
    suffix: '+',
  },
  {
    value: 1247,
    label: 'GitHub Contributions',
    icon: 'github',
    suffix: '',
  },
  {
    value: 9999,
    label: 'Cups of Coffee',
    icon: 'coffee',
    suffix: '+',
  },
  {
    value: 127000,
    label: 'Lines of Code',
    icon: 'code',
    suffix: '+',
  },
];

// Container animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Item animation with scale and fade
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

export const MetricsGrid: FC<MetricsGridProps> = ({
  metrics = defaultMetrics,
  className = '',
}) => {
  return (
    <section 
      id="metrics" 
      className={`${styles.metricsSection} ${className}`}
      aria-label="Portfolio Metrics"
    >
      <div className={styles.container}>
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={`${metric.label}-${index}`}
              variants={itemVariants}
              className={styles.gridItem}
            >
              <MetricCard
                value={metric.value}
                label={metric.label}
                icon={metric.icon}
                suffix={metric.suffix}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

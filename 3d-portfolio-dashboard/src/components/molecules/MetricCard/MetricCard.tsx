import { motion } from 'framer-motion';
import { Card, Text, Icon } from '@/components/atoms';
import type { IconProps } from '@/components/atoms';
import { useCountUp } from '@/hooks';
import styles from './MetricCard.module.css';

export interface MetricCardProps {
  value: number;
  label: string;
  icon: IconProps['name'];
  suffix?: string;
  delay?: number;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  value,
  label,
  icon,
  suffix = '+',
  delay = 0,
}) => {
  const { count, ref } = useCountUp({ end: value, duration: 2 });

  return (
    <motion.div
      ref={ref}
      className={styles.metricCard}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <Card variant="elevated" className={styles.card}>
        <div className={styles.iconWrapper}>
          <Icon name={icon} size="lg" className={styles.icon} />
          <div className={styles.glow} />
        </div>
        <div className={styles.content}>
          <Text variant="h2" className={styles.value}>
            {count}{suffix}
          </Text>
          <Text variant="body" className={styles.label}>
            {label}
          </Text>
        </div>
      </Card>
    </motion.div>
  );
};

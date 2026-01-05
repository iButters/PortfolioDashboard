import { motion } from 'framer-motion';
import { Badge, Icon } from '@/components/atoms';
import type { IconProps } from '@/components/atoms';
import type { TechCategory } from '@/types';
import styles from './TechBadge.module.css';

export interface TechBadgeProps {
  technology: string;
  category?: TechCategory;
  icon?: IconProps['name'];
  delay?: number;
}

const categoryColors: Record<TechCategory, string> = {
  frontend: 'var(--color-primary)',
  backend: 'var(--color-secondary)',
  design: 'var(--color-accent)',
  other: 'var(--color-text-secondary)',
};

export const TechBadge: React.FC<TechBadgeProps> = ({
  technology,
  category = 'other',
  icon,
  delay = 0,
}) => {
  const color = categoryColors[category];

  return (
    <motion.div
      className={styles.techBadge}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -4, scale: 1.05 }}
      animate={{
        y: [0, -4, 0],
      }}
      transition={{
        opacity: { duration: 0.4, delay },
        scale: { duration: 0.4, delay },
        y: {
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }}
      data-category={category}
    >
      <Badge
        variant="secondary"
        className={styles.badge}
        style={{
          borderColor: color,
          background: `${color}11`,
        }}
      >
        {icon && (
          <Icon
            name={icon}
            size="xs"
            className={styles.icon}
            color={color}
          />
        )}
        <span className={styles.text} style={{ color }}>
          {technology}
        </span>
      </Badge>
      <div
        className={styles.glow}
        style={{
          background: `radial-gradient(circle, ${color}44 0%, transparent 70%)`,
        }}
      />
    </motion.div>
  );
};

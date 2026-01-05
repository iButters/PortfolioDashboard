import { Card, Text, Badge, Icon } from '@/components/atoms';
import type { IconProps } from '@/components/atoms';
import styles from './TimelineItem.module.css';

export interface TimelineItemProps {
  year: number;
  title: string;
  description: string;
  type: 'education' | 'work' | 'achievement';
  position?: 'left' | 'right';
  delay?: number;
}

const typeConfig: Record<
  TimelineItemProps['type'],
  { icon: IconProps['name']; color: string }
> = {
  education: { icon: 'code', color: 'var(--color-primary)' },
  work: { icon: 'coffee', color: 'var(--color-secondary)' },
  achievement: { icon: 'star', color: 'var(--color-accent)' },
};

export const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  description,
  type,
}) => {
  const config = typeConfig[type];

  return (
    <Card variant="elevated" className={styles.card}>
      <div className={styles.header}>
        <Badge
          variant="accent"
          className={styles.yearBadge}
          style={{ background: config.color }}
        >
          {year}
        </Badge>
        <div className={styles.iconWrapper}>
          <Icon name={config.icon} size="sm" color={config.color} />
        </div>
      </div>

      <div className={styles.content}>
        <Text variant="h4" className={styles.title}>
          {title}
        </Text>
        <Text variant="body" className={styles.description}>
          {description}
        </Text>
      </div>

      <div
        className={styles.glow}
        style={{
          background: `radial-gradient(circle at center, ${config.color}22 0%, transparent 70%)`,
        }}
      />
    </Card>
  );
};

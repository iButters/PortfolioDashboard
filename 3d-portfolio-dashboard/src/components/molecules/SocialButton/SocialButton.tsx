import { motion } from 'framer-motion';
import { Icon } from '@/components/atoms';
import type { IconProps } from '@/components/atoms';
import type { SocialPlatform } from '@/types';
import styles from './SocialButton.module.css';

export interface SocialButtonProps {
  platform: SocialPlatform;
  url: string;
  delay?: number;
}

const platformConfig: Record<
  SocialPlatform,
  {
    icon: IconProps['name'];
    label: string;
    color: string;
  }
> = {
  github: {
    icon: 'github',
    label: 'GitHub',
    color: '#333',
  },
  linkedin: {
    icon: 'linkedin',
    label: 'LinkedIn',
    color: '#0077b5',
  },
  twitter: {
    icon: 'twitter',
    label: 'Twitter',
    color: '#1da1f2',
  },
  email: {
    icon: 'email',
    label: 'Email',
    color: '#ea4335',
  },
};

export const SocialButton: React.FC<SocialButtonProps> = ({
  platform,
  url,
  delay = 0,
}) => {
  const config = platformConfig[platform];

  const handleClick = () => {
    if (platform === 'email') {
      window.location.href = url.startsWith('mailto:') ? url : `mailto:${url}`;
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.button
      className={styles.socialButton}
      onClick={handleClick}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -8, scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={config.label}
      data-platform={platform}
    >
      <div className={styles.iconWrapper}>
        <Icon name={config.icon} size="md" className={styles.icon} />
        <div
          className={styles.glow}
          style={{
            background: `radial-gradient(circle, ${config.color}66 0%, transparent 70%)`,
          }}
        />
      </div>
      <span className={styles.tooltip}>{config.label}</span>
    </motion.button>
  );
};

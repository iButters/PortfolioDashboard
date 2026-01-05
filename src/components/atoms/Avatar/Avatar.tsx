import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import styles from './Avatar.module.css';

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';

export interface AvatarProps extends Omit<HTMLMotionProps<'div'>, 'size'> {
  letter: string;
  size?: AvatarSize;
  variant?: 'primary' | 'secondary' | 'accent';
  animate?: boolean;
}

export const Avatar: React.FC<AvatarProps> = ({
  letter,
  size = 'md',
  variant = 'primary',
  animate = true,
  className = '',
  ...props
}) => {
  const avatarClasses = [
    styles.avatar,
    styles[size],
    styles[variant],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const displayLetter = letter.charAt(0).toUpperCase();

  return (
    <motion.div
      className={avatarClasses}
      whileHover={animate ? { 
        rotateY: 360,
        scale: 1.05,
      } : undefined}
      transition={{ 
        duration: 0.6,
        ease: 'easeInOut',
      }}
      {...props}
    >
      <span className={styles.letter}>{displayLetter}</span>
      <div className={styles.glow} />
    </motion.div>
  );
};

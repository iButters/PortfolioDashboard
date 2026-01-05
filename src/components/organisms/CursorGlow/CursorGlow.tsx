import { type FC } from 'react';
import { motion } from 'framer-motion';
import { useCursorGlow } from '@/hooks/useCursorGlow';
import styles from './CursorGlow.module.css';

/**
 * Cursor Glow Effect
 * Subtle spotlight that follows the cursor
 */
export const CursorGlow: FC = () => {
  const { x, y } = useCursorGlow();

  return (
    <motion.div
      className={styles.cursorGlow}
      animate={{
        x: x - 200,
        y: y - 200,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
        mass: 0.5,
      }}
      aria-hidden="true"
    />
  );
};

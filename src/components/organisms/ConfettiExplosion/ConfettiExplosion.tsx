import { type FC, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './ConfettiExplosion.module.css';

interface ConfettiExplosionProps {
  isActive: boolean;
}

const colors = ['#8B5CF6', '#06B6D4', '#EC4899', '#10B981', '#F59E0B'];

/**
 * Confetti Explosion for Konami Code Easter Egg
 */
export const ConfettiExplosion: FC<ConfettiExplosionProps> = ({ isActive }) => {
  useEffect(() => {
    if (isActive) {
      const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTcHGWi77eefTRAMUKfj8LZjHAY4kdfy0HksBS1yxe/glkAJE12z6eCTPRALTKXh77dpGgU2jdXxy3YpBSl+zPDajzsIGGS57OWhUQ0NVKvl8bNgGgY7ldj0zH4tBStzxfDgl0AJFmCy6N+RQg0LTKXh77dpGgU2jdXxy3YpBSl+zPDajzsIGGS57OWhUQ0NVKvl8bNgGgY7ldj0zH4tBStzxfDgl0AJFmCy6N+RQg0LTKXh77dpGgU2jdXxy3YpBSl+zPDajzsIGGS57OWhUQ0NVKvl8bNgGgY7ldj0zH4tBStzxfDgl0AJ');
      audio.volume = 0.3;
      audio.play().catch(() => {}); // Ignore errors
    }
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div className={styles.confettiContainer} aria-live="polite" aria-label="Konami code activated!">
      {Array.from({ length: 100 }).map((_, i) => (
        <motion.div
          key={i}
          className={styles.confetti}
          style={{
            backgroundColor: colors[i % colors.length],
            left: `${Math.random() * 100}%`,
          }}
          initial={{
            top: '50%',
            scale: 0,
            rotate: 0,
          }}
          animate={{
            top: ['50%', `${Math.random() * 100}%`],
            scale: [0, 1, 1, 0],
            rotate: [0, Math.random() * 720 - 360],
            x: [(Math.random() - 0.5) * 1000],
          }}
          transition={{
            duration: 3,
            delay: Math.random() * 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />
      ))}
      <motion.div
        className={styles.message}
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        <h2>🎉 Konami Code Activated! 🎉</h2>
        <p>You found the secret! 🎮</p>
      </motion.div>
    </div>
  );
};

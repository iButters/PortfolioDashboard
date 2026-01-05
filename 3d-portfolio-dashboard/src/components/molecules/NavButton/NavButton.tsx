import { motion } from 'framer-motion';
import { Button } from '@/components/atoms';
import styles from './NavButton.module.css';

export interface NavButtonProps {
  label: string;
  href: string;
  active?: boolean;
  delay?: number;
  onClick?: () => void;
}

export const NavButton: React.FC<NavButtonProps> = ({
  label,
  href,
  active = false,
  delay = 0,
  onClick,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Call custom onClick if provided
    if (onClick) {
      onClick();
    }

    // Smooth scroll to section with offset for fixed navigation
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const navHeight = 80; // Fixed navigation height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // Update URL without triggering navigation
      window.history.pushState(null, '', href);
    }
  };

  return (
    <motion.div
      className={styles.navButton}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      <Button
        variant={active ? 'primary' : 'ghost'}
        size="sm"
        onClick={handleClick}
        className={`${styles.button} ${active ? styles.active : ''}`}
      >
        {label}
        {active && <div className={styles.activeIndicator} />}
      </Button>
      {active && (
        <motion.div
          className={styles.glow}
          layoutId="navGlow"
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        />
      )}
    </motion.div>
  );
};

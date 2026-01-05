import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavButton } from '../../molecules/NavButton';
import { Text } from '../../atoms/Text';
import { Icon } from '../../atoms/Icon';
import { useScrollSpy } from '../../../hooks';
import styles from './Navigation.module.css';

const navigationLinks = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'contact', label: 'Contact' },
];

export const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(
    navigationLinks.map((link) => link.id)
  );

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav
        className={styles.navigation}
        aria-label="Main navigation"
      >
        <div className={styles.container}>
          {/* Logo/Name */}
          <div className={styles.logo}>
            <Text variant="h3" gradient>
              Maya Rivera
            </Text>
          </div>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            {navigationLinks.map((link) => (
              <NavButton
                key={link.id}
                label={link.label}
                href={`#${link.id}`}
                onClick={() => handleNavClick(link.id)}
                active={activeSection === link.id}
              />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuButton}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Icon
              name={isMobileMenuOpen ? 'close' : 'menu'}
              size="md"
              color="text-primary"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              className={styles.mobileMenu}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'spring',
                damping: 25,
                stiffness: 200,
              }}
            >
              <div className={styles.mobileMenuContent}>
                {navigationLinks.map((link, index) => (
                  <motion.div
                    key={link.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={styles.mobileNavItem}
                  >
                    <NavButton
                      label={link.label}
                      href={`#${link.id}`}
                      onClick={() => handleNavClick(link.id)}
                      active={activeSection === link.id}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

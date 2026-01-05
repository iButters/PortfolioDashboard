import { motion } from 'framer-motion';
import { Avatar } from '../../atoms/Avatar';
import { Text } from '../../atoms/Text';
import { Button } from '../../atoms/Button';
import { Icon } from '../../atoms/Icon';
import styles from './HeroSection.module.css';

export const HeroSection: React.FC = () => {
  const handleViewProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetInTouch = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollDown = () => {
    const nextSection = document.getElementById('projects');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.content}>
        {/* 3D Avatar */}
        <motion.div
          className={styles.avatarWrapper}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          whileHover={{
            rotateY: 360,
            transition: {
              duration: 0.8,
              ease: 'easeOut',
            },
          }}
        >
          <Avatar letter="M" size="xl" />
        </motion.div>

        {/* Animated Name */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: 'easeOut',
          }}
        >
          <Text variant="h1" align="center" gradient className={styles.title}>
            Maya Rivera
          </Text>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: 'easeOut',
          }}
        >
          <Text
            variant="h4"
            color="secondary"
            align="center"
            className={styles.subtitle}
          >
            Creative Developer & UX Engineer
          </Text>
        </motion.div>

        {/* Call-to-Action Buttons */}
        <motion.div className={styles.buttonGroup}>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.6,
              ease: 'easeOut',
            }}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={handleViewProjects}
              leftIcon={<Icon name="code" size="sm" />}
            >
              View Projects
            </Button>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.7,
              ease: 'easeOut',
            }}
          >
            <Button
              variant="secondary"
              size="lg"
              onClick={handleGetInTouch}
              leftIcon={<Icon name="email" size="sm" />}
            >
              Get in Touch
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className={styles.scrollIndicator}
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          onClick={handleScrollDown}
          role="button"
          tabIndex={0}
          aria-label="Scroll to next section"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleScrollDown();
            }
          }}
        >
          <Icon name="arrowDown" size="lg" />
        </motion.div>
      </div>
    </section>
  );
};

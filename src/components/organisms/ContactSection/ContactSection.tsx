import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SocialButton } from '../../molecules/SocialButton';
import { Badge } from '../../atoms/Badge';
import { Card } from '../../atoms/Card';
import { Text } from '../../atoms/Text';
import { socialLinks, contactInfo } from '../../../data/contact';
import styles from './ContactSection.module.css';

export interface ContactSectionProps {
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const socialVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export const ContactSection: React.FC<ContactSectionProps> = ({ className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className={`${styles.contactSection} ${className || ''}`}
      aria-labelledby="contact-title"
    >
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div variants={cardVariants} className={styles.cardWrapper}>
          <Card variant="elevated" className={styles.contactCard}>
            {/* Availability Badge */}
            {contactInfo.isAvailable && (
              <motion.div variants={itemVariants} className={styles.statusWrapper}>
                <div className={styles.statusBadge}>
                  <div className={styles.pulseDot} />
                  <Badge variant="success" size="md">
                    {contactInfo.availabilityText}
                  </Badge>
                </div>
              </motion.div>
            )}

            {/* Title */}
            <motion.div variants={itemVariants}>
              <Text
                id="contact-title"
                as="h2"
                variant="h2"
                className={styles.title}
              >
                {contactInfo.title}
              </Text>
            </motion.div>

            {/* Subtitle */}
            <motion.div variants={itemVariants}>
              <Text variant="bodyLarge" className={styles.subtitle}>
                {contactInfo.subtitle}
              </Text>
            </motion.div>

            {/* Email - Simple and Clean */}
            <motion.div variants={itemVariants} className={styles.emailWrapper}>
              <Text variant="bodySmall" className={styles.emailLabel}>
                EMAIL ME AT
              </Text>
              <a href={`mailto:${contactInfo.email}`} className={styles.emailLink}>
                {contactInfo.email}
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className={styles.socialSection}>
              <Text variant="bodySmall" className={styles.socialLabel}>
                OR CONNECT WITH ME ON
              </Text>
              <div className={styles.socialButtons}>
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={link.id}
                    variants={socialVariants}
                    custom={index}
                  >
                    <SocialButton
                      platform={link.platform.toLowerCase() as any}
                      url={link.url}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Decorative Glow */}
            <div className={styles.glowEffect} />
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
};

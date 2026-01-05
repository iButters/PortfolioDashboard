import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { TimelineItem } from '../../molecules/TimelineItem';
import { Text } from '../../atoms/Text';
import { timelineEvents } from '../../../data/timeline';
import styles from './TimelineSection.module.css';

export interface TimelineSectionProps {
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const itemVariantsRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const TimelineSection: React.FC<TimelineSectionProps> = ({ className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.3'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      ref={ref}
      className={`${styles.timelineSection} ${className || ''}`}
      aria-labelledby="timeline-title"
    >
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Section Header */}
        <motion.div variants={headerVariants} className={styles.header}>
          <Text
            id="timeline-title"
            as="h2"
            variant="h2"
            className={styles.title}
          >
            My Journey
          </Text>
          <Text variant="bodyLarge" className={styles.subtitle}>
            Key milestones that shaped my career
          </Text>
        </motion.div>

        {/* Timeline Container */}
        <div className={styles.timelineContainer}>
          {/* Center Line */}
          <div className={styles.centerLine}>
            <motion.div
              className={styles.progressLine}
              style={{ height: lineHeight }}
            />
          </div>

          {/* Timeline Items */}
          <div className={styles.timelineItems}>
            {timelineEvents.map((event, index) => {
              const itemRef = useRef(null);
              const itemInView = useInView(itemRef, {
                once: true,
                margin: '-50px',
              });

              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={event.id}
                  ref={itemRef}
                  className={`${styles.timelineItemWrapper} ${
                    isLeft ? styles.left : styles.right
                  }`}
                  variants={isLeft ? itemVariants : itemVariantsRight}
                  initial="hidden"
                  animate={itemInView ? 'visible' : 'hidden'}
                >
                  {/* Timeline Card - Left items need card first for correct grid placement */}
                  {isLeft && (
                    <div className={styles.cardContainer}>
                      <TimelineItem
                        year={parseInt(event.year)}
                        title={`${event.title} @ ${event.organization}`}
                        description={event.description}
                        type={event.type}
                      />
                    </div>
                  )}

                  {/* Timeline Dot */}
                  <motion.div
                    className={styles.dotContainer}
                    variants={dotVariants}
                    initial="hidden"
                    animate={itemInView ? 'visible' : 'hidden'}
                  >
                    <div className={`${styles.dot} ${styles[event.type]}`}>
                      <div className={styles.dotPulse} />
                    </div>
                  </motion.div>

                  {/* Timeline Card - Right items need card after dot */}
                  {!isLeft && (
                    <div className={styles.cardContainer}>
                      <TimelineItem
                        year={parseInt(event.year)}
                        title={`${event.title} @ ${event.organization}`}
                        description={event.description}
                        type={event.type}
                      />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TimelineSection;

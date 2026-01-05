import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { SkillBar } from '../../molecules/SkillBar';
import { TechBadge } from '../../molecules/TechBadge';
import { Text } from '../../atoms/Text';
import { skillCategories, topSkills, techStack } from '../../../data/skills';
import styles from './SkillsSection.module.css';

export interface SkillsSectionProps {
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const radarVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export const SkillsSection: React.FC<SkillsSectionProps> = ({ className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className={`${styles.skillsSection} ${className || ''}`}
      aria-labelledby="skills-title"
    >
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className={styles.header}>
          <Text
            id="skills-title"
            as="h2"
            variant="h2"
            className={styles.title}
          >
            Skills & Expertise
          </Text>
          <Text variant="bodyLarge" className={styles.subtitle}>
            A comprehensive overview of my technical capabilities
          </Text>
        </motion.div>

        {/* Main Content Grid */}
        <div className={styles.contentGrid}>
          {/* Left Side: Radar Chart */}
          <motion.div variants={radarVariants} className={styles.radarContainer}>
            <div className={styles.chartWrapper}>
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={skillCategories}>
                  <PolarGrid
                    stroke="rgba(139, 92, 246, 0.2)"
                    strokeWidth={1}
                  />
                  <PolarAngleAxis
                    dataKey="category"
                    tick={{
                      fill: 'rgba(255, 255, 255, 0.8)',
                      fontSize: 12,
                      fontWeight: 500,
                    }}
                  />
                  <PolarRadiusAxis
                    angle={90}
                    domain={[0, 100]}
                    tick={{
                      fill: 'rgba(255, 255, 255, 0.5)',
                      fontSize: 10,
                    }}
                  />
                  <Radar
                    name="Skills"
                    dataKey="value"
                    stroke="var(--color-primary)"
                    fill="var(--color-primary)"
                    fillOpacity={0.6}
                    strokeWidth={2}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(17, 24, 39, 0.95)',
                      border: '1px solid rgba(139, 92, 246, 0.3)',
                      borderRadius: '8px',
                      padding: '8px 12px',
                      color: '#fff',
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Right Side: Skill Bars */}
          <motion.div variants={itemVariants} className={styles.skillBarsContainer}>
            <Text as="h3" variant="h4" className={styles.sectionTitle}>
              Top Skills
            </Text>
            <div className={styles.skillBars}>
              {topSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  custom={index}
                  className={styles.skillBarWrapper}
                >
                  <SkillBar
                    skill={skill.name}
                    level={skill.percentage}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom: Floating Tech Badges */}
        <motion.div variants={itemVariants} className={styles.techStackSection}>
          <Text as="h3" variant="h4" className={styles.sectionTitle}>
            Tech Stack
          </Text>
          <div className={styles.techBadges}>
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={badgeVariants}
                custom={index}
                className={styles.badgeWrapper}
              >
                <TechBadge
                  technology={tech.name}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, Text, Badge, Button, Icon } from '@/components/atoms';
import type { Project } from '@/types';
import styles from './ProjectCard.module.css';

export interface ProjectCardProps extends Omit<Project, 'id' | 'category'> {
  delay?: number;
  category?: 'web' | 'mobile' | 'ai' | 'design';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  gradient = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  tags,
  category: _category,
  demoUrl,
  githubUrl,
  featured = false,
  delay = 0,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
      className={styles.projectCard}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className={styles.cardInner}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        style={{ transformStyle: 'preserve-3d' }}
        onClick={handleFlip}
      >
        {/* Front Side */}
        <div className={styles.cardFront} style={{ backfaceVisibility: 'hidden' }}>
          <Card variant="elevated" className={styles.card}>
            {featured && (
              <div className={styles.featuredBadge}>
                <Badge variant="accent">
                  <Icon name="star" size="xs" />
                  Featured
                </Badge>
              </div>
            )}
            <div
              className={styles.imageWrapper}
              style={{
                background: image ? `url(${image})` : gradient,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className={styles.imageOverlay} />
            </div>
            <div className={styles.content}>
              <Text variant="h3" className={styles.title}>
                {title}
              </Text>
              <div className={styles.tags}>
                {tags.slice(0, 3).map((tag: string, index: number) => (
                  <Badge key={index} variant="secondary" size="sm">
                    {tag}
                  </Badge>
                ))}
                {tags.length > 3 && (
                  <Badge variant="secondary" size="sm">
                    +{tags.length - 3}
                  </Badge>
                )}
              </div>
              <div className={styles.flipHint}>
                <Icon name="code" size="sm" />
                <Text variant="caption">Click to flip</Text>
              </div>
            </div>
          </Card>
        </div>

        {/* Back Side */}
        <div
          className={styles.cardBack}
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <Card variant="elevated" className={styles.card}>
            <div className={styles.backContent}>
              <Text variant="h3" className={styles.title}>
                {title}
              </Text>
              <Text variant="body" className={styles.description}>
                {description}
              </Text>
              <div className={styles.allTags}>
                {tags.map((tag: string, index: number) => (
                  <Badge key={index} variant="primary" size="sm">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className={styles.actions}>
                {demoUrl && (
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation();
                      window.open(demoUrl, '_blank');
                    }}
                  >
                    <Icon name="externalLink" size="sm" />
                    Live Demo
                  </Button>
                )}
                {githubUrl && (
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation();
                      window.open(githubUrl, '_blank');
                    }}
                  >
                    <Icon name="github" size="sm" />
                    GitHub
                  </Button>
                )}
              </div>
              <div className={styles.flipHint}>
                <Icon name="code" size="sm" />
                <Text variant="caption">Click to flip back</Text>
              </div>
            </div>
          </Card>
        </div>
      </motion.div>
    </motion.div>
  );
};

import { ProjectsGallery } from '@/components/organisms';
import { Text } from '@/components/atoms';
import styles from './ProjectsShowcase.module.css';

export const ProjectsShowcase: React.FC = () => {
  return (
    <div className={styles.showcase}>
      <div className={styles.header}>
        <Text variant="h1" className={styles.title}>
          Featured Projects
        </Text>
        <Text variant="body" className={styles.subtitle}>
          A collection of my recent work across web development, mobile applications,
          AI integration, and design systems. Each project showcases different
          technologies and problem-solving approaches.
        </Text>
      </div>

      <ProjectsGallery />

      <div className={styles.footer}>
        <Text variant="body" className={styles.footerText}>
          More projects coming soon! Check back regularly for updates.
        </Text>
      </div>
    </div>
  );
};

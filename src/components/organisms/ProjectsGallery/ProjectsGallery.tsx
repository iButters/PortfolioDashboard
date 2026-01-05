import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from '@/components/molecules';
import { Button } from '@/components/atoms';
import type { Project } from '@/types';
import { projects as defaultProjects } from '@/data/projects';
import styles from './ProjectsGallery.module.css';

export type ProjectCategory = 'web' | 'mobile' | 'ai' | 'design';

export interface ProjectsGalleryProps {
  projects?: Project[];
  defaultFilter?: ProjectCategory | 'all';
  className?: string;
}

const filterButtons = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'ai', label: 'AI' },
  { id: 'design', label: 'Design' },
] as const;

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({
  projects = defaultProjects,
  defaultFilter = 'all',
  className = '',
}) => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'all'>(defaultFilter);

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const handleFilterChange = (filter: ProjectCategory | 'all') => {
    setActiveFilter(filter);
  };

  return (
    <div className={`${styles.projectsGallery} ${className}`}>
      {/* Filter Buttons */}
      <motion.div
        className={styles.filterContainer}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.filterButtons}>
          {filterButtons.map((filter, index) => (
            <motion.div
              key={filter.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Button
                variant={activeFilter === filter.id ? 'primary' : 'ghost'}
                size="md"
                onClick={() => handleFilterChange(filter.id)}
                className={`${styles.filterButton} ${
                  activeFilter === filter.id ? styles.active : ''
                }`}
                aria-label={`Filter by ${filter.label}`}
                aria-pressed={activeFilter === filter.id}
              >
                {filter.label}
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className={styles.gridContainer}
        layout
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className={styles.grid}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`${styles.gridItem} ${
                  project.featured ? styles.featured : ''
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: [0.43, 0.13, 0.23, 0.96],
                }}
                layout
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  gradient={project.gradient}
                  tags={project.tags}
                  category={project.category}
                  demoUrl={project.demoUrl}
                  githubUrl={project.githubUrl}
                  featured={project.featured}
                  delay={0}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            className={styles.emptyState}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className={styles.emptyText}>
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

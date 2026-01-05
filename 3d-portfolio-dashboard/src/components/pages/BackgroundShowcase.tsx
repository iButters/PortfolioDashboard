import { Background, BackgroundController } from '../organisms/Background';
import { Card } from '../atoms/Card';
import { Text } from '../atoms/Text';
import { Badge } from '../atoms/Badge';
import styles from './BackgroundShowcase.module.css';

export const BackgroundShowcase = () => {
  return (
    <>
      <Background />
      <BackgroundController />
      
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <Text variant="h1" className={styles.title}>
              Background System
            </Text>
            <Text variant="body" className={styles.subtitle}>
              Experience three stunning animated backgrounds
            </Text>
          </div>

          <div className={styles.cards}>
            <Card variant="elevated" hover glow className={styles.card}>
              <div className={styles.cardHeader}>
                <Text variant="h3">🌈 Gradient Background</Text>
                <Badge variant="primary">Default</Badge>
              </div>
              <Text variant="body" className={styles.cardDescription}>
                Morphing gradient mesh with three animated radial gradients in Cyber Purple theme colors.
                15-second animation loop with smooth opacity transitions.
              </Text>
              <div className={styles.features}>
                <Text variant="caption">✓ Smooth morphing animation</Text>
                <Text variant="caption">✓ Purple, Cyan, Pink gradients</Text>
                <Text variant="caption">✓ GPU-accelerated</Text>
              </div>
            </Card>

            <Card variant="elevated" hover glow className={styles.card}>
              <div className={styles.cardHeader}>
                <Text variant="h3">✨ Particle Background</Text>
                <Badge variant="secondary">Interactive</Badge>
              </div>
              <Text variant="body" className={styles.cardDescription}>
                Canvas-based particle field with 200-500 particles. Move your mouse to interact with particles!
                Includes connection lines and glow effects.
              </Text>
              <div className={styles.features}>
                <Text variant="caption">✓ Mouse interaction</Text>
                <Text variant="caption">✓ Particle connections</Text>
                <Text variant="caption">✓ Glow effects</Text>
              </div>
            </Card>

            <Card variant="elevated" hover glow className={styles.card}>
              <div className={styles.cardHeader}>
                <Text variant="h3">🌐 Grid Background</Text>
                <Badge variant="accent">3D</Badge>
              </div>
              <Text variant="body" className={styles.cardDescription}>
                3D geometric grid with CSS perspective transform. Features glowing grid lines,
                fog effect, and subtle rotation animation.
              </Text>
              <div className={styles.features}>
                <Text variant="caption">✓ 3D perspective</Text>
                <Text variant="caption">✓ Fog effect</Text>
                <Text variant="caption">✓ Rotating animation</Text>
              </div>
            </Card>
          </div>

          <Card variant="elevated" glow className={styles.infoCard}>
            <Text variant="h4">🎮 How to Use</Text>
            <Text variant="body" className={styles.infoText}>
              Use the background controller in the bottom-right corner to switch between backgrounds.
              Each background features smooth transitions and is optimized for 60fps performance.
            </Text>
            <div className={styles.specs}>
              <div className={styles.spec}>
                <Text variant="caption" className={styles.specLabel}>Performance</Text>
                <Text variant="body">60 FPS</Text>
              </div>
              <div className={styles.spec}>
                <Text variant="caption" className={styles.specLabel}>Transitions</Text>
                <Text variant="body">300ms Fade</Text>
              </div>
              <div className={styles.spec}>
                <Text variant="caption" className={styles.specLabel}>Responsive</Text>
                <Text variant="body">All Devices</Text>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

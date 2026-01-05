import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import styles from './Text.module.css';

export type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'bodyLarge' | 'bodySmall' | 'caption' | 'overline';
export type TextColor = 'primary' | 'secondary' | 'muted' | 'inverse' | 'accent' | 'gradient';
export type TextAlign = 'left' | 'center' | 'right';

export interface TextProps extends Omit<HTMLMotionProps<'p'>, 'color'> {
  variant?: TextVariant;
  color?: TextColor;
  align?: TextAlign;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  gradient?: boolean;
  mono?: boolean;
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  variant = 'body',
  color = 'primary',
  align = 'left',
  as,
  gradient = false,
  mono = false,
  children,
  className = '',
  ...props
}) => {
  // Determine the HTML tag to use
  const getTag = () => {
    if (as) return as;
    if (variant.startsWith('h')) return variant as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    return 'p';
  };

  const Component = motion[getTag()] as any;

  const textClasses = [
    styles.text,
    styles[variant],
    styles[`color-${color}`],
    styles[`align-${align}`],
    gradient && styles.gradient,
    mono && styles.mono,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={textClasses} {...props}>
      {children}
    </Component>
  );
};

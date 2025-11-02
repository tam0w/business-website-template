import { Variants } from "framer-motion"

/**
 * Fade in animation variant
 */
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

/**
 * Fade in from bottom with slide
 */
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
}

/**
 * Fade in from top with slide
 */
export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

/**
 * Fade in from left with slide
 */
export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
}

/**
 * Fade in from right with slide
 */
export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
}

/**
 * Scale in animation
 */
export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
}

/**
 * Container variant for staggered children animations
 */
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {},
}

/**
 * Container variant with faster stagger
 */
export const staggerContainerFast: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
  exit: {},
}

/**
 * Container variant with slower stagger
 */
export const staggerContainerSlow: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  exit: {},
}

/**
 * Item variant for use with stagger containers
 */
export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
}

/**
 * Standard transition configurations
 */
export const transitions = {
  smooth: {
    type: "spring" as const,
    stiffness: 260,
    damping: 20,
  },
  snappy: {
    type: "spring" as const,
    stiffness: 400,
    damping: 30,
  },
  bouncy: {
    type: "spring" as const,
    stiffness: 300,
    damping: 10,
  },
  ease: {
    duration: 0.3,
    ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
  },
}

/**
 * Hover and tap animation presets for interactive elements
 */
export const interactionAnimations = {
  scale: {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  },
  lift: {
    whileHover: { y: -4 },
    whileTap: { y: 0 },
  },
  glow: {
    whileHover: { boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)" },
  },
}

import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";

interface MotionWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

// Fade up animation
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

// Fade in animation
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      delay,
      ease: "easeOut",
    },
  }),
};

// Scale up animation
export const scaleUpVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

// Slide in from left
export const slideLeftVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

// Slide in from right
export const slideRightVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

// Stagger container
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Stagger item
export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

// Reusable motion component for fade-up animation
export const MotionFadeUp = ({
  children,
  className,
  delay = 0,
}: MotionWrapperProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeUpVariants}
    custom={delay}
    className={className}
  >
    {children}
  </motion.div>
);

// Reusable motion component for scale-up animation
export const MotionScaleUp = ({
  children,
  className,
  delay = 0,
}: MotionWrapperProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={scaleUpVariants}
    custom={delay}
    className={className}
  >
    {children}
  </motion.div>
);

// Reusable motion component for slide-left animation
export const MotionSlideLeft = ({
  children,
  className,
  delay = 0,
}: MotionWrapperProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={slideLeftVariants}
    custom={delay}
    className={className}
  >
    {children}
  </motion.div>
);

// Reusable motion component for slide-right animation
export const MotionSlideRight = ({
  children,
  className,
  delay = 0,
}: MotionWrapperProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={slideRightVariants}
    custom={delay}
    className={className}
  >
    {children}
  </motion.div>
);

// Stagger container for grid items
export const MotionStaggerContainer = ({
  children,
  className,
}: MotionWrapperProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={staggerContainerVariants}
    className={className}
  >
    {children}
  </motion.div>
);

// Individual stagger item
export const MotionStaggerItem = ({
  children,
  className,
}: MotionWrapperProps) => (
  <motion.div variants={staggerItemVariants} className={className}>
    {children}
  </motion.div>
);

// Export motion for direct use
export { motion };

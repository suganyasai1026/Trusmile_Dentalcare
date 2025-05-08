import React from 'react';
import { motion } from 'framer-motion';

type AnimationProps = {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
};

type FloatingAnimationProps = AnimationProps & {
  yOffset?: number;
};

type PulseAnimationProps = AnimationProps & {
  scale?: number;
};

export function FloatingAnimation({
  children,
  duration = 4,
  delay = 0,
  yOffset = 15,
  className = '',
}: FloatingAnimationProps) {
  return (
    <motion.div
      className={className}
      initial={{ y: 0 }}
      animate={{ y: [-yOffset/2, yOffset/2, -yOffset/2] }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
}

export function PulseAnimation({
  children,
  duration = 2,
  delay = 0,
  scale = 1.05,
  className = '',
}: PulseAnimationProps) {
  return (
    <motion.div
      className={className}
      animate={{ 
        scale: [1, scale, 1],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
}

export function RotateAnimation({
  children,
  duration = 20,
  delay = 0,
  className = '',
}: AnimationProps) {
  return (
    <motion.div
      className={className}
      animate={{ 
        rotate: [0, 360],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear",
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
}

export function BlinkAnimation({
  children,
  duration = 2,
  delay = 0,
  className = '',
}: AnimationProps) {
  return (
    <motion.span
      className={className}
      animate={{ 
        opacity: [1, 0.3, 1],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
    >
      {children}
    </motion.span>
  );
}
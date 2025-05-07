import React from 'react';
import { motion } from 'framer-motion';

type FloatingAnimationProps = {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  yOffset?: number;
  className?: string;
};

export function FloatingAnimation({
  children,
  duration = 3,
  delay = 0,
  yOffset = 15,
  className = '',
}: FloatingAnimationProps) {
  const floatingAnimation = {
    y: [0, -yOffset, 0],
    transition: {
      duration,
      ease: "easeInOut",
      repeat: Infinity,
      delay
    }
  };

  return (
    <motion.div
      animate={floatingAnimation}
      className={className}
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
}: Omit<FloatingAnimationProps, 'yOffset'> & { scale?: number }) {
  const pulseAnimation = {
    scale: [1, scale, 1],
    transition: {
      duration,
      ease: "easeInOut",
      repeat: Infinity,
      delay
    }
  };

  return (
    <motion.div
      animate={pulseAnimation}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RotateAnimation({
  children,
  duration = 20,
  delay = 0,
  rotation = 360,
  className = '',
}: Omit<FloatingAnimationProps, 'yOffset'> & { rotation?: number }) {
  const rotateAnimation = {
    rotate: [0, rotation],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      delay
    }
  };

  return (
    <motion.div
      animate={rotateAnimation}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function BlinkAnimation({
  children,
  duration = 3,
  delay = 0,
  className = '',
  intensity = 0.4,
}: Omit<FloatingAnimationProps, 'yOffset'> & { intensity?: number }) {
  const blinkAnimation = {
    opacity: [1, intensity, 1],
    transition: {
      duration,
      ease: "easeInOut",
      repeat: Infinity,
      delay
    }
  };

  return (
    <motion.div
      animate={blinkAnimation}
      className={className}
    >
      {children}
    </motion.div>
  );
}
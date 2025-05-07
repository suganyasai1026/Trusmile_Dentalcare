import React from 'react';
import { motion } from 'framer-motion';

interface SectionDividerProps {
  className?: string;
  variant?: 'wave' | 'teeth' | 'curve' | 'angle' | 'triangle';
  color?: string;
  height?: number;
  flip?: boolean;
  animate?: boolean;
}

export function SectionDivider({
  className = "",
  variant = 'wave',
  color = '#ffffff',
  height = 50,
  flip = false,
  animate = true
}: SectionDividerProps) {
  const dividerPaths = {
    wave: "M0 0C0 0 40 20 100 20C160 20 200 0 200 0L200 20L0 20L0 0Z",
    teeth: "M0 0C0 0 20 20 40 0C60 20 80 0 100 20C120 0 140 20 160 0C180 20 200 0 200 0L200 20L0 20L0 0Z",
    curve: "M0 0C50 0 150 20 200 0L200 20L0 20L0 0Z",
    angle: "M0 0L200 20L200 20L0 20L0 0Z",
    triangle: "M0 0L100 20L200 0L200 20L0 20L0 0Z"
  };

  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2, ease: "easeInOut" },
        opacity: { duration: 0.3 }
      }
    }
  };

  return (
    <div 
      className={`w-full overflow-hidden ${className}`} 
      style={{ 
        height: height,
        transform: flip ? 'rotate(180deg)' : 'none'
      }}
    >
      <svg
        viewBox="0 0 200 20"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        {animate ? (
          <motion.path
            d={dividerPaths[variant]}
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
        ) : (
          <path d={dividerPaths[variant]} />
        )}
      </svg>
    </div>
  );
}

export function WaveDivider({
  className = "",
  color = '#ffffff',
  height = 80,
  flip = false,
  animate = true
}: Omit<SectionDividerProps, 'variant'>) {
  const pathVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <div 
      className={`w-full overflow-hidden ${className}`} 
      style={{ 
        height: height,
        transform: flip ? 'rotate(180deg)' : 'none'
      }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        {animate ? (
          <motion.path
            d="M0 120L48 105C96 90 192 60 288 45C384 30 480 30 576 37.5C672 45 768 60 864 67.5C960 75 1056 75 1152 67.5C1248 60 1344 45 1392 37.5L1440 30V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
        ) : (
          <path d="M0 120L48 105C96 90 192 60 288 45C384 30 480 30 576 37.5C672 45 768 60 864 67.5C960 75 1056 75 1152 67.5C1248 60 1344 45 1392 37.5L1440 30V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" />
        )}
      </svg>
    </div>
  );
}

export function TeethDivider({
  className = "",
  color = '#ffffff',
  height = 40,
  flip = false,
  animate = true
}: Omit<SectionDividerProps, 'variant'>) {
  // Create a zigzag pattern that looks like stylized teeth
  return (
    <div 
      className={`w-full overflow-hidden ${className}`} 
      style={{ 
        height: height,
        transform: flip ? 'rotate(180deg)' : 'none'
      }}
    >
      <svg
        viewBox="0 0 1440 50"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        {animate ? (
          <motion.path
            d="M0 50L24 30C48 10 96 20 120 40C144 60 192 50 216 30C240 10 288 20 312 40C336 60 384 50 408 30C432 10 480 20 504 40C528 60 576 50 600 30C624 10 672 20 696 40C720 60 768 50 792 30C816 10 864 20 888 40C912 60 960 50 984 30C1008 10 1056 20 1080 40C1104 60 1152 50 1176 30C1200 10 1248 20 1272 40C1296 60 1344 50 1368 30C1392 10 1416 25 1428 37.5L1440 50V50H0Z"
            initial={{ opacity: 0, pathLength: 0 }}
            whileInView={{ opacity: 1, pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
        ) : (
          <path d="M0 50L24 30C48 10 96 20 120 40C144 60 192 50 216 30C240 10 288 20 312 40C336 60 384 50 408 30C432 10 480 20 504 40C528 60 576 50 600 30C624 10 672 20 696 40C720 60 768 50 792 30C816 10 864 20 888 40C912 60 960 50 984 30C1008 10 1056 20 1080 40C1104 60 1152 50 1176 30C1200 10 1248 20 1272 40C1296 60 1344 50 1368 30C1392 10 1416 25 1428 37.5L1440 50V50H0Z" />
        )}
      </svg>
    </div>
  );
}
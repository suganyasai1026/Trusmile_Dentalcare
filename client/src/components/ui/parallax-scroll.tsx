import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface ParallaxLayerProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}

export function ParallaxLayer({ children, offset = 50, className = '' }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down';
  speed?: number; // 1 = normal, 2 = double speed, etc.
}

export function ParallaxSection({ 
  children, 
  className = '', 
  direction = 'up',
  speed = 1
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const factor = direction === 'up' ? -1 : 1;
  const y = useTransform(scrollYProgress, [0, 1], [0, 100 * factor * speed]);
  
  return (
    <motion.div ref={ref} className={`${className} relative overflow-hidden`}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </motion.div>
  );
}

interface ParallaxBackgroundProps {
  children: React.ReactNode;
  backgroundUrl: string;
  className?: string;
  speed?: number; // 0.1 to 0.5 is usually good
  overlayColor?: string;
  overlayOpacity?: number; // 0 to 1
}

export function ParallaxBackground({ 
  children, 
  backgroundUrl,
  className = '', 
  speed = 0.2,
  overlayColor = '#000',
  overlayOpacity = 0.3
}: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]);
  
  return (
    <div ref={ref} className={`${className} relative overflow-hidden`}>
      <motion.div 
        className="absolute inset-0 w-full h-full bg-cover bg-center -z-10"
        style={{ 
          backgroundImage: `url(${backgroundUrl})`,
          y
        }}
      />
      <div 
        className="absolute inset-0 w-full h-full -z-5"
        style={{ 
          backgroundColor: overlayColor,
          opacity: overlayOpacity
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

// A decoration element that moves at a different speed than the content
export function FloatingParallaxElement({
  children,
  offsetX = 0,
  offsetY = 0,
  speed = 2,
  className = ""
}: {
  children: React.ReactNode;
  offsetX?: number;
  offsetY?: number;
  speed?: number;
  className?: string;
}) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [offsetY, offsetY - 100 * speed]);
  const x = useTransform(scrollY, [0, 1000], [offsetX, offsetX - 50 * speed]);

  return (
    <motion.div
      className={`${className} absolute`}
      style={{ x, y }}
    >
      {children}
    </motion.div>
  );
}

// Shapes that can be used with the FloatingParallaxElement
export function ParallaxShape({
  shape = "circle",
  size = 50,
  color = "rgba(255, 255, 255, 0.2)",
  className = ""
}: {
  shape?: "circle" | "square" | "triangle" | "donut";
  size?: number;
  color?: string;
  className?: string;
}) {
  const shapeStyles: { [key: string]: React.ReactNode } = {
    circle: (
      <div
        className={`rounded-full ${className}`}
        style={{
          width: size,
          height: size,
          backgroundColor: color
        }}
      />
    ),
    square: (
      <div
        className={`${className}`}
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          transform: "rotate(45deg)"
        }}
      />
    ),
    triangle: (
      <div
        className={`${className}`}
        style={{
          width: 0,
          height: 0,
          borderLeft: `${size / 2}px solid transparent`,
          borderRight: `${size / 2}px solid transparent`,
          borderBottom: `${size}px solid ${color}`
        }}
      />
    ),
    donut: (
      <div
        className={`rounded-full ${className}`}
        style={{
          width: size,
          height: size,
          backgroundColor: "transparent",
          border: `${size / 10}px solid ${color}`,
        }}
      />
    )
  };

  return <>{shapeStyles[shape]}</>;
}
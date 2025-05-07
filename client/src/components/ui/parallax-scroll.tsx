import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxLayerProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}

export function ParallaxLayer({ children, offset = 50, className = '' }: ParallaxLayerProps) {
  const [windowHeight, setWindowHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setWindowHeight(window.innerHeight);
    
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const { scrollY } = useScroll();
  const y = useTransform(
    scrollY,
    [0, windowHeight],
    [0, offset]
  );

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
    >
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
  
  const yOffset = direction === 'up' ? -100 * speed : 100 * speed;
  const y = useTransform(scrollYProgress, [0, 1], [yOffset, 0]);

  return (
    <motion.div 
      ref={ref}
      style={{ y, position: 'relative' }}
      className={className}
    >
      {children}
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
  speed = 0.3,
  overlayColor = '#000',
  overlayOpacity = 0.5
}: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]);

  return (
    <div 
      ref={ref}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div 
        className="absolute inset-0 w-full h-full -z-10"
        style={{
          y: yBg,
          backgroundImage: `url(${backgroundUrl})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />
      <div 
        className="absolute inset-0 w-full h-full -z-10"
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

interface FloatingParallaxElementProps {
  children: React.ReactNode;
  className?: string;
  offset?: number;
  direction?: 'up' | 'down';
  transitionDuration?: number;
}

export function FloatingParallaxElement({
  children, 
  className = '',
  offset = 20,
  direction = 'up',
  transitionDuration = 0.5
}: FloatingParallaxElementProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const yValue = direction === 'up' ? -offset : offset;
  const y = useTransform(scrollYProgress, [0, 1], [yValue, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div 
      ref={ref}
      style={{ 
        y,
        opacity,
        transition: `all ${transitionDuration}s ease-out`
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type ShapeType = 'circle' | 'square' | 'triangle' | 'blob';

interface ParallaxShapeProps {
  type?: ShapeType;
  size?: number;
  color?: string;
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  speed?: number;
  className?: string;
}

export function ParallaxShape({
  type = 'circle',
  size = 100,
  color = 'rgba(255, 255, 255, 0.1)',
  top,
  left,
  right,
  bottom,
  speed = 2,
  className = ''
}: ParallaxShapeProps) {
  const shapes: Record<ShapeType, string> = {
    circle: 'rounded-full',
    square: 'rounded-none',
    triangle: 'triangle',
    blob: 'blob',
  };
  
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);
  
  return (
    <motion.div
      ref={ref}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        position: 'absolute',
        top,
        left,
        right,
        bottom,
        y,
      }}
      className={`${shapes[type]} ${className}`}
    />
  );
}
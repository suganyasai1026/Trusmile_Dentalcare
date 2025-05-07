import { useEffect, useRef, useState } from 'react';
import { AnimationControls, useAnimation } from 'framer-motion';

export type AnimationType = 
  | "fadeIn" 
  | "fadeInUp" 
  | "fadeInDown" 
  | "fadeInLeft" 
  | "fadeInRight" 
  | "zoomIn" 
  | "rotateIn"
  | "bounce";

export function useAnimateOnScroll(type: AnimationType = "fadeInUp", threshold = 0.1, once = true) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Define animation variants based on type
  const getAnimationVariants = (animationType: AnimationType) => {
    switch (animationType) {
      case "fadeIn":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.6 } }
        };
      case "fadeInUp":
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        };
      case "fadeInDown":
        return {
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        };
      case "fadeInLeft":
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
        };
      case "fadeInRight":
        return {
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
        };
      case "zoomIn":
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
        };
      case "rotateIn":
        return {
          hidden: { opacity: 0, rotate: -20, scale: 0.8 },
          visible: { 
            opacity: 1, 
            rotate: 0, 
            scale: 1, 
            transition: { duration: 0.6, ease: "easeOut" } 
          }
        };
      case "bounce":
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
              type: "spring", 
              stiffness: 300, 
              damping: 10,
              duration: 0.7 
            } 
          }
        };
      default:
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        };
    }
  };

  const variants = getAnimationVariants(type);

  useEffect(() => {
    if (hasAnimated && once) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
          setHasAnimated(true);
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          controls.start("hidden");
        }
      },
      { threshold, rootMargin: "0px 0px -100px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls, hasAnimated, once, threshold]);

  return { 
    ref, 
    control: controls,
    initial: "hidden",
    animate: "visible",
    variants
  };
}
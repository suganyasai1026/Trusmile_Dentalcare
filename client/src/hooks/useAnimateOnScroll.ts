import { useEffect, useRef } from "react";
import { useAnimation } from "framer-motion";

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
  const ref = useRef<HTMLDivElement>(null);
  const control = useAnimation();
  const hasAnimated = useRef(false);

  const getAnimationProps = () => {
    switch (type) {
      case "fadeIn":
        return { 
          initial: { opacity: 0 },
          animate: { opacity: 1, transition: { duration: 0.8 } }
        };
      case "fadeInUp":
        return { 
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0, transition: { duration: 0.8 } }
        };
      case "fadeInDown":
        return { 
          initial: { opacity: 0, y: -50 },
          animate: { opacity: 1, y: 0, transition: { duration: 0.8 } }
        };
      case "fadeInLeft":
        return { 
          initial: { opacity: 0, x: -50 },
          animate: { opacity: 1, x: 0, transition: { duration: 0.8 } }
        };
      case "fadeInRight":
        return { 
          initial: { opacity: 0, x: 50 },
          animate: { opacity: 1, x: 0, transition: { duration: 0.8 } }
        };
      case "zoomIn":
        return { 
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
        };
      case "rotateIn":
        return { 
          initial: { opacity: 0, rotate: -90 },
          animate: { opacity: 1, rotate: 0, transition: { duration: 0.8 } }
        };
      case "bounce":
        return { 
          initial: { opacity: 0, y: 50 },
          animate: { 
            opacity: 1, 
            y: 0, 
            transition: { 
              type: "spring", 
              stiffness: 300, 
              damping: 15 
            } 
          }
        };
      default:
        return { 
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        };
    }
  };

  const { initial, animate } = getAnimationProps();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!once || !hasAnimated.current)) {
          control.start(animate);
          hasAnimated.current = true;
        } else if (!entry.isIntersecting && !once) {
          control.start(initial);
          hasAnimated.current = false;
        }
      },
      { 
        threshold 
      }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [control, initial, animate, once, threshold]);

  return { ref, control, initial };
}

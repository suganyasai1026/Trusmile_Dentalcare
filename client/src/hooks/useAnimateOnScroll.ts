import { useEffect, useRef } from "react";
import { useAnimation } from "framer-motion";

export function useAnimateOnScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const control = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          control.start({ opacity: 1, y: 0 });
        }
      },
      { 
        threshold: 0.1 
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
  }, [control]);

  return { ref, control };
}

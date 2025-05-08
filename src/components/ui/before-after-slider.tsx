import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import React from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  className = ""
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!containerRef.current) return;
    
    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    
    setSliderPosition(percentage);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleMouseUp);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative w-full overflow-hidden rounded-xl shadow-lg cursor-ew-resize ${className}`}
      style={{ aspectRatio: '6/3' }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      {/* After Image (Full) */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ 
          backgroundImage: `url(${afterImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0 h-full overflow-hidden"
        style={{ 
          width: `${sliderPosition}%`,
          backgroundImage: `url(${beforeImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 w-full h-full" />
      </div>
      
      {/* Slider */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
        style={{ 
          left: `calc(${sliderPosition}% - 1px)`,
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
        }}
      >
        <div className="absolute bg-white rounded-full w-6 h-6 flex items-center justify-center shadow-md -ml-[11px] top-1/2 -mt-3 border-2 border-gray-200">
          <div className="flex flex-col gap-[1px]">
            <div className="w-[6px] h-[1px] bg-gray-400"></div>
            <div className="w-[6px] h-[1px] bg-gray-400"></div>
            <div className="w-[6px] h-[1px] bg-gray-400"></div>
          </div>
        </div>
      </div>
      
      {/* Labels */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute bottom-4 left-4 bg-black/50 text-white py-1 px-3 rounded-full text-sm font-medium"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: sliderPosition > 10 ? 1 : 0, x: sliderPosition > 10 ? 0 : -20 }}
          transition={{ duration: 0.3 }}
        >
          {beforeLabel}
        </motion.div>
        
        <motion.div
          className="absolute bottom-4 right-4 bg-black/50 text-white py-1 px-3 rounded-full text-sm font-medium"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: sliderPosition < 90 ? 1 : 0, x: sliderPosition < 90 ? 0 : 20 }}
          transition={{ duration: 0.3 }}
        >
          {afterLabel}
        </motion.div>
      </div>
    </div>
  );
}
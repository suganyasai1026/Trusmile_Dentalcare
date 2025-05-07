import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  variant?: "default" | "outline" | "filled" | "glass";
  color?: "default" | "primary" | "secondary" | "accent";
  imageUrl?: string;
  className?: string;
  onClick?: () => void;
}

export function FeatureCard({
  title,
  description,
  icon,
  variant = "default",
  color = "default",
  imageUrl,
  className,
  onClick,
}: FeatureCardProps) {
  const variantClasses = {
    default: "bg-white shadow-md",
    outline: "bg-white border border-gray-200 shadow-sm",
    filled: colorClasses[color],
    glass: "backdrop-blur-md bg-white/10 border border-white/20"
  };

  const cardContent = (
    <>
      {imageUrl && (
        <div 
          className="mb-4 rounded-lg h-48 overflow-hidden -mx-2 -mt-2"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      )}
      
      {icon && (
        <div className={cn(
          "mb-4 w-12 h-12 flex items-center justify-center rounded-full",
          variant === "filled" ? "bg-white/20" : iconColorClasses[color]
        )}>
          {icon}
        </div>
      )}
      
      <h3 className={cn(
        "text-xl font-semibold mb-2",
        variant === "filled" && color !== "default" ? "text-white" : "text-gray-900"
      )}>
        {title}
      </h3>
      
      <p className={cn(
        "text-base",
        variant === "filled" && color !== "default" ? "text-white/90" : "text-gray-600"
      )}>
        {description}
      </p>
    </>
  );

  // Create either a button or div depending on whether onClick is provided
  if (onClick) {
    return (
      <motion.button
        className={cn(
          "rounded-xl p-6 transition-all duration-300 flex flex-col h-full text-left w-full",
          variantClasses[variant],
          color === "default" || variant !== "filled" 
            ? "text-gray-800" 
            : "text-white",
          "cursor-pointer hover:shadow-lg",
          className
        )}
        whileHover={{ 
          y: -5,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        }}
        onClick={onClick}
      >
        {cardContent}
      </motion.button>
    );
  }

  return (
    <motion.div
      className={cn(
        "rounded-xl p-6 transition-all duration-300 flex flex-col h-full",
        variantClasses[variant],
        color === "default" || variant !== "filled" 
          ? "text-gray-800" 
          : "text-white",
        className
      )}
      whileHover={{ 
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
    >
      {cardContent}
    </motion.div>
  );
}

const colorClasses = {
  default: "bg-white",
  primary: "bg-[hsl(var(--deepblue))]",
  secondary: "bg-[hsl(var(--skyblue))]",
  accent: "bg-emerald-600"
};

const iconColorClasses = {
  default: "bg-blue-50 text-blue-600",
  primary: "bg-blue-50 text-[hsl(var(--deepblue))]",
  secondary: "bg-blue-50 text-[hsl(var(--skyblue))]",
  accent: "bg-emerald-50 text-emerald-600"
};
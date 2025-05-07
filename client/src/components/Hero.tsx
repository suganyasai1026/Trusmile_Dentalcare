import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { 
  FloatingAnimation, 
  PulseAnimation, 
  BlinkAnimation 
} from "@/components/ui/floating-animation";
import { 
  ParallaxBackground, 
  FloatingParallaxElement, 
  ParallaxShape 
} from "@/components/ui/parallax-scroll";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const highlightVariants = {
  hidden: { width: "0%" },
  visible: { 
    width: "100%", 
    transition: { 
      duration: 1.2, 
      ease: "easeInOut",
      delay: 0.5
    } 
  }
};

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * i,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  // Animated text for the heading
  const title = "Expert Dental Care for Your Perfect Smile";
  const titleArray = title.split(" ");

  return (
    <section 
      id="home" 
      ref={ref}
      className="pt-20 md:pt-32 pb-28 md:pb-36 relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Floating decoration elements */}
      <FloatingParallaxElement className="hidden lg:block" offsetX={100} offsetY={100} speed={1}>
        <ParallaxShape shape="circle" size={80} color="rgba(191, 219, 254, 0.2)" />
      </FloatingParallaxElement>
      
      <FloatingParallaxElement className="hidden lg:block" offsetX={800} offsetY={200} speed={-1.5}>
        <ParallaxShape shape="donut" size={120} color="rgba(191, 219, 254, 0.15)" />
      </FloatingParallaxElement>
      
      <FloatingParallaxElement className="hidden lg:block" offsetX={200} offsetY={500} speed={2}>
        <ParallaxShape shape="triangle" size={60} color="rgba(191, 219, 254, 0.2)" />
      </FloatingParallaxElement>
      
      {/* Hero background with overlay */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://pixabay.com/get/ga49f576c3f064d0924815e51dbcca06e07cf5c2b35a6f0305cd1ade951e971fbbfb108a52961f41b064cb5b64f76c35e93c3fe185febff62a694bb51a129630a_1280.jpg')",
          y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]),
          filter: "brightness(0.9)"
        }}
      >
        <motion.div 
          className="absolute inset-0 bg-[hsl(var(--deepblue-dark))]"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0.6, 0.8]) }}
        ></motion.div>
      </motion.div>
      
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 xl:px-24 relative z-10">
        <motion.div 
          className="flex flex-col md:flex-row items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ opacity, y }}
        >
          <motion.div 
            className="w-full md:w-1/2 text-white mb-10 md:mb-0"
          >
            <div className="overflow-hidden">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 flex flex-wrap gap-3">
                {titleArray.map((letter, index) => (
                  <motion.span
                    key={index}
                    custom={index}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                    style={{
                      whiteSpace: letter === " " ? "pre" : "normal"
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </h1>
              <motion.div
                className="h-1 bg-[hsl(var(--skyblue))] mb-6"
                variants={highlightVariants}
                initial="hidden"
                animate="visible"
              />
            </div>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 opacity-90"
              variants={itemVariants}
            >
              <span className="inline-flex items-center">
                <BlinkAnimation intensity={0.7} duration={4}>
                  <span className="text-[hsl(var(--skyblue))] font-bold">World's First</span>
                </BlinkAnimation>
              </span> Direct Print Aliner Resin Powered  By Graphy and Specialists
              in advanced root canal treatments and innovative dental solutions.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <PulseAnimation scale={1.05} duration={3}>
                <Button 
                  asChild
                  size="lg"
                  className="bg-[hsl(var(--skyblue))] hover:bg-[hsl(var(--skyblue-dark))] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <a href="#services">Our Services</a>
                </Button>
              </PulseAnimation>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="bg-white/90 hover:bg-white text-[hsl(var(--deepblue))] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <a href="#contact">Book Appointment</a>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 md:pl-12"
            variants={itemVariants}
          >
            <FloatingAnimation yOffset={8} duration={6}>
              <motion.img 
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Expert dental professionals providing care" 
                className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </FloatingAnimation>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div 
            className="bg-white/95 p-6 rounded-xl shadow-lg"
            whileHover={{ 
              y: -10, 
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
            }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="text-[hsl(var(--skyblue))] mb-4">
              <FloatingAnimation yOffset={5} duration={2.5}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h2.586a1 1 0 01.707.293l.707.707H14a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V5z" clipRule="evenodd" />
                  <path d="M9.4 6.2a1 1 0 011.2 0c.8.6 1.4 1.5 1.4 2.5 0 1.7-1.3 3-3 3s-3-1.3-3-3c0-1 .6-1.9 1.4-2.5a1 1 0 011.2 0 1 1 0 110 1.5.5.5 0 00-.4.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5c0-.2-.1-.4-.4-.5a1 1 0 010-1.5z" />
                </svg>
              </FloatingAnimation>
            </div>
            <h3 className="text-xl font-semibold mb-2">Advanced Root Canal</h3>
            <p className="text-gray-600">Expert specialists with cutting-edge technology for painless procedures.</p>
          </motion.div>
          
          <motion.div 
            className="bg-white/95 p-6 rounded-xl shadow-lg"
            whileHover={{ 
              y: -10, 
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
            }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="text-[hsl(var(--skyblue))] mb-4">
              <FloatingAnimation yOffset={5} duration={2.5} delay={0.3}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </FloatingAnimation>
            </div>
            <h3 className="text-xl font-semibold mb-2">Experienced Surgeons</h3>
            <p className="text-gray-600">Our world-class team ensures the highest quality of dental care.</p>
          </motion.div>
          
          <motion.div 
            className="bg-white/95 p-6 rounded-xl shadow-lg"
            whileHover={{ 
              y: -10, 
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
            }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="text-[hsl(var(--skyblue))] mb-4">
              <FloatingAnimation yOffset={5} duration={2.5} delay={0.6}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </FloatingAnimation>
            </div>
            <h3 className="text-xl font-semibold mb-2">In-House Aligners</h3>
            <p className="text-gray-600">World's first clinic with in-house aligner technology for faster results.</p>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
            d="M0 120L48 105C96 90 192 60 288 45C384 30 480 30 576 37.5C672 45 768 60 864 67.5C960 75 1056 75 1152 67.5C1248 60 1344 45 1392 37.5L1440 30V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            fill="white"
            stroke="none"
          />
        </svg>
      </div>
    </section>
  );
}

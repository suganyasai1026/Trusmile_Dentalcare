import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../components/ui/button";
import { useRef } from "react";
import {
  FloatingAnimation,
  PulseAnimation,
  BlinkAnimation
} from "../components/ui/floating-animation";
import {
  ParallaxBackground,
  FloatingParallaxElement,
  ParallaxShape
} from "../components/ui/parallax-scroll";
import React from "react";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import CountUp from 'react-countup';


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
  const statsAnimation = useAnimateOnScroll("zoomIn");

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Animated text for the heading
  const title = "Not Just a Clinic -A Family You Can Trust";
  const titleArray = title.split(" ");

  return (
    <section
      id="home"
      ref={ref}
      className="pt-20 md:pt-32 pb-28 md:pb-36 relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Floating decoration elements */}
      {/* <FloatingParallaxElement className="hidden lg:block" offsetX={100} offsetY={100} speed={1}>
        <ParallaxShape shape="circle" size={80} color="rgba(191, 219, 254, 0.2)" />
      </FloatingParallaxElement>
      
      <FloatingParallaxElement className="hidden lg:block" offsetX={800} offsetY={200} speed={-1.5}>
        <ParallaxShape shape="donut" size={120} color="rgba(191, 219, 254, 0.15)" />
      </FloatingParallaxElement>
      
      <FloatingParallaxElement className="hidden lg:block" offsetX={200} offsetY={500} speed={2}>
        <ParallaxShape shape="triangle" size={60} color="rgba(191, 219, 254, 0.2)" />
      </FloatingParallaxElement> */}

      {/* Hero background with overlay */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/clinic3.jpg')",
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
                <BlinkAnimation duration={4}>
                  <span className="text-[hsl(var(--skyblue))] font-bold">Trusmile DentalCare</span>
                </BlinkAnimation>
              </span> in Manikonda offers expert, affordable dental services .<strong> Book your same-day or emergency appointment today—your smile is our priority! </strong>
            </motion.p>
            {/*  */}
            <motion.div
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              {/* <PulseAnimation scale={1.05} duration={3}>
                <Button 
                  asChild
                  size="lg"
                  className="bg-[hsl(var(--skyblue))] hover:bg-[hsl(var(--skyblue-dark))] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <a href="#services">Our Services</a>
                </Button>
              </PulseAnimation> */}

              {/* <Button 
                asChild
                variant="outline"
                size="lg"
                className="bg-white/90 hover:bg-white text-[hsl(var(--deepblue))] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <a href="#contact">Book Appointment</a>
              </Button> */}
              <PulseAnimation scale={1.5} duration={5}>
                <Button
                  asChild
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white text-base sm:text-lg px-6 sm:px-8 py-6 sm:py-7 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <a href={`https://wa.me/${7659077707}?text=${encodeURIComponent(
                    `Book an Appointment\nWe’d love to see your smile! Whether it’s a routine check-up, braces consultation, or aligner fitting—our team at Trusmile Dental Care is here for you.`
                  )}`} target="_blank" rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 sm:h-6 sm:w-6 inline-block mr-2 sm:mr-3"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Book Appointment
                  </a>
                </Button>
              </PulseAnimation>

            </motion.div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 md:pl-12"
            variants={itemVariants}
          >
            <FloatingAnimation yOffset={8} duration={6}>
              <motion.img
                src="logo1.png"
                alt="Expert dental professionals providing care"
                className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </FloatingAnimation>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-4 gap-4 mt-8" ref={statsAnimation.ref}>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg"
            initial={statsAnimation.initial}
            animate={statsAnimation.control}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="text-[hsl(var(--skyblue))] font-bold text-4xl mb-2">
              <CountUp end={10} duration={5} />+</div>
            <div className="text-gray-600">Years of Excellence</div>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg"
            initial={statsAnimation.initial}
            animate={statsAnimation.control}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="text-[hsl(var(--skyblue))] font-bold text-4xl mb-2">
            <CountUp end={15000} duration={2} />+</div>
            <div className="text-gray-600">Happy Patients</div>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg"
            initial={statsAnimation.initial}
            animate={statsAnimation.control}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="text-[hsl(var(--skyblue))] font-bold text-4xl mb-2"><CountUp end={6} duration={2} />+</div>
            <div className="text-gray-600">Expert Staff</div>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg"
            initial={statsAnimation.initial}
            animate={statsAnimation.control}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="text-[hsl(var(--skyblue))] font-bold text-4xl mb-2"><CountUp end={99} duration={2} />%</div>
            <div className="text-gray-600">Success Rate</div>
          </motion.div>
        </div>
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

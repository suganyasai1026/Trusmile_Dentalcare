import { motion } from "framer-motion";
import { useAnimateOnScroll } from "../hooks/useAnimateOnScroll";
import { FloatingAnimation, PulseAnimation } from "../components/ui/floating-animation";
import React from "react";

export default function About() {
  // Using different animation types for different elements
  const headerAnimation = useAnimateOnScroll("fadeInDown");
  const leftContentAnimation = useAnimateOnScroll("fadeInLeft");
  const rightContentAnimation = useAnimateOnScroll("fadeInRight");
  const statsAnimation = useAnimateOnScroll("zoomIn");

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-gray-50"
      ref={headerAnimation.ref}
    >
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 xl:px-24">
        <motion.div
          className="text-center mb-16"
          initial={headerAnimation.initial}
          animate={headerAnimation.control}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--deepblue))] mb-4">About Our Clinic</h2>
          <PulseAnimation duration={3} scale={1.1}>
            <div className="w-20 h-1 bg-[hsl(var(--skyblue))] mx-auto mb-6"></div>
          </PulseAnimation>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Dedicated to providing exceptional dental care with cutting-edge technology and a compassionate approach.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="w-full md:w-1/2 order-2 md:order-1"
            initial={leftContentAnimation.initial}
            animate={leftContentAnimation.control}
            ref={leftContentAnimation.ref}
          >
            <h3 className="text-2xl font-semibold text-[hsl(var(--deepblue))] mb-4">
              Pioneering Excellence in Dental Care
            </h3>
            <p className="mb-4 text-gray-700">
              At Trusmile DentalCare, we combine innovative technology with expert knowledge to provide unparalleled dental services.
              Our state-of-the-art facility is designed to ensure comfort and efficiency in every procedure.
            </p>

            <h3 className="text-2xl font-semibold text-[hsl(var(--deepblue))] mb-4 mt-8">
              Our Mission
            </h3>
            <p className="mb-6 text-gray-700">
              We strive to revolutionize dental care by making advanced treatments accessible to everyone.
              Our team is committed to creating a comfortable, stress-free environment for all our patients.
            </p>

            <div className="grid gap-4 mt-8" ref={statsAnimation.ref}>

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
                  <h3 className="text-xl font-semibold mb-2">Root Canal Treatments</h3>
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
                  <p className="text-gray-600"> NoBrace SmartAlign is our advanced clear aligner system</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 order-1 md:order-2"
            initial={rightContentAnimation.initial}
            animate={rightContentAnimation.control}
            ref={rightContentAnimation.ref}
          >
            <div className="relative">
              <motion.img
                src="/clinic.jpg"
                alt="State-of-the-art dental clinic interior"
                className="rounded-xl shadow-xl w-full max-h-[500px]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />

              <div className="absolute -bottom-10 -left-10 hidden md:block">
                <FloatingAnimation yOffset={10} duration={4}>
                  <img
                    src="logo.jpg"
                    alt="Advanced dental technology"
                    className="rounded-xl shadow-xl w-48 h-48 border-4 border-white"
                  />
                </FloatingAnimation>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

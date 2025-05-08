import { motion } from "framer-motion";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import { services } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { 
  TeethIllustration, 
  ToothbrushIllustration, 
  RootCanalIllustration, 
  AlignerIllustration, 
  SmileIllustration, 
  ShieldIllustration 
} from "@/components/ui/dental-illustrations";
import { FeatureCard } from "@/components/ui/feature-card";
import { WaveDivider, TeethDivider } from "@/components/ui/section-divider";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { PulseAnimation } from "@/components/ui/floating-animation";

// Map service names to custom illustrations
const getIllustration = (iconName: string) => {
  switch (iconName) {
    case 'tooth':
      return <TeethIllustration fill="hsl(var(--skyblue))" stroke="white" />;
    case 'wand-magic-sparkles':
      return <RootCanalIllustration fill="hsl(var(--skyblue))" stroke="white" />;
    case 'face-smile':
      return <SmileIllustration fill="hsl(var(--skyblue))" stroke="white" />;
    case 'user-doctor':
      return <ToothbrushIllustration fill="hsl(var(--skyblue))" stroke="white" />;
    case 'shield-halved':
      return <ShieldIllustration fill="hsl(var(--skyblue))" stroke="white" />;
    case 'child':
      return <AlignerIllustration fill="hsl(var(--skyblue))" stroke="white" />;
    default:
      return <TeethIllustration fill="hsl(var(--skyblue))" stroke="white" />;
  }
};

export default function Services() {
  // Use different animation types for different sections
  const headerAnimation = useAnimateOnScroll("fadeInDown");
  const cardAnimation = useAnimateOnScroll("fadeInUp");
  const sliderAnimation = useAnimateOnScroll("fadeInLeft");
  const emphasisAnimation = useAnimateOnScroll("zoomIn");

  return (
    <section 
      id="services" 
      className="py-16 md:py-24 bg-white relative"
      ref={headerAnimation.ref}
    >
      {/* Top wave divider */}
      <div className="absolute top-0 left-0 w-full transform rotate-180">
        <WaveDivider color="white" height={60} flip />
      </div>
      
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 xl:px-24 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={headerAnimation.initial}
          animate={headerAnimation.control}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--deepblue))] mb-4">Our Services</h2>
          <PulseAnimation duration={3} scale={1.1}>
            <div className="w-24 h-1 bg-[hsl(var(--skyblue))] mx-auto mb-6"></div>
          </PulseAnimation>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Comprehensive dental solutions tailored to your unique needs with a focus on comfort and excellence.
          </p>
        </motion.div>
        
        {/* Main service cards with custom illustrations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={cardAnimation.ref}>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={cardAnimation.initial}
              animate={cardAnimation.control}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <FeatureCard
                title={service.title}
                description={service.description}
                icon={getIllustration(service.icon)}
                variant="outline"
                color="primary"
                className="h-full"
                imageUrl={service.image}
                onClick={() => window.location.href = "#contact"}
              />
            </motion.div>
          ))}
        </div>
        
        {/* Before/After treatment showcase */}
        <div className="mt-24" ref={sliderAnimation.ref}>
          <motion.div 
            className="text-center mb-12"
            initial={sliderAnimation.initial}
            animate={sliderAnimation.control}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[hsl(var(--deepblue))] mb-3">Treatment Results</h3>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              See the difference our expert treatments can make.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={sliderAnimation.initial}
              animate={sliderAnimation.control}
              transition={{ delay: 0.2 }}
            >
              <BeforeAfterSlider
                beforeImage="/patient1.jpg"
                afterImage="/patient1_2.jpg"
                beforeLabel="Before Treatment"
                afterLabel="After Treatment"
                className="mb-8"
              />
              <BeforeAfterSlider
                beforeImage="/patient2.jpg"
                afterImage="/patient2_2.jpg"
                beforeLabel="Before Alignment"
                afterLabel="After Alignment"
                className="mb-8"
              />
            
              {/* <p className="text-center mt-4 font-medium text-[hsl(var(--deepblue))]">Dental Implants</p> */}
            </motion.div>
            
            <motion.div
              initial={sliderAnimation.initial}
              animate={sliderAnimation.control}
              transition={{ delay: 0.4 }}
            >
                <BeforeAfterSlider
                beforeImage="/patient3.jpg"
                // afterImage="/after-3.jpg"
                // beforeLabel="Before Whitening"
                // afterLabel="After Whitening"
                afterImage="/patient3_2.jpg"
                beforeLabel="Before Treatment"
                afterLabel="After Treatment"
                className="mb-8 shadow-xl"             />
              <BeforeAfterSlider
                beforeImage="/patient4.jpg"
                afterImage="/patient4_2.jpg"
                beforeLabel="Before Aligner"
                afterLabel="After Aligner"
                className="mb-8 shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={sliderAnimation.initial}
              animate={sliderAnimation.control}
              transition={{ delay: 0.4 }}
            >
                <BeforeAfterSlider
                beforeImage="/patient5.jpg"
                // afterImage="/after-3.jpg"
                // beforeLabel="Before Whitening"
                // afterLabel="After Whitening"
                afterImage="/patient5_2.jpg"
                beforeLabel="Before Treatment"
                afterLabel="After Treatment"
                className="mb-8 shadow-xl"  />
              <BeforeAfterSlider
                beforeImage="/patient7.jpg"
                afterImage="/patient7_2.jpg"
                beforeLabel="Before Aligner"
                afterLabel="After Aligner"
                className="mb-8 shadow-xl"
              />
              {/* <p className="text-center mt-4 font-medium text-[hsl(var(--deepblue))]">In-House Aligners</p> */}
            </motion.div>
            <motion.div
              initial={sliderAnimation.initial}
              animate={sliderAnimation.control}
              transition={{ delay: 0.4 }}
            >
                <BeforeAfterSlider
                beforeImage="/patient6.jpg"
                // afterImage="/after-3.jpg"
                // beforeLabel="Before Whitening"
                // afterLabel="After Whitening"
                afterImage="/patient6_2.jpg"
                beforeLabel="Before Treatment"
                afterLabel="After Treatment"
                className="mb-8 shadow-xl"             />
              {/* <BeforeAfterSlider
                beforeImage="https://images.unsplash.com/photo-1588776814546-354a499c2d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                afterImage="https://images.unsplash.com/photo-1607429081668-39e1c5746f1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                beforeLabel="Before Aligner"
                afterLabel="After Aligner"
                className="mb-8 shadow-xl"
              /> */}
              {/* <p className="text-center mt-4 font-medium text-[hsl(var(--deepblue))]">In-House Aligners</p> */}
            </motion.div>
          </div>
        </div>
        
        {/* Emphasis on root canal expertise */}
        <div className="mt-24 bg-gray-50 rounded-2xl p-8 sm:p-12 shadow-lg relative overflow-hidden" ref={emphasisAnimation.ref}>
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 opacity-10">
            <RootCanalIllustration width={300} height={300} fill="hsl(var(--deepblue))" />
          </div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10"
            initial={emphasisAnimation.initial}
            animate={emphasisAnimation.control}
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[hsl(var(--deepblue))] mb-4">Root Canal Specialists</h3>
              <div className="w-16 h-1 bg-[hsl(var(--skyblue))] mb-6"></div>
              <p className="text-gray-700 mb-6">
                Our clinic specializes in painless, advanced root canal treatments performed by expert endodontists. 
                Using cutting-edge technology and techniques, we save teeth that would otherwise need extraction.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-[hsl(var(--skyblue))] rounded-full flex items-center justify-center mt-1">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">Virtually pain-free procedures</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-[hsl(var(--skyblue))] rounded-full flex items-center justify-center mt-1">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">Same-day emergency treatment</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-[hsl(var(--skyblue))] rounded-full flex items-center justify-center mt-1">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">State-of-the-art microscope guided precision</span>
                </li>
              </ul>
              <button 
                className="bg-[hsl(var(--deepblue))] hover:bg-[hsl(var(--deepblue-dark))] text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 font-medium"
                onClick={() => window.location.href = "#contact"}
              >
                Schedule Consultation
              </button>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(var(--skyblue-dark))] to-[hsl(var(--skyblue))] opacity-20 rounded-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Advanced dental equipment" 
                className="rounded-xl shadow-2xl w-full relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <TeethDivider color="white" height={40} />
      </div>
    </section>
  );
}

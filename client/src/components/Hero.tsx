import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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

export default function Hero() {
  return (
    <section id="home" className="pt-20 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
      {/* Hero background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://pixabay.com/get/ga49f576c3f064d0924815e51dbcca06e07cf5c2b35a6f0305cd1ade951e971fbbfb108a52961f41b064cb5b64f76c35e93c3fe185febff62a694bb51a129630a_1280.jpg')",
          filter: "brightness(0.9)"
        }}
      >
        <div className="absolute inset-0 bg-[hsl(var(--deepblue-dark))] opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="flex flex-col md:flex-row items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="w-full md:w-1/2 text-white mb-10 md:mb-0"
            variants={itemVariants}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Expert Dental Care for Your Perfect Smile
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Specialists in advanced root canal treatments and innovative dental solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                asChild
                size="lg"
                className="bg-[hsl(var(--skyblue))] hover:bg-[hsl(var(--skyblue-dark))] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <a href="#services">Our Services</a>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="bg-white hover:bg-gray-100 text-[hsl(var(--deepblue))] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <a href="#contact">Book Appointment</a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 md:pl-12"
            variants={itemVariants}
          >
            <img 
              src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Expert dental professionals providing care" 
              className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
            />
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="bg-white bg-opacity-95 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="text-[hsl(var(--skyblue))] mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h2.586a1 1 0 01.707.293l.707.707H14a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V5z" clipRule="evenodd" />
                <path d="M9.4 6.2a1 1 0 011.2 0c.8.6 1.4 1.5 1.4 2.5 0 1.7-1.3 3-3 3s-3-1.3-3-3c0-1 .6-1.9 1.4-2.5a1 1 0 011.2 0 1 1 0 110 1.5.5.5 0 00-.4.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5c0-.2-.1-.4-.4-.5a1 1 0 010-1.5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Advanced Root Canal</h3>
            <p className="text-gray-600">Expert specialists with cutting-edge technology for painless procedures.</p>
          </div>
          
          <div className="bg-white bg-opacity-95 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="text-[hsl(var(--skyblue))] mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Experienced Surgeons</h3>
            <p className="text-gray-600">Our world-class team ensures the highest quality of dental care.</p>
          </div>
          
          <div className="bg-white bg-opacity-95 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="text-[hsl(var(--skyblue))] mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">In-House Aligners</h3>
            <p className="text-gray-600">World's first clinic with in-house aligner technology for faster results.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

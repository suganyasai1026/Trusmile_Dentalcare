import { motion } from "framer-motion";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";

export default function About() {
  const { ref, control } = useAnimateOnScroll();

  return (
    <section 
      id="about" 
      className="py-16 md:py-24 bg-gray-50"
      ref={ref}
    >
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 xl:px-24">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={control}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--deepblue))] mb-4">About Our Clinic</h2>
          <div className="w-20 h-1 bg-[hsl(var(--skyblue))] mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Dedicated to providing exceptional dental care with cutting-edge technology and a compassionate approach.
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="w-full md:w-1/2 order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={control}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-[hsl(var(--deepblue))] mb-4">
              Pioneering Excellence in Dental Care
            </h3>
            <p className="mb-4 text-gray-700">
              At DentalCare, we combine innovative technology with expert knowledge to provide unparalleled dental services. 
              Our state-of-the-art facility is designed to ensure comfort and efficiency in every procedure.
            </p>
            
            <h3 className="text-2xl font-semibold text-[hsl(var(--deepblue))] mb-4 mt-8">
              Our Mission
            </h3>
            <p className="mb-6 text-gray-700">
              We strive to revolutionize dental care by making advanced treatments accessible to everyone. 
              Our team is committed to creating a comfortable, stress-free environment for all our patients.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="text-[hsl(var(--skyblue))] font-bold text-xl mb-2">10+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="text-[hsl(var(--skyblue))] font-bold text-xl mb-2">15,000+</div>
                <div className="text-gray-600">Happy Patients</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="text-[hsl(var(--skyblue))] font-bold text-xl mb-2">30+</div>
                <div className="text-gray-600">Expert Staff</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="text-[hsl(var(--skyblue))] font-bold text-xl mb-2">99%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 order-1 md:order-2"
            initial={{ opacity: 0, x: 30 }}
            animate={control}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="State-of-the-art dental clinic interior"
                className="rounded-xl shadow-xl w-full h-auto"
              />
              
              <div className="absolute -bottom-10 -left-10 hidden md:block">
                <img 
                  src="https://pixabay.com/get/g3939d19c18b39052f53bb99684c7a452421a8683ad6cc81270e509cd8d67246035c560e802ad0b72b8ac45c4c7537c042d5b94394424520791dbd3f729ee7694_1280.jpg" 
                  alt="Advanced dental technology"
                  className="rounded-xl shadow-xl w-48 h-auto border-4 border-white"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

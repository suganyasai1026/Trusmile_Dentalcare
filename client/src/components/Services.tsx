import { motion } from "framer-motion";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import { services } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { 
  Torus, 
  Wand2, 
  Smile, 
  Stethoscope, 
  ShieldCheck, 
  Baby 
} from "lucide-react";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'tooth':
      return <Torus />;
    case 'wand-magic-sparkles':
      return <Wand2 />;
    case 'face-smile':
      return <Smile />;
    case 'user-doctor':
      return <Stethoscope />;
    case 'shield-halved':
      return <ShieldCheck />;
    case 'child':
      return <Baby />;
    default:
      return <Torus />;
  }
};

export default function Services() {
  const { ref, control } = useAnimateOnScroll();

  return (
    <section 
      id="services" 
      className="py-16 md:py-24 bg-white"
      ref={ref}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={control}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--deepblue))] mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-[hsl(var(--skyblue))] mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Comprehensive dental solutions tailored to your unique needs with a focus on comfort and excellence.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-gray-50 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={control}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-[hsl(var(--deepblue))]">{service.title}</h3>
                  <div className="w-12 h-12 bg-[hsl(var(--skyblue))] rounded-full flex items-center justify-center text-white">
                    {getIcon(service.icon)}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href="#contact" className="text-[hsl(var(--skyblue))] font-medium hover:text-[hsl(var(--skyblue-dark))] inline-flex items-center">
                  Learn More <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import { teamMembers } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter } from "lucide-react";

export default function Team() {
  const { ref, control } = useAnimateOnScroll();

  return (
    <section 
      id="team" 
      className="py-16 md:py-24 bg-gray-50"
      ref={ref}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={control}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--deepblue))] mb-4">Meet Our Experts</h2>
          <div className="w-20 h-1 bg-[hsl(var(--skyblue))] mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Our team of experienced dental professionals is dedicated to providing you with the highest quality care.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
              initial={{ opacity: 0, y: 20 }}
              animate={control}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-80 object-cover object-center transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[hsl(var(--deepblue-dark))] to-transparent h-1/3 opacity-70"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[hsl(var(--deepblue))]">{member.name}</h3>
                <p className="text-[hsl(var(--skyblue))] mb-3">{member.position}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-[hsl(var(--skyblue))] transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-[hsl(var(--skyblue))] transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={control}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button 
            asChild
            className="bg-[hsl(var(--deepblue))] hover:bg-[hsl(var(--deepblue-dark))] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <a href="#contact">
              Meet All Specialists <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function ChevronRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

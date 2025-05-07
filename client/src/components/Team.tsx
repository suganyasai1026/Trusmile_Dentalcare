import { motion } from "framer-motion";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import { teamMembers } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, ChevronRight } from "lucide-react";
import { ParallaxSection } from "@/components/ui/parallax-scroll";
import { FloatingAnimation } from "@/components/ui/floating-animation";

export default function Team() {
  const headerAnimation = useAnimateOnScroll("fadeInDown");
  const cardAnimation = useAnimateOnScroll("fadeInUp");
  const buttonAnimation = useAnimateOnScroll("fadeIn");

  // Define team members data in case it's not loading properly
  const fallbackTeamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      position: "Root Canal Specialist",
      bio: "With over 15 years of experience, Dr. Johnson is a leading expert in painless root canal procedures and complex dental surgeries.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      position: "Chief Dental Surgeon",
      bio: "Dr. Chen pioneered our in-house aligner technology and specializes in complex reconstructive dental procedures with minimal recovery time.",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      position: "Cosmetic Dentistry Expert",
      bio: "Specializing in smile transformations, Dr. Rodriguez combines artistic vision with technical precision for stunning cosmetic results.",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700"
    }
  ];
  
  // Use fallback data if teamMembers is empty or undefined
  const doctors = teamMembers && teamMembers.length > 0 ? teamMembers : fallbackTeamMembers;

  return (
    <section 
      id="team" 
      className="py-16 md:py-24 bg-gray-50 relative"
    >
      <div className="container mx-auto px-8 sm:px-12 lg:px-16">
        <div ref={headerAnimation.ref}>
          <motion.div 
            className="text-center mb-16"
            initial={headerAnimation.initial}
            animate={headerAnimation.control}
            variants={headerAnimation.variants}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--deepblue))] mb-4">Meet Our Experts</h2>
            <FloatingAnimation duration={3}>
              <div className="w-24 h-1 bg-[hsl(var(--skyblue))] mx-auto mb-6"></div>
            </FloatingAnimation>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              Our team of experienced dental professionals is dedicated to providing you with the highest quality care.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={cardAnimation.ref}>
          {doctors.map((member, index) => (
            <ParallaxSection key={member.id} speed={0.5} direction="up">
              <motion.div
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
                initial={cardAnimation.initial}
                animate={cardAnimation.control}
                variants={cardAnimation.variants}
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
            </ParallaxSection>
          ))}
        </div>
        
        <div ref={buttonAnimation.ref} className="mt-12 text-center">
          <motion.div
            initial={buttonAnimation.initial}
            animate={buttonAnimation.control}
            variants={buttonAnimation.variants}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button 
              className="bg-[hsl(var(--deepblue))] hover:bg-[hsl(var(--deepblue-dark))] text-white px-6 py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => window.location.href = "#contact"}
            >
              Meet All Specialists <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

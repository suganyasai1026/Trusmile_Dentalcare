import { motion } from "framer-motion";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin
} from "lucide-react";
import { formatPhoneNumber } from "@/lib/utils";

export default function Contact() {
  const { ref, control } = useAnimateOnScroll();
  const phoneNumber = "1234567890";
  const formattedPhone = formatPhoneNumber(phoneNumber);

  return (
    <section 
      id="contact" 
      className="py-16 md:py-24 bg-[hsl(var(--deepblue))] text-white relative"
      ref={ref}
    >
      <div className="absolute inset-0 bg-[hsl(var(--deepblue))] opacity-90"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={control}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-[hsl(var(--skyblue))] mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Ready to transform your smile? Get in touch with our team to schedule your appointment.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={control}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 text-white mb-8">
              <h3 className="text-2xl font-semibold mb-6">Visit Our Clinic</h3>
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="text-[hsl(var(--skyblue))] h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">Address</p>
                    <p className="opacity-80">123 Dental Avenue, Medical District<br />New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="text-[hsl(var(--skyblue))] h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">Phone</p>
                    <p className="opacity-80">{formattedPhone}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="text-[hsl(var(--skyblue))] h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">Email</p>
                    <p className="opacity-80">appointments@dentalcare.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Clock className="text-[hsl(var(--skyblue))] h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">Hours</p>
                    <p className="opacity-80">Monday - Friday: 8:00 AM - 7:00 PM<br />Saturday: 9:00 AM - 5:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-[hsl(var(--skyblue))] transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-[hsl(var(--skyblue))] transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-[hsl(var(--skyblue))] transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-[hsl(var(--skyblue))] transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={control}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full min-h-[400px] w-full">
              <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1655903618213!5m2!1sen!2sca"
                  className="w-full h-full min-h-[400px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DentalCare Clinic Location"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={control}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-xl font-medium mb-6">Book your appointment instantly via WhatsApp</p>
          <Button 
            asChild
            className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-7 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <a href={`https://wa.me/${phoneNumber}?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment%20at%20DentalCare%20Specialists.`} target="_blank" rel="noopener noreferrer">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 inline-block mr-3" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Book Appointment
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

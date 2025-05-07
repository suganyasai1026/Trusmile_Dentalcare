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
import { FloatingAnimation, PulseAnimation } from "@/components/ui/floating-animation";

export default function Contact() {
  const headerAnimation = useAnimateOnScroll("fadeInDown");
  const leftContentAnimation = useAnimateOnScroll("fadeInLeft");
  const rightContentAnimation = useAnimateOnScroll("fadeInRight");
  const bottomAnimation = useAnimateOnScroll("fadeInUp");

  const phoneNumber = "+91 7659077707";
  const formattedPhone = formatPhoneNumber(phoneNumber);

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-[hsl(var(--deepblue))] text-white relative"
      ref={headerAnimation.ref}
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-[hsl(var(--deepblue))] opacity-90"></div>

      {/* Gradient animation */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[hsl(var(--skyblue-dark))] opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-8 sm:px-12 lg:px-16 xl:px-24 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={headerAnimation.initial}
          animate={headerAnimation.control}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <PulseAnimation duration={3} scale={1.1}>
            <div className="w-20 h-1 bg-[hsl(var(--skyblue))] mx-auto mb-6"></div>
          </PulseAnimation>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Ready to transform your smile? Get in touch with our team to schedule your appointment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={leftContentAnimation.initial}
            animate={leftContentAnimation.control}
            ref={leftContentAnimation.ref}
            className="flex flex-col h-full"
          >
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 sm:p-8 text-white mb-8 flex-grow">
              <h3 className="text-2xl font-semibold mb-6">Visit Our Clinic</h3>
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FloatingAnimation yOffset={3} duration={2}>
                      <MapPin className="text-[hsl(var(--skyblue))] h-5 w-5" />
                    </FloatingAnimation>
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">Address</p>
                    <p className="opacity-80 text-sm sm:text-base">
                      First floor, H.No:8-1-284/OU/116,<br /> Manikonda Rd, opposite to Value vision,<br /> OU Colony, Shaikpet,<br /> Hyderabad, Telangana 500008</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FloatingAnimation yOffset={3} duration={2} delay={0.1}>
                      <Phone className="text-[hsl(var(--skyblue))] h-5 w-5" />
                    </FloatingAnimation>
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">Phone</p>
                    <p className="opacity-80 text-sm sm:text-base">{formattedPhone}</p>
                  </div>
                </div>

                {/* <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FloatingAnimation yOffset={3} duration={2} delay={0.2}>
                      <Mail className="text-[hsl(var(--skyblue))] h-5 w-5" />
                    </FloatingAnimation>
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">Email</p>
                    <p className="opacity-80 text-sm sm:text-base break-words">appointments@dentalcare.com</p>
                  </div>
                </div> */}

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FloatingAnimation yOffset={3} duration={2} delay={0.3}>
                      <Clock className="text-[hsl(var(--skyblue))] h-5 w-5" />
                    </FloatingAnimation>
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">Hours</p>
                    <p className="opacity-80 text-sm sm:text-base">
                      Monday - sunday: 10:00 AM - 9:00 PM<br />

                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 sm:p-8 text-white">
              <h3 className="text-2xl font-semibold mb-6">Follow Us</h3>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <motion.a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-[hsl(var(--skyblue))] transition-colors"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Facebook className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/trusmiledentalhyd?igsh=YTFmY3ppbGd4Mm5r"
                  className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-[hsl(var(--skyblue))] transition-colors"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Instagram className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-[hsl(var(--skyblue))] transition-colors"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Twitter className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-[hsl(var(--skyblue))] transition-colors"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={rightContentAnimation.initial}
            animate={rightContentAnimation.control}
            ref={rightContentAnimation.ref}
            className="h-full"
          >
            <motion.div
              className="bg-white rounded-xl overflow-hidden shadow-lg h-full w-full"
              whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="h-[350px] sm:h-[400px] md:h-[450px] lg:h-full w-full bg-gray-200 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.0887520410247!2d78.3929615!3d17.407527899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb970043529a0f%3A0x2fb67e2a2ef2dc82!2sTrusmile%20Dental%20Care%20%E2%80%93%20Braces%2C%20Aligners%20%26%20Implants%20Specialist%20in%20Manikonda!5e0!3m2!1sen!2sin!4v1746631832496!5m2!1sen!2sin"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Trusmile Dental Care – Braces, Aligners & Implants Specialist in Manikonda"
                  allowFullScreen
                ></iframe>

              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={bottomAnimation.initial}
          animate={bottomAnimation.control}
          ref={bottomAnimation.ref}
        >
          <p className="text-lg sm:text-xl font-medium mb-6">Book your appointment instantly via WhatsApp</p>
          <PulseAnimation scale={1.03} duration={3}>
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
      </div>
    </section>
  );
}

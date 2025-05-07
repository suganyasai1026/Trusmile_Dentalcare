import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X } from 'lucide-react';
import { PulseAnimation } from './ui/floating-animation';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "7659077707"; // Replace with your clinic's WhatsApp number
  
  // Show the button after scrolling a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false); // Also close the popup when scrolling back to top
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Book an Appointment\nWe’d love to see your smile! Whether it’s a routine check-up, braces consultation, or aligner fitting—our team at Trusmile Dental Care is here for you.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Popup message */}
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                className="bg-white rounded-lg shadow-xl p-4 mb-3 w-60 relative"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <button 
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  <X size={16} />
                </button>
                <h4 className="font-semibold text-[hsl(var(--deepblue))] mb-1">Schedule an Appointment</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Chat with us on WhatsApp to book your dental appointment quickly.
                </p>
                <button
                  className="bg-[#25D366] hover:bg-[#128C7E] w-full py-2 px-4 text-white rounded-lg font-medium text-sm flex items-center justify-center"
                  onClick={handleWhatsAppClick}
                >
                  <svg viewBox="0 0 32 32" className="w-4 h-4 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.916 1.456 7.489 3.845 10.218L1.327 29.32c-.146.273-.022.612.252.758.12.064.251.096.382.096.16 0 .319-.061.437-.18l3.42-2.996A15.948 15.948 0 0016.004 32C24.827 32 32 24.824 32 16S24.827 0 16.004 0zm0 29.152c-3.647 0-7.05-1.139-9.86-3.076a1.444 1.444 0 00-1.53.13l-1.741 1.525.754-2.462a1.449 1.449 0 00-.216-1.457 12.993 12.993 0 01-2.564-7.812c0-7.206 5.859-13.066 13.066-13.066S29.07 8.794 29.07 16c0 7.206-5.86 13.066-13.066 13.066v.086z"/>
                    <path d="M23.484 18.402l-2.806-1.383c-.348-.17-.75-.09-1.015.197l-.837.992a.772.772 0 01-.833.215c-1.289-.52-3.564-2.564-4.228-3.773a.78.78 0 01.023-.863l.761-1.045c.228-.313.237-.739.022-1.061l-1.196-2.875c-.243-.406-.733-.56-1.147-.352-.918.47-1.922 1.343-2.05 2.387-.213 1.716.585 3.895 3.482 6.584 3.321 3.082 5.98 3.45 7.647 3.023 1.005-.257 1.721-1.407 2.017-2.387.135-.49-.077-.984-.486-1.169l-.354.51z"/>
                  </svg>
                  Start Chat
                </button>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Main WhatsApp button */}
          <PulseAnimation duration={2.5} scale={1.05}>
            <motion.button
              className="bg-[#25D366] hover:bg-[#128C7E] w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Contact via WhatsApp"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <MessageSquare className="w-6 h-6 text-white" />
              )}
            </motion.button>
          </PulseAnimation>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
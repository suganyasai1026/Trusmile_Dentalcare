import { useState, useEffect } from "react";
import { motion } from "framer-motion";
//import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import { testimonials } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Star, StarHalf } from "lucide-react";

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex text-yellow-400 mb-3">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="fill-current" />
      ))}
      {hasHalfStar && <StarHalf className="fill-current" />}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="testimonials" 
      className="py-16 md:py-24 bg-white"
      style={{ position: 'relative', minHeight: '600px' }}
    >
      {/* <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-[hsl(var(--skyblue))] rounded-full opacity-5 -mr-16 -mt-16"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-[hsl(var(--deepblue))] rounded-full opacity-5 -ml-16 -mb-16"></div> */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--deepblue))] mb-4">What Our Patients Say</h2>
          <div className="w-20 h-1 bg-[hsl(var(--skyblue))] mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Hear from our satisfied patients about their experience with our dental care services.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`rounded-2xl bg-gray-50 p-8 md:p-10 shadow-lg transition-opacity duration-500 ${
                  index === current ? "opacity-100" : "opacity-0 hidden"
                }`}
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="flex-grow">
                    <StarRating rating={testimonial.rating} />
                    <p className="text-lg md:text-xl text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                    <div>
                      <h4 className="text-[hsl(var(--deepblue))] font-semibold text-lg">{testimonial.name}</h4>
                      <p className="text-gray-500">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === current ? "bg-[hsl(var(--skyblue))]" : "bg-gray-300 hover:bg-[hsl(var(--skyblue))]"
                  }`}
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>

            <button 
              onClick={prev}
              className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-5 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[hsl(var(--deepblue))] hover:text-[hsl(var(--skyblue))] transition-colors hidden md:flex"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button 
              onClick={next}
              className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-5 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[hsl(var(--deepblue))] hover:text-[hsl(var(--skyblue))] transition-colors hidden md:flex"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
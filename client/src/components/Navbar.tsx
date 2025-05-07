import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation } from "wouter";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Our Team", href: "#team" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className={cn(
        "fixed w-full bg-white z-50 transition-all duration-300",
        scrolled ? "shadow-md py-2" : "py-3 md:py-4"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className="text-[hsl(var(--deepblue))] font-bold text-2xl">
              Dental<span className="text-[hsl(var(--skyblue))]">Care</span>
            </span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-[hsl(var(--skyblue))] font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-[hsl(var(--skyblue))] focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden py-4 bg-white border-t animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[hsl(var(--skyblue))]"
                onClick={closeMenu}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

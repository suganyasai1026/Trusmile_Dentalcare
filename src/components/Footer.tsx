import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { formatPhoneNumber } from "../lib/utils";
import React from "react";

export default function Footer() {
  const phoneNumber = "+91 7659077707";
  const formattedPhone = formatPhoneNumber(phoneNumber);

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <span className="text-white font-bold text-2xl">
               {/* Trusmile <span className="text-[hsl(var(--skyblue))]">DentalCare</span> */}
               <img 
                src="logo2.png" 
                alt="Advanced dental equipment" 
                className="rounded-xl shadow-2xl h-[80px] w-[145px] relative z-10"
              />
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Providing exceptional dental care with cutting-edge technology and a compassionate approach.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/16SrVuP834/" className="text-gray-400 hover:text-[hsl(var(--skyblue))] transition-colors" target="_blank">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/trusmiledentalhyd?igsh=YTFmY3ppbGd4Mm5r" className="text-gray-400 hover:text-[hsl(var(--skyblue))] transition-colors" target="_blank">
                <Instagram className="h-5 w-5" />
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-[hsl(var(--skyblue))] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[hsl(var(--skyblue))] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a> */}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-[hsl(var(--skyblue))] transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-[hsl(var(--skyblue))] transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[hsl(var(--skyblue))] transition-colors">Services</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-[hsl(var(--skyblue))] transition-colors">Team</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-[hsl(var(--skyblue))] transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[hsl(var(--skyblue))] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-[hsl(var(--skyblue))] transition-colors">Root Canal Treatment</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[hsl(var(--skyblue))] transition-colors">In-House Aligners</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[hsl(var(--skyblue))] transition-colors">Dental Implants</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[hsl(var(--skyblue))] transition-colors">Dental Surgery</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[hsl(var(--skyblue))] transition-colors">Braces</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[hsl(var(--skyblue))] transition-colors">Pediatric Dentistry</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[hsl(var(--skyblue))] transition-colors">Teeth Whitening</a></li><li><a href="#services" className="text-gray-400 hover:text-[hsl(var(--skyblue))] transition-colors">Smile Design</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mt-1 mr-3 text-[hsl(var(--skyblue))]" />
                First floor, H.No:8-1-284/OU/116,<br /> Manikonda Rd, opposite to Value vision,<br /> OU Colony, Shaikpet,<br /> Hyderabad, Telangana 500008
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-[hsl(var(--skyblue))]" />
                <span>{formattedPhone}</span>
              </li>
              {/* <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-[hsl(var(--skyblue))]" />
                <span>appointments@dentalcare.com</span>
              </li> */}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} TruSmileDentalCare Specialists. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

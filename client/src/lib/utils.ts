import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const services = [
  {
    id: 1,
    title: "Expert Root Canal",
    description: "Our specialists use advanced techniques to make root canal treatments painless and effective, preserving your natural teeth with minimal discomfort.",
    icon: "tooth",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: 2,
    title: "In-House Aligners",
    description: "World's first clinic with proprietary in-house aligner technology, providing faster, more comfortable, and precisely customized teeth straightening.",
    icon: "wand-magic-sparkles",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: 3,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with our comprehensive cosmetic procedures including veneers, whitening, bonding, and smile makeovers tailored to your desires.",
    icon: "face-smile",
    image: "https://pixabay.com/get/gb20362e15fa0f34fcf44542e6f5418adc03f4817ff2cb9ed502ba4eb73859c72b8716c64a9df5772cf8edd50875e46ad75df4cc237274ac4a812f85d5940c2d7_1280.jpg"
  },
  {
    id: 4,
    title: "Dental Surgery",
    description: "Our experienced surgeons specialize in complex dental procedures including extractions, implants, and reconstructive surgery with a focus on minimizing recovery time.",
    icon: "user-doctor",
    image: "https://pixabay.com/get/g665a51925312f0501e770734a1134d1b8a2226320e803798561ccd4bc754fb31124539cad6e6a1d62c6e3302b4fe9407d1e23f207a9b5726881d1363c7c0d82d_1280.jpg"
  },
  {
    id: 5,
    title: "Preventive Care",
    description: "Comprehensive check-ups, cleanings, and preventive treatments to maintain your oral health and detect potential issues before they become serious problems.",
    icon: "shield-halved",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: 6,
    title: "Pediatric Dentistry",
    description: "Specialized gentle care for children in a friendly environment designed to make dental visits fun and stress-free while promoting lifelong oral health habits.",
    icon: "child",
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  }
];

export const teamMembers = [
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

export const testimonials = [
  {
    id: 1,
    name: "Jennifer Smith",
    position: "Root Canal Patient",
    quote: "I was terrified of root canal treatments until I visited DentalCare. Dr. Johnson made the entire process completely painless and comfortable. The results have been incredible, and I can't thank them enough!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: 2,
    name: "Robert Johnson",
    position: "Aligner Patient",
    quote: "The in-house aligner technology here is truly revolutionary. My teeth straightening journey has been faster and more comfortable than I ever expected. The personalized attention from Dr. Chen made all the difference.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: 3,
    name: "Sarah Martinez",
    position: "Cosmetic Dentistry Patient",
    quote: "Dr. Rodriguez transformed my smile completely! Her artistic approach to cosmetic dentistry gave me results beyond my expectations. I now smile with complete confidence and receive compliments all the time.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  }
];

export function formatPhoneNumber(phoneNumber: string): string {
  const cleaned = phoneNumber.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return phoneNumber;
}

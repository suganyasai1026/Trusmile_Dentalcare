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
    image: "rootcanel.jpg"
  },
  {
    id: 2,
    title: "In-House Aligners",
    description: "World's first clinic with proprietary in-house aligner technology, providing faster, more comfortable, and precisely customized teeth straightening.",
    icon: "wand-magic-sparkles",
    image: "inhouse_aligners.jpeg"
  },
  {
    id: 3,
    title: "Dental Implants",
    description: "Transform your smile with our comprehensive Dental Implants procedures including veneers, whitening, bonding, and smile makeovers tailored to your desires.",
    icon: "face-smile",
    image: "dental-implants.jpeg"
  },
  {
    id: 4,
    title: "Dental Surgery",
    description: "Our experienced surgeons specialize in complex dental procedures including extractions, implants, and reconstructive surgery with a focus on minimizing recovery time.",
    icon: "user-doctor",
    image: "sd.jpeg"
  },
  {
    id: 5,
    title: "Braces",
    description: "Comprehensive check-ups, cleanings, and preventive treatments to maintain your oral health and detect potential issues before they become serious problems.",
    icon: "shield-halved",
    image: "dental-braces.jpg"
  },
  {
    id: 6,
    title: "Pediatric Dentistry",
    description: "Specialized gentle care for children in a friendly environment designed to make dental visits fun and stress-free while promoting lifelong oral health habits.",
    icon: "child",
    image: "pd.jpeg"
  },
  {
    id: 7,
    title: "Teeth Whitening",
    description: "Comprehensive check-ups, cleanings, and preventive treatments to maintain your oral health and detect potential issues before they become serious problems.",
    icon: "shield-halved",
    image: "images.jpeg"
  },
  {
    id: 8,
    title: "Smile Design",
    description: "Comprehensive check-ups, cleanings, and preventive treatments to maintain your oral health and detect potential issues before they become serious problems.",
    icon: "shield-halved",
    image: "sd.jpeg"
  },
];

export const teamMembers = [
  {
    id: 1,
    name: "Dr. G. Adityanarayana ",
    position: "Orthodontist and Cosmetic Dentist",
    bio: "Specializing in smile transformations, Dr. Adityanarayana combines artistic vision with technical precision for stunning cosmetic results..",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700"
  },
  {
    id: 2,
    name: "Dr. G. Sai Jyothsna",
    position: "Periodontist and Implantologist ",
    bio: "Dr. Sai Jyothsna our in-house aligner technology and specializes in complex reconstructive dental procedures with minimal recovery time.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700"
  },
  {
    id: 3,
    name: "Dr. Rakesh C",
    position: "Endodontist",
    bio: "Specializing in smile transformations, Dr. Rodriguez combines artistic vision with technical precision for stunning cosmetic results.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700"
  },
  {
    id: 4,
    name: "Dr. Charan Reddy ,",
    position: "Oral and Maxillofacial Surgeon ",
    bio: "Specializing in smile transformations, Dr. Rodriguez combines artistic vision with technical precision for stunning cosmetic results.",
    image: "/charan.jpg"
  },
  {
    id: 5,
    name: "Dr. Anil kumar",
    position: "Prosthodontist",
    bio: "Specializing in smile transformations, Dr. Rodriguez combines artistic vision with technical precision for stunning cosmetic results.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700"
  },
  {
    id: 6,
    name: "Dr.Sreeja Reddy",
    position: "Pedodontist",
    bio: "Specializing in smile transformations, Dr. Rodriguez combines artistic vision with technical precision for stunning cosmetic results.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Shiva Krishna Vishwanatham",
    position: "Root Canal Patient",
    quote: "Dr. Jyothsna and Dr. Aditya are truly masters of their craft—extremely knowledgeable, gentle, and incredibly patient. They took the time to thoroughly explain the procedure, easing all our concerns, and ensured my mother was comfortable throughout. Despite her initial anxiety, she felt completely at ease, thanks to their reassuring approach.The clinic itself is state-of-the-art, impeccably clean, and well-equipped with the latest technology. Appointments were well-managed, and we never had to wait long.Most importantly, the procedure was performed with such precision and care that my mother experienced minimal discomfort and is now recovering beautifully. It’s rare to find dentists who combine technical expertise with such compassion.",
    rating: 5,
    image: ""
  },
  {
    id: 2,
    name: "Shreesh Basatwar",
    position: " implants done",
    quote: "Thanks to Dr. Jyotsna and Dr. Aditya, my mother and I are both now enjoying restored smiles with implants that look and feel completely natural. I highly recommend Trusmile Dental Clinic to anyone in need of quality dental care. It’s clear that the team here genuinely cares about their patients' well-being and goes above and beyond to ensure top-notch results. Thank you, Trusmile, for giving us the smile of our dreams!",
    rating: 5,
    image: ""
  },
  {
    id: 3,
    name: "Sreedevi Peddireddy",
    position: "braces and alignment treatment",
    quote: "What really stood out was Adithya's ability to listen to our concerns and answer all our questions. They took the time to explain everything in a way that was easy to understand, and made sure we were comfortable with the treatment plan.I would highly recommend Adithya name to anyone looking for orthodontic treatment. They are truly exceptional, and we feel lucky to have found them. Thank you Adithya , for giving my son a beautiful, smile!!",
    rating: 4.5,
    image: ""
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

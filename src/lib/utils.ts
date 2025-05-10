import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const services = [
  {
    id: 1,
    title: "Expert Root Canal",
    description: "We offer advanced root canal treatment using modern technology for precise, painless results Our expert dentists ensure your natural tooth is saved with minimal discomfort and quick recovery We use digital X-rays and rotary tools for efficient and hygienic procedures Restore your smile with expert care",
    icon: "tooth",
    image: "rootcanel.jpeg"
  },
  {
    id: 2,
    title: "In-House Aligners",
    description: "NoBrace SmartAlign is our advanced clear aligner system, crafted using cutting-edge digital planning and Graphy’s high-performance resin. It offers a precise, comfortable, and nearly invisible solution to straighten your teeth—without wires or brackets. Experience the future of orthodontics, custom-made for your smile.",
    icon: "wand-magic-sparkles",
    image: "inhouse_aligners.jpg"
  },
  {
    id: 3,
    title: "Dental Implants",
    description: "Using premium systems like Osstem implants for superior strength, stability, and aesthetics. Our experienced dentists ensure safe, painless procedures with modern technology and precision planning Whether replacing a single tooth or multiple, we deliver natural-looking, long-lasting results Restore your smile with confidence",
    icon: "face-smile",
    image: "dental-implants.jpg"
  },
  {
    id: 4,
    title: "Dental Surgery",
    description: "We offer expert oral and maxillofacial surgeries using advanced, minimally invasive techniques Our services include wisdom tooth removal, cyst removal, flap surgeries, and more—all performed in a safe, hygienic environment Our experienced dental surgeons focus on painless treatment and quick recovery.",
    icon: "user-doctor",
    image: "sd.jpeg"
  },
  {
    id: 5,
    title: "Braces",
    description: "We specialize in advanced braces treatment, including Pits 21, a leading orthodontic system for precise teeth alignment.We offer both metal and ceramic braces, tailored to your specific needs for optimal results.Our experienced orthodontists ensure a comfortable, efficient process with a focus on your smile’s health and aesthetics.",
    icon: "shield-halved",
    image: "dental-braces.jpg"
  },
  {
    id: 6,
    title: "Pediatric Dentistry",
    description: "We provide gentle and compassionate pediatric dentistry to ensure your child’s dental health from a young age.Our expert pediatric dentists offer services such as preventive care, fillings, sealants, and early orthodontic evaluations, all in a fun and friendly environment.We use child-friendly techniques and equipment to make dental visits stress-free and enjoyable for your little ones.",
    icon: "child",
    image: "pd.jpg"
  },
  {
    id: 7,
    title: "Teeth Whitening",
    description: "Achieve a brighter, whiter smile with Zoom Teeth Whitening at TruSmile Dental Care.This advanced in-office treatment uses powerful LED light and whitening gel to remove stains and discoloration, delivering noticeable results in just one visit.Our skilled dentists ensure a safe, comfortable procedure, leaving you with a radiant smile.",
    icon: "shield-halved",
    image: "images.jpeg"
  },
  {
    id: 8,
    title: "Smile Design",
    description: "Achieve a brighter, whiter smile with Zoom Teeth Whitening at TruSmile Dental Care.This advanced in-office treatment uses powerful LED light and whitening gel to remove stains and discoloration, delivering noticeable results in just one visit.Our skilled dentists ensure a safe, comfortable procedure, leaving you with a radiant smile.",
    icon: "shield-halved",
    image: "smile.jpg"
  },
];

export const teamMembers = [
  {
    id: 1,
    name: "Dr. G. Adityanarayana ",
    position: "Orthodontist and Cosmetic Dentist",
    bio: "A highly skilled Orthodontist and a certified PITS21 Elite Provider with expertise in precise, comfortable smile transformations.Recognized as a Digital Orthodontist and Graphy Aligner Certified specialist,  advanced digital planning.Provides customized orthodontic solutions including metal braces, ceramic braces, and 3D-printed in-house aligners for optimal results with minimal discomfort.",
    // image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700"
  },
  {
    id: 2,
    name: "Dr. G. Sai Jyothsna",
    position: "Periodontist and Implantologist ",
    bio: "Dr. Sai Jyothsna specializing in the treatment of gum diseases and advanced dental implant procedures.She is known for her gentle approach, precision, and commitment to delivering healthy, long-lasting smiles.From deep cleaning and flap surgeries to full-mouth rehabilitation with implants, Dr. Jyothsna ensures personalized and painless care.offers cutting-edge clear aligner treatments ",
    // image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700"
  },
  {
    id: 3,
    name: "Dr. Rakesh C",
    position: "Endodontist",
    bio: "Dr. Rakesh is a highly respected Endodontist and Professor with over 20 years of clinical and teaching experience.At TruSmile Dental Care, Manikonda, he specializes in advanced root canal treatments, retreatments, and restorative procedures using state-of-the-art technology.His deep expertise and gentle approach ensure precise, painless care while preserving your natural teeth.",
    // image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700"
  },
  {
    id: 4,
    name: "Dr. Charan Reddy ,",
    position: "Oral and Maxillofacial Surgeon ",
    bio: "Dr. Charan is a skilled Oral and Maxillofacial Surgeon at TruSmile Dental Care, Manikonda, with prestigious training through the AO CMF Fellowship and IBOI Fellowship.He specializes in complex facial surgeries, wisdom tooth removal, cyst enucleation, trauma care, and minor oral procedures with a focus on precision and patient safety.With a commitment to excellence and advanced surgical expertise",
    image: "/charan.jpg"
  },
  {
    id: 5,
    name: "Dr. Anil kumar",
    position: "Prosthodontist",
    bio: "Dr. Anil Kumar is an experienced Prosthodontist and certified BPS Denture Specialist .He focuses on restoring smiles with high-precision complete dentures, crowns, bridges, and full-mouth rehabilitations using the advanced BPS (Biofunctional Prosthetic System) technique.Known for his attention to detail and natural-looking results, Dr. Anil ensures comfort, function, and aesthetics for every patient.",
    // image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700"
  },
  {
    id: 6,
    name: "Dr.Sreeja Reddy",
    position: "Pedodontist",
    bio: "Dr. Sreeja is a caring and experienced Pedodontist (Child Dental Specialist) .She specializes in preventive and restorative dental care for children, including fillings, sealants, fluoride treatments, and early orthodontic guidance.With a child-friendly approach and gentle techniques, Dr. Sreeja ensures every dental visit is positive and stress-free for kids and parents alike.offers cutting-edge clear aligner treatments ",
    // image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700"
  },
  // {
  //   id: 7,
  //   name: "Dr.Sreeja Reddy",
  //   position: "Pedodontist",
  //   bio: "Dr. Sreeja is a caring and experienced Pedodontist (Child Dental Specialist) .She specializes in preventive and restorative dental care for children, including fillings, sealants, fluoride treatments, and early orthodontic guidance.With a child-friendly approach and gentle techniques, Dr. Sreeja ensures every dental visit is positive and stress-free for kids and parents alike.",
  //   // image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700"
  // }
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
    rating: 5,
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

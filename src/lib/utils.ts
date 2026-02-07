import { clsx, type ClassValue } from "clsx";
import { FaInstagram, FaWhatsapp, FaLinkedin, FaFacebook } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SocialLinks = [
  { icon: FaInstagram, label: 'Instagram', link: 'https://www.instagram.com/_sphuran.ees' },
  { icon: FaFacebook, label: 'Facebook', link: 'https://www.facebook.com/sphuran.ees' },
  { icon: FaLinkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/company/sphuran-iiest'},
  { icon: FaWhatsapp, label: 'WhatsApp', link: 'https://whatsapp.com/channel/0029Va5VWG95dTnNOBYQvB0L' },
];
import nail_img from '../assets/images/nail_tech.jpg'
import plumber_img from '../assets/images/plumber.jpg'
import hair_salon_img from '../assets/images/hair_salon.jpg'
import hair_nail_salon_img from '../assets/images/hair_nail_salon.jpg'
import electrician_img from '../assets/images/electrician.jpg'
import construction_img from '../assets/images/construction.avif'
import cleaner_img from '../assets/images/Cleaners.jpg'
import tutor_img from '../assets/images/tutors.jpg'
import photography_img from '../assets/images/photography.jpg'
import catering_img from '../assets/images/catering.jpg'
import security_img from '../assets/images/security.jpg'

export interface CategoryConfig {
  key: string          // matches what's stored in Supabase (form.subject value)
  name: string         // display name shown on cards and pages
  img: string          // fallback image for the card
  tagline: string
  description: string
  accent: string
}

export const CATEGORIES: CategoryConfig[] = [
  {
    key: "nail_tech",
    name: "Nail Technicians",
    img: nail_img,
    tagline: "✨ Premium Nail Care",
    description: "Our nail technicians are certified, creative, and passionate about giving you flawless nails.",
    accent: "#F472B6",
  },
  {
    key: "plumber",
    name: "Plumbers",
    img: plumber_img,
    tagline: "🔧 Reliable Plumbing",
    description: "Fast, reliable, and fully equipped — our plumbers tackle everything from leaking taps to full pipe installations.",
    accent: "#60A5FA",
  },
  {
    key: "hair_salon",
    name: "Hair Salons",
    img: hair_salon_img,
    tagline: "💇 Expert Hair Styling",
    description: "Transform your look with our talented hair stylists.",
    accent: "#A78BFA",
  },
  {
    key: "hair_nail_salon",
    name: "Hair & Nail Salons",
    img: hair_nail_salon_img,
    tagline: "💅 Full Beauty Services",
    description: "Get the full treatment — hair and nails under one roof.",
    accent: "#F9A8D4",
  },
  {
    key: "electrician",
    name: "Electricians",
    img: electrician_img,
    tagline: "⚡ Certified Electricians",
    description: "Stay safe and powered up with our certified electricians.",
    accent: "#FBBF24",
  },
  {
    key: "construction",
    name: "Construction",
    img: construction_img,
    tagline: "🏗️ Construction Services",
    description: "Quality construction and renovation services in your area.",
    accent: "#F97316",
  },
  {
    key: "cleaner",
    name: "Cleaners",
    img: cleaner_img,
    tagline: "🧹 Professional Cleaning",
    description: "Reliable home and office cleaning services near you.",
    accent: "#34D399",
  },
  {
    key: "tutor",
    name: "Tutors",
    img: tutor_img,
    tagline: "📚 Qualified Tutors",
    description: "From primary school to university level, our tutors help students unlock their potential.",
    accent: "#34D399",
  },
  {
    key: "photography",
    name: "Photographers",
    img: photography_img,
    tagline: "📸 Professional Photography",
    description: "Capture your moments with our talented photographers.",
    accent: "#818CF8",
  },
  {
    key: "catering",
    name: "Catering",
    img: catering_img,
    tagline: "🍽️ Catering Services",
    description: "Delicious food for events, functions, and corporate occasions.",
    accent: "#FB923C",
  },
  {
    key: "security",
    name: "Security",
    img: security_img,
    tagline: "🔒 Security Services",
    description: "Professional security personnel for residential and commercial needs.",
    accent: "#64748B",
  },
]
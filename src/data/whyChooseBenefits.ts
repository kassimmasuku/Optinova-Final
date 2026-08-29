import equipmentImg from "@/assets/eye-equipment.jpg";
import heroImg from "@/assets/hero-eye-exam.jpg";
import clinicImg from "@/assets/clinic-interior.jpg";
import childrenImg from "@/assets/children-eye-exam.jpg";
import kidsImg from "@/assets/kids-vision-test.jpg";
import teamImg from "@/assets/optometrist-team.jpg";
import glassesImg from "@/assets/glasses-display.jpg";
import familyImg from "@/assets/family-glasses.jpg";
import { diagnosticEquipment } from "@/data/galleryCategories";

export type BenefitContentType =
  | "equipment"
  | "branches"
  | "team"
  | "care"
  | "affordable"
  | "hours";

export interface WhyChooseBenefit {
  id: string;
  text: string;
  title: string;
  summary: string;
  type: BenefitContentType;
}

export interface EquipmentShowcaseItem {
  name: string;
  description: string;
  image: string;
}

/** Diagnostic equipment with dedicated images */
export const equipmentShowcase: EquipmentShowcaseItem[] = diagnosticEquipment.map((item) => ({
  name: item.name,
  description: item.description,
  image: item.image ?? equipmentImg,
}));

export const whyChooseBenefits: WhyChooseBenefit[] = [
  {
    id: "professionals",
    text: "Experienced Eye Care Professionals",
    title: "Experienced Eye Care Professionals",
    summary: "Our qualified optometrists, optical technicians and support staff bring years of combined experience to every patient visit.",
    type: "team",
  },
  {
    id: "equipment",
    text: "Modern Diagnostic Equipment",
    title: "Modern Diagnostic Equipment",
    summary: "Our practices use contemporary optometry and ophthalmic diagnostic technology to support accurate assessments and care.",
    type: "equipment",
  },
  {
    id: "care",
    text: "Friendly Patient-Centred Care",
    title: "Friendly Patient-Centred Care",
    summary: "Every patient receives personalised attention in a welcoming, professional environment designed for comfort and trust.",
    type: "care",
  },
  {
    id: "branches",
    text: "11 Branches Across Zimbabwe",
    title: "11 Branches Across Zimbabwe",
    summary: "Convenient locations across Harare, Chitungwiza and Ngezi — quality eye care close to where you live and work.",
    type: "branches",
  },
  {
    id: "affordable",
    text: "Affordable Vision Solutions",
    title: "Affordable Vision Solutions",
    summary: "Quality eyewear and vision care across a range of price points, with options to suit every budget and need.",
    type: "affordable",
  },
  {
    id: "hours",
    text: "Flexible Appointment Times",
    title: "Flexible Appointment Times",
    summary: "Extended weekday hours and Saturday clinics make it easy to fit eye care into your schedule.",
    type: "hours",
  },
];

export const patientCareHighlights = [
  {
    title: "Personalised Consultations",
    description: "One-on-one time with your optometrist to understand your vision needs and concerns.",
    image: familyImg,
  },
  {
    title: "Welcoming Clinic Environment",
    description: "Clean, modern spaces designed to put patients of all ages at ease.",
    image: clinicImg,
  },
  {
    title: "Clear Communication",
    description: "We explain every step of your examination and answer your questions in plain language.",
    image: teamImg,
  },
];

export const affordableHighlights = [
  {
    title: "Wide Frame Selection",
    description: "From everyday essentials to designer frames — options for every style and budget.",
    image: glassesImg,
  },
  {
    title: "Quality Lens Options",
    description: "Single vision, progressive, anti-glare and blue-light filtering lenses at competitive prices.",
    image: familyImg,
  },
  {
    title: "Value Without Compromise",
    description: "Professional fitting and aftercare included with every eyewear purchase.",
    image: glassesImg,
  },
];

export const appointmentHours = [
  { label: "Monday – Friday", time: "8:00 AM – 5:00 PM", note: "All branches" },
  { label: "Saturday", time: "9:00 AM – 1:00 PM", note: "Most branches" },
  { label: "Sunday", time: "Closed", note: "All branches" },
  { label: "Highland Park", time: "Mon–Fri 9:00 AM – 6:00 PM", note: "Extended weekday hours" },
  { label: "Greenwood Park", time: "Saturday closed", note: "Weekdays only" },
];

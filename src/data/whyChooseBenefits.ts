import { clinicPhotos } from "@/data/clinicPhotos";
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
  image: item.image ?? clinicPhotos.equipmentPhoropter,
}));

export const whyChooseBenefits: WhyChooseBenefit[] = [
  {
    id: "professionals",
    text: "Experienced Eye Care Professionals",
    title: "Experienced Eye Care Professionals",
    summary: "Highly trained and qualified Optometrists and staff provide sight testing, correction, diagnosis, treatment and management of vision changes, as well as lenses and contact lenses.",
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
    summary: "Designer and affordable frames at competitive prices, including our own brand SG Eyewear, introduced in 2015 — plus lenses and contact lenses for every need.",
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
    image: clinicPhotos.examPhoropterConsult,
  },
  {
    title: "Welcoming Clinic Environment",
    description: "Clean, modern spaces designed to put patients of all ages at ease.",
    image: clinicPhotos.receptionLounge,
  },
  {
    title: "Clear Communication",
    description: "We explain every step of your examination and answer your questions in plain language.",
    image: clinicPhotos.staffRed,
  },
];

export const affordableHighlights = [
  {
    title: "Wide Frame Selection",
    description: "Designer and affordable frames, including SG Eyewear — options for every style and budget.",
    image: clinicPhotos.framesColorRack,
  },
  {
    title: "Quality Lens Options",
    description: "Single vision, progressive, anti-glare and blue-light filtering lenses at competitive prices.",
    image: clinicPhotos.framesSunglassesWall,
  },
  {
    title: "Value Without Compromise",
    description: "Professional fitting and aftercare included with every eyewear purchase.",
    image: clinicPhotos.sgEyewearWall,
  },
];

export const appointmentHours = [
  { label: "Monday – Friday", time: "8:00 AM – 5:00 PM", note: "Most branches" },
  { label: "Saturday", time: "9:00 AM – 1:00 PM", note: "Most branches" },
  { label: "Sunday", time: "Closed", note: "All branches" },
  { label: "Highland Park", time: "Mon–Fri 9:00 AM – 6:00 PM", note: "Extended weekday hours" },
  { label: "Greenwood Park", time: "Saturday closed", note: "Weekdays only" },
  { label: "Ngezi", time: "Wednesday 9:00 AM – 4:00 PM", note: "Closed all other days" },
];

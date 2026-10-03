import equipmentAutorefractor from "@/assets/clinic/equipment-autorefractor.jpg";
import equipmentAutorefractorBack from "@/assets/clinic/equipment-autorefractor-back.jpg";
import equipmentAutorefractorChair from "@/assets/clinic/equipment-autorefractor-chair.jpg";
import equipmentPhoropter from "@/assets/clinic/equipment-phoropter.jpg";
import examAutorefractorStaff from "@/assets/clinic/exam-autorefractor-staff.jpg";
import examPhoropterConsult from "@/assets/clinic/exam-phoropter-consult.jpg";
import examPhoropterPatient from "@/assets/clinic/exam-phoropter-patient.jpg";
import examPhoropterSession from "@/assets/clinic/exam-phoropter-session.jpg";
import examSlitLampPatient from "@/assets/clinic/exam-slit-lamp-patient.jpg";
import examTrialLenses from "@/assets/clinic/exam-trial-lenses.jpg";
import framesColorRack from "@/assets/clinic/frames-color-rack.jpg";
import framesPrescriptionRack from "@/assets/clinic/frames-prescription-rack.jpg";
import framesSports from "@/assets/clinic/frames-sports.jpg";
import framesSunglassesClose from "@/assets/clinic/frames-sunglasses-close.jpg";
import framesSunglassesRack from "@/assets/clinic/frames-sunglasses-rack.jpg";
import framesSunglassesWall from "@/assets/clinic/frames-sunglasses-wall.jpg";
import framesTousDisplay from "@/assets/clinic/frames-tous-display.jpg";
import receptionCounterPlant from "@/assets/clinic/reception-counter-plant.jpg";
import receptionDesk from "@/assets/clinic/reception-desk.jpg";
import receptionHallway from "@/assets/clinic/reception-hallway.jpg";
import receptionLounge from "@/assets/clinic/reception-lounge.jpg";
import receptionSgCounter from "@/assets/clinic/reception-sg-counter.jpg";
import sgEyewearQuote from "@/assets/clinic/sg-eyewear-quote.jpg";
import sgEyewearWall from "@/assets/clinic/sg-eyewear-wall.jpg";
import signReception from "@/assets/clinic/sign-reception.jpg";
import staffRed from "@/assets/clinic/staff-red.jpg";
import staffSunglasses from "@/assets/clinic/staff-sunglasses.jpg";
import storefront from "@/assets/clinic/storefront.jpg";
import waitingIris from "@/assets/clinic/waiting-iris.jpg";
import clinicSign from "@/assets/hero-clinic-sign.jpg";

export const clinicPhotos = {
  equipmentAutorefractor,
  equipmentAutorefractorBack,
  equipmentAutorefractorChair,
  equipmentPhoropter,
  examAutorefractorStaff,
  examPhoropterConsult,
  examPhoropterPatient,
  examPhoropterSession,
  examSlitLampPatient,
  examTrialLenses,
  framesColorRack,
  framesPrescriptionRack,
  framesSports,
  framesSunglassesClose,
  framesSunglassesRack,
  framesSunglassesWall,
  framesTousDisplay,
  receptionCounterPlant,
  receptionDesk,
  receptionHallway,
  receptionLounge,
  receptionSgCounter,
  sgEyewearQuote,
  sgEyewearWall,
  signReception,
  staffRed,
  staffSunglasses,
  storefront,
  waitingIris,
  clinicSign,
};

export type GalleryPhoto = {
  src: string;
  alt: string;
  caption: string;
  categoryId: string;
};

export const galleryPhotos: GalleryPhoto[] = [
  { src: clinicSign, alt: "Optinova Eye Care clinic sign", caption: "Our Clinic Sign", categoryId: "our-modern-clinic" },
  { src: storefront, alt: "Optinova Eye Care storefront", caption: "Our Storefront", categoryId: "our-modern-clinic" },
  { src: receptionDesk, alt: "Optinova reception desk", caption: "Patient Reception", categoryId: "our-modern-clinic" },
  { src: receptionHallway, alt: "Clinic reception and waiting area", caption: "Welcoming Reception", categoryId: "welcoming-all-patients" },
  { src: receptionLounge, alt: "Optinova waiting lounge with SG Eyewear display", caption: "Our Modern Clinic", categoryId: "our-modern-clinic" },
  { src: receptionSgCounter, alt: "SG Eyewear reception counter", caption: "Optical Dispensary", categoryId: "eyewear-fitting" },
  { src: waitingIris, alt: "Waiting area with iris artwork", caption: "Comfortable Waiting Spaces", categoryId: "our-modern-clinic" },
  { src: examSlitLampPatient, alt: "Slit-lamp eye examination at Optinova", caption: "Professional Eye Examinations", categoryId: "professional-eye-examinations" },
  { src: examPhoropterConsult, alt: "Optometrist examining a patient with a phoropter", caption: "Comprehensive Eye Exams", categoryId: "professional-eye-examinations" },
  { src: examPhoropterPatient, alt: "Patient undergoing a refraction test", caption: "Sight Testing", categoryId: "professional-eye-examinations" },
  { src: examTrialLenses, alt: "Slit-lamp exam with trial lens set", caption: "Diagnostic Testing", categoryId: "advanced-diagnostic-equipment" },
  { src: equipmentPhoropter, alt: "Phoropter and slit-lamp in the exam room", caption: "Advanced Diagnostic Equipment", categoryId: "advanced-diagnostic-equipment" },
  { src: equipmentAutorefractor, alt: "Autorefractor in the optical dispensary", caption: "Autorefractor", categoryId: "advanced-diagnostic-equipment" },
  { src: examAutorefractorStaff, alt: "Staff using an autorefractor with a patient", caption: "Vision Screening", categoryId: "advanced-diagnostic-equipment" },
  { src: sgEyewearWall, alt: "SG Eyewear wall display", caption: "SG Eyewear", categoryId: "frames-collection" },
  { src: framesColorRack, alt: "Colourful eyeglass frames on display", caption: "Our Frames Collection", categoryId: "frames-collection" },
  { src: framesPrescriptionRack, alt: "Prescription frames on display", caption: "Everyday Frames", categoryId: "frames-collection" },
  { src: framesSunglassesWall, alt: "Sunglasses, designer and junior frame walls", caption: "Family Eyewear Selection", categoryId: "family-eyewear-selection" },
  { src: framesSunglassesRack, alt: "Sunglasses on a display stand", caption: "Designer Sunglasses", categoryId: "eyewear-fitting" },
  { src: framesSports, alt: "Sports sunglasses on display", caption: "Sports Eyewear", categoryId: "frames-collection" },
  { src: staffSunglasses, alt: "Team member with sunglasses display", caption: "Eyewear Fitting", categoryId: "eyewear-fitting" },
  { src: signReception, alt: "Optinova sign at the reception desk", caption: "Clinic Reception", categoryId: "our-modern-clinic" },
  { src: receptionCounterPlant, alt: "Optinova reception counter and sunglasses wall", caption: "Dispensary Desk", categoryId: "eyewear-fitting" },
  { src: framesTousDisplay, alt: "Frame displays and optical accessories", caption: "In-Store Displays", categoryId: "frames-collection" },
  { src: framesSunglassesClose, alt: "Close-up of sunglasses on display", caption: "Sunglasses Collection", categoryId: "frames-collection" },
  { src: sgEyewearQuote, alt: "SG Eyewear wall with designer accessories", caption: "SG Eyewear Boutique", categoryId: "frames-collection" },
  { src: staffRed, alt: "Optinova team member at the clinic", caption: "Our Team", categoryId: "our-professional-team" },
  { src: framesSunglassesWall, alt: "Junior and family frames at Optinova", caption: "Kids & Family Frames", categoryId: "kids-vision-testing" },
  { src: examPhoropterPatient, alt: "Eye examination for patients of all ages", caption: "Children's Eye Exams", categoryId: "childrens-eye-exams" },
];

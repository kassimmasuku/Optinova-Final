export interface GalleryItem {
  name: string;
  description: string;
  image?: string;
}

export interface GalleryCategory {
  id: string;
  title: string;
  summary: string;
  items: GalleryItem[];
}

/** Equipment categories — images in public/images/equipment */
export const diagnosticEquipment: GalleryItem[] = [
  { name: "OCT (Optical Coherence Tomography)", description: "High-resolution cross-sectional imaging of the retina and optic nerve.", image: "/images/equipment/oct.jpg" },
  { name: "Optical Biometry", description: "Precise measurement of eye dimensions for lens calculations.", image: "/images/equipment/optical-biometry.jpg" },
  { name: "Autorefractors", description: "Automated objective refraction measurement.", image: "/images/equipment/autorefractor.jpg" },
  { name: "Keratometers", description: "Corneal curvature measurement for contact lens and surgical planning.", image: "/images/equipment/keratometer.jpg" },
  { name: "Digital Lensmeters", description: "Accurate verification of spectacle lens prescriptions.", image: "/images/equipment/lensmeter.jpg" },
  { name: "Slit-Lamp Biomicroscopes", description: "Detailed anterior and posterior segment examination.", image: "/images/equipment/slit-lamp.jpg" },
  { name: "Tonometers", description: "Intraocular pressure measurement for glaucoma screening.", image: "/images/equipment/tonometer.jpg" },
  { name: "Visual Field / Perimetry Systems", description: "Peripheral vision assessment and glaucoma monitoring.", image: "/images/equipment/visual-field.jpg" },
  { name: "Retinal / Fundus Cameras", description: "Digital documentation of the retina and optic disc.", image: "/images/equipment/fundus-camera.jpg" },
  { name: "Corneal Topography Systems", description: "Detailed mapping of corneal shape and irregularities.", image: "/images/equipment/corneal-topography.jpg" },
  { name: "Pachymeters", description: "Central corneal thickness measurement.", image: "/images/equipment/pachymeter.jpg" },
  { name: "Trial Lens Sets", description: "Subjective refraction using precision trial lenses.", image: "/images/equipment/trial-lenses.jpg" },
  { name: "Phoropters", description: "Comprehensive subjective refraction testing.", image: "/images/equipment/phoropter.jpg" },
  { name: "Digital Vision Testing Systems", description: "Computerised visual acuity and contrast sensitivity testing.", image: "/images/equipment/vision-testing.jpg" },
  { name: "Low Vision Assessment Equipment", description: "Tools for evaluating and managing low vision needs.", image: "/images/equipment/low-vision.jpg" },
  { name: "Keratoconus / Corneal Assessment Equipment", description: "Specialised diagnostics for corneal conditions including keratoconus.", image: "/images/equipment/keratoconus.jpg" },
];

export const galleryCategories: Record<string, GalleryCategory> = {
  "professional-eye-examinations": {
    id: "professional-eye-examinations",
    title: "Professional Eye Examinations",
    summary: "Comprehensive vision assessments tailored to each patient's needs.",
    items: [
      { name: "Visual Acuity Testing", description: "Measurement of distance and near vision clarity." },
      { name: "Refraction Assessment", description: "Determining the precise lens prescription for clear vision." },
      { name: "Binocular Vision Evaluation", description: "Assessment of how both eyes work together." },
      { name: "Eye Health Screening", description: "Examination of the anterior and posterior segments of the eye." },
      { name: "Prescription Updates", description: "Review and renewal of spectacle and contact lens prescriptions." },
    ],
  },
  "our-modern-clinic": {
    id: "our-modern-clinic",
    title: "Our Modern Clinic",
    summary: "Welcoming, professionally equipped environments across our branch network.",
    items: [
      { name: "Patient Reception Areas", description: "Comfortable waiting spaces designed for a calm experience." },
      { name: "Private Consultation Rooms", description: "Dedicated spaces for confidential eye examinations." },
      { name: "Dispensing Areas", description: "Professional zones for frame selection and lens fitting." },
      { name: "Hygiene & Safety Standards", description: "Clean, well-maintained clinical environments." },
      { name: "Accessible Locations", description: "Branches situated in shopping centres and central areas for convenience." },
    ],
  },
  "family-eyewear-selection": {
    id: "family-eyewear-selection",
    title: "Family Eyewear Selection",
    summary: "Frames and lenses for every member of the family.",
    items: [
      { name: "Adult Frame Collections", description: "Contemporary and classic styles for all preferences." },
      { name: "Children's Frames", description: "Durable, comfortable eyewear designed for young patients." },
      { name: "Lens Options", description: "Single vision, progressive, anti-reflective and blue-light filtering lenses." },
      { name: "Professional Fitting", description: "Expert frame adjustment for comfort and optimal vision." },
      { name: "Family Consultations", description: "Convenient appointments for multiple family members." },
    ],
  },
  "childrens-eye-exams": {
    id: "childrens-eye-exams",
    title: "Children's Eye Exams",
    summary: "Specialised paediatric vision care to support learning and development.",
    items: [
      { name: "Age-Appropriate Vision Screening", description: "Testing methods suited to each child's developmental stage." },
      { name: "Lazy Eye (Amblyopia) Detection", description: "Early identification of reduced vision in one eye." },
      { name: "Squint (Strabismus) Assessment", description: "Evaluation of eye alignment and coordination." },
      { name: "Colour Vision Testing", description: "Screening for colour vision deficiencies." },
      { name: "Myopia Management", description: "Monitoring and management of short-sightedness in children." },
    ],
  },
  "advanced-diagnostic-equipment": {
    id: "advanced-diagnostic-equipment",
    title: "Advanced Diagnostic Equipment",
    summary: "Modern optometry and ophthalmic diagnostic technology used across our practices.",
    items: diagnosticEquipment,
  },
  "eyewear-fitting": {
    id: "eyewear-fitting",
    title: "Eyewear Fitting",
    summary: "Personalised fitting services for optimal comfort and vision.",
    items: [
      { name: "Frame Selection Consultation", description: "Guidance on choosing frames that suit face shape and lifestyle." },
      { name: "Lens Recommendation", description: "Advice on lens types including progressive and occupational lenses." },
      { name: "Precision Measurements", description: "Pupillary distance and fitting height measurements." },
      { name: "Frame Adjustment", description: "On-site adjustment for a secure, comfortable fit." },
      { name: "Aftercare Support", description: "Follow-up adjustments and care advice." },
    ],
  },
  "our-professional-team": {
    id: "our-professional-team",
    title: "Our Professional Team",
    summary: "Experienced eye care professionals dedicated to patient-centred care.",
    items: [
      { name: "Registered Optometrists", description: "Qualified practitioners conducting comprehensive eye examinations." },
      { name: "Optical Technicians", description: "Skilled technicians for frame fitting and lens dispensing." },
      { name: "Patient Care Coordinators", description: "Friendly staff ensuring smooth appointments and enquiries." },
      { name: "Continuing Professional Development", description: "Ongoing training to stay current with eye care advances." },
      { name: "Collaborative Care", description: "Referral pathways to ophthalmologists and specialists when needed." },
    ],
  },
  "frames-collection": {
    id: "frames-collection",
    title: "Our Frames Collection",
    summary: "A wide selection of quality frames to match every style and budget.",
    items: [
      { name: "Designer Frames", description: "Premium brands for fashion-forward patients." },
      { name: "Everyday Essentials", description: "Affordable, reliable frames for daily wear." },
      { name: "Lightweight Materials", description: "Titanium and acetate options for comfort." },
      { name: "Sports & Active Wear", description: "Durable frames suited to active lifestyles." },
      { name: "Reading Glasses", description: "Ready-made and custom reading solutions." },
    ],
  },
  "kids-vision-testing": {
    id: "kids-vision-testing",
    title: "Kids Vision Testing",
    summary: "Engaging, child-friendly vision assessments.",
    items: [
      { name: "Picture-Based Charts", description: "Visual acuity testing using age-appropriate charts." },
      { name: "Interactive Testing", description: "Engaging methods to keep children comfortable during exams." },
      { name: "School Vision Screening", description: "Assessments to identify vision issues affecting learning." },
      { name: "Paediatric Refraction", description: "Accurate prescription determination for young patients." },
      { name: "Parent Guidance", description: "Advice on signs of vision problems and follow-up care." },
    ],
  },
  "welcoming-all-patients": {
    id: "welcoming-all-patients",
    title: "Welcoming All Patients",
    summary: "Inclusive eye care for our diverse community across Zimbabwe.",
    items: [
      { name: "Multilingual Support", description: "Staff able to assist patients in local languages." },
      { name: "Walk-In Appointments", description: "Flexible access at all branch locations." },
      { name: "Affordable Options", description: "Vision solutions across a range of price points." },
      { name: "Corporate & Medical Aid", description: "Services for medical aid and corporate clients." },
      { name: "Community Outreach", description: "Eye health awareness and screening initiatives." },
    ],
  },
};

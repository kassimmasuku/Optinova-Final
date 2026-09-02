import leavesonPhoto from "@/assets/leaveson-thom.png";
import damarisPhoto from "@/assets/damaris-chawinga.png";
import wysonPhoto from "@/assets/wyson.png";
import hastingsPhoto from "@/assets/hastings-chalawe.png";
import stevenPhoto from "@/assets/steven-chimwala.png";
import limbaniPhoto from "@/assets/limbani-kalonga.png";

export type TeamGroup = "Directors" | "Leadership" | "Optometrists";
export type TeamAvatarType = "male" | "female";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  group: TeamGroup;
  photo?: string;
  avatar?: TeamAvatarType;
  qualifications: string[];
  areasOfExpertise: string[];
  awards?: string[];
  biography: string;
}

export const teamGroups: TeamGroup[] = ["Directors", "Leadership", "Optometrists"];

export const teamMembers: TeamMember[] = [
  {
    id: "solomon-guramatunhu",
    name: "Dr. Solomon Guramatunhu",
    role: "Director & Chief Executive Officer",
    experience: "30+ years experience",
    group: "Directors",
    avatar: "male",
    qualifications: [
      "Medical degree — University of Zimbabwe",
      "Ophthalmology qualifications — Royal College of Surgeons of England",
      "Ophthalmology qualifications — Royal College of Surgeons of Edinburgh",
      "Waterford Kamhlaba United World College of Southern Africa",
      "Member — American Academy of Ophthalmology",
      "Member — International Cataract & Refractive Surgery Society",
      "Member — Ophthalmic Society of Southern Africa",
      "Founder and Past President — Ophthalmological Society of Zimbabwe",
    ],
    areasOfExpertise: [
      "Ophthalmic surgery",
      "Cataract surgery",
      "Eye care leadership",
      "Healthcare business",
      "Rural and humanitarian eye care",
    ],
    awards: [
      "National Arts Merit Awards — Lifetime Award for support of Arts",
      "Zimbabwe Medical Awards — Lifetime Award for Contribution to Medicine in Zimbabwe",
      "Alfred Beit Scholarships — Academic Merit",
      "Paul Harris Fellowship — Rotary International for Contribution to Eye Care in Zimbabwe",
      "Research Council of Zimbabwe — Merit contribution to Ophthalmology",
      "International Education Award — American Academy of Ophthalmology",
      "Humanitarian Award — V50 RAISA",
      "National Contributor of the Year — Zimbabwe Institute of Management",
      "African Leadership Legend 2022",
      "Lifetime Achievement Award in Business Leadership and Community Development 2020 — Zimbabwe Business Awards",
      "Businessman of the Year Health and Medical Services 2020 — Zimbabwe Business Awards",
      "Outstanding Health Professional Lifetime Achievement Award 2021 — Zimbabwe Community News",
      "Manager of the Year 2007 — Zimbabwe Institute of Management",
    ],
    biography:
      "Dr. Solomon Guramatunhu is Optinova Africa’s Chief Executive and a Director of the company. He has over 30 years of business experience and is a leading, renowned and respected ophthalmic surgeon in Zimbabwe and internationally, as well as a seasoned businessman and philanthropist. He attended Waterford Kamhlaba United World College of Southern Africa and then proceeded to the University of Zimbabwe, where he obtained his medical degree. He specialised in ophthalmology, obtaining qualifications from the Royal College of Surgeons of England and the Royal College of Surgeons of Edinburgh. His working career has included senior roles with the Ministry of Health in Zimbabwe, among them Chief Government Ophthalmic Surgeon and Head of Sekuru Kaguvi Eye Unit. He has also worked at Greenwood Eye Centre, as an Honorary Lecturer at the University of Zimbabwe, at Bindura State University of Science Education, and through the Eyes for Africa Project, which he founded to offer free cataract surgeries to rural people in Zimbabwe and surrounding countries. His international work includes the Glasgow Group of Hospitals in Scotland and an honorary lectureship at the American Academy of Ophthalmology. Dr Guramatunhu is a Rotarian, former Chairman of Bindura University of Science Education, Baines 24 Hour Emergency Rooms, and the National Gallery of Zimbabwe. He is also Patron of organisations including ZIMCARE TRUST, which raises funds for schools for the blind and deaf, and the Zimbabwe Rural Schools Library Trust. His businesses include Greenwood Park Eye Centre and SG Luxury Apartments.",
  },
  {
    id: "lorraine-sanyika",
    name: "Ms. Lorraine Sanyika",
    role: "Operations Manager",
    experience: "20+ years in the optical industry",
    group: "Leadership",
    avatar: "female",
    qualifications: [
      "OA ABDO",
      "Diploma in Optical Retail Management — Association of British Dispensing Opticians",
      "Diploma in Management and Leadership — Chartered Management Institute (UK)",
    ],
    areasOfExpertise: [
      "Optical operations management",
      "Practice leadership",
      "Brand development",
      "Quality service and products",
      "Optical retail and IT",
    ],
    awards: [
      "Platinum Award — Outstanding Woman in Health and Medical 2025, ZIMCEO Awards",
      "Top Female Business Leader of the Year Health and Medical Services 2020 — Zimbabwe Business Awards",
    ],
    biography:
      "Ms. Lorraine Sanyika (OA ABDO) is Optinova Africa’s Operations Manager, with over 20 years’ experience in the optical industry. She began her career in optics in 2001 as an optical assistant at Martin Jones Optometrists, then joined Premier Medical Investments (PSMI) Optometry, where she became a practice controller. She also has experience in the IT industry, joining Computer Centre Tanzania as a corporate sales executive and being promoted to corporate sales manager in less than two years — a role she held after taking a break from optics between 2007 and 2010. Her passion for optics brought her back to the profession in 2011. She later joined Provision Optometrists as a practice controller before joining the Optinova family in 2014. As one of Optinova’s pioneers, she has seen the company grow from four branches to eleven within a space of 10 years. Over the years she has helped Optinova develop into a world-class brand through rebranding and a focus on quality service and products. Optinova was awarded Company of the Year Health and Medical Services and named among the Zimbabwe top brands of the year by the Zimbabwe Business Awards Council 2020, and was Outstanding Optometry Service Platinum and Gold winner in two consecutive years at the ZIMCEO Awards.",
  },
  {
    id: "leaveson-thom",
    name: "Leaveson Thom",
    role: "Head Consultant Optometrist & Contact Lens Specialist",
    experience: "10+ years experience",
    group: "Leadership",
    photo: leavesonPhoto,
    qualifications: [
      "BSc in Optometry — Mzuzu University, Malawi",
      "Master's degree in Optometry",
      "PhD in Optometry (in progress) — University of KwaZulu-Natal, South Africa",
      "Coordinator and Lecturer in Optometry — University of Zimbabwe",
    ],
    areasOfExpertise: [
      "Contact lenses",
      "Keratoconus and corneal diseases",
      "Low vision rehabilitation",
      "Clinical eye care leadership",
      "Optometry education and research",
      "Eye care service delivery",
    ],
    biography:
      "Leaveson Thom is an accomplished optometrist, academic, researcher, and healthcare leader with over a decade of experience in clinical eye care, optometry education, research, and health services management across Southern Africa. He serves as Head Consultant Optometrist and Contact Lens Specialist at Optinova Africa, leading clinical operations, strategic planning, and professional training initiatives. As part of community service, Thom also serves as Coordinator and Lecturer in Optometry at the University of Zimbabwe, where he teaches, supervises, and mentors undergraduate and postgraduate students while contributing to research and curriculum development. His research interests include keratoconus, corneal diseases, contact lenses, visual impairment, low vision rehabilitation, eye care service delivery, and workforce competencies in eye health. He has authored and co-authored several peer-reviewed publications and continues to lead impactful research projects aimed at improving eye care systems and patient outcomes in Africa. Throughout his career, he has held leadership and clinical positions in both public and private healthcare sectors in Malawi and Zimbabwe. He is an active member of the International Association of Contact Lens Educators, the Malawi Optometric Association, and the Zimbabwe Optometry Association.",
  },
  {
    id: "damaris-chawinga",
    name: "Damaris Chawinga",
    role: "Optometrist",
    experience: "10 years experience",
    group: "Optometrists",
    photo: damarisPhoto,
    qualifications: [
      "Bachelor of Science in Optometry — Mzuzu University",
      "Diabetic Retinopathy Screening",
      "Leadership and Management for Public Health Services",
      "Project Management in Global Health",
      "Master's in International Public Health (in progress) — Liverpool John Moores University",
    ],
    areasOfExpertise: [
      "Comprehensive eye examinations",
      "Refractive care",
      "Early detection of ocular conditions",
      "Patient education",
    ],
    biography:
      "Damaris Chawinga is a qualified Optometrist with a decade of experience across public and private healthcare sectors. She is committed to delivering high-quality, patient-centred eye care and improving patient outcomes.",
  },
  {
    id: "wyson",
    name: "Wyson",
    role: "Optometrist",
    experience: "5+ years experience",
    group: "Optometrists",
    photo: wysonPhoto,
    qualifications: [
      "BSc in Optometry (Honours) — Mzuzu University (2019)",
      "One-year internship — Queen Elizabeth Central Hospital, Malawi",
      "MSc in Optometry and Vision Science (in progress) — Masinde Muliro University of Science and Technology, Kenya",
    ],
    areasOfExpertise: [
      "Contact lenses",
      "Myopia progression control",
      "Comprehensive eye examinations",
      "Patient-centred eye care",
    ],
    biography:
      "Wyson worked in the public and private sector before joining Optinova. He is passionate about contact lenses and myopia progression control, and is currently pursuing an MSc specialising in contact lenses and myopia control. With over 5 years of experience in both public and private sector, Wyson provides high-quality, patient-centred eye care that promotes better vision and well-being.",
  },
  {
    id: "hastings-chalawe",
    name: "Hastings Chalawe",
    role: "Clinical Optometrist",
    experience: "Experienced clinical optometrist",
    group: "Optometrists",
    photo: hastingsPhoto,
    qualifications: [
      "BSc Optometry",
      "MBA",
      "MSc Organisational Psychology",
    ],
    areasOfExpertise: [
      "High-precision ocular healthcare",
      "Patient-centred clinical experience",
      "Clinical optometry",
      "Organisational psychology in healthcare",
    ],
    biography:
      "At Optinova Eyecare, exceptional vision care extends beyond the clinical exam. Combining clinical rigor in optometry with advanced training in business administration (MBA) and organisational psychology (MSc), Hastings bridges high-precision ocular healthcare with an optimised, patient-centred experience.",
  },
  {
    id: "steven-chimwala",
    name: "Steven Chimwala",
    role: "Optometrist",
    experience: "10 years experience",
    group: "Optometrists",
    photo: stevenPhoto,
    qualifications: [
      "BSc in Optometry — Mzuzu University (2015)",
    ],
    areasOfExpertise: [
      "Paediatric optometry",
      "Myopia control in young patients",
      "Vision rehabilitation",
      "Public health eye care",
    ],
    biography:
      "Steven Chimwala is passionate about paediatric optometry and myopic control in young patients. Over the past 10 years he has practised in both the public and private sector in Malawi and Zimbabwe. Steven is a dedicated and self-motivated optometrist and vision health specialist with extensive experience in eye care, vision rehabilitation and public health, with a strong commitment to improving access to eye care for all people.",
  },
  {
    id: "limbani-kalonga",
    name: "Limbani Bester Kalonga",
    role: "Optometrist",
    experience: "9 years experience",
    group: "Optometrists",
    photo: limbaniPhoto,
    qualifications: [
      "Bachelor of Science in Optometry — Mzuzu University (2017)",
      "Membership Director and Secretary — Malawi Optometry Association (2 years)",
    ],
    areasOfExpertise: [
      "Paediatric patients",
      "Comprehensive eye examinations",
      "Professional leadership in optometry",
    ],
    biography:
      "Limbani Bester Kalonga graduated with a Bachelor of Science degree in Optometry from Mzuzu University in 2017. With 9 years of experience, his primary interest is paediatric patients. He has also served as Membership Director and Secretary for the Malawi Optometry Association for 2 years.",
  },
];

export function getTeamByGroup(group: TeamGroup): TeamMember[] {
  return teamMembers.filter((m) => m.group === group);
}

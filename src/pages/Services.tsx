import childrenImg from "@/assets/children-eye-exam.jpg";
import equipmentImg from "@/assets/eye-equipment.jpg";
import { Link } from "react-router-dom";
import { CallUsButton, WhatsAppButton } from "@/components/ContactActionButton";

const services = [
  {
    id: "eye-exams",
    icon: "🔍",
    title: "Comprehensive Eye Examinations",
    desc: "Our thorough vision tests assess your eyesight and detect potential eye diseases before symptoms develop. Early detection is key to preserving your vision.",
    includes: [
      "Visual acuity testing",
      "Eye pressure testing (tonometry)",
      "Retinal examination",
      "Colour vision assessment",
      "Prescription updates",
      "Binocular vision testing",
    ],
    img: equipmentImg,
    alt: "Modern eye examination equipment at Optinova Eye Care Harare",
  },
  {
    id: "prescription-glasses",
    icon: "👓",
    title: "Prescription Glasses",
    desc: "We offer a wide range of modern eyeglass frames and high-quality lenses to suit every style, budget, and vision need.",
    includes: [
      "Professional frame fitting",
      "Single vision prescription lenses",
      "Progressive/bifocal lenses",
      "Anti-glare coating lenses",
      "Blue light filtering lenses",
      "Photochromic (transition) lenses",
    ],
  },
  {
    id: "contact-lenses",
    icon: "👁️",
    title: "Contact Lens Fitting",
    desc: "Our eye care professionals provide expert consultation and fitting services for all types of contact lenses to ensure maximum comfort and clarity.",
    includes: [
      "Comprehensive lens fitting assessment",
      "Daily, weekly, and monthly lenses",
      "Comfort evaluation",
      "Toric lenses for astigmatism",
      "Training for new contact lens users",
      "Follow-up care and support",
    ],
  },
  {
    id: "children",
    icon: "🧒",
    title: "Children's Eye Exams",
    desc: "Children's vision problems can significantly affect their learning and development. Early detection ensures your child can see clearly in school and everyday life.",
    includes: [
      "Age-appropriate vision screening",
      "Lazy eye (amblyopia) detection",
      "Squint (strabismus) assessment",
      "Colour blindness testing",
      "Myopia management",
      "Learning-related vision testing",
    ],
    img: childrenImg,
    alt: "Children's eye examination at Optinova Eye Care Harare",
  },
  {
    id: "glaucoma",
    icon: "🛡️",
    title: "Glaucoma Screening",
    desc: "Glaucoma is a leading cause of irreversible vision loss worldwide. Often called the 'silent thief of sight', it develops without symptoms until significant damage has occurred.",
    includes: [
      "Intraocular pressure measurement",
      "Optic nerve head examination",
      "Visual field testing",
      "Pachymetry (corneal thickness)",
      "Risk factor assessment",
      "Referral to ophthalmology if needed",
    ],
  },
  {
    id: "digital-eye-strain",
    icon: "💻",
    title: "Digital Eye Strain Testing",
    desc: "Prolonged use of screens causes digital eye strain (Computer Vision Syndrome). We assess the impact of digital devices on your vision and provide practical solutions.",
    includes: [
      "Screen use habit assessment",
      "Dry eye evaluation",
      "Focusing ability testing",
      "Blue light filter recommendations",
      "Ergonomic advice",
      "Specialised digital lenses",
    ],
  },
  {
    id: "keratoconus",
    icon: "🔬",
    title: "Keratoconus",
    desc: "Keratoconus is a progressive condition where the cornea thins and bulges into a cone shape, affecting vision. Early detection and management are essential to preserve sight.",
    includes: [
      "Corneal topography assessment",
      "Keratometry and corneal mapping",
      "Visual acuity and refraction testing",
      "Specialist referral when required",
      "Contact lens options for irregular corneas",
      "Ongoing monitoring and follow-up care",
    ],
  },
  {
    id: "low-vision",
    icon: "🔎",
    title: "Low Vision Screening",
    desc: "Low vision screening helps identify patients whose sight cannot be fully corrected with standard glasses or contact lenses, and connects them with appropriate support and aids.",
    includes: [
      "Functional vision assessment",
      "Low vision aid recommendations",
      "Magnification and lighting advice",
      "Referral to low vision specialists",
      "Daily living adaptation guidance",
      "Follow-up vision monitoring",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-28 pb-16" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Our Eye Care Services</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Comprehensive vision care services for individuals and families across Zimbabwe.</p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Link to="/book-appointment" className="btn-primary">📅 Book an Appointment</Link>
            <WhatsAppButton />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((s, i) => (
              <div key={s.id} id={s.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${s.img && i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                <div className={s.img && i % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className="service-icon text-3xl mb-4">{s.icon}</div>
                  <h2 className="text-3xl font-bold mb-3" style={{ color: "hsl(var(--primary))", fontFamily: 'Montserrat, sans-serif' }}>{s.title}</h2>
                  <div className="w-12 h-1 rounded-full mb-5" style={{ background: "hsl(var(--accent))" }} />
                  <p className="text-base leading-relaxed mb-6" style={{ color: "hsl(var(--muted-foreground))" }}>{s.desc}</p>
                  <div className="bg-surface-alt rounded-2xl p-6 border" style={{ borderColor: "hsl(var(--border))" }}>
                    <h4 className="font-bold text-sm mb-4 uppercase tracking-wide" style={{ color: "hsl(var(--primary))", fontFamily: 'Montserrat, sans-serif' }}>What's Included:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {s.includes.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "hsl(var(--foreground))" }}>
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "hsl(var(--accent))" }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 flex gap-3">
                    <Link to="/book-appointment" className="btn-primary text-sm">
                      Book This Service
                    </Link>
                    <CallUsButton className="text-sm" variant="outline" />
                  </div>
                </div>
                {s.img ? (
                  <div className={`rounded-3xl overflow-hidden shadow-hero ${s.img && i % 2 !== 0 ? "lg:order-1" : ""}`}>
                    <img src={s.img} alt={s.alt} className="w-full h-auto" loading="lazy" />
                  </div>
                ) : (
                  <div className="rounded-3xl p-10 text-center flex flex-col items-center justify-center min-h-64" style={{ background: "hsl(var(--accent-light))" }}>
                    <div className="text-8xl mb-4">{s.icon}</div>
                    <div className="text-xl font-bold" style={{ color: "hsl(var(--primary))", fontFamily: 'Montserrat, sans-serif' }}>{s.title}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: "hsl(var(--primary))" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>Book Your Eye Care Service Today</h2>
          <p className="text-white/75 mb-7">Visit any of our 11 branches across Harare, Chitungwiza and Ngezi.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/book-appointment" className="btn-primary">📅 Book Appointment</Link>
            <CallUsButton />
            <WhatsAppButton />
          </div>
        </div>
      </section>
    </>
  );
}

import heroImg from "@/assets/hero-eye-exam.jpg";
import familyImg from "@/assets/family-glasses.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Eye, Users, Shield, MapPin, Clock, Award, ChevronRight } from "lucide-react";
import BranchSelector from "@/components/BranchSelector";
import { CallUsButton, WhatsAppButton } from "@/components/ContactActionButton";
import WhyChooseBenefitDialog from "@/components/WhyChooseBenefitDialog";
import MedicalAidSlider from "@/components/MedicalAidSlider";
import { whyChooseBenefits, type WhyChooseBenefit } from "@/data/whyChooseBenefits";

const services = [
  {
    icon: "🔍",
    title: "Comprehensive Eye Exams",
    desc: "Thorough vision tests to assess eyesight and detect potential eye diseases before symptoms appear.",
    to: "/services",
  },
  {
    icon: "👓",
    title: "Prescription Glasses",
    desc: "Wide range of modern eyeglass frames and lenses including anti-glare and blue light options.",
    to: "/services",
  },
  {
    icon: "👁️",
    title: "Contact Lens Fitting",
    desc: "Professional consultation and fitting for contact lenses with comfort evaluation and training.",
    to: "/services",
  },
  {
    icon: "🧒",
    title: "Children's Eye Exams",
    desc: "Specialized vision testing for children to identify early eye problems affecting learning.",
    to: "/services",
  },
  {
    icon: "🛡️",
    title: "Glaucoma Screening",
    desc: "Early detection eye pressure tests to prevent permanent optic nerve damage.",
    to: "/services",
  },
  {
    icon: "💻",
    title: "Digital Eye Strain Testing",
    desc: "Assessment and solutions for eye fatigue caused by screens and digital devices.",
    to: "/services",
  },
  {
    icon: "🔬",
    title: "Keratoconus",
    desc: "Specialised assessment and management for corneal conditions including keratoconus.",
    to: "/services#keratoconus",
  },
  {
    icon: "🔎",
    title: "Low Vision Screening",
    desc: "Evaluation and support for patients with reduced vision that cannot be fully corrected.",
    to: "/services#low-vision",
  },
];

const benefitIcons: Record<string, React.ReactNode> = {
  professionals: <Award className="w-5 h-5" />,
  equipment: <Eye className="w-5 h-5" />,
  care: <Users className="w-5 h-5" />,
  branches: <MapPin className="w-5 h-5" />,
  affordable: <Shield className="w-5 h-5" />,
  hours: <Clock className="w-5 h-5" />,
};

export default function HomePage() {
  const [activeBenefit, setActiveBenefit] = useState<WhyChooseBenefit | null>(null);

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Professional eye care examination at Optinova Eye Care Harare"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="relative container mx-auto px-4 py-24 md:py-32 pt-36">
          <div className="max-w-2xl">
            <div className="badge-accent mb-5 animate-fade-up">
              <Eye className="w-3.5 h-3.5" />
              Optometrist in Zimbabwe
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-up delay-100">
              Professional Eye Care{" "}
              <span style={{ color: "hsl(152, 62%, 62%)" }}>You Can Trust</span>
            </h1>
            <p className="text-white/85 text-lg md:text-xl mb-8 leading-relaxed animate-fade-up delay-200">
              Quality, affordable eye care since 2012 — sight testing, lenses and designer frames across Harare, Chitungwiza and Ngezi.
            </p>
            <div className="flex flex-wrap gap-3 animate-fade-up delay-300">
              <Link to="/book-appointment" className="btn-primary text-sm px-7 py-3.5">
                📅 Book Appointment
              </Link>
              <CallUsButton className="text-sm px-7 py-3.5" />
              <WhatsAppButton className="text-sm px-7 py-3.5" />
            </div>
            <div className="mt-10 flex flex-wrap gap-6 animate-fade-up delay-400">
              {["Trusted Eye Care", "Modern Equipment", "Affordable Care"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-white/80 text-sm">
                  <CheckCircle className="w-4 h-4" style={{ color: "hsl(152, 62%, 62%)" }} />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BranchSelector />

      <section className="section-padding bg-surface-alt">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Eye Care Services</h2>
            <span className="accent-line mx-auto" />
            <p className="section-subtitle max-w-2xl mx-auto">
              From routine eye exams to specialized treatments, we offer comprehensive vision care for the whole family.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link key={s.title} to={s.to} className="service-card group">
                <div className="service-icon text-3xl">{s.icon}</div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-accent-color transition-colors" style={{ fontFamily: 'Montserrat, sans-serif', color: "hsl(var(--primary))" }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                  {s.desc}
                </p>
                <div className="mt-4 text-sm font-semibold flex items-center gap-1 transition-all duration-200 group-hover:gap-2" style={{ color: "hsl(var(--accent))" }}>
                  Learn More <span>→</span>
                </div>
              </Link>
            ))}
          </div>

          <MedicalAidSlider />
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Why Choose Optinova Eye Care?</h2>
              <span className="accent-line" />
              <p className="text-base leading-relaxed mb-8" style={{ color: "hsl(var(--muted-foreground))" }}>
                Since 2012 we have provided quality, affordable eye care through highly trained Optometrists across Harare, Chitungwiza and Ngezi — with an outreach programme for remote Zimbabwe and a goal to grow across Africa. Click any benefit to learn more.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyChooseBenefits.map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => setActiveBenefit(b)}
                    className="flex items-start gap-3 p-4 rounded-xl border bg-white transition-all hover:shadow-md hover:border-accent text-left group w-full"
                    style={{ borderColor: "hsl(var(--border))" }}
                  >
                    <div className="feature-icon flex-shrink-0 w-10 h-10">
                      {benefitIcons[b.id]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-semibold block" style={{ color: "hsl(var(--foreground))" }}>{b.text}</span>
                      <span className="text-xs mt-1 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "hsl(var(--accent))" }}>
                        View details <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </button>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/book-appointment" className="btn-primary">
                  📅 Book an Appointment
                </Link>
                <Link to="/about" className="btn-outline-primary">
                  About Our Clinic
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-hero">
                <img
                  src={familyImg}
                  alt="Black family choosing eyeglasses at Optinova Eye Care Harare"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-card border" style={{ borderColor: "hsl(var(--border))" }}>
                <div className="text-3xl font-bold mb-1" style={{ color: "hsl(var(--primary))", fontFamily: 'Montserrat, sans-serif' }}>14+</div>
                <div className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>Years of Experience</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-5 shadow-card border" style={{ borderColor: "hsl(var(--border))" }}>
                <div className="text-3xl font-bold mb-1" style={{ color: "hsl(var(--accent))", fontFamily: 'Montserrat, sans-serif' }}>5000+</div>
                <div className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>Satisfied Patients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseBenefitDialog benefit={activeBenefit} onClose={() => setActiveBenefit(null)} />

      <section className="py-16" style={{ background: "hsl(var(--primary))" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Ready to Book Your Eye Examination?
          </h2>
          <p className="text-white/75 mb-7 text-base">
            Choose your nearest branch — your vision health is our priority.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/book-appointment" className="btn-primary px-8 py-3.5">
              📅 Book Appointment
            </Link>
            <CallUsButton className="px-8 py-3.5" />
            <WhatsAppButton className="px-8 py-3.5" />
          </div>
        </div>
      </section>
    </>
  );
}

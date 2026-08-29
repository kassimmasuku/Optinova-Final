import womanGlassesImg from "@/assets/woman-glasses.jpg";
import familyImg from "@/assets/family-glasses.jpg";
import glassesDisplayImg from "@/assets/glasses-display.jpg";
import { Link } from "react-router-dom";
import { CallUsButton, WhatsAppButton } from "@/components/ContactActionButton";

const products = [
  {
    icon: "🕶️",
    title: "Designer Eyeglass Frames",
    desc: "Browse our curated collection of designer frames from leading brands. We stock styles to suit every face shape, personality, and budget — from classic to contemporary.",
    tags: ["Metal frames", "Acetate frames", "Rimless", "Semi-rimless", "Kids' frames"],
  },
  {
    icon: "🔬",
    title: "Prescription Lenses",
    desc: "High-quality lenses tailored to your exact prescription. We offer single vision, bifocal, and progressive lenses using the latest lens-cutting technology.",
    tags: ["Single vision", "Bifocal", "Progressive", "High-index", "Aspheric"],
  },
  {
    icon: "📖",
    title: "Reading Glasses",
    desc: "A wide selection of reading glasses for those with presbyopia (age-related near vision loss). Available in various magnification strengths and stylish frames.",
    tags: ["Compact readers", "Folding glasses", "Over-the-counter", "Custom readers"],
  },
  {
    icon: "👁️",
    title: "Contact Lenses",
    desc: "We stock a full range of soft contact lenses from leading brands. Whether you prefer daily disposables, monthly lenses, or toric lenses for astigmatism, we have you covered.",
    tags: ["Daily disposables", "Monthly lenses", "Toric (astigmatism)", "Multifocal", "Coloured lenses"],
  },
  {
    icon: "💻",
    title: "Blue Light Protection Glasses",
    desc: "Specially coated lenses that filter harmful blue light from screens, reducing digital eye strain, improving sleep, and protecting your long-term eye health.",
    tags: ["Office lenses", "Screen protection", "Anti-UV", "Non-prescription available"],
  },
  {
    icon: "⚽",
    title: "Sports Eyewear",
    desc: "Durable, impact-resistant sports frames and goggles for active lifestyles. Prescription and non-prescription options available for all sports.",
    tags: ["Safety goggles", "Sport frames", "Swimming goggles", "Wraparound sunglasses"],
  },
  {
    icon: "☀️",
    title: "Designer Sunglasses",
    desc: "Protect your eyes from UV rays with our range of quality sunglasses. Available with prescription lenses and in polarised options.",
    tags: ["UV400 protection", "Polarised", "Prescription sunglasses", "Fashion frames"],
  },
  {
    icon: "🧹",
    title: "Lens Care & Accessories",
    desc: "Keep your eyewear in top condition with our range of cleaning solutions, microfibre cloths, cases, and repair kits.",
    tags: ["Cleaning sprays", "Lens cloths", "Hard cases", "Repair kits"],
  },
];

export default function EyewearPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Eyewear & Vision Products</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Explore our wide range of quality eyewear and vision products for the whole family.</p>
        </div>
      </section>

      {/* Featured Images */}
      <section className="section-padding bg-surface-alt">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="md:col-span-2 rounded-3xl overflow-hidden shadow-hero">
              <img src={womanGlassesImg} alt="Black African woman trying on prescription glasses at Optinova Harare" className="w-full h-64 md:h-full object-cover" loading="lazy" />
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl overflow-hidden shadow-hero h-44">
                <img src={familyImg} alt="Black family choosing eyeglasses" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-hero h-44">
                <img src={glassesDisplayImg} alt="Large selection of eyeglass frames at Optinova" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="section-title">Our Product Range</h2>
            <span className="accent-line mx-auto" />
            <p className="section-subtitle max-w-2xl mx-auto">Quality eyewear and vision products to suit every need and budget.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <div key={p.title} className="service-card">
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="font-bold text-base mb-2" style={{ color: "hsl(var(--primary))", fontFamily: 'Montserrat, sans-serif' }}>{p.title}</h3>
                <p className="text-xs leading-relaxed mb-4" style={{ color: "hsl(var(--muted-foreground))" }}>{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span key={tag} className="badge-accent text-xs">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "hsl(var(--primary))" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>Visit Our Optical Dispensary</h2>
          <p className="text-white/75 mb-7">Visit any of our branches to try on frames and speak with our optical experts.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/book-appointment" className="btn-primary">📅 Book Consultation</Link>
            <CallUsButton />
            <WhatsAppButton />
          </div>
        </div>
      </section>
    </>
  );
}

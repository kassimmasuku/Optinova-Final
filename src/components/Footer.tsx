import { Link } from "react-router-dom";
import { MapPin, Globe, Clock } from "lucide-react";
import logoAsset from "@/assets/optinova-logo.png";
import { branches } from "@/data/branches";
import { CallUsButton, WhatsAppButton, EmailButton, WhatsAppIcon } from "@/components/ContactActionButton";
import { useBranchContact } from "@/context/BranchContactContext";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Eyewear & Products", to: "/eyewear" },
  { label: "Frames", to: "/frames" },
  { label: "Eye Health Facts", to: "/eye-health-facts" },
  { label: "Gallery", to: "/gallery" },
  { label: "Book Appointment", to: "/book-appointment" },
  { label: "Contact Us", to: "/contact" },
];

const services = [
  "Comprehensive Eye Exams",
  "Prescription Glasses",
  "Contact Lens Fitting",
  "Children's Eye Exams",
  "Glaucoma Screening",
  "Digital Eye Strain Testing",
  "Keratoconus",
  "Low Vision Screening",
];

function FooterWhatsAppIcon() {
  const { openBranchContact } = useBranchContact();
  return (
    <button
      type="button"
      onClick={() => openBranchContact("whatsapp")}
      className="w-9 h-9 rounded-full bg-white/10 hover:bg-green-500 flex items-center justify-center transition-all duration-200 hover:scale-110"
      aria-label="WhatsApp — select a branch"
    >
      <WhatsAppIcon className="w-4 h-4 text-white" />
    </button>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: "hsl(var(--primary-dark))" }}>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-5">
              <div className="inline-block bg-white rounded-xl px-4 py-2.5">
                <img src={logoAsset} alt="Optinova Eye Care logo" className="h-12 w-auto object-contain" />
              </div>
            </div>
            <p className="text-white/65 text-sm leading-relaxed mb-5">
              Providing high-quality vision care services for individuals and families across Harare and Zimbabwe. Professional, trusted, and affordable eye care.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-all duration-200 hover:scale-110" aria-label="Facebook">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-pink-500 flex items-center justify-center transition-all duration-200 hover:scale-110" aria-label="Instagram">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path fill="hsl(var(--primary-dark))" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" stroke="hsl(var(--primary-dark))" strokeWidth="2"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-all duration-200 hover:scale-110" aria-label="LinkedIn">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-sky-500 flex items-center justify-center transition-all duration-200 hover:scale-110" aria-label="Twitter/X">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <FooterWhatsAppIcon />
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-base mb-5" style={{ fontFamily: 'Montserrat, sans-serif' }}>Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-white/65 hover:text-white text-sm transition-colors flex items-center gap-2">
                    <span className="text-teal-400">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-base mb-5" style={{ fontFamily: 'Montserrat, sans-serif' }}>Our Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-white/65 hover:text-white text-sm transition-colors flex items-center gap-2">
                    <span style={{ color: "hsl(var(--accent))" }}>›</span>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-base mb-5" style={{ fontFamily: 'Montserrat, sans-serif' }}>Contact Us</h4>
            <div className="space-y-4 mb-5">
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "hsl(var(--accent))" }} />
                <span className="text-white/65 text-sm">{branches.length} branches across Harare, Chitungwiza & Ngezi</span>
              </div>
              <div className="flex gap-3">
                <Globe className="w-4 h-4 flex-shrink-0" style={{ color: "hsl(var(--accent))" }} />
                <a href="https://optinova.co.zw" className="text-white/65 hover:text-white text-sm transition-colors">optinova.co.zw</a>
              </div>
              <div className="flex gap-3">
                <Clock className="w-4 h-4 flex-shrink-0" style={{ color: "hsl(var(--accent))" }} />
                <div className="text-white/65 text-sm">
                  <div>Mon – Fri: 8:00 AM – 5:00 PM</div>
                  <div>Sat: 9:00 AM – 1:00 PM</div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <CallUsButton className="text-xs px-3 py-2" />
              <WhatsAppButton className="text-xs px-3 py-2" />
              <EmailButton className="text-xs px-3 py-2" variant="outline" />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs text-center md:text-left">
            © 2026 Optinova Eye Care. All Rights Reserved.
          </p>
          <p className="text-white/40 text-xs">
            Serving Harare, Chitungwiza & Ngezi | Professional Eye Care
          </p>
        </div>
      </div>
    </footer>
  );
}

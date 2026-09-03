import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/optinova-logo.png";
import { CallUsButton, WhatsAppButton, EmailButton } from "@/components/ContactActionButton";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Eyewear", to: "/eyewear" },
  { label: "Frames", to: "/frames" },
  { label: "Eye Health Facts", to: "/eye-health-facts" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <nav className={`nav-sticky ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex items-center justify-between py-2 border-b border-white/10 text-white/80 text-xs">
          <span>🕐 Mon–Fri: 8:00 AM – 5:00 PM · Sat: 9:00 AM – 1:00 PM · Ngezi: Wed 9:00 AM – 4:00 PM</span>
          <ThemeToggle variant="navbar" />
        </div>

        {/* Main nav */}
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center group">
            <div className="bg-white rounded-xl px-3 py-1.5 shadow-md transition-transform group-hover:scale-105">
              <img src={logoAsset} alt="Optinova Eye Care logo" className="h-9 w-auto object-contain" />
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.to
                    ? "text-white bg-white/15"
                    : "text-white/85 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <CallUsButton className="text-xs px-4 py-2" />
            <WhatsAppButton className="text-xs px-4 py-2" />
            <EmailButton className="text-xs px-4 py-2" variant="outline" />
            <Link to="/book-appointment" className="btn-primary text-xs px-4 py-2">
              Book Appointment
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle variant="navbar" />
            <button
              className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-primary-dark border-t border-white/10 shadow-xl" style={{ background: "hsl(var(--primary-dark))" }}>
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "text-white bg-white/15"
                    : "text-white/85 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <Link to="/book-appointment" className="btn-primary justify-center">
                📅 Book Appointment
              </Link>
              <CallUsButton className="justify-center" />
              <WhatsAppButton className="justify-center" />
              <EmailButton className="justify-center" variant="outline" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

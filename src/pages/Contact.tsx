import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Globe, Clock, ExternalLink, Phone, Mail } from "lucide-react";
import { branches, getBranchHoursLines, type Branch } from "@/data/branches";
import { getEmailLink, getTelLink, getWhatsAppLink } from "@/lib/contact";
import { CallUsButton, WhatsAppButton, EmailButton } from "@/components/ContactActionButton";
import MobileBranchPicker from "@/components/MobileBranchPicker";

function BranchCard({ branch }: { branch: Branch }) {
  return (
    <div className="p-6 bg-white rounded-2xl border shadow-card flex flex-col" style={{ borderColor: "hsl(var(--border))" }}>
      <div className="feature-icon mb-4">
        <MapPin className="w-5 h-5" />
      </div>
      <div className="font-bold text-sm mb-2" style={{ color: "hsl(var(--primary))", fontFamily: "Montserrat, sans-serif" }}>{branch.full}</div>
      {branch.offer && <div className="badge-accent mb-3 w-fit">{branch.offer}</div>}
      <p className="text-sm mb-3 flex-1" style={{ color: "hsl(var(--muted-foreground))" }}>{branch.address}</p>

      <div className="space-y-1.5 text-xs mb-4" style={{ color: "hsl(var(--muted-foreground))" }}>
        {branch.telephone && (
          <div className="flex items-center gap-2">
            <Phone className="w-3 h-3 flex-shrink-0" style={{ color: "hsl(var(--accent))" }} />
            <span>{branch.telephone}</span>
          </div>
        )}
        {branch.voipTelephone && (
          <div className="flex items-center gap-2">
            <Phone className="w-3 h-3 flex-shrink-0" style={{ color: "hsl(var(--accent))" }} />
            <span>VoIP: {branch.voipTelephone}</span>
          </div>
        )}
        {branch.mobile && (
          <div className="flex items-center gap-2">
            <Phone className="w-3 h-3 flex-shrink-0" style={{ color: "hsl(var(--accent))" }} />
            <span>{branch.mobile}</span>
          </div>
        )}
        <div className="flex items-center gap-2">
          <Mail className="w-3 h-3 flex-shrink-0" style={{ color: "hsl(var(--accent))" }} />
          <a href={getEmailLink(branch)} className="hover:underline" style={{ color: "hsl(var(--accent))" }}>{branch.email}</a>
        </div>
        <div className="flex items-start gap-2 pt-1">
          <Clock className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: "hsl(var(--accent))" }} />
          <div>
            {getBranchHoursLines(branch.hours).map((line) => (
              <div key={line.label}>
                {line.label}: {line.time}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        {getTelLink(branch) && (
          <a href={getTelLink(branch)!} className="text-xs font-semibold px-3 py-1.5 rounded-full border hover:shadow-sm transition-all" style={{ borderColor: "hsl(var(--border))", color: "hsl(var(--primary))" }}>
            Call
          </a>
        )}
        {getWhatsAppLink(branch) && (
          <a href={getWhatsAppLink(branch)!} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold px-3 py-1.5 rounded-full border hover:shadow-sm transition-all" style={{ borderColor: "hsl(var(--accent))", color: "hsl(var(--accent))" }}>
            WhatsApp
          </a>
        )}
        <a href={getEmailLink(branch)} className="text-xs font-semibold px-3 py-1.5 rounded-full border hover:shadow-sm transition-all" style={{ borderColor: "hsl(var(--border))", color: "hsl(var(--primary))" }}>
          Email
        </a>
      </div>

      <a
        href={`https://maps.google.com/?q=${encodeURIComponent(branch.query)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-semibold hover:underline mt-auto"
        style={{ color: "hsl(var(--accent))" }}
      >
        View on Google Maps <ExternalLink className="w-3.5 h-3.5" />
      </a>
    </div>
  );
}

export default function ContactPage() {
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);
  return (
    <>
      <section className="pt-28 pb-16" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Contact Us</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Get in touch with Optinova Eye Care. We're here to help with all your vision care needs.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="section-title mb-3">Get In Touch</h2>
              <span className="accent-line" />
              <p className="text-base leading-relaxed mb-8" style={{ color: "hsl(var(--muted-foreground))" }}>
                We welcome walk-ins, phone calls, and WhatsApp messages. Select your nearest branch to contact us directly.
              </p>

              <div className="space-y-5 mb-8">
                <div className="flex gap-4 p-5 bg-white rounded-2xl border shadow-card" style={{ borderColor: "hsl(var(--border))" }}>
                  <div className="feature-icon flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm mb-1" style={{ color: "hsl(var(--primary))", fontFamily: 'Montserrat, sans-serif' }}>Our Branches</div>
                    <p className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
                      {branches.length} locations across Harare, Chitungwiza and Ngezi
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-white rounded-2xl border shadow-card" style={{ borderColor: "hsl(var(--border))" }}>
                  <div className="feature-icon flex-shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm mb-1" style={{ color: "hsl(var(--primary))", fontFamily: 'Montserrat, sans-serif' }}>Website</div>
                    <a href="https://optinova.co.zw" className="text-sm hover:underline" style={{ color: "hsl(var(--accent))" }}>
                      optinova.co.zw
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-white rounded-2xl border shadow-card" style={{ borderColor: "hsl(var(--border))" }}>
                  <div className="feature-icon flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm mb-1" style={{ color: "hsl(var(--primary))", fontFamily: 'Montserrat, sans-serif' }}>General Opening Hours</div>
                    <div className="text-sm space-y-0.5" style={{ color: "hsl(var(--muted-foreground))" }}>
                      <div>Mon – Fri: 8:00 AM – 5:00 PM</div>
                      <div>Saturday: 9:00 AM – 1:00 PM</div>
                      <div>Sunday: Closed</div>
                      <div>Ngezi: Wednesday 9:00 AM – 4:00 PM only</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <CallUsButton variant="primary">
                  Call Now
                </CallUsButton>
                <WhatsAppButton />
                <EmailButton />
                <Link to="/book-appointment" className="btn-outline-primary">
                  📅 Book Online
                </Link>
              </div>
            </div>

            <div>
              <h2 className="section-title mb-3">Find Us</h2>
              <span className="accent-line" />
              <p className="text-sm mb-5" style={{ color: "hsl(var(--muted-foreground))" }}>
                Our head office is located on Leopold Takawira Street in central Harare, with branches across the city and beyond.
              </p>
              <div className="rounded-3xl overflow-hidden border shadow-card" style={{ borderColor: "hsl(var(--border))" }}>
                <iframe
                  title="Optinova Eye Care Location - Leopold Takawira Street Harare"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5631!2d31.044!3d-17.833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4f6d2ed5f01%3A0x6a7abd26f34c3f5c!2sLeopold+Takawira+Street%2C+Harare%2C+Zimbabwe!5e0!3m2!1sen!2szw!4v1710000000000!5m2!1sen!2szw"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-4 p-4 bg-white rounded-2xl border flex items-start gap-3" style={{ borderColor: "hsl(var(--border))" }}>
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "hsl(var(--accent))" }} />
                <div>
                  <div className="font-bold text-sm" style={{ color: "hsl(var(--primary))", fontFamily: 'Montserrat, sans-serif' }}>Optinova Eye Care Leopold Takawira</div>
                  <div className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>BB House South Wing, 125 Leopold Takawira Street, Harare</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: "hsl(var(--muted))" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-title mb-3">Our Branches</h2>
            <span className="accent-line mx-auto" />
            <p className="text-base mt-4 max-w-2xl mx-auto" style={{ color: "hsl(var(--muted-foreground))" }}>
              Visit any of our Optinova Eye Care branches across Harare, Chitungwiza and Ngezi.
            </p>
          </div>
          <MobileBranchPicker
            branches={branches}
            selectedId={selectedBranch.id}
            onSelect={setSelectedBranch}
          />
          <div className="md:hidden">
            <BranchCard branch={selectedBranch} />
          </div>
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
            {branches.map((branch) => (
              <BranchCard key={branch.id} branch={branch} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

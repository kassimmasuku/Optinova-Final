import { useState } from "react";
import { MapPin, ExternalLink, Phone, Mail, Clock } from "lucide-react";
import { branches, getBranchHoursLines } from "@/data/branches";
import { getEmailLink, getTelLink, getWhatsAppLink } from "@/lib/contact";

export { branches };

export default function BranchSelector() {
  const [active, setActive] = useState(0);
  const branch = branches[active];
  const q = encodeURIComponent(branch.query);

  return (
    <section id="find-branch" className="section-padding scroll-mt-28" style={{ background: "hsl(var(--muted))" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="section-title">Find Your Nearest Branch</h2>
          <span className="accent-line mx-auto" />
          <p className="section-subtitle max-w-2xl mx-auto">
            Select a branch to see its exact location and contact details.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {branches.map((b, i) => (
            <button
              key={b.id}
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              className="px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200"
              style={
                i === active
                  ? { background: "hsl(var(--accent))", color: "hsl(var(--accent-foreground))", borderColor: "hsl(var(--accent))" }
                  : { background: "hsl(var(--background))", color: "hsl(var(--muted-foreground))", borderColor: "hsl(var(--border))" }
              }
            >
              {b.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <div className="p-6 rounded-2xl border shadow-card" style={{ background: "hsl(var(--background))", borderColor: "hsl(var(--border))" }}>
            <div className="feature-icon mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="font-bold text-base mb-2" style={{ color: "hsl(var(--primary))", fontFamily: "Montserrat, sans-serif" }}>
              {branch.full}
            </div>
            {branch.offer && (
              <div className="badge-accent mb-3">{branch.offer}</div>
            )}
            <p className="text-sm mb-4" style={{ color: "hsl(var(--muted-foreground))" }}>{branch.address}</p>

            <div className="space-y-2 text-sm mb-4" style={{ color: "hsl(var(--muted-foreground))" }}>
              {branch.telephone && (
                <div className="flex items-start gap-2">
                  <Phone className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: "hsl(var(--accent))" }} />
                  <span>{branch.telephone}</span>
                </div>
              )}
              {branch.voipTelephone && (
                <div className="flex items-start gap-2">
                  <Phone className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: "hsl(var(--accent))" }} />
                  <span>VoIP: {branch.voipTelephone}</span>
                </div>
              )}
              {branch.mobile && (
                <div className="flex items-start gap-2">
                  <Phone className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: "hsl(var(--accent))" }} />
                  <span>{branch.mobile}</span>
                </div>
              )}
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: "hsl(var(--accent))" }} />
                <a href={getEmailLink(branch)} className="hover:underline" style={{ color: "hsl(var(--accent))" }}>
                  {branch.email}
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <Clock className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: "hsl(var(--accent))" }} />
                <div>
                  {getBranchHoursLines(branch.hours).map((line) => (
                    <div key={line.label}>
                      {line.label}: {line.time}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {getTelLink(branch) && (
                <a href={getTelLink(branch)!} className="btn-outline-primary text-xs px-3 py-2">
                  <Phone className="w-3.5 h-3.5" /> Call
                </a>
              )}
              {getWhatsAppLink(branch) && (
                <a href={getWhatsAppLink(branch)!} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-xs px-3 py-2">
                  WhatsApp
                </a>
              )}
            </div>

            <a
              href={`https://maps.google.com/?q=${q}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
              style={{ color: "hsl(var(--accent))" }}
            >
              View on Google Maps <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="lg:col-span-2 rounded-2xl overflow-hidden border shadow-card" style={{ borderColor: "hsl(var(--border))" }}>
            <iframe
              key={branch.id}
              title={`Map of ${branch.full}`}
              src={`https://www.google.com/maps?q=${q}&output=embed`}
              width="100%"
              height="380"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

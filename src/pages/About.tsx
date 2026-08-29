import { useState } from "react";
import teamImg from "@/assets/optometrist-team.jpg";
import clinicImg from "@/assets/clinic-interior.jpg";
import { Link } from "react-router-dom";
import { CheckCircle, ChevronRight } from "lucide-react";
import { teamMembers, teamGroups, getTeamByGroup, type TeamMember } from "@/data/team";
import TeamProfileDialog from "@/components/TeamProfileDialog";
import { CallUsButton } from "@/components/ContactActionButton";

const values = [
  { icon: "🎯", title: "Our Mission", desc: "To provide high-quality, accessible eye care to every patient in Harare through professional expertise and modern technology." },
  { icon: "👁️", title: "Our Vision", desc: "A Zimbabwe where every person has access to excellent eye care and can enjoy clear, comfortable vision throughout their life." },
  { icon: "❤️", title: "Our Values", desc: "Compassion, integrity, excellence, and community. We treat every patient with respect and dedicate ourselves to their long-term eye health." },
];

export default function AboutPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <>
      <section className="pt-28 pb-16" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>About Optinova Eye Care</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Dedicated to providing exceptional vision care for Harare and Zimbabwe since 2014.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Story</h2>
              <span className="accent-line" />
              <div className="space-y-4 text-base leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                <p>
                  Optinova Eye Care is dedicated to providing high-quality vision care services for individuals and families across Harare, Chitungwiza and beyond. Every one of our branches combines modern diagnostic technology with personalised patient care, so each patient receives accurate eye examinations and the best vision solutions available.
                </p>
                <p>
                  Founded on the belief that quality eye care should be accessible to all, we have grown from a single practice into a network of eleven branches serving thousands of patients: Arundel Village, Avondale, Borrowdale, Chitungwiza, Eastgate Mall, Greenfields, Greenwood Park, Highland Park, Leopold Takawira, Newlands and Zimplats Ngezi.
                </p>
                <p>
                  Whether you visit us in the city centre or in your own neighbourhood, you receive the same standard of care, the same trusted clinical team culture and the same wide selection of eyewear.
                </p>
                <p>
                  Our team is committed to helping patients maintain clear, comfortable vision while promoting long-term eye health. We invest continuously in the latest diagnostic equipment to deliver the most accurate assessments and treatments.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {["Evidence-based practice", "Latest diagnostic tech", "Patient-first approach", "Community focused"].map((v) => (
                  <div key={v} className="flex items-center gap-2 text-sm font-medium" style={{ color: "hsl(var(--foreground))" }}>
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: "hsl(var(--accent))" }} />
                    {v}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-hero">
              <img src={clinicImg} alt="Optinova Eye Care clinic interior in Harare" className="w-full h-auto" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-alt">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">What Drives Us</h2>
            <span className="accent-line mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="service-card text-center">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "hsl(var(--primary))", fontFamily: 'Montserrat, sans-serif' }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
            <div className="rounded-3xl overflow-hidden shadow-hero lg:sticky lg:top-28">
              <img src={teamImg} alt="Optinova Eye Care professional team in Harare Zimbabwe" className="w-full h-auto" loading="lazy" />
            </div>
            <div>
              <h2 className="section-title">Meet Our Team</h2>
              <span className="accent-line" />
              <p className="text-base mb-8 leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                Our dedicated team of eye care professionals brings decades of combined experience and a genuine passion for helping patients achieve their best vision. Click on a team member to view their profile.
              </p>

              <div className="space-y-8">
                {teamGroups.map((group) => {
                  const members = getTeamByGroup(group);
                  if (members.length === 0) return null;
                  return (
                    <div key={group}>
                      <h3
                        className="text-xs font-bold uppercase tracking-wider mb-3"
                        style={{ color: "hsl(var(--accent))", fontFamily: "Montserrat, sans-serif" }}
                      >
                        {group}
                      </h3>
                      <div className="space-y-3">
                        {members.map((m) => (
                          <button
                            key={m.id}
                            type="button"
                            onClick={() => setSelectedMember(m)}
                            className="w-full flex items-center gap-4 p-4 rounded-xl border bg-white transition-all hover:shadow-md hover:border-accent text-left group"
                            style={{ borderColor: "hsl(var(--border))" }}
                          >
                            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-transparent group-hover:ring-accent transition-all">
                              <img src={m.photo} alt={m.name} className="w-full h-full object-cover object-top" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-bold text-sm" style={{ color: "hsl(var(--primary))", fontFamily: 'Montserrat, sans-serif' }}>{m.name}</div>
                              <div className="text-xs" style={{ color: "hsl(var(--accent))" }}>{m.role}</div>
                              <div className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>{m.experience}</div>
                            </div>
                            <ChevronRight className="w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "hsl(var(--accent))" }} />
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <TeamProfileDialog member={selectedMember} onClose={() => setSelectedMember(null)} />

      <section className="py-16" style={{ background: "hsl(var(--primary))" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "10+", label: "Years in Practice" },
              { num: "5,000+", label: "Patients Served" },
              { num: String(teamMembers.length), label: "Expert Professionals" },
              { num: "11", label: "Branch Locations" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif', color: "hsl(152, 62%, 62%)" }}>{s.num}</div>
                <div className="text-white/70 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="section-title mb-3">Ready to Experience the Difference?</h2>
          <p className="text-base mb-8" style={{ color: "hsl(var(--muted-foreground))" }}>Book your eye examination today and discover why Harare trusts Optinova Eye Care.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/book-appointment" className="btn-primary px-8">📅 Book Appointment</Link>
            <CallUsButton className="px-8" variant="outline" />
          </div>
        </div>
      </section>
    </>
  );
}

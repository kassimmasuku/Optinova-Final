import { useState } from "react";
import teamImg from "@/assets/optometrist-team.jpg";
import clinicImg from "@/assets/clinic-interior.jpg";
import { Link } from "react-router-dom";
import { CheckCircle, ChevronRight } from "lucide-react";
import { teamMembers, teamGroups, getTeamByGroup, type TeamMember } from "@/data/team";
import TeamProfileDialog from "@/components/TeamProfileDialog";
import TeamAvatar from "@/components/TeamAvatar";
import { CallUsButton } from "@/components/ContactActionButton";

const drivers = [
  {
    icon: "🎯",
    title: "Our Mission",
    desc: "To grow and develop a network of eye care practices regionally and provide the highest quality eye care through superior products and exceptional service so as to enhance people’s lives.",
  },
  {
    icon: "👁️",
    title: "Our Vision",
    desc: "To be the market leader in the regional healthcare industry through utilising state-of-the-art technology, careful diagnosis of our patients’ needs, and working with pioneers, innovators and opinion leaders in healthcare.",
  },
  {
    icon: "🌍",
    title: "Our Goal",
    desc: "To be the optometry provider of choice for all age groups in Africa.",
  },
];

const coreValues = [
  { title: "Integrity", desc: "To act with honesty and sincerity in all our endeavours." },
  { title: "Teamwork", desc: "Work towards common goals through open communication, mutual support and respect for diverse backgrounds — respect differences and build upon our strengths." },
  { title: "Recognition", desc: "Ensure that people’s individual needs and successes are supported and recognised." },
  { title: "Innovation", desc: "To be open-minded, challenging conventional thinking to improve our processes and implement new ideas competitively." },
  { title: "Continuous Growth", desc: "To provide an environment where our people and business can flourish and grow." },
  { title: "People", desc: "Our focus is our customers, business associates and employees — we acknowledge them as our vital business partners." },
  { title: "Confidentiality", desc: "We protect patient information and respect privacy in every interaction." },
  { title: "Empathy", desc: "We listen with care and treat every patient with understanding." },
  { title: "Reliability", desc: "We deliver consistent, dependable care that patients can count on." },
];

export default function AboutPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <>
      <section className="pt-28 pb-16" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>About Optinova Africa</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Dedicated to providing quality, affordable eye care across Zimbabwe since 2012.</p>
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
                  Optinova Africa Pvt Ltd was formed in 2012 as the Directors noted a gap in the optometry field. At the time Zimbabwe did not have any schools of optometry, and provision of optometry services was not affordable to the population. Optinova sought to provide quality eye care at affordable prices, recognising that healthy vision is vital for people to work, study, drive and play.
                </p>
                <p>
                  Since its formation, Optinova has become one of the leading optometry providers in Zimbabwe, with branches in Harare, Chitungwiza and Ngezi. Highly trained and qualified Optometrists and staff provide vision care ranging from sight testing and correction to diagnosis, treatment and management of vision changes, as well as lenses and contact lenses.
                </p>
                <p>
                  Optinova provides glasses and eyewear to a whole spectrum of the Zimbabwean population, catering for designer and affordable frames at competitive prices. In 2015 the company introduced its own frame brand — SG Eyewear.
                </p>
                <p>
                  Optinova also runs an outreach programme to ensure remote areas of Zimbabwe are covered. The company’s ultimate goal is to go beyond Zimbabwe’s borders and have a strong presence in Africa.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {["Affordable quality care", "SG Eyewear since 2015", "Outreach to remote areas", "Growing across Africa"].map((v) => (
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
            {drivers.map((v) => (
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
          <div className="text-center mb-12">
            <h2 className="section-title">Our Values</h2>
            <span className="accent-line mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((v) => (
              <div key={v.title} className="service-card">
                <h3 className="text-lg font-bold mb-2" style={{ color: "hsl(var(--primary))", fontFamily: "Montserrat, sans-serif" }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-alt">
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
                            <TeamAvatar member={m} size="md" className="flex-shrink-0 ring-2 ring-transparent group-hover:ring-accent transition-all" />
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
              { num: "14+", label: "Years in Practice" },
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
          <p className="text-base mb-8" style={{ color: "hsl(var(--muted-foreground))" }}>Book your eye examination today and discover why Zimbabwe trusts Optinova Africa.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/book-appointment" className="btn-primary px-8">📅 Book Appointment</Link>
            <CallUsButton className="px-8" variant="outline" />
          </div>
        </div>
      </section>
    </>
  );
}

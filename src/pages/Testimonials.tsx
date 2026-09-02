import { Link } from "react-router-dom";
import { CallUsButton, WhatsAppButton } from "@/components/ContactActionButton";

const testimonials = [
  {
    name: "Tendai Moyo",
    location: "Harare",
    stars: 5,
    text: "Very professional service and thorough eye examination. The team at Optinova Eye Care made me feel completely at ease. They took the time to explain everything clearly and my prescription was absolutely perfect. Highly recommend!",
    service: "Comprehensive Eye Exam",
  },
  {
    name: "Chipo Ndlovu",
    location: "Harare",
    stars: 5,
    text: "Friendly staff and a great selection of glasses. My prescription was spot on and the frames are beautiful. The anti-glare lenses have made a huge difference to my screen time comfort. Will definitely return!",
    service: "Prescription Glasses",
  },
  {
    name: "James Khumalo",
    location: "Harare",
    stars: 5,
    text: "Excellent children's eye exam for my son. The doctor was patient, kind, and made the whole experience fun for him. We found the perfect glasses for him at an affordable price. Thank you Optinova!",
    service: "Children's Eye Exam",
  },
  {
    name: "Rudo Chinhengo",
    location: "Harare",
    stars: 5,
    text: "I had been experiencing headaches for months and it turned out to be an eye strain issue. The optometrist was excellent — diagnosed the problem quickly and recommended the perfect solution. Very grateful!",
    service: "Digital Eye Strain Testing",
  },
  {
    name: "Farai Mutare",
    location: "Harare",
    stars: 5,
    text: "After being referred for a glaucoma screening, I was very anxious. The team at Optinova were reassuring and professional. Fortunately caught early. I cannot recommend them highly enough for regular eye check-ups.",
    service: "Glaucoma Screening",
  },
  {
    name: "Sarah Mutandwa",
    location: "Harare",
    stars: 5,
    text: "First-time contact lens user and the fitting process was so comfortable. The optometrist spent a lot of time making sure I was comfortable and knew exactly how to care for my lenses. Excellent service!",
    service: "Contact Lens Fitting",
  },
  {
    name: "Peter Sibanda",
    location: "Harare",
    stars: 5,
    text: "Outstanding service from start to finish. The clinic is modern, clean, and welcoming. The staff were professional and the eye test was very thorough. Best optical experience I've had in Harare.",
    service: "Comprehensive Eye Exam",
  },
  {
    name: "Grace Zvobgo",
    location: "Harare",
    stars: 5,
    text: "Great location on Leopold Takawira Street, very easy to find. The frame selection is fantastic and the prices are very reasonable. My new progressive lenses are perfect. I'll be recommending Optinova to everyone!",
    service: "Prescription Glasses",
  },
  {
    name: "David Chirume",
    location: "Harare",
    stars: 4,
    text: "Good service and professional staff. Had a comprehensive eye check and was impressed by the diagnostic equipment. Slight wait time but worth it. Would recommend for anyone in Harare needing quality eye care.",
    service: "Comprehensive Eye Exam",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Patient Testimonials</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Real reviews from real patients. See why Zimbabwe trusts Optinova Africa.</p>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-12 bg-surface-alt">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { val: "4.9", label: "Average Rating", icon: "⭐" },
              { val: "500+", label: "Patient Reviews", icon: "👥" },
              { val: "98%", label: "Would Recommend", icon: "✅" },
            ].map((s) => (
              <div key={s.label} className="text-center p-6 bg-white rounded-2xl border shadow-card min-w-40" style={{ borderColor: "hsl(var(--border))" }}>
                <div className="text-4xl mb-2">{s.icon}</div>
                <div className="text-3xl font-bold" style={{ color: "hsl(var(--primary))", fontFamily: 'Montserrat, sans-serif' }}>{s.val}</div>
                <div className="text-sm mt-1" style={{ color: "hsl(var(--muted-foreground))" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">What Our Patients Are Saying</h2>
            <span className="accent-line mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="testimonial-card flex flex-col">
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                  {Array.from({ length: 5 - t.stars }).map((_, i) => (
                    <span key={i} className="text-gray-300 text-lg">★</span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4 flex-1 italic" style={{ color: "hsl(var(--muted-foreground))" }}>
                  "{t.text}"
                </p>
                <div className="border-t pt-4 flex items-center justify-between" style={{ borderColor: "hsl(var(--border))" }}>
                  <div>
                    <div className="font-bold text-sm" style={{ color: "hsl(var(--primary))", fontFamily: 'Montserrat, sans-serif' }}>{t.name}</div>
                    <div className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>{t.location}</div>
                  </div>
                  <span className="badge-accent text-xs">{t.service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "hsl(var(--primary))" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>Join Our Happy Patients</h2>
          <p className="text-white/75 mb-7">Book your eye exam at Optinova Eye Care today.</p>
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

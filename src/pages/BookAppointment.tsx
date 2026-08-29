import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { branches } from "@/data/branches";
import { CallUsButton, WhatsAppButton, EmailButton } from "@/components/ContactActionButton";

const timeSlots = [
  "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
];

const services = [
  "Comprehensive Eye Exam",
  "Prescription Glasses Fitting",
  "Contact Lens Fitting",
  "Children's Eye Exam",
  "Glaucoma Screening",
  "Digital Eye Strain Consultation",
  "Keratoconus Assessment",
  "Low Vision Screening",
  "Eyewear Collection",
  "Other",
];

export default function BookAppointmentPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", branch: "", service: "", date: "", time: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <section className="pt-28 pb-16" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Book an Appointment</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Schedule your eye examination at any Optinova Eye Care branch.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="text-center py-16 bg-white rounded-3xl border shadow-card" style={{ borderColor: "hsl(var(--border))" }}>
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: "hsl(var(--accent-light))" }}>
                    <CheckCircle className="w-10 h-10" style={{ color: "hsl(var(--accent))" }} />
                  </div>
                  <h2 className="text-2xl font-bold mb-3" style={{ color: "hsl(var(--primary))", fontFamily: 'Montserrat, sans-serif' }}>Appointment Request Received!</h2>
                  <p className="text-base mb-6 max-w-md mx-auto" style={{ color: "hsl(var(--muted-foreground))" }}>
                    Thank you, <strong>{form.name}</strong>! We've received your appointment request and will contact you at <strong>{form.phone}</strong> to confirm.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <button onClick={() => setSubmitted(false)} className="btn-outline-primary">Book Another</button>
                    <Link to="/" className="btn-primary">Return Home</Link>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-3xl border p-8 shadow-card" style={{ borderColor: "hsl(var(--border))" }}>
                  <h2 className="text-2xl font-bold mb-2" style={{ color: "hsl(var(--primary))", fontFamily: 'Montserrat, sans-serif' }}>Appointment Request Form</h2>
                  <p className="text-sm mb-7" style={{ color: "hsl(var(--muted-foreground))" }}>Fill in your details and we'll confirm your appointment within 24 hours.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: "hsl(var(--foreground))" }}>Full Name *</label>
                        <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="e.g. Tendai Moyo" className="form-input" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: "hsl(var(--foreground))" }}>Phone Number *</label>
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="e.g. 071 234 5678" className="form-input" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: "hsl(var(--foreground))" }}>Email Address</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="e.g. tendai@email.com" className="form-input" />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: "hsl(var(--foreground))" }}>Preferred Branch *</label>
                      <select name="branch" value={form.branch} onChange={handleChange} required className="form-input">
                        <option value="">Select a branch...</option>
                        {branches.map((b) => <option key={b.id} value={b.id}>{b.full}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: "hsl(var(--foreground))" }}>Service Required *</label>
                      <select name="service" value={form.service} onChange={handleChange} required className="form-input">
                        <option value="">Select a service...</option>
                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: "hsl(var(--foreground))" }}>Preferred Date *</label>
                        <input type="date" name="date" value={form.date} onChange={handleChange} required min={today} className="form-input" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: "hsl(var(--foreground))" }}>Preferred Time *</label>
                        <select name="time" value={form.time} onChange={handleChange} required className="form-input">
                          <option value="">Select a time...</option>
                          {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: "hsl(var(--foreground))" }}>Additional Message</label>
                      <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Any specific concerns or information you'd like us to know..." className="form-input resize-none" />
                    </div>

                    <button type="submit" className="btn-primary w-full justify-center py-4 text-base">
                      📅 Submit Appointment Request
                    </button>
                  </form>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-3xl border p-6 shadow-card" style={{ borderColor: "hsl(var(--border))" }}>
                <h3 className="font-bold text-lg mb-4" style={{ color: "hsl(var(--primary))", fontFamily: 'Montserrat, sans-serif' }}>Contact Us Directly</h3>
                <div className="space-y-3">
                  <CallUsButton className="w-full justify-center" variant="outline" />
                  <WhatsAppButton className="w-full justify-center" />
                  <EmailButton className="w-full justify-center" variant="outline" />
                </div>
              </div>

              <div className="bg-white rounded-3xl border p-6 shadow-card" style={{ borderColor: "hsl(var(--border))" }}>
                <h3 className="font-bold text-lg mb-4" style={{ color: "hsl(var(--primary))", fontFamily: 'Montserrat, sans-serif' }}>Clinic Hours</h3>
                <div className="space-y-2 text-sm">
                  {[
                    { day: "Monday", hrs: "8:00 AM – 5:00 PM" },
                    { day: "Tuesday", hrs: "8:00 AM – 5:00 PM" },
                    { day: "Wednesday", hrs: "8:00 AM – 5:00 PM" },
                    { day: "Thursday", hrs: "8:00 AM – 5:00 PM" },
                    { day: "Friday", hrs: "8:00 AM – 5:00 PM" },
                    { day: "Saturday", hrs: "9:00 AM – 1:00 PM" },
                    { day: "Sunday", hrs: "Closed" },
                  ].map((h) => (
                    <div key={h.day} className="flex justify-between">
                      <span className="font-medium" style={{ color: "hsl(var(--foreground))" }}>{h.day}</span>
                      <span style={{ color: h.hrs === "Closed" ? "hsl(var(--destructive))" : "hsl(var(--accent))" }}>{h.hrs}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-3xl border p-6 shadow-card" style={{ borderColor: "hsl(var(--border))" }}>
                <h3 className="font-bold text-lg mb-3" style={{ color: "hsl(var(--primary))", fontFamily: 'Montserrat, sans-serif' }}>📍 Our Branches</h3>
                <p className="text-sm mb-3" style={{ color: "hsl(var(--muted-foreground))" }}>
                  {branches.length} locations across Harare, Chitungwiza and Ngezi.
                </p>
                <Link to="/contact" className="btn-outline-primary w-full justify-center text-sm">
                  View All Branches
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

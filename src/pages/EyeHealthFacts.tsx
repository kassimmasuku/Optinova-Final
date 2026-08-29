import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

const facts = [
  {
    id: 1,
    icon: "🔍",
    title: "Why Eye Exams Are Important",
    summary: "Regular eye exams detect conditions before symptoms appear.",
    detail: `Regular eye examinations help detect conditions such as glaucoma, cataracts, and diabetic eye disease before symptoms appear. Early detection allows for better treatment and protection of vision.

Eye specialists recommend having a comprehensive eye examination every one to two years, or more frequently if you have diabetes, high blood pressure, or a family history of eye disease.

During a routine exam, your optometrist can also detect signs of systemic health conditions like hypertension, diabetes, and even certain neurological conditions — all visible in the eye before other symptoms develop.`,
  },
  {
    id: 2,
    icon: "💻",
    title: "Digital Eye Strain",
    summary: "Screen time causes fatigue, headaches, and blurred vision.",
    detail: `Long hours spent using computers, smartphones, and tablets can cause digital eye strain (Computer Vision Syndrome). This is one of the most common workplace health problems in the modern era.

Common symptoms include:
• Dry, irritated eyes
• Headaches and migraines
• Blurred or double vision
• Eye fatigue and discomfort
• Difficulty focusing after screen use
• Neck and shoulder pain

Taking regular breaks using the 20-20-20 rule (every 20 minutes, look at something 20 feet away for 20 seconds) and using blue light protection lenses can significantly reduce digital eye strain.`,
  },
  {
    id: 3,
    icon: "🧒",
    title: "Children and Vision Health",
    summary: "Undetected vision problems can affect learning and development.",
    detail: `Vision problems in children can have a profound impact on their learning, confidence, and social development. Studies show that approximately 80% of learning occurs through vision.

Key facts about children's vision:
• 1 in 4 school-age children has a vision problem that affects learning
• Myopia (short-sightedness) is increasing globally, especially in young people
• Amblyopia (lazy eye) affects about 2-3% of children and is most treatable before age 7
• Regular eye tests from age 1 (or earlier if risk factors are present) are recommended

Early eye exams ensure children can see clearly in school and during daily activities. Many children never complain about vision problems because they assume everyone sees the world as they do.`,
  },
  {
    id: 4,
    icon: "🛡️",
    title: "Glaucoma Awareness",
    summary: "The 'silent thief of sight' — no symptoms until significant damage occurs.",
    detail: `Glaucoma is a group of eye conditions that damage the optic nerve, usually due to elevated pressure within the eye. It is one of the leading causes of irreversible blindness worldwide.

Why glaucoma is dangerous:
• Most forms cause no pain or visible symptoms in early stages
• Vision loss begins in the peripheral (side) vision, which is often not noticed
• By the time vision changes are noticed, significant and permanent damage may have occurred
• Once vision is lost to glaucoma, it cannot be restored

Regular eye pressure tests and optic nerve examinations are the only reliable way to detect glaucoma early. Treatment — including eye drops, laser treatment, or surgery — can slow or stop further vision loss when caught early.`,
  },
  {
    id: 5,
    icon: "🩺",
    title: "Diabetes and Eye Health",
    summary: "Diabetic eye disease is a leading cause of blindness — but preventable.",
    detail: `Diabetic retinopathy is the most common cause of vision loss among people with diabetes, and the leading cause of preventable blindness in working-age adults.

How diabetes affects the eyes:
• High blood sugar damages the tiny blood vessels in the retina
• Damaged blood vessels can leak fluid, causing swelling and distorted vision
• New, fragile blood vessels can grow and bleed into the eye
• In advanced stages, retinal detachment can occur

People with Type 1 or Type 2 diabetes should have a dilated eye examination at least once a year. Good control of blood sugar, blood pressure, and cholesterol significantly reduces the risk of diabetic eye disease.`,
  },
  {
    id: 6,
    icon: "☀️",
    title: "UV Protection & Eye Health",
    summary: "Unprotected UV exposure increases your risk of cataracts and macular degeneration.",
    detail: `Ultraviolet (UV) radiation from the sun can cause significant damage to your eyes over time, even on cloudy days.

UV-related eye conditions include:
• Cataracts — clouding of the eye's lens (UV is a major risk factor)
• Macular degeneration — damage to the central retina
• Pterygium — abnormal tissue growth on the white of the eye
• Photokeratitis — a 'sunburn' of the eye's surface

How to protect your eyes:
• Wear sunglasses with 100% UV400 protection whenever outdoors
• Wear a wide-brimmed hat in strong sunlight
• Never look directly at the sun, even during an eclipse
• UV protection is especially important for children, as eyes are more vulnerable at a young age`,
  },
];

export default function EyeHealthFactsPage() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => setOpenId(openId === id ? null : id);

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Eye Health & Vision Facts</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Educational information to help you understand your eye health and make informed vision care decisions.</p>
        </div>
      </section>

      {/* Facts */}
      <section className="section-padding">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="section-title">Important Eye Health Facts</h2>
            <span className="accent-line mx-auto" />
            <p className="section-subtitle">Click on any card to expand and learn more.</p>
          </div>

          <div className="space-y-4">
            {facts.map((f) => (
              <div key={f.id} className="fact-card">
                <button
                  className="w-full p-6 flex items-start gap-4 text-left"
                  onClick={() => toggle(f.id)}
                  aria-expanded={openId === f.id}
                >
                  <div className="text-3xl flex-shrink-0">{f.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1" style={{ color: "hsl(var(--primary))", fontFamily: 'Montserrat, sans-serif' }}>{f.title}</h3>
                    <p className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>{f.summary}</p>
                  </div>
                  <div className="flex-shrink-0 mt-1" style={{ color: "hsl(var(--accent))" }}>
                    {openId === f.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {openId === f.id && (
                  <div className="px-6 pb-6">
                    <div className="border-t pt-5" style={{ borderColor: "hsl(var(--border))" }}>
                      <div className="text-sm leading-relaxed whitespace-pre-line" style={{ color: "hsl(var(--foreground))" }}>
                        {f.detail}
                      </div>
                      <div className="mt-5">
                        <Link to="/book-appointment" className="btn-primary text-xs px-5 py-2.5">
                          Book an Eye Exam
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Tip Box */}
          <div className="mt-12 p-8 rounded-3xl border-2 text-center" style={{ borderColor: "hsl(var(--accent))", background: "hsl(var(--accent-light))" }}>
            <div className="text-4xl mb-3">💡</div>
            <h3 className="text-xl font-bold mb-2" style={{ color: "hsl(var(--primary))", fontFamily: 'Montserrat, sans-serif' }}>Did You Know?</h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "hsl(var(--foreground))" }}>
              The World Health Organization estimates that 80% of vision impairment globally is preventable or treatable. Regular eye examinations are the single most effective step you can take to protect your vision.
            </p>
            <Link to="/book-appointment" className="btn-primary">
              📅 Book Your Eye Exam Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

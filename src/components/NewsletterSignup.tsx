import { FormEvent, useState } from "react";
import { CheckCircle, Glasses, Mail, Newspaper, Sparkles, Tag } from "lucide-react";
import { subscribeToNewsletter } from "@/lib/newsletter";

const perks = [
  { icon: Tag, text: "Special promotions and offers" },
  { icon: Glasses, text: "Latest frames available in store" },
  { icon: Newspaper, text: "Eye-health tips and education" },
  { icon: Sparkles, text: "New products and company updates" },
];

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "already">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    setStatus("submitting");
    const result = await subscribeToNewsletter(email);

    if (result.status === "invalid") {
      setStatus("idle");
      setError("Please enter a valid email address.");
      return;
    }

    if (result.status === "error") {
      setStatus("idle");
      setError(result.message);
      return;
    }

    setEmail("");
    setStatus(result.status === "already" ? "already" : "success");
  };

  return (
    <section className="section-padding bg-surface-alt" aria-labelledby="newsletter-heading">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div className="badge-accent mb-4">
              <Mail className="w-3.5 h-3.5" />
              Join Our Newsletter
            </div>
            <h2 id="newsletter-heading" className="section-title">
              Stay Updated
            </h2>
            <span className="accent-line" />
            <p className="section-subtitle max-w-xl mb-8">
              Get Optinova news in your inbox — promotions, new frames, eye-health tips, and product updates from our clinics.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {perks.map((perk) => (
                <li
                  key={perk.text}
                  className="flex items-start gap-3 p-3 rounded-xl border"
                  style={{ borderColor: "hsl(var(--border))", background: "hsl(var(--card))" }}
                >
                  <div className="feature-icon w-9 h-9 flex-shrink-0">
                    <perk.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm pt-1.5" style={{ color: "hsl(var(--foreground))" }}>
                    {perk.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-3xl border p-6 sm:p-8 shadow-card"
            style={{ borderColor: "hsl(var(--border))", background: "hsl(var(--card))" }}
          >
            {status === "success" || status === "already" ? (
              <div className="text-center py-6 sm:py-8">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "hsl(var(--accent-light))" }}
                >
                  <CheckCircle className="w-8 h-8" style={{ color: "hsl(var(--accent))" }} />
                </div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "hsl(var(--primary))", fontFamily: "Montserrat, sans-serif" }}
                >
                  {status === "already" ? "You're already on the list" : "You're subscribed"}
                </h3>
                <p className="text-sm max-w-sm mx-auto mb-6" style={{ color: "hsl(var(--muted-foreground))" }}>
                  {status === "already"
                    ? "This email is already signed up for Optinova updates. Watch your inbox for the next newsletter."
                    : "Thank you for joining. We'll send promotions, new frames, eye-health tips, and clinic news to your inbox."}
                </p>
                <button type="button" className="btn-outline-primary text-sm" onClick={() => setStatus("idle")}>
                  Subscribe another email
                </button>
              </div>
            ) : (
              <>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "hsl(var(--primary))", fontFamily: "Montserrat, sans-serif" }}
                >
                  Subscribe with your email
                </h3>
                <p className="text-sm mb-6" style={{ color: "hsl(var(--muted-foreground))" }}>
                  We'll only use this address for Optinova updates. You can unsubscribe at any time.
                </p>
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div>
                    <label htmlFor="newsletter-email" className="block text-sm font-semibold mb-2" style={{ color: "hsl(var(--foreground))" }}>
                      Email address
                    </label>
                    <input
                      id="newsletter-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      inputMode="email"
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                        if (error) setError("");
                      }}
                      placeholder="e.g. tendai@email.com"
                      className="form-input"
                      aria-invalid={Boolean(error)}
                      aria-describedby={error ? "newsletter-email-error" : undefined}
                      disabled={status === "submitting"}
                    />
                    {error && (
                      <p id="newsletter-email-error" role="alert" className="text-xs mt-2" style={{ color: "hsl(var(--destructive))" }}>
                        {error}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full justify-center py-3.5 disabled:opacity-60 disabled:hover:scale-100"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? "Subscribing…" : "Subscribe"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const STORAGE_KEY = "optinova-newsletter-subscribers";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type NewsletterSubscription = {
  email: string;
  source: "website";
  subscribedAt: string;
};

export type SubscribeResult =
  | { status: "success" }
  | { status: "already" }
  | { status: "invalid" }
  | { status: "error"; message: string };

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export function isValidEmail(email: string): boolean {
  const value = normalizeEmail(email);
  return value.length > 3 && value.length <= 254 && EMAIL_PATTERN.test(value);
}

function readLocalSubscribers(): NewsletterSubscription[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as NewsletterSubscription[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeLocalSubscriber(entry: NewsletterSubscription): void {
  if (typeof window === "undefined") return;
  const existing = readLocalSubscribers().filter((item) => item.email !== entry.email);
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...existing, entry]));
}

/**
 * Collects a subscriber for later email campaigns.
 * Set VITE_NEWSLETTER_ENDPOINT to a Mailchimp, Formspree, or custom webhook URL
 * that accepts JSON: { email, source, subscribedAt }.
 */
export async function subscribeToNewsletter(rawEmail: string): Promise<SubscribeResult> {
  if (!isValidEmail(rawEmail)) return { status: "invalid" };

  const email = normalizeEmail(rawEmail);
  const alreadyLocal = readLocalSubscribers().some((item) => item.email === email);
  if (alreadyLocal) return { status: "already" };

  const payload: NewsletterSubscription = {
    email,
    source: "website",
    subscribedAt: new Date().toISOString(),
  };

  const endpoint = import.meta.env.VITE_NEWSLETTER_ENDPOINT?.trim();
  if (endpoint) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.status === 409) return { status: "already" };
      if (!response.ok) {
        return { status: "error", message: "We could not complete your signup. Please try again." };
      }
    } catch {
      return { status: "error", message: "We could not complete your signup. Please try again." };
    }
  }

  writeLocalSubscriber(payload);
  return { status: "success" };
}

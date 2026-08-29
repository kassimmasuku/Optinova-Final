import type { Branch } from "@/data/branches";

export const WHATSAPP_MSG = "Hello Optinova Eye Care, I would like to book an eye examination.";

/** Strip non-digits and normalise Zimbabwe numbers for tel:/wa.me links */
export function normalizePhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.startsWith("263")) return digits;
  if (digits.startsWith("0")) return `263${digits.slice(1)}`;
  return digits;
}

export function getCallNumber(branch: Branch): string | null {
  const source = branch.telephone ?? branch.voipTelephone ?? branch.mobile;
  return source ? normalizePhone(source.split(/[/,]/)[0].trim()) : null;
}

export function getWhatsAppNumber(branch: Branch): string | null {
  const source = branch.mobile ?? branch.telephone ?? branch.voipTelephone;
  return source ? normalizePhone(source.split(/[/,]/)[0].trim()) : null;
}

export function getTelLink(branch: Branch): string | null {
  const num = getCallNumber(branch);
  return num ? `tel:+${num}` : null;
}

export function getWhatsAppLink(branch: Branch, message = WHATSAPP_MSG): string | null {
  const num = getWhatsAppNumber(branch);
  return num ? `https://wa.me/${num}?text=${encodeURIComponent(message)}` : null;
}

export function getEmailLink(branch: Branch, subject = "Enquiry from Optinova Website"): string {
  return `mailto:${branch.email}?subject=${encodeURIComponent(subject)}`;
}

export function formatPhoneDisplay(raw: string): string {
  const trimmed = raw.trim();
  if (trimmed.startsWith("0") && trimmed.length >= 9) {
    return `${trimmed.slice(0, 3)} ${trimmed.slice(3, 6)} ${trimmed.slice(6)}`;
  }
  return trimmed;
}

/** Public Mailchimp embed params (safe in the browser). Never put an API key here. */
const DEFAULT_U = "aa19cef8dcec57e4e7209996d";
const DEFAULT_ID = "94daccb4bb";
const DEFAULT_DC = "us1";
const DEFAULT_PREFIX = "optinova";

export type MailchimpSubscribeResponse = {
  result: string;
  msg: string;
};

function mailchimpFormConfig() {
  return {
    u: import.meta.env.VITE_MAILCHIMP_U?.trim() || DEFAULT_U,
    id: import.meta.env.VITE_MAILCHIMP_ID?.trim() || DEFAULT_ID,
    dc: import.meta.env.VITE_MAILCHIMP_DC?.trim() || DEFAULT_DC,
    prefix: import.meta.env.VITE_MAILCHIMP_PREFIX?.trim() || DEFAULT_PREFIX,
  };
}

export function buildMailchimpSubscribeUrl(email: string): string {
  const { u, id, dc, prefix } = mailchimpFormConfig();
  const host = prefix
    ? `https://${prefix}.${dc}.list-manage.com`
    : `https://${dc}.list-manage.com`;

  const params = new URLSearchParams({
    u,
    id,
    EMAIL: email,
    [`b_${u}_${id}`]: "",
  });

  return `${host}/subscribe/post?${params.toString()}`;
}

function jsonp<T>(url: string, timeoutMs = 12000): Promise<T> {
  return new Promise((resolve, reject) => {
    if (typeof document === "undefined") {
      reject(new Error("Mailchimp signup is only available in the browser"));
      return;
    }

    const callbackName = `optinovaMc_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
    const script = document.createElement("script");
    let settled = false;

    const cleanup = () => {
      window.clearTimeout(timer);
      script.remove();
      try {
        delete (window as unknown as Record<string, unknown>)[callbackName];
      } catch {
        (window as unknown as Record<string, unknown>)[callbackName] = undefined;
      }
    };

    const timer = window.setTimeout(() => {
      if (settled) return;
      settled = true;
      cleanup();
      reject(new Error("timeout"));
    }, timeoutMs);

    (window as unknown as Record<string, unknown>)[callbackName] = (data: T) => {
      if (settled) return;
      settled = true;
      cleanup();
      resolve(data);
    };

    script.async = true;
    script.src = `${url}&c=${encodeURIComponent(callbackName)}`;
    script.onerror = () => {
      if (settled) return;
      settled = true;
      cleanup();
      reject(new Error("network"));
    };

    document.head.appendChild(script);
  });
}

/**
 * Subscribe via Mailchimp's public list form (JSONP on /subscribe/post?c=).
 * This is the CORS-safe equivalent of the embeddable signup form — not the Marketing API.
 */
export function subscribeEmailToMailchimp(email: string): Promise<MailchimpSubscribeResponse> {
  return jsonp<MailchimpSubscribeResponse>(buildMailchimpSubscribeUrl(email));
}

export function isMailchimpAlreadySubscribed(message: string): boolean {
  return /already subscribed/i.test(message.replace(/<[^>]+>/g, " "));
}

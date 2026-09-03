import { beforeEach, describe, expect, it, vi } from "vitest";
import { isValidEmail, normalizeEmail, subscribeToNewsletter } from "./newsletter";

describe("newsletter", () => {
  beforeEach(() => {
    window.localStorage.clear();
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
  });

  it("rejects empty and invalid emails", () => {
    expect(isValidEmail("")).toBe(false);
    expect(isValidEmail("   ")).toBe(false);
    expect(isValidEmail("not-an-email")).toBe(false);
    expect(isValidEmail("optinova@")).toBe(false);
  });

  it("accepts a normal email and normalises it", () => {
    expect(isValidEmail("  Tendai@Email.com ")).toBe(true);
    expect(normalizeEmail("  Tendai@Email.com ")).toBe("tendai@email.com");
  });

  it("stores a new subscriber locally when no endpoint is set", async () => {
    const result = await subscribeToNewsletter("patient@example.com");
    expect(result).toEqual({ status: "success" });
    expect(await subscribeToNewsletter("patient@example.com")).toEqual({ status: "already" });
  });

  it("posts to the configured marketing endpoint", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, status: 200 });
    vi.stubGlobal("fetch", fetchMock);
    vi.stubEnv("VITE_NEWSLETTER_ENDPOINT", "https://example.com/subscribe");

    const result = await subscribeToNewsletter("patient@example.com");

    expect(result).toEqual({ status: "success" });
    expect(fetchMock).toHaveBeenCalledOnce();
    const [, options] = fetchMock.mock.calls[0];
    expect(JSON.parse(options.body).email).toBe("patient@example.com");
    expect(JSON.parse(options.body).source).toBe("website");
  });
});

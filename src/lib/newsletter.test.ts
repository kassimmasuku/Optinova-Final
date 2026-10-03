import { beforeEach, describe, expect, it, vi } from "vitest";
import { subscribeEmailToMailchimp } from "./mailchimp";
import { isValidEmail, normalizeEmail, subscribeToNewsletter } from "./newsletter";

vi.mock("./mailchimp", async (importOriginal) => {
  const actual = await importOriginal<typeof import("./mailchimp")>();
  return {
    ...actual,
    subscribeEmailToMailchimp: vi.fn(),
  };
});

const mailchimpSubscribe = vi.mocked(subscribeEmailToMailchimp);

describe("newsletter", () => {
  beforeEach(() => {
    window.localStorage.clear();
    mailchimpSubscribe.mockReset();
    mailchimpSubscribe.mockResolvedValue({ result: "success", msg: "Thank you for subscribing!" });
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

  it("sends a new subscriber to Mailchimp and remembers them locally", async () => {
    const result = await subscribeToNewsletter("  Patient@Example.com ");
    expect(result).toEqual({ status: "success" });
    expect(mailchimpSubscribe).toHaveBeenCalledOnce();
    expect(mailchimpSubscribe).toHaveBeenCalledWith("patient@example.com");
    expect(await subscribeToNewsletter("patient@example.com")).toEqual({ status: "already" });
    expect(mailchimpSubscribe).toHaveBeenCalledOnce();
  });

  it("treats Mailchimp already-subscribed as already on the list", async () => {
    mailchimpSubscribe.mockResolvedValue({
      result: "error",
      msg: "patient@example.com is already subscribed to list Optinova Eyecare.",
    });

    await expect(subscribeToNewsletter("patient@example.com")).resolves.toEqual({ status: "already" });
  });

  it("returns an error when Mailchimp signup fails", async () => {
    mailchimpSubscribe.mockResolvedValue({ result: "error", msg: "0 - Please enter a value" });

    await expect(subscribeToNewsletter("patient@example.com")).resolves.toEqual({
      status: "error",
      message: "We could not complete your signup. Please try again.",
    });
  });
});

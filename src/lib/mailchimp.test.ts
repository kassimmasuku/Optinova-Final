import { describe, expect, it } from "vitest";
import { buildMailchimpSubscribeUrl, isMailchimpAlreadySubscribed } from "./mailchimp";

describe("mailchimp public form", () => {
  it("builds the JSONP signup URL with EMAIL, audience u, and list id", () => {
    const url = new URL(buildMailchimpSubscribeUrl("patient@example.com"));

    expect(url.origin).toBe("https://optinova.us1.list-manage.com");
    expect(url.pathname).toBe("/subscribe/post");
    expect(url.searchParams.get("u")).toBe("aa19cef8dcec57e4e7209996d");
    expect(url.searchParams.get("id")).toBe("94daccb4bb");
    expect(url.searchParams.get("EMAIL")).toBe("patient@example.com");
    expect(url.searchParams.get("b_aa19cef8dcec57e4e7209996d_94daccb4bb")).toBe("");
  });

  it("detects already-subscribed messages, including HTML", () => {
    expect(isMailchimpAlreadySubscribed("is already subscribed to list Optinova Eyecare.")).toBe(true);
    expect(
      isMailchimpAlreadySubscribed("<p>patient@example.com is already subscribed</p>"),
    ).toBe(true);
    expect(isMailchimpAlreadySubscribed("Please enter a value")).toBe(false);
  });
});

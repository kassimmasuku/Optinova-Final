import { describe, expect, it } from "vitest";
import { frames } from "@/data/frames";
import { allRetailBrands } from "@/data/retailBrands";
import { brandLogoPaths, getBrandLogoSrc } from "@/lib/brandLogos";

describe("brand logos", () => {
  it("maps every retail brand to a logo file", () => {
    const missing = allRetailBrands.filter((name) => !brandLogoPaths[name]);
    expect(missing).toEqual([]);
  });

  it("maps every frame product brand to a logo file", () => {
    const brands = Array.from(new Set(frames.map((frame) => frame.brand)));
    const missing = brands.filter((name) => !brandLogoPaths[name]);
    expect(missing).toEqual([]);
    for (const name of brands) {
      expect(getBrandLogoSrc(name)).toMatch(/^\/logos\/brands\//);
    }
  });
});

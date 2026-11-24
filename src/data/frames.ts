import { brandLogoStyles as retailBrandLogoStyles } from "@/data/retailBrands";
import { framePhotoMeta } from "@/data/framePhotoMeta";

export type FrameCategory = "Men" | "Women" | "Kids" | "Unisex";
export type PromoType = "On Sale" | "New Arrival" | "Bundle Deal" | "Free Lens Upgrade" | "None";

export interface FrameProduct {
  name: string;
  brand: string;
  type: string;
  category: FrameCategory;
  shape: string;
  material: string;
  promo: PromoType;
  img: string;
  desc: string;
}

export type BrandLogoStyle = {
  display: string;
  subline?: string;
  color: string;
  darkColor?: string;
  bgLight: string;
  bgDark: string;
};

export const brandLogoStyles: Record<string, BrandLogoStyle> = retailBrandLogoStyles;

export const promoOptions = [
  "All",
  "On Sale",
  "New Arrival",
  "Bundle Deal",
  "Free Lens Upgrade",
] as const;

type FolderMeta = {
  brand: string;
  category: FrameCategory;
  type: string;
};

const optical = "Designer Eyeglass Frames";
const sun = "Designer Sunglasses";

const folderMeta: Record<string, FolderMeta> = {
  boss: { brand: "Hugo Boss", category: "Men", type: optical },
  burberyy: { brand: "Burberry", category: "Women", type: optical },
  dolce_gabbana: { brand: "Dolce & Gabbana", category: "Women", type: optical },
  dsquared2: { brand: "DSquared", category: "Men", type: optical },
  feragamo: { brand: "Salvatore Ferragamo", category: "Women", type: optical },
  guess: { brand: "Guess", category: "Women", type: optical },
  jimmy_choo: { brand: "Jimmy Choo", category: "Women", type: optical },
  julia_baker: { brand: "Julia Baker", category: "Women", type: optical },
  karl_largafield: { brand: "Karl Lagerfeld", category: "Unisex", type: optical },
  kubik: { brand: "Kubik", category: "Unisex", type: optical },
  lacoste: { brand: "Lacoste", category: "Men", type: optical },
  lui: { brand: "Lui", category: "Men", type: optical },
  marc_jacobs: { brand: "Marc Jacobs", category: "Women", type: optical },
  paul_smith: { brand: "Paul Smith", category: "Men", type: optical },
  philip_plein: { brand: "Philipp Plein", category: "Men", type: optical },
  roberto_cavalli: { brand: "Roberto Cavalli", category: "Women", type: optical },
  sg: { brand: "SG Eyewear", category: "Unisex", type: optical },
  sunglasses_mixed_brands: { brand: "Mixed Brands", category: "Unisex", type: sun },
  swarovski: { brand: "Swarovski", category: "Women", type: optical },
  ted_walker: { brand: "Ted Walker", category: "Men", type: optical },
  timberland: { brand: "Timberland", category: "Men", type: optical },
  tom_ford: { brand: "Tom Ford", category: "Men", type: optical },
  Tous: { brand: "Tous", category: "Women", type: optical },
  versace: { brand: "Versace", category: "Women", type: optical },
  yalea: { brand: "Yalea", category: "Women", type: optical },
  zeiss: { brand: "ZEISS", category: "Unisex", type: optical },
};

const framePhotoModules = import.meta.glob("../assets/frames-photos/**/*.jpg", {
  eager: true,
  import: "default",
}) as Record<string, string>;

function parsePhotoPath(path: string) {
  const parts = path.replace(/\\/g, "/").split("/");
  const file = parts[parts.length - 1] ?? "";
  const folder = parts[parts.length - 2] ?? "";
  const id = file.replace(/\.[^.]+$/, "").replace(/^IMG_?/i, "");
  return { folder, file, id, key: `${folder}/${file}` };
}

export const frames: FrameProduct[] = Object.entries(framePhotoModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .flatMap(([path, img]) => {
    const { folder, id, key } = parsePhotoPath(path);
    const folderDefaults = folderMeta[folder];
    if (!folderDefaults) return [];
    const photo = framePhotoMeta[key];
    const type = photo?.type ?? folderDefaults.type;
    const category = photo?.category ?? folderDefaults.category;
    const shape = photo?.shape ?? "Rectangle";
    const material = photo?.material ?? "Acetate";
    const typeLabel = type.toLowerCase().includes("sun")
      ? "sunglasses"
      : type.toLowerCase().includes("sport")
        ? "sports eyewear"
        : "frame";
    return [
      {
        name: `${folderDefaults.brand} ${id}`,
        brand: folderDefaults.brand,
        type,
        category,
        shape,
        material,
        promo: "None",
        img,
        desc: `In-store ${folderDefaults.brand} ${typeLabel} photographed at Optinova. Visit us to try it on.`,
      },
    ];
  });

export const hasFramePromos = frames.some((f) => f.promo !== "None");

export const frameBrands = ["All", ...Array.from(new Set(frames.map((f) => f.brand))).sort()] as const;

/** Display styling for the brand logo slider (text-based marks — swap for official logos when available) */
export const brandSliderBrands = frameBrands.filter((b) => b !== "All");

const used = {
  categories: new Set(frames.map((f) => f.category)),
  shapes: new Set(frames.map((f) => f.shape)),
  materials: new Set(frames.map((f) => f.material)),
  types: new Set(frames.map((f) => f.type)),
};

function withAll(values: string[]) {
  return ["All", ...values];
}

export const frameCategories = withAll(["Men", "Women", "Kids", "Unisex"].filter((v) => used.categories.has(v as FrameCategory)));
export const frameShapes = withAll(
  ["Round", "Rectangle", "Aviator", "Cat Eye", "Square", "Oval"].filter((v) => used.shapes.has(v)),
);
export const frameMaterials = withAll(["Metal", "Acetate", "Titanium", "TR90"].filter((v) => used.materials.has(v)));
export const frameTypes = withAll(
  ["Designer Eyeglass Frames", "Designer Sunglasses", "Sports Eyewear"].filter((v) => used.types.has(v)),
);

export function getPromoLabel(promo: PromoType): string | null {
  return promo === "None" ? null : promo;
}

export function getPromoStyle(promo: PromoType): { background: string; color: string } {
  switch (promo) {
    case "On Sale":
      return { background: "hsl(0, 72%, 95%)", color: "hsl(0, 65%, 45%)" };
    case "New Arrival":
      return { background: "hsl(var(--accent-light))", color: "hsl(var(--primary))" };
    case "Bundle Deal":
      return { background: "hsl(220, 70%, 95%)", color: "hsl(220, 60%, 40%)" };
    case "Free Lens Upgrade":
      return { background: "hsl(152, 50%, 92%)", color: "hsl(152, 45%, 30%)" };
    default:
      return { background: "hsl(var(--muted))", color: "hsl(var(--muted-foreground))" };
  }
}

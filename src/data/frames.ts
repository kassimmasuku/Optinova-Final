import designerImg from "@/assets/lens-designer-frames.jpg";
import prescriptionImg from "@/assets/lens-prescription.jpg";
import readingImg from "@/assets/lens-reading.jpg";
import contactImg from "@/assets/lens-contact.jpg";
import blueLightImg from "@/assets/lens-bluelight.jpg";
import sportsImg from "@/assets/lens-sports.jpg";
import sunglassesImg from "@/assets/lens-sunglasses.jpg";
import careImg from "@/assets/lens-care.jpg";
import catEyeImg from "@/assets/lens-cateye.jpg";
import kidsImg from "@/assets/lens-kids.jpg";
import { brandLogoStyles as retailBrandLogoStyles } from "@/data/retailBrands";

export type FrameCategory = "Men" | "Women" | "Kids";
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

export const frames: FrameProduct[] = [
  { name: "Round Metal Classic", brand: "Ray-Ban", type: "Designer Eyeglass Frames", category: "Men", shape: "Round", material: "Metal", promo: "On Sale", img: designerImg, desc: "Iconic round metal frame with timeless appeal." },
  { name: "Aviator Polarised", brand: "Ray-Ban", type: "Designer Sunglasses", category: "Men", shape: "Aviator", material: "Metal", promo: "New Arrival", img: sunglassesImg, desc: "Classic aviator with UV400 polarised lenses." },
  { name: "Junior Wayfarer", brand: "Ray-Ban", type: "Designer Eyeglass Frames", category: "Kids", shape: "Square", material: "Acetate", promo: "On Sale", img: kidsImg, desc: "Durable junior frame with classic Ray-Ban styling." },
  { name: "Holbrook Sport", brand: "Oakley", type: "Sports Eyewear", category: "Men", shape: "Rectangle", material: "TR90", promo: "On Sale", img: sportsImg, desc: "Impact-resistant frame built for active lifestyles." },
  { name: "Radar EV Path", brand: "Oakley", type: "Designer Sunglasses", category: "Men", shape: "Oval", material: "TR90", promo: "Bundle Deal", img: sportsImg, desc: "Wraparound sport sunglasses with enhanced coverage." },
  { name: "FT5684 Optical", brand: "Tom Ford", type: "Designer Eyeglass Frames", category: "Men", shape: "Rectangle", material: "Acetate", promo: "On Sale", img: prescriptionImg, desc: "Sophisticated rectangular frame with signature T-bar detail." },
  { name: "Whitman Sunglasses", brand: "Tom Ford", type: "Designer Sunglasses", category: "Men", shape: "Aviator", material: "Metal", promo: "Bundle Deal", img: sunglassesImg, desc: "Premium aviator with gradient polarised lenses." },
  { name: "VE4361 Cat Eye", brand: "Versace", type: "Designer Eyeglass Frames", category: "Women", shape: "Cat Eye", material: "Acetate", promo: "On Sale", img: catEyeImg, desc: "Statement cat eye frame with Medusa emblem detail." },
  { name: "Medusa Biggie", brand: "Versace", type: "Designer Sunglasses", category: "Women", shape: "Square", material: "Acetate", promo: "New Arrival", img: sunglassesImg, desc: "Oversized square sunglasses with bold Versace styling." },
  { name: "DG3342 Optical", brand: "Dolce & Gabbana", type: "Designer Eyeglass Frames", category: "Women", shape: "Cat Eye", material: "Acetate", promo: "Free Lens Upgrade", img: catEyeImg, desc: "Elegant cat eye with floral-inspired temple design." },
  { name: "Classic Oval Sun", brand: "Dolce & Gabbana", type: "Designer Sunglasses", category: "Women", shape: "Oval", material: "Metal", promo: "On Sale", img: sunglassesImg, desc: "Refined oval sunglasses with gold-tone accents." },
  { name: "AX1017 Rectangle", brand: "Armani Exchange", type: "Designer Eyeglass Frames", category: "Men", shape: "Rectangle", material: "Metal", promo: "On Sale", img: prescriptionImg, desc: "Modern rectangular frame with clean, minimal lines." },
  { name: "Active Shield", brand: "Armani Exchange", type: "Sports Eyewear", category: "Men", shape: "Oval", material: "TR90", promo: "Bundle Deal", img: sportsImg, desc: "Sport-ready shield frame for everyday performance." },
  { name: "MK4058 Optical", brand: "Michael Kors", type: "Designer Eyeglass Frames", category: "Women", shape: "Cat Eye", material: "Acetate", promo: "On Sale", img: catEyeImg, desc: "Glamorous cat eye frame with MK logo temples." },
  { name: "Pillow Square Sun", brand: "Michael Kors", type: "Designer Sunglasses", category: "Women", shape: "Square", material: "Acetate", promo: "New Arrival", img: sunglassesImg, desc: "Soft square sunglasses with gradient lens tint." },
  { name: "SK5308 Crystal", brand: "Swarovski", type: "Designer Eyeglass Frames", category: "Women", shape: "Cat Eye", material: "Acetate", promo: "New Arrival", img: catEyeImg, desc: "Crystal-embellished cat eye frame with elegant sparkle." },
  { name: "SK0301 Sun", brand: "Swarovski", type: "Designer Sunglasses", category: "Women", shape: "Oval", material: "Metal", promo: "On Sale", img: sunglassesImg, desc: "Oval sunglasses with Swarovski crystal temple accents." },
  { name: "VO5326 Optical", brand: "Vogue", type: "Designer Eyeglass Frames", category: "Women", shape: "Cat Eye", material: "Acetate", promo: "On Sale", img: catEyeImg, desc: "Fashion-forward cat eye with Vogue Parisian style." },
  { name: "VO5330S Sun", brand: "Vogue", type: "Designer Sunglasses", category: "Women", shape: "Square", material: "Acetate", promo: "New Arrival", img: sunglassesImg, desc: "Trendy square sunglasses with gradient lenses." },
  { name: "Boss 1436 Optical", brand: "Hugo Boss", type: "Designer Eyeglass Frames", category: "Men", shape: "Rectangle", material: "Acetate", promo: "On Sale", img: prescriptionImg, desc: "Sharp rectangular optical with refined Hugo Boss detailing." },
  { name: "Boss Navigator Sun", brand: "Boss", type: "Designer Sunglasses", category: "Men", shape: "Aviator", material: "Metal", promo: "Bundle Deal", img: sunglassesImg, desc: "Polished navigator sunglasses with understated Boss branding." },
  { name: "AR 5088 Optical", brand: "Giorgio Armani", type: "Designer Eyeglass Frames", category: "Men", shape: "Rectangle", material: "Acetate", promo: "Free Lens Upgrade", img: prescriptionImg, desc: "Minimal rectangular frame with Giorgio Armani precision." },
  { name: "EA 3183 Optical", brand: "Emporio Armani", type: "Designer Eyeglass Frames", category: "Men", shape: "Square", material: "Metal", promo: "On Sale", img: prescriptionImg, desc: "Contemporary square frame from the Emporio Armani collection." },
  { name: "Zegna EZ5212", brand: "Ermenegildo Zegna", type: "Designer Eyeglass Frames", category: "Men", shape: "Rectangle", material: "Acetate", promo: "New Arrival", img: designerImg, desc: "Tailored rectangular frame with Zegna luxury finish." },
  { name: "Polo PH2245", brand: "Polo", type: "Designer Eyeglass Frames", category: "Men", shape: "Rectangle", material: "Acetate", promo: "On Sale", img: prescriptionImg, desc: "Preppy rectangular optical with Polo heritage styling." },
  { name: "RL 6224 Optical", brand: "Ralph Lauren", type: "Designer Eyeglass Frames", category: "Men", shape: "Square", material: "Acetate", promo: "Bundle Deal", img: designerImg, desc: "Classic square frame with Ralph Lauren polish." },
  { name: "Chopard SCHC80", brand: "Chopard", type: "Designer Sunglasses", category: "Women", shape: "Cat Eye", material: "Metal", promo: "New Arrival", img: sunglassesImg, desc: "Jewellery-inspired cat eye sunglasses from Chopard." },
  { name: "Dunhill DU0032", brand: "Dunhill", type: "Designer Eyeglass Frames", category: "Men", shape: "Rectangle", material: "Metal", promo: "On Sale", img: prescriptionImg, desc: "Refined metal optical with Dunhill British heritage." },
  { name: "NB Sport Shield", brand: "New Balance", type: "Sports Eyewear", category: "Men", shape: "Rectangle", material: "TR90", promo: "On Sale", img: sportsImg, desc: "Lightweight sport frame built for everyday movement." },
  { name: "NB Kids Flex", brand: "New Balance", type: "Designer Eyeglass Frames", category: "Kids", shape: "Square", material: "TR90", promo: "Bundle Deal", img: kidsImg, desc: "Flexible, durable kids frame for active days." },
  { name: "Lacoste L2863", brand: "Lacoste", type: "Designer Eyeglass Frames", category: "Men", shape: "Rectangle", material: "Acetate", promo: "On Sale", img: prescriptionImg, desc: "Sport-luxe rectangular frame with crocodile signature." },
  { name: "Lacoste Kids Colour", brand: "Lacoste", type: "Designer Eyeglass Frames", category: "Kids", shape: "Oval", material: "TR90", promo: "On Sale", img: kidsImg, desc: "Comfortable kids optical with playful Lacoste colour." },
  { name: "OGA 8008 Optical", brand: "OGA", type: "Designer Eyeglass Frames", category: "Men", shape: "Oval", material: "Titanium", promo: "Free Lens Upgrade", img: prescriptionImg, desc: "Lightweight European optical designed for all-day comfort." },
  { name: "Marius Morel 2922", brand: "Marius Morel", type: "Designer Eyeglass Frames", category: "Men", shape: "Round", material: "Acetate", promo: "On Sale", img: designerImg, desc: "French-crafted round frame with distinctive temple detail." },
  { name: "DQ 0324 Square", brand: "DSquared", type: "Designer Sunglasses", category: "Men", shape: "Square", material: "Acetate", promo: "New Arrival", img: sunglassesImg, desc: "Bold square sunglasses with DSquared attitude." },
  { name: "TH 2038 Optical", brand: "Tommy Hilfiger", type: "Designer Eyeglass Frames", category: "Men", shape: "Rectangle", material: "Acetate", promo: "On Sale", img: prescriptionImg, desc: "Clean rectangular optical with signature Hilfiger colour accents." },
  { name: "Pierre Cardin PC6876", brand: "Pierre Cardin", type: "Designer Eyeglass Frames", category: "Men", shape: "Square", material: "Metal", promo: "Bundle Deal", img: prescriptionImg, desc: "Timeless square metal frame with Pierre Cardin elegance." },
  { name: "JC 257 Cat Eye", brand: "Jimmy Choo", type: "Designer Eyeglass Frames", category: "Women", shape: "Cat Eye", material: "Acetate", promo: "New Arrival", img: catEyeImg, desc: "Glamorous cat eye frame with Jimmy Choo crystal temples." },
  { name: "CH 0045 Optical", brand: "Carolina Herrera", type: "Designer Eyeglass Frames", category: "Women", shape: "Oval", material: "Acetate", promo: "On Sale", img: designerImg, desc: "Elegant oval optical with Carolina Herrera sophistication." },
  { name: "Fila Active Wrap", brand: "Fila", type: "Sports Eyewear", category: "Women", shape: "Oval", material: "TR90", promo: "On Sale", img: sportsImg, desc: "Sport-ready wrap frame with Fila performance styling." },
  { name: "Furla VFU541", brand: "Furla", type: "Designer Sunglasses", category: "Women", shape: "Cat Eye", material: "Acetate", promo: "Bundle Deal", img: sunglassesImg, desc: "Italian cat eye sunglasses with Furla leather-inspired temples." },
  { name: "Valentino VA3067", brand: "Valentino", type: "Designer Eyeglass Frames", category: "Women", shape: "Cat Eye", material: "Acetate", promo: "Free Lens Upgrade", img: catEyeImg, desc: "Sculpted cat eye with Valentino stud detailing." },
  { name: "Ferragamo SF2872", brand: "Salvatore Ferragamo", type: "Designer Sunglasses", category: "Women", shape: "Oval", material: "Metal", promo: "On Sale", img: sunglassesImg, desc: "Refined oval sunglasses with gancini temple accents." },
  { name: "Burberry BE2333", brand: "Burberry", type: "Designer Eyeglass Frames", category: "Women", shape: "Square", material: "Acetate", promo: "New Arrival", img: designerImg, desc: "Heritage square optical with signature check inlay." },
  { name: "Koali K8250", brand: "Koali", type: "Designer Eyeglass Frames", category: "Women", shape: "Cat Eye", material: "Acetate", promo: "On Sale", img: catEyeImg, desc: "Colourful handmade acetate with distinctive Koali design." },
  { name: "Lightec 30219L", brand: "Lightec", type: "Designer Eyeglass Frames", category: "Women", shape: "Oval", material: "Titanium", promo: "Free Lens Upgrade", img: prescriptionImg, desc: "Ultra-light titanium optical for all-day wear." },
  { name: "Cavalli RC1066", brand: "Roberto Cavalli", type: "Designer Sunglasses", category: "Women", shape: "Cat Eye", material: "Metal", promo: "New Arrival", img: sunglassesImg, desc: "Animal-inspired cat eye sunglasses with Cavalli drama." },
  { name: "Hello Kitty Spark", brand: "Hello Kitty", type: "Designer Eyeglass Frames", category: "Kids", shape: "Round", material: "TR90", promo: "On Sale", img: kidsImg, desc: "Playful, durable kids frames with Hello Kitty charm." },
  { name: "Knott Kids Colour", brand: "Knott", type: "Designer Eyeglass Frames", category: "Kids", shape: "Square", material: "TR90", promo: "Bundle Deal", img: kidsImg, desc: "Flexible, colourful frames made for busy young eyes." },
  { name: "Plein Skull Optical", brand: "Philipp Plein", type: "Designer Eyeglass Frames", category: "Men", shape: "Square", material: "Acetate", promo: "New Arrival", img: designerImg, desc: "Statement square frame from the latest Philipp Plein collection." },
  { name: "Azur Coast Sun", brand: "Azur", type: "Designer Sunglasses", category: "Women", shape: "Aviator", material: "Metal", promo: "New Arrival", img: sunglassesImg, desc: "Fresh aviator sunglasses from the new Azur arrivals." },
  { name: "Classic Round Optical", brand: "SG Eyewear", type: "Designer Eyeglass Frames", category: "Women", shape: "Round", material: "Acetate", promo: "On Sale", img: designerImg, desc: "Optinova's own SG Eyewear brand — classic tortoiseshell rounds at a competitive price." },
  { name: "Essential Readers", brand: "SG Eyewear", type: "Reading Glasses", category: "Men", shape: "Rectangle", material: "Metal", promo: "Bundle Deal", img: readingImg, desc: "Everyday SG Eyewear readers available in a full range of magnifications." },
  { name: "Daily Soft Contact Lenses", brand: "SG Eyewear", type: "Contact Lenses", category: "Women", shape: "Oval", material: "TR90", promo: "On Sale", img: contactImg, desc: "Daily disposables, monthly and toric lenses from leading brands." },
  { name: "Screen Shield Blue Light", brand: "SG Eyewear", type: "Blue Light Protection Glasses", category: "Men", shape: "Rectangle", material: "TR90", promo: "Free Lens Upgrade", img: blueLightImg, desc: "Filters harmful blue light and reduces digital eye strain." },
  { name: "Kids Colour Pop", brand: "SG Eyewear", type: "Designer Eyeglass Frames", category: "Kids", shape: "Square", material: "TR90", promo: "On Sale", img: kidsImg, desc: "Flexible, durable SG Eyewear frames made for busy young eyes." },
  { name: "Lens Care Kit", brand: "SG Eyewear", type: "Lens Care & Accessories", category: "Kids", shape: "Round", material: "Acetate", promo: "Bundle Deal", img: careImg, desc: "Cleaning sprays, lens cloths and hard cases to protect your eyewear." },
];

export const frameBrands = ["All", ...Array.from(new Set(frames.map((f) => f.brand))).sort()] as const;

/** Display styling for the brand logo slider (text-based marks — swap for official logos when available) */
export const brandSliderBrands = frameBrands.filter((b) => b !== "All");

export const frameCategories = ["All", "Men", "Women", "Kids"] as const;
export const frameShapes = ["All", "Round", "Rectangle", "Aviator", "Cat Eye", "Square", "Oval"] as const;
export const frameMaterials = ["All", "Metal", "Acetate", "Titanium", "TR90"] as const;
export const frameTypes = ["All", ...Array.from(new Set(frames.map((f) => f.type)))];

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

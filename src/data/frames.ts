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

export const frameBrands = [
  "All",
  "Ray-Ban",
  "Oakley",
  "Gucci",
  "Prada",
  "Tom Ford",
  "Versace",
  "Dolce & Gabbana",
  "Armani Exchange",
  "Calvin Klein",
  "Michael Kors",
  "Polaroid",
  "Persol",
  "Silhouette",
  "Carrera",
  "Police",
  "Swarovski",
  "Stepper",
  "Safilo",
  "Vogue",
  "Optinova",
] as const;

/** Display styling for the brand logo slider (text-based marks — swap for official logos when available) */
export const brandSliderBrands = frameBrands.filter((b) => b !== "All");

export interface BrandLogoStyle {
  display: string;
  subline?: string;
  color: string;
  darkColor?: string;
  bgLight: string;
  bgDark: string;
}

export const brandLogoStyles: Record<string, BrandLogoStyle> = {
  "Ray-Ban": { display: "Ray-Ban", color: "#C41230", bgLight: "#fff5f5", bgDark: "#2a1418" },
  Oakley: { display: "OAKLEY", subline: "Performance", color: "#000000", darkColor: "#ffffff", bgLight: "#f5f5f5", bgDark: "#1a1a1a" },
  Gucci: { display: "GUCCI", color: "#1B7340", bgLight: "#f0faf4", bgDark: "#142318" },
  Prada: { display: "PRADA", color: "#000000", darkColor: "#ffffff", bgLight: "#f7f7f7", bgDark: "#181818" },
  "Tom Ford": { display: "TOM FORD", color: "#1a1a1a", darkColor: "#f5f5f5", bgLight: "#fafafa", bgDark: "#1c1c1c" },
  Versace: { display: "VERSACE", color: "#C9A227", bgLight: "#fdfbf3", bgDark: "#2a2418" },
  "Dolce & Gabbana": { display: "D&G", subline: "Dolce & Gabbana", color: "#000000", darkColor: "#ffffff", bgLight: "#f5f5f5", bgDark: "#1a1a1a" },
  "Armani Exchange": { display: "AX", subline: "Armani Exchange", color: "#000000", darkColor: "#ffffff", bgLight: "#f5f5f5", bgDark: "#1a1a1a" },
  "Calvin Klein": { display: "ck", subline: "Calvin Klein", color: "#000000", darkColor: "#ffffff", bgLight: "#fafafa", bgDark: "#1a1a1a" },
  "Michael Kors": { display: "MK", subline: "Michael Kors", color: "#C9A227", bgLight: "#fdfbf3", bgDark: "#2a2418" },
  Polaroid: { display: "Polaroid", color: "#0066CC", bgLight: "#f0f7ff", bgDark: "#142030" },
  Persol: { display: "Persol", subline: "1733", color: "#007A4D", bgLight: "#f0faf6", bgDark: "#142820" },
  Silhouette: { display: "Silhouette", color: "#0066B3", bgLight: "#f0f7fc", bgDark: "#142028" },
  Carrera: { display: "CARRERA", color: "#E31837", bgLight: "#fff5f6", bgDark: "#2a1418" },
  Police: { display: "POLICE", color: "#000000", darkColor: "#ffffff", bgLight: "#f5f5f5", bgDark: "#1a1a1a" },
  Swarovski: { display: "SWAROVSKI", color: "#005596", bgLight: "#f0f7fc", bgDark: "#142028" },
  Stepper: { display: "Stepper", color: "#006837", bgLight: "#f0faf4", bgDark: "#142318" },
  Safilo: { display: "Safilo", color: "#003DA5", bgLight: "#f0f5fc", bgDark: "#141e28" },
  Vogue: { display: "VOGUE", subline: "Eyewear", color: "#000000", darkColor: "#ffffff", bgLight: "#fafafa", bgDark: "#1a1a1a" },
  Optinova: { display: "Optinova", subline: "Eye Care", color: "#0C6835", bgLight: "#f0faf4", bgDark: "#142318" },
};

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
  { name: "Holbrook Sport", brand: "Oakley", type: "Sports Eyewear", category: "Men", shape: "Rectangle", material: "TR90", promo: "On Sale", img: sportsImg, desc: "Impact-resistant frame built for active lifestyles." },
  { name: "Radar EV Path", brand: "Oakley", type: "Designer Sunglasses", category: "Men", shape: "Oval", material: "TR90", promo: "Bundle Deal", img: sportsImg, desc: "Wraparound sport sunglasses with enhanced coverage." },
  { name: "GG0061O Optical", brand: "Gucci", type: "Designer Eyeglass Frames", category: "Women", shape: "Cat Eye", material: "Acetate", promo: "New Arrival", img: catEyeImg, desc: "Luxury cat eye frame with signature Gucci detailing." },
  { name: "Square Acetate", brand: "Gucci", type: "Designer Sunglasses", category: "Women", shape: "Square", material: "Acetate", promo: "On Sale", img: sunglassesImg, desc: "Bold square sunglasses with premium acetate finish." },
  { name: "PR 17WV Optical", brand: "Prada", type: "Designer Eyeglass Frames", category: "Women", shape: "Cat Eye", material: "Acetate", promo: "Free Lens Upgrade", img: catEyeImg, desc: "Refined cat eye silhouette with Prada craftsmanship." },
  { name: "Linea Rossa Sport", brand: "Prada", type: "Sports Eyewear", category: "Men", shape: "Rectangle", material: "TR90", promo: "New Arrival", img: sportsImg, desc: "Lightweight sport frame from the Linea Rossa collection." },
  { name: "FT5684 Optical", brand: "Tom Ford", type: "Designer Eyeglass Frames", category: "Men", shape: "Rectangle", material: "Acetate", promo: "On Sale", img: prescriptionImg, desc: "Sophisticated rectangular frame with signature T-bar detail." },
  { name: "Whitman Sunglasses", brand: "Tom Ford", type: "Designer Sunglasses", category: "Men", shape: "Aviator", material: "Metal", promo: "Bundle Deal", img: sunglassesImg, desc: "Premium aviator with gradient polarised lenses." },
  { name: "VE4361 Cat Eye", brand: "Versace", type: "Designer Eyeglass Frames", category: "Women", shape: "Cat Eye", material: "Acetate", promo: "On Sale", img: catEyeImg, desc: "Statement cat eye frame with Medusa emblem detail." },
  { name: "Medusa Biggie", brand: "Versace", type: "Designer Sunglasses", category: "Women", shape: "Square", material: "Acetate", promo: "New Arrival", img: sunglassesImg, desc: "Oversized square sunglasses with bold Versace styling." },
  { name: "DG3342 Optical", brand: "Dolce & Gabbana", type: "Designer Eyeglass Frames", category: "Women", shape: "Cat Eye", material: "Acetate", promo: "Free Lens Upgrade", img: catEyeImg, desc: "Elegant cat eye with floral-inspired temple design." },
  { name: "Classic Oval Sun", brand: "Dolce & Gabbana", type: "Designer Sunglasses", category: "Women", shape: "Oval", material: "Metal", promo: "On Sale", img: sunglassesImg, desc: "Refined oval sunglasses with gold-tone accents." },
  { name: "AX1017 Rectangle", brand: "Armani Exchange", type: "Designer Eyeglass Frames", category: "Men", shape: "Rectangle", material: "Metal", promo: "On Sale", img: prescriptionImg, desc: "Modern rectangular frame with clean, minimal lines." },
  { name: "Active Shield", brand: "Armani Exchange", type: "Sports Eyewear", category: "Men", shape: "Oval", material: "TR90", promo: "Bundle Deal", img: sportsImg, desc: "Sport-ready shield frame for everyday performance." },
  { name: "CK19503 Optical", brand: "Calvin Klein", type: "Designer Eyeglass Frames", category: "Men", shape: "Rectangle", material: "Metal", promo: "New Arrival", img: prescriptionImg, desc: "Understated rectangular frame with Calvin Klein minimalism." },
  { name: "CK18508S Sun", brand: "Calvin Klein", type: "Designer Sunglasses", category: "Women", shape: "Cat Eye", material: "Metal", promo: "On Sale", img: sunglassesImg, desc: "Sleek cat eye sunglasses with lightweight metal construction." },
  { name: "MK4058 Optical", brand: "Michael Kors", type: "Designer Eyeglass Frames", category: "Women", shape: "Cat Eye", material: "Acetate", promo: "On Sale", img: catEyeImg, desc: "Glamorous cat eye frame with MK logo temples." },
  { name: "Pillow Square Sun", brand: "Michael Kors", type: "Designer Sunglasses", category: "Women", shape: "Square", material: "Acetate", promo: "New Arrival", img: sunglassesImg, desc: "Soft square sunglasses with gradient lens tint." },
  { name: "D301 Optical", brand: "Polaroid", type: "Designer Eyeglass Frames", category: "Men", shape: "Rectangle", material: "TR90", promo: "On Sale", img: prescriptionImg, desc: "Affordable rectangular frame with durable TR90 build." },
  { name: "PLD6016 Sun", brand: "Polaroid", type: "Designer Sunglasses", category: "Men", shape: "Aviator", material: "Metal", promo: "Bundle Deal", img: sunglassesImg, desc: "Polarised aviator sunglasses at great value." },
  { name: "PO3019S Classic", brand: "Persol", type: "Designer Sunglasses", category: "Men", shape: "Aviator", material: "Metal", promo: "Free Lens Upgrade", img: sunglassesImg, desc: "Handcrafted Italian aviator with iconic arrow hinges." },
  { name: "PO3260V Optical", brand: "Persol", type: "Designer Eyeglass Frames", category: "Men", shape: "Round", material: "Acetate", promo: "New Arrival", img: designerImg, desc: "Heritage round frame with signature Persol finish." },
  { name: "5515 Rimless", brand: "Silhouette", type: "Designer Eyeglass Frames", category: "Women", shape: "Oval", material: "Titanium", promo: "Free Lens Upgrade", img: prescriptionImg, desc: "Ultra-light rimless titanium frame for effortless wear." },
  { name: "Titan Minimal", brand: "Silhouette", type: "Designer Eyeglass Frames", category: "Men", shape: "Rectangle", material: "Titanium", promo: "On Sale", img: prescriptionImg, desc: "Minimalist titanium optical with barely-there feel." },
  { name: "8839 Active", brand: "Carrera", type: "Sports Eyewear", category: "Men", shape: "Rectangle", material: "TR90", promo: "On Sale", img: sportsImg, desc: "Sport-inspired frame with Carrera racing heritage." },
  { name: "Carrera 137/S", brand: "Carrera", type: "Designer Sunglasses", category: "Men", shape: "Aviator", material: "Metal", promo: "New Arrival", img: sunglassesImg, desc: "Retro aviator with bold Carrera logo styling." },
  { name: "SPL772 Optical", brand: "Police", type: "Designer Eyeglass Frames", category: "Men", shape: "Square", material: "Metal", promo: "On Sale", img: prescriptionImg, desc: "Urban square frame with Police edge." },
  { name: "Police SPL60 Sun", brand: "Police", type: "Designer Sunglasses", category: "Men", shape: "Rectangle", material: "Metal", promo: "Bundle Deal", img: sunglassesImg, desc: "Rectangular sunglasses with signature Police badge detail." },
  { name: "SK5308 Crystal", brand: "Swarovski", type: "Designer Eyeglass Frames", category: "Women", shape: "Cat Eye", material: "Acetate", promo: "New Arrival", img: catEyeImg, desc: "Crystal-embellished cat eye frame with elegant sparkle." },
  { name: "SK0301 Sun", brand: "Swarovski", type: "Designer Sunglasses", category: "Women", shape: "Oval", material: "Metal", promo: "On Sale", img: sunglassesImg, desc: "Oval sunglasses with Swarovski crystal temple accents." },
  { name: "SI30124 Optical", brand: "Stepper", type: "Designer Eyeglass Frames", category: "Women", shape: "Oval", material: "Titanium", promo: "Free Lens Upgrade", img: prescriptionImg, desc: "Lightweight titanium frame designed for comfort." },
  { name: "Kids Flex Square", brand: "Stepper", type: "Designer Eyeglass Frames", category: "Kids", shape: "Square", material: "TR90", promo: "On Sale", img: kidsImg, desc: "Flexible, durable kids frame with adjustable temples." },
  { name: "SF2833 Optical", brand: "Safilo", type: "Designer Eyeglass Frames", category: "Men", shape: "Rectangle", material: "Acetate", promo: "On Sale", img: prescriptionImg, desc: "Classic rectangular frame from Safilo's premium range." },
  { name: "Carrera by Safilo", brand: "Safilo", type: "Designer Sunglasses", category: "Men", shape: "Aviator", material: "Metal", promo: "Bundle Deal", img: sunglassesImg, desc: "Safilo-crafted aviator with quality Italian finish." },
  { name: "VO5326 Optical", brand: "Vogue", type: "Designer Eyeglass Frames", category: "Women", shape: "Cat Eye", material: "Acetate", promo: "On Sale", img: catEyeImg, desc: "Fashion-forward cat eye with Vogue Parisian style." },
  { name: "VO5330S Sun", brand: "Vogue", type: "Designer Sunglasses", category: "Women", shape: "Square", material: "Acetate", promo: "New Arrival", img: sunglassesImg, desc: "Trendy square sunglasses with gradient lenses." },
  { name: "Classic Round Optical", brand: "Optinova", type: "Designer Eyeglass Frames", category: "Women", shape: "Round", material: "Acetate", promo: "On Sale", img: designerImg, desc: "Classic tortoiseshell round frames with gold detailing." },
  { name: "Essential Readers", brand: "Optinova", type: "Reading Glasses", category: "Men", shape: "Rectangle", material: "Metal", promo: "Bundle Deal", img: readingImg, desc: "Everyday readers available in a full range of magnifications." },
  { name: "Daily Soft Contact Lenses", brand: "Optinova", type: "Contact Lenses", category: "Women", shape: "Oval", material: "TR90", promo: "On Sale", img: contactImg, desc: "Daily disposables, monthly and toric lenses from leading brands." },
  { name: "Screen Shield Blue Light", brand: "Optinova", type: "Blue Light Protection Glasses", category: "Men", shape: "Rectangle", material: "TR90", promo: "Free Lens Upgrade", img: blueLightImg, desc: "Filters harmful blue light and reduces digital eye strain." },
  { name: "Kids Colour Pop", brand: "Optinova", type: "Designer Eyeglass Frames", category: "Kids", shape: "Square", material: "TR90", promo: "On Sale", img: kidsImg, desc: "Flexible, durable frames made for busy young eyes." },
  { name: "Lens Care Kit", brand: "Optinova", type: "Lens Care & Accessories", category: "Kids", shape: "Round", material: "Acetate", promo: "Bundle Deal", img: careImg, desc: "Cleaning sprays, lens cloths and hard cases to protect your eyewear." },
];

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

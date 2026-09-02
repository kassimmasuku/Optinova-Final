export interface BrandLogoStyle {
  display: string;
  subline?: string;
  color: string;
  darkColor?: string;
  bgLight: string;
  bgDark: string;
}

export const menBrands = [
  "Hugo Boss",
  "Boss",
  "Giorgio Armani",
  "Tom Ford",
  "Ermenegildo Zegna",
  "Oakley",
  "Ray-Ban",
  "Polo",
  "Ralph Lauren",
  "Chopard",
  "Dunhill",
  "New Balance",
  "Lacoste",
  "OGA",
  "Marius Morel",
  "DSquared",
  "Armani Exchange",
  "Tommy Hilfiger",
  "Pierre Cardin",
  "Emporio Armani",
] as const;

export const womenBrands = [
  "Jimmy Choo",
  "Carolina Herrera",
  "Fila",
  "Furla",
  "Michael Kors",
  "Swarovski",
  "Dolce & Gabbana",
  "Valentino",
  "Salvatore Ferragamo",
  "Burberry",
  "Versace",
  "Vogue",
  "Koali",
  "Lightec",
  "Roberto Cavalli",
] as const;

export const childrenBrands = [
  "Hello Kitty",
  "Knott",
  "New Balance",
  "Ray-Ban",
  "Lacoste",
] as const;

export const newArrivalBrands = [
  "Philipp Plein",
  "Azur",
  "Chopard",
] as const;

export const houseBrand = "SG Eyewear";

const unique = (names: readonly string[]) => Array.from(new Set(names));

export const allRetailBrands = unique([
  ...menBrands,
  ...womenBrands,
  ...childrenBrands,
  ...newArrivalBrands,
  houseBrand,
]);

export const brandLogoStyles: Record<string, BrandLogoStyle> = {
  "Hugo Boss": { display: "BOSS", subline: "Hugo Boss", color: "#000000", darkColor: "#ffffff", bgLight: "#f5f5f5", bgDark: "#1a1a1a" },
  Boss: { display: "BOSS", color: "#000000", darkColor: "#ffffff", bgLight: "#f5f5f5", bgDark: "#1a1a1a" },
  "Giorgio Armani": { display: "GIORGIO ARMANI", color: "#000000", darkColor: "#ffffff", bgLight: "#fafafa", bgDark: "#181818" },
  "Tom Ford": { display: "TOM FORD", color: "#1a1a1a", darkColor: "#f5f5f5", bgLight: "#fafafa", bgDark: "#1c1c1c" },
  "Ermenegildo Zegna": { display: "ZEGNA", subline: "Ermenegildo Zegna", color: "#1a1a1a", darkColor: "#f5f5f5", bgLight: "#f7f7f7", bgDark: "#1a1a1a" },
  Oakley: { display: "OAKLEY", subline: "Performance", color: "#000000", darkColor: "#ffffff", bgLight: "#f5f5f5", bgDark: "#1a1a1a" },
  "Ray-Ban": { display: "Ray-Ban", color: "#C41230", bgLight: "#fff5f5", bgDark: "#2a1418" },
  Polo: { display: "POLO", subline: "Ralph Lauren", color: "#003DA5", bgLight: "#f0f5fc", bgDark: "#141e28" },
  "Ralph Lauren": { display: "RALPH LAUREN", color: "#003DA5", bgLight: "#f0f5fc", bgDark: "#141e28" },
  Chopard: { display: "CHOPARD", color: "#C9A227", bgLight: "#fdfbf3", bgDark: "#2a2418" },
  Dunhill: { display: "DUNHILL", color: "#1a1a1a", darkColor: "#f5f5f5", bgLight: "#f7f7f7", bgDark: "#1a1a1a" },
  "New Balance": { display: "NB", subline: "New Balance", color: "#C41230", bgLight: "#fff5f5", bgDark: "#2a1418" },
  Lacoste: { display: "LACOSTE", color: "#006233", bgLight: "#f0faf4", bgDark: "#142318" },
  OGA: { display: "OGA", color: "#0C6835", bgLight: "#f0faf4", bgDark: "#142318" },
  "Marius Morel": { display: "MARIUS MOREL", color: "#1a1a1a", darkColor: "#f5f5f5", bgLight: "#fafafa", bgDark: "#1a1a1a" },
  DSquared: { display: "DSQUARED2", color: "#000000", darkColor: "#ffffff", bgLight: "#f5f5f5", bgDark: "#1a1a1a" },
  "Armani Exchange": { display: "AX", subline: "Armani Exchange", color: "#000000", darkColor: "#ffffff", bgLight: "#f5f5f5", bgDark: "#1a1a1a" },
  "Tommy Hilfiger": { display: "TOMMY", subline: "Hilfiger", color: "#D52B1E", bgLight: "#fff5f5", bgDark: "#2a1418" },
  "Pierre Cardin": { display: "PIERRE CARDIN", color: "#000000", darkColor: "#ffffff", bgLight: "#fafafa", bgDark: "#181818" },
  "Emporio Armani": { display: "EMPORIO ARMANI", color: "#000000", darkColor: "#ffffff", bgLight: "#f5f5f5", bgDark: "#1a1a1a" },
  "Jimmy Choo": { display: "JIMMY CHOO", color: "#1a1a1a", darkColor: "#f5f5f5", bgLight: "#fafafa", bgDark: "#1c1c1c" },
  "Carolina Herrera": { display: "CH", subline: "Carolina Herrera", color: "#000000", darkColor: "#ffffff", bgLight: "#f5f5f5", bgDark: "#1a1a1a" },
  Fila: { display: "FILA", color: "#002D62", darkColor: "#ffffff", bgLight: "#f0f5fc", bgDark: "#141e28" },
  Furla: { display: "FURLA", color: "#000000", darkColor: "#ffffff", bgLight: "#fafafa", bgDark: "#181818" },
  "Michael Kors": { display: "MK", subline: "Michael Kors", color: "#C9A227", bgLight: "#fdfbf3", bgDark: "#2a2418" },
  Swarovski: { display: "SWAROVSKI", color: "#005596", bgLight: "#f0f7fc", bgDark: "#142028" },
  "Dolce & Gabbana": { display: "D&G", subline: "Dolce & Gabbana", color: "#000000", darkColor: "#ffffff", bgLight: "#f5f5f5", bgDark: "#1a1a1a" },
  Valentino: { display: "VALENTINO", color: "#C41230", bgLight: "#fff5f5", bgDark: "#2a1418" },
  "Salvatore Ferragamo": { display: "FERRAGAMO", color: "#1a1a1a", darkColor: "#f5f5f5", bgLight: "#f7f7f7", bgDark: "#1a1a1a" },
  Burberry: { display: "BURBERRY", color: "#A15C2E", bgLight: "#fdf8f3", bgDark: "#2a2218" },
  Versace: { display: "VERSACE", color: "#C9A227", bgLight: "#fdfbf3", bgDark: "#2a2418" },
  Vogue: { display: "VOGUE", subline: "Eyewear", color: "#000000", darkColor: "#ffffff", bgLight: "#fafafa", bgDark: "#1a1a1a" },
  Koali: { display: "KOALI", color: "#6B2D5B", darkColor: "#f5d0ea", bgLight: "#faf5f8", bgDark: "#24141e" },
  Lightec: { display: "LIGHTEC", color: "#0066B3", bgLight: "#f0f7fc", bgDark: "#142028" },
  "Roberto Cavalli": { display: "ROBERTO CAVALLI", color: "#C9A227", bgLight: "#fdfbf3", bgDark: "#2a2418" },
  "Hello Kitty": { display: "HELLO KITTY", color: "#E0218A", bgLight: "#fff5fa", bgDark: "#2a1420" },
  Knott: { display: "KNOTT", color: "#0C6835", bgLight: "#f0faf4", bgDark: "#142318" },
  "Philipp Plein": { display: "PHILIPP PLEIN", color: "#C9A227", bgLight: "#fdfbf3", bgDark: "#2a2418" },
  Azur: { display: "AZUR", color: "#0066B3", bgLight: "#f0f7fc", bgDark: "#142028" },
  "SG Eyewear": { display: "SG", subline: "Eyewear", color: "#0C6835", bgLight: "#f0faf4", bgDark: "#142318" },
};

export function getBrandStyle(name: string): BrandLogoStyle {
  return (
    brandLogoStyles[name] ?? {
      display: name,
      color: "#0C6835",
      bgLight: "#f0faf4",
      bgDark: "#142318",
    }
  );
}

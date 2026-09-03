/** Official logo files in public/logos/brands — every retail brand must resolve here. */
export type BrandLogoAsset = { src: string; ext: "png" | "svg" };

export const brandLogoPaths: Record<string, BrandLogoAsset> = {
  "Hugo Boss": { src: "/logos/brands/hugo-boss.svg", ext: "svg" },
  Boss: { src: "/logos/brands/boss.svg", ext: "svg" },
  "Giorgio Armani": { src: "/logos/brands/giorgio-armani.svg", ext: "svg" },
  "Tom Ford": { src: "/logos/brands/tom-ford.svg", ext: "svg" },
  "Ermenegildo Zegna": { src: "/logos/brands/zegna.svg", ext: "svg" },
  Oakley: { src: "/logos/brands/oakley.svg", ext: "svg" },
  "Ray-Ban": { src: "/logos/brands/ray-ban.svg", ext: "svg" },
  Polo: { src: "/logos/brands/polo.svg", ext: "svg" },
  "Ralph Lauren": { src: "/logos/brands/ralph-lauren.svg", ext: "svg" },
  Chopard: { src: "/logos/brands/chopard.svg", ext: "svg" },
  Dunhill: { src: "/logos/brands/dunhill.svg", ext: "svg" },
  "New Balance": { src: "/logos/brands/new-balance.svg", ext: "svg" },
  Lacoste: { src: "/logos/brands/lacoste.svg", ext: "svg" },
  OGA: { src: "/logos/brands/oga.svg", ext: "svg" },
  "Marius Morel": { src: "/logos/brands/marius-morel.png", ext: "png" },
  DSquared: { src: "/logos/brands/dsquared.png", ext: "png" },
  "Armani Exchange": { src: "/logos/brands/armani-exchange.svg", ext: "svg" },
  "Tommy Hilfiger": { src: "/logos/brands/tommy-hilfiger.svg", ext: "svg" },
  "Pierre Cardin": { src: "/logos/brands/pierre-cardin.svg", ext: "svg" },
  "Emporio Armani": { src: "/logos/brands/emporio-armani.svg", ext: "svg" },
  "Jimmy Choo": { src: "/logos/brands/jimmy-choo.svg", ext: "svg" },
  "Carolina Herrera": { src: "/logos/brands/carolina-herrera.svg", ext: "svg" },
  Fila: { src: "/logos/brands/fila.svg", ext: "svg" },
  Furla: { src: "/logos/brands/furla.svg", ext: "svg" },
  "Michael Kors": { src: "/logos/brands/michael-kors.svg", ext: "svg" },
  Swarovski: { src: "/logos/brands/swarovski.svg", ext: "svg" },
  "Dolce & Gabbana": { src: "/logos/brands/dolce-gabbana.svg", ext: "svg" },
  Valentino: { src: "/logos/brands/valentino.svg", ext: "svg" },
  "Salvatore Ferragamo": { src: "/logos/brands/ferragamo.svg", ext: "svg" },
  Burberry: { src: "/logos/brands/burberry.svg", ext: "svg" },
  Versace: { src: "/logos/brands/versace.svg", ext: "svg" },
  Vogue: { src: "/logos/brands/vogue.svg", ext: "svg" },
  Koali: { src: "/logos/brands/koali.svg", ext: "svg" },
  Lightec: { src: "/logos/brands/lightec.svg", ext: "svg" },
  "Roberto Cavalli": { src: "/logos/brands/roberto-cavalli.svg", ext: "svg" },
  "Hello Kitty": { src: "/logos/brands/hello-kitty.svg", ext: "svg" },
  Knott: { src: "/logos/brands/knott.svg", ext: "svg" },
  "Philipp Plein": { src: "/logos/brands/philipp-plein.png", ext: "png" },
  Azur: { src: "/logos/brands/azur.png", ext: "png" },
  "SG Eyewear": { src: "/logos/brands/sg-eyewear.png", ext: "png" },
};

export function getBrandLogoSrc(name: string): string {
  const logo = brandLogoPaths[name];
  if (!logo) {
    throw new Error(`Missing logo mapping for brand: ${name}`);
  }
  return logo.src;
}

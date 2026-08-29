import fs from "fs";
import path from "path";
import * as si from "simple-icons";

const base = path.join("public", "logos", "brands");
fs.mkdirSync(base, { recursive: true });

const slugs = [
  "rayban",
  "oakley",
  "gucci",
  "prada",
  "tomford",
  "versace",
  "dolcegabbana",
  "armani",
  "calvinklein",
  "michaelkors",
  "polaroid",
  "swarovski",
];

for (const slug of slugs) {
  const key = "si" + slug.charAt(0).toUpperCase() + slug.slice(1);
  const icon = si[key];
  if (!icon) {
    console.log("MISSING", slug);
    continue;
  }
  const fileSlug = slug === "tomford" ? "tom-ford" : slug === "dolcegabbana" ? "dolce-gabbana" : slug === "calvinklein" ? "calvin-klein" : slug === "michaelkors" ? "michael-kors" : slug === "armani" ? "armani-exchange" : slug;
  const svg = [
    `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">`,
    `<title>${icon.title}</title>`,
    `<path fill="#${icon.hex}" d="${icon.path}"/>`,
    `</svg>`,
  ].join("");
  fs.writeFileSync(path.join(base, `${fileSlug}.svg`), svg);
  console.log("WROTE", fileSlug);
}

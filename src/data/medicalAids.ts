export interface MedicalAid {
  id: string;
  name: string;
  abbr: string;
  logo: string;
  color: string;
  darkColor?: string;
  bgLight: string;
  bgDark: string;
}

const logo = (id: string, ext: "png" | "svg" = "png") => `/logos/medical-aids/${id}.${ext}`;

/** Accepted medical aids — update when providers change */
export const medicalAids: MedicalAid[] = [
  { id: "cimas", name: "CIMAS", abbr: "CIMAS", logo: logo("cimas"), color: "#003DA5", bgLight: "#eef4fc", bgDark: "#142030" },
  { id: "psmas", name: "PSMAS", abbr: "PSMAS", logo: logo("psmas"), color: "#006837", bgLight: "#eef8f2", bgDark: "#142318" },
  { id: "first-mutual", name: "First Mutual Health", abbr: "FMH", logo: logo("first-mutual"), color: "#C41230", bgLight: "#fdf2f4", bgDark: "#2a1418" },
  { id: "fidelity", name: "Fidelity Life", abbr: "Fidelity", logo: logo("fidelity"), color: "#003478", bgLight: "#eef3f9", bgDark: "#141e28" },
  { id: "nicozdiamond", name: "NicozDiamond", abbr: "NicozDiamond", logo: logo("nicozdiamond", "svg"), color: "#007A4D", bgLight: "#eef8f3", bgDark: "#142820" },
  { id: "old-mutual", name: "Old Mutual", abbr: "Old Mutual", logo: logo("old-mutual"), color: "#009639", bgLight: "#eef9f2", bgDark: "#142818" },
  { id: "cellmed", name: "Cellmed", abbr: "Cellmed", logo: logo("cellmed"), color: "#E31837", bgLight: "#fdf2f4", bgDark: "#2a1418" },
  { id: "campf", name: "CAMPF", abbr: "CAMPF", logo: logo("campf", "svg"), color: "#1a5276", bgLight: "#eef4f8", bgDark: "#141e24" },
  { id: "masca", name: "MASCA", abbr: "MASCA", logo: logo("masca", "svg"), color: "#6C3483", bgLight: "#f6eef9", bgDark: "#221428" },
  { id: "bonheur", name: "Bonheur Medical Aid", abbr: "Bonheur", logo: logo("bonheur", "svg"), color: "#D35400", bgLight: "#fdf5ee", bgDark: "#2a1c14" },
  { id: "mmi", name: "MMI", abbr: "MMI", logo: logo("mmi"), color: "#154360", bgLight: "#eef3f7", bgDark: "#141e24" },
  { id: "czam", name: "C Zam Medical Aid", abbr: "C Zam", logo: logo("czam", "svg"), color: "#117A65", bgLight: "#eef8f6", bgDark: "#142820" },
  { id: "health-international", name: "Health International", abbr: "Health Int.", logo: logo("health-international", "svg"), color: "#2874A6", bgLight: "#eef5fa", bgDark: "#141e28" },
  { id: "premier", name: "Premier Medical Aid", abbr: "Premier", logo: logo("premier"), color: "#7D3C98", bgLight: "#f5eef9", bgDark: "#221428" },
  { id: "econet-health", name: "Econet Health", abbr: "Econet", logo: logo("econet-health"), color: "#0066CC", bgLight: "#eef5fc", bgDark: "#142030" },
  { id: "steward", name: "Steward Health", abbr: "Steward", logo: logo("steward", "svg"), color: "#1F618D", bgLight: "#eef4f8", bgDark: "#141e24" },
  { id: "zb-life", name: "ZB Life Assurance", abbr: "ZB Life", logo: logo("zb-life", "svg"), color: "#B7950B", bgLight: "#fdfaf0", bgDark: "#2a2414" },
  { id: "liberty", name: "Liberty Life", abbr: "Liberty", logo: logo("liberty", "svg"), color: "#003DA5", bgLight: "#eef4fc", bgDark: "#142030" },
  { id: "crescent", name: "Crescent Medical Aid", abbr: "Crescent", logo: logo("crescent", "svg"), color: "#148F77", bgLight: "#eef8f6", bgDark: "#142820" },
  { id: "corporate-24", name: "Corporate 24 Medical Aid", abbr: "Corp 24", logo: logo("corporate-24", "svg"), color: "#566573", bgLight: "#f4f6f7", bgDark: "#1c1e20" },
];

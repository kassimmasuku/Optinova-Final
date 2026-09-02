export interface MedicalAid {
  name: string;
  logo: string;
}

/** Accepted medical aids — official logo files live in public/images/medical-aids/ */
export const medicalAids: MedicalAid[] = [
  { name: "CIMAS", logo: "/images/medical-aids/cimas.svg" },
  { name: "PSMAS", logo: "/images/medical-aids/psmas.png" },
  { name: "Fidelity Life", logo: "/images/medical-aids/fidelity-life.png" },
  { name: "Budget Health", logo: "/images/medical-aids/budget-health.png" },
  { name: "FBC Health", logo: "/images/medical-aids/fbc-health.png" },
  { name: "Bonvie", logo: "/images/medical-aids/bonvie.svg" },
  { name: "MASCA", logo: "/images/medical-aids/masca.svg" },
  { name: "Cellmed Health", logo: "/images/medical-aids/cellmed-health.png" },
  { name: "Maisha Health Fund", logo: "/images/medical-aids/maisha-health-fund.svg" },
  { name: "First Mutual Health", logo: "/images/medical-aids/first-mutual-health.png" },
  { name: "Generation Health Medical Fund", logo: "/images/medical-aids/generation-health.svg" },
  { name: "Minerva Risk Advisors", logo: "/images/medical-aids/minerva.svg" },
  { name: "Alliance Health", logo: "/images/medical-aids/alliance-health.svg" },
  { name: "Ultra-Med Health Care", logo: "/images/medical-aids/ultra-med.png" },
];

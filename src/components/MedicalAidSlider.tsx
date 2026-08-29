import { ShieldCheck } from "lucide-react";
import { medicalAids } from "@/data/medicalAids";
import LogoMarquee from "@/components/LogoMarquee";

export default function MedicalAidSlider() {

  const cards = medicalAids.map((aid) => (
    <div
      key={aid.id}
      className="logo-slider-item shrink-0 w-36 sm:w-44 h-20 sm:h-24 flex items-center justify-center px-3 bg-transparent transition-all duration-200 hover:scale-105"
      title={aid.name}
    >
      <img
        src={aid.logo}
        alt={aid.name}
        className="h-14 sm:h-16 w-auto object-contain max-w-full max-h-full"
        loading="lazy"
      />
    </div>
  ));

  return (
    <div className="mt-16 pt-12 border-t border-border">
      <div className="text-center sm:text-left mb-6">
        <div className="inline-flex items-center gap-2 badge-accent mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          Medical Aid Accepted
        </div>
        <h3
          className="text-xl md:text-2xl font-bold"
          style={{ color: "hsl(var(--primary))", fontFamily: "Montserrat, sans-serif" }}
        >
          Accepted Medical Aid Schemes
        </h3>
        <p className="text-sm mt-2 max-w-xl mx-auto sm:mx-0" style={{ color: "hsl(var(--muted-foreground))" }}>
          We accept a wide range of medical aid providers across Zimbabwe. Present your medical aid card at any Optinova branch.
        </p>
      </div>

      <LogoMarquee duration={50} className="-mx-1 px-1 py-1">
        {cards}
      </LogoMarquee>

      <p className="text-xs text-center sm:text-left mt-4" style={{ color: "hsl(var(--muted-foreground))" }}>
        Not sure if your scheme is covered? Contact your nearest branch and our team will assist you.
      </p>
    </div>
  );
}

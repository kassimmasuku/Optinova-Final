import { ShieldCheck } from "lucide-react";
import { medicalAids } from "@/data/medicalAids";

export default function MedicalAidSlider() {
  return (
    <div className="mt-16 pt-12 border-t border-border">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 badge-accent mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          Medical Aid Accepted
        </div>
        <h3
          className="text-xl md:text-2xl font-bold uppercase tracking-wide"
          style={{ color: "hsl(var(--primary))", fontFamily: "Montserrat, sans-serif" }}
        >
          We Accept the Following Medical Aids
        </h3>
        <p className="text-sm mt-2 max-w-xl mx-auto" style={{ color: "hsl(var(--muted-foreground))" }}>
          Present your medical aid card at any Optinova branch.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
        {medicalAids.map((aid) => (
          <div
            key={aid.name}
            className="flex h-28 items-center justify-center rounded-xl border bg-white px-4 py-3 transition-shadow duration-200 hover:shadow-md dark:bg-white"
            style={{ borderColor: "hsl(var(--border))" }}
            title={aid.name}
          >
            <img
              src={aid.logo}
              alt={aid.name}
              className="max-h-[72px] w-auto max-w-full object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <p className="text-xs text-center mt-6" style={{ color: "hsl(var(--muted-foreground))" }}>
        Not sure if your scheme is covered? Contact your nearest branch and our team will assist you.
      </p>
    </div>
  );
}

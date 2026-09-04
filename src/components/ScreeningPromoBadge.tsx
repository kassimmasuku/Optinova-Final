import { Sparkles } from "lucide-react";

export default function ScreeningPromoBadge() {
  return (
    <a
      href="/#find-branch"
      className="screening-promo"
      aria-label="Free eye screening at all Optinova branches"
    >
      <span className="screening-promo-inner">
        <span
          className="w-2 h-2 rounded-full shrink-0 animate-pulse"
          style={{ background: "hsl(var(--accent))" }}
        />
        <Sparkles className="w-3.5 h-3.5 shrink-0" style={{ color: "hsl(var(--accent))" }} />
        <span>Free Eye Screening at All Branches</span>
      </span>
    </a>
  );
}

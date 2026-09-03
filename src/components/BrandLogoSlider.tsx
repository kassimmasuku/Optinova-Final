import { brandSliderBrands } from "@/data/frames";
import { getBrandLogoSrc } from "@/lib/brandLogos";
import LogoMarquee from "@/components/LogoMarquee";

interface BrandLogoSliderProps {
  selectedBrand: string;
  onSelectBrand: (brand: string) => void;
}

function BrandCard({
  brandName,
  isSelected,
  onSelect,
}: {
  brandName: string;
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`logo-slider-item shrink-0 w-32 sm:w-40 h-20 sm:h-24 flex items-center justify-center px-3 bg-white/90 dark:bg-white border-0 transition-all duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-lg ${
        isSelected ? "opacity-100 scale-105" : "opacity-70 hover:opacity-100"
      }`}
      aria-pressed={isSelected}
      aria-label={`Filter by ${brandName}`}
    >
      <img
        src={getBrandLogoSrc(brandName)}
        alt={`${brandName} logo`}
        className="h-12 sm:h-14 w-auto object-contain max-w-[90%] max-h-[80%]"
        loading="lazy"
      />
    </button>
  );
}

export default function BrandLogoSlider({ selectedBrand, onSelectBrand }: BrandLogoSliderProps) {
  const cards = brandSliderBrands.map((brandName) => (
    <BrandCard
      key={brandName}
      brandName={brandName}
      isSelected={selectedBrand === brandName}
      onSelect={() => onSelectBrand(selectedBrand === brandName ? "All" : brandName)}
    />
  ));

  return (
    <div className="mb-10">
      <div className="mb-4">
        <h3
          className="text-lg font-bold"
          style={{ color: "hsl(var(--primary))", fontFamily: "Montserrat, sans-serif" }}
        >
          Shop by Brand
        </h3>
        <p className="text-sm mt-0.5" style={{ color: "hsl(var(--muted-foreground))" }}>
          Tap a brand to filter the collection — scrolls automatically
        </p>
      </div>

      <LogoMarquee duration={75} className="-mx-1 px-1 py-1">
        {cards}
      </LogoMarquee>

      {selectedBrand !== "All" && (
        <div className="mt-3 flex items-center gap-2">
          <span className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
            Showing: <strong style={{ color: "hsl(var(--foreground))" }}>{selectedBrand}</strong>
          </span>
          <button
            type="button"
            onClick={() => onSelectBrand("All")}
            className="text-xs font-semibold hover:underline"
            style={{ color: "hsl(var(--accent))" }}
          >
            Show all brands
          </button>
        </div>
      )}
    </div>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import { Filter, Tag, X } from "lucide-react";
import BrandLogoSlider from "@/components/BrandLogoSlider";
import FrameDetailDialog from "@/components/FrameDetailDialog";
import {
  frames,
  frameBrands,
  frameCategories,
  frameShapes,
  frameMaterials,
  frameTypes,
  promoOptions,
  getPromoLabel,
  getPromoStyle,
  type FrameProduct,
} from "@/data/frames";

function FilterRow({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap items-start gap-2">
      <span className="frame-filter-label">{label}</span>
      <div className="flex flex-wrap gap-2 flex-1">
        {options.map((o) => {
          const active = value === o;
          return (
            <button
              key={o}
              type="button"
              onClick={() => onChange(o)}
              className={active ? "frame-filter-chip frame-filter-chip-active" : "frame-filter-chip"}
            >
              {o}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function countActiveFilters(filters: Record<string, string>) {
  return Object.values(filters).filter((v) => v !== "All").length;
}

export default function LensCollection() {
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [promo, setPromo] = useState("All");
  const [shape, setShape] = useState("All");
  const [material, setMaterial] = useState("All");
  const [type, setType] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFrame, setSelectedFrame] = useState<FrameProduct | null>(null);

  const filtered = frames.filter(
    (f) =>
      (category === "All" || f.category === category) &&
      (brand === "All" || f.brand === brand) &&
      (promo === "All" || f.promo === promo) &&
      (shape === "All" || f.shape === shape) &&
      (material === "All" || f.material === material) &&
      (type === "All" || f.type === type),
  );

  const activeFilterCount = countActiveFilters({ category, brand, promo, shape, material, type });
  const hasActiveFilters = activeFilterCount > 0;

  const resetFilters = () => {
    setCategory("All");
    setBrand("All");
    setPromo("All");
    setShape("All");
    setMaterial("All");
    setType("All");
  };

  return (
    <section className="section-padding bg-surface-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title">Our Lens & Eyewear Collection</h2>
          <span className="accent-line mx-auto" />
          <p className="section-subtitle max-w-2xl mx-auto">
            Browse our range of frames and lenses — tap any product for full details.
          </p>
        </div>

        <BrandLogoSlider selectedBrand={brand} onSelectBrand={setBrand} />

        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <button
            type="button"
            onClick={() => setShowFilters((open) => !open)}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold border transition-all ${
              showFilters ? "frame-filter-chip-active" : "frame-filter-chip"
            }`}
            aria-expanded={showFilters}
            aria-controls="frame-filters-panel"
          >
            <Filter className="w-4 h-4" />
            {showFilters ? "Hide Filters" : "Filter Collection"}
            {hasActiveFilters && !showFilters && (
              <span className="inline-flex items-center justify-center min-w-[1.25rem] h-5 px-1.5 rounded-full text-[10px] font-bold bg-accent text-accent-foreground">
                {activeFilterCount}
              </span>
            )}
          </button>

          {hasActiveFilters && (
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span>
                {filtered.length} {filtered.length === 1 ? "product" : "products"}
              </span>
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-1 font-semibold hover:underline text-accent"
              >
                <X className="w-3 h-3" />
                Clear filters
              </button>
            </div>
          )}
        </div>

        {showFilters && (
          <div id="frame-filters-panel" className="frame-filter-panel mb-10 space-y-4">
            <FilterRow label="Brand" options={frameBrands} value={brand} onChange={setBrand} />
            <FilterRow label="Promo" options={promoOptions} value={promo} onChange={setPromo} />
            <FilterRow label="Category" options={frameCategories} value={category} onChange={setCategory} />
            <FilterRow label="Shape" options={frameShapes} value={shape} onChange={setShape} />
            <FilterRow label="Material" options={frameMaterials} value={material} onChange={setMaterial} />
            <FilterRow label="Type" options={frameTypes} value={type} onChange={setType} />
          </div>
        )}

        {filtered.length === 0 ? (
          <p className="text-center text-sm text-muted-foreground">
            No products match these filters.{" "}
            <button type="button" onClick={resetFilters} className="font-semibold text-accent hover:underline">
              Clear filters
            </button>
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((f) => {
              const promoLabel = getPromoLabel(f.promo);
              const promoStyle = getPromoStyle(f.promo);

              return (
                <button
                  key={`${f.brand}-${f.name}`}
                  type="button"
                  onClick={() => setSelectedFrame(f)}
                  className="frame-product-card frame-product-card-clickable text-left w-full"
                  aria-label={`View details for ${f.name} by ${f.brand}`}
                >
                  <div className="relative">
                    <img
                      src={f.img}
                      alt={`${f.name} — ${f.brand} ${f.type} at Optinova Eye Care`}
                      width={800}
                      height={600}
                      loading="lazy"
                      className="w-full h-44 object-cover"
                    />
                    {promoLabel && (
                      <span
                        className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold shadow-sm frame-promo-badge"
                        data-promo={f.promo}
                        style={promoStyle}
                      >
                        <Tag className="w-3 h-3" />
                        {promoLabel}
                      </span>
                    )}
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <div className="text-xs font-semibold uppercase tracking-wide mb-1 text-accent">
                      {f.brand}
                    </div>
                    <h3
                      className="font-bold text-sm mb-2 text-primary line-clamp-2"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {f.name}
                    </h3>
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      <span className="badge-accent text-xs">{f.category}</span>
                      <span className="badge-accent text-xs">{f.shape}</span>
                    </div>
                    <p className="text-[11px] font-medium mt-3 text-accent">Tap for details →</p>
                  </div>
                </button>
              );
            })}
          </div>
        )}

        <div className="text-center mt-10">
          <Link to="/eyewear" className="btn-outline-primary">
            Browse All Eyewear
          </Link>
        </div>
      </div>

      <FrameDetailDialog frame={selectedFrame} onClose={() => setSelectedFrame(null)} />
    </section>
  );
}

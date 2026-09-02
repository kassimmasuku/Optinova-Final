import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { brandLogoPaths } from "@/lib/brandLogos";
import { useTheme } from "@/context/ThemeContext";
import {
  childrenBrands,
  getBrandStyle,
  menBrands,
  newArrivalBrands,
  womenBrands,
} from "@/data/retailBrands";

const groups = [
  { id: "men", label: "Men", brands: menBrands },
  { id: "women", label: "Women", brands: womenBrands },
  { id: "children", label: "Children", brands: childrenBrands },
  { id: "new", label: "New Arrivals", brands: newArrivalBrands },
] as const;

function BrandTile({ name }: { name: string }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const style = getBrandStyle(name);
  const logo = brandLogoPaths[name];
  const color = isDark && style.darkColor ? style.darkColor : style.color;

  return (
    <div
      className="flex h-24 flex-col items-center justify-center rounded-xl border bg-white px-3 text-center shadow-sm"
      style={{ borderColor: "hsl(var(--border))" }}
    >
      {logo ? (
        <img
          src={logo.src}
          alt={name}
          className="h-10 w-auto max-w-full object-contain"
          loading="lazy"
        />
      ) : (
        <>
          <span
            className="text-sm font-bold leading-tight tracking-tight sm:text-base"
            style={{ color, fontFamily: "Montserrat, sans-serif" }}
          >
            {style.display}
          </span>
          {style.subline && (
            <span className="mt-1 text-[10px] uppercase tracking-wider" style={{ color: "hsl(var(--muted-foreground))" }}>
              {style.subline}
            </span>
          )}
        </>
      )}
    </div>
  );
}

export default function BrandDirectory() {
  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="section-title">Eyewear & Retail Brands</h2>
        <span className="accent-line mx-auto" />
        <p className="section-subtitle mx-auto max-w-2xl">
          Designer and affordable frames at competitive prices, including our own brand SG Eyewear, launched in 2015.
        </p>
      </div>

      <Tabs defaultValue="men" className="w-full">
        <TabsList className="mx-auto mb-8 flex h-auto w-full max-w-2xl flex-wrap justify-center gap-1 bg-muted p-1">
          {groups.map((group) => (
            <TabsTrigger key={group.id} value={group.id} className="flex-1 min-w-[7rem] px-4 py-2">
              {group.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {groups.map((group) => (
          <TabsContent key={group.id} value={group.id} className="mt-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {group.brands.map((brand) => (
                <BrandTile key={brand} name={brand} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

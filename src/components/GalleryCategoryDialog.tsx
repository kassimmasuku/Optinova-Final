import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { GalleryCategory } from "@/data/galleryCategories";

interface GalleryCategoryDialogProps {
  category: GalleryCategory | null;
  imageSrc?: string;
  onClose: () => void;
}

export default function GalleryCategoryDialog({ category, imageSrc, onClose }: GalleryCategoryDialogProps) {
  return (
    <Dialog open={category !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-hidden flex flex-col sm:rounded-2xl p-0 gap-0">
        {category && (
          <>
            {imageSrc && (
              <div className="relative h-44 sm:h-52 overflow-hidden rounded-t-2xl">
                <img src={imageSrc} alt={category.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <DialogTitle
                    className="text-xl sm:text-2xl font-bold text-white"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {category.title}
                  </DialogTitle>
                </div>
              </div>
            )}
            {!imageSrc && (
              <DialogHeader className="px-6 pt-6 pb-2">
                <DialogTitle
                  className="text-xl font-bold"
                  style={{ color: "hsl(var(--primary))", fontFamily: "Montserrat, sans-serif" }}
                >
                  {category.title}
                </DialogTitle>
              </DialogHeader>
            )}
            <div className="overflow-y-auto px-6 py-4 flex-1">
              {!imageSrc && (
                <DialogDescription className="mb-4 text-sm">{category.summary}</DialogDescription>
              )}
              {imageSrc && (
                <p className="text-sm mb-5" style={{ color: "hsl(var(--muted-foreground))" }}>
                  {category.summary}
                </p>
              )}
              {category.id === "advanced-diagnostic-equipment" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="rounded-xl border overflow-hidden transition-shadow hover:shadow-md"
                      style={{ borderColor: "hsl(var(--border))" }}
                    >
                      {item.image && (
                        <div className="h-32 overflow-hidden bg-muted/30">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div className="p-3">
                        <div
                          className="font-semibold text-xs mb-1 leading-snug"
                          style={{ color: "hsl(var(--primary))", fontFamily: "Montserrat, sans-serif" }}
                        >
                          {item.name}
                        </div>
                        <p className="text-xs leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="p-4 rounded-xl border transition-colors hover:shadow-sm"
                      style={{ borderColor: "hsl(var(--border))", background: "hsl(var(--muted) / 0.3)" }}
                    >
                      <div
                        className="font-semibold text-sm mb-1"
                        style={{ color: "hsl(var(--primary))", fontFamily: "Montserrat, sans-serif" }}
                      >
                        {item.name}
                      </div>
                      <p className="text-xs leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

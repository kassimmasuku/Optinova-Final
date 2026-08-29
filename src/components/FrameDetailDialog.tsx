import { Link } from "react-router-dom";
import { Calendar, Layers, Shapes, Tag, User } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ContactActionButton } from "@/components/ContactActionButton";
import optinovaLogo from "@/assets/optinova-logo.png";
import { brandLogoPaths } from "@/lib/brandLogos";
import type { FrameProduct } from "@/data/frames";
import { getPromoLabel, getPromoStyle } from "@/data/frames";

interface FrameDetailDialogProps {
  frame: FrameProduct | null;
  onClose: () => void;
}

function SpecRow({ icon: Icon, label, value }: { icon: typeof Tag; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 py-2.5 border-b border-border last:border-0">
      <Icon className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="text-sm font-medium text-foreground">{value}</p>
      </div>
    </div>
  );
}

export default function FrameDetailDialog({ frame, onClose }: FrameDetailDialogProps) {
  const promoLabel = frame ? getPromoLabel(frame.promo) : null;
  const promoStyle = frame ? getPromoStyle(frame.promo) : undefined;
  const brandLogo = frame ? brandLogoPaths[frame.brand] : undefined;

  return (
    <Dialog open={frame !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-hidden flex flex-col sm:rounded-2xl p-0 gap-0">
        {frame && (
          <>
            <div className="relative h-52 sm:h-64 overflow-hidden rounded-t-2xl bg-muted">
              <img
                src={frame.img}
                alt={`${frame.name} — ${frame.brand}`}
                className="w-full h-full object-cover"
              />
              {promoLabel && promoStyle && (
                <span
                  className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold shadow-sm frame-promo-badge"
                  data-promo={frame.promo}
                  style={promoStyle}
                >
                  <Tag className="w-3 h-3" />
                  {promoLabel}
                </span>
              )}
            </div>

            <div className="overflow-y-auto px-6 py-5 space-y-5 flex-1">
              <DialogHeader className="text-left space-y-3">
                <div className="flex items-center gap-3">
                  {frame.brand === "Optinova" ? (
                    <img src={optinovaLogo} alt="Optinova" className="h-8 w-auto object-contain" />
                  ) : brandLogo ? (
                    <img src={brandLogo.src} alt={frame.brand} className="h-8 w-auto object-contain max-w-[120px]" />
                  ) : (
                    <span className="text-xs font-bold uppercase tracking-wide text-accent">{frame.brand}</span>
                  )}
                </div>
                <DialogTitle
                  className="text-xl font-bold text-primary"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {frame.name}
                </DialogTitle>
                <p className="text-sm leading-relaxed text-muted-foreground">{frame.desc}</p>
              </DialogHeader>

              <div className="rounded-xl border border-border bg-muted/30 px-4">
                <SpecRow icon={User} label="Category" value={frame.category} />
                <SpecRow icon={Shapes} label="Shape" value={frame.shape} />
                <SpecRow icon={Layers} label="Material" value={frame.material} />
                <SpecRow icon={Tag} label="Type" value={frame.type} />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <Link to="/book-appointment" className="btn-primary flex-1 text-center text-sm py-3">
                  <Calendar className="w-4 h-4 inline-block mr-2 -mt-0.5" />
                  Book a Fitting
                </Link>
                <ContactActionButton action="whatsapp" variant="whatsapp" className="flex-1 text-sm py-3">
                  Ask About This Frame
                </ContactActionButton>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

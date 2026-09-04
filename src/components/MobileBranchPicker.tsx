import { useState } from "react";
import { Check, ChevronDown, MapPin } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import type { Branch } from "@/data/branches";
import { formatBranchHoursSummary } from "@/data/branches";

interface MobileBranchPickerProps {
  branches: Branch[];
  selectedId: string;
  onSelect: (branch: Branch) => void;
}

export default function MobileBranchPicker({
  branches,
  selectedId,
  onSelect,
}: MobileBranchPickerProps) {
  const [open, setOpen] = useState(false);
  const selected = branches.find((branch) => branch.id === selectedId) ?? branches[0];

  const handleSelect = (branch: Branch) => {
    onSelect(branch);
    setOpen(false);
  };

  return (
    <div className="md:hidden mb-6">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="w-full rounded-2xl border p-4 text-left shadow-card transition-all duration-200 active:scale-[0.99]"
        style={{
          background: "hsl(var(--background))",
          borderColor: "hsl(var(--border))",
        }}
      >
        <div className="flex items-center gap-3">
          <div className="feature-icon shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div className="min-w-0 flex-1">
            <div
              className="text-xs font-semibold uppercase tracking-wider mb-0.5"
              style={{ color: "hsl(var(--accent))" }}
            >
              Select Branch
            </div>
            <div
              className="font-bold text-base truncate"
              style={{ color: "hsl(var(--primary))", fontFamily: "Montserrat, sans-serif" }}
            >
              {selected.name}
            </div>
            <p className="text-xs mt-0.5 truncate" style={{ color: "hsl(var(--muted-foreground))" }}>
              {selected.offer ? `${selected.offer} · ${selected.address}` : selected.address}
            </p>
          </div>
          <ChevronDown className="w-5 h-5 shrink-0" style={{ color: "hsl(var(--accent))" }} />
        </div>
      </button>

      <Drawer open={open} onOpenChange={setOpen} shouldScaleBackground={false}>
        <DrawerContent className="max-h-[85dvh] overflow-hidden">
          <DrawerHeader className="text-left px-5 pb-3 pt-2">
            <DrawerTitle
              className="text-xl font-bold"
              style={{ color: "hsl(var(--primary))", fontFamily: "Montserrat, sans-serif" }}
            >
              Select Branch
            </DrawerTitle>
            <DrawerDescription>
              Choose a location to view its address, hours, and contact details.
            </DrawerDescription>
          </DrawerHeader>

          <div className="overflow-y-auto overscroll-contain flex-1 min-h-0 px-4 pb-[max(2rem,env(safe-area-inset-bottom))] space-y-2">
            {branches.map((branch) => {
              const isSelected = branch.id === selected.id;
              return (
                <button
                  key={branch.id}
                  type="button"
                  onClick={() => handleSelect(branch)}
                  className="w-full text-left rounded-xl border p-4 transition-all duration-200"
                  style={{
                    borderColor: isSelected ? "hsl(var(--accent))" : "hsl(var(--border))",
                    background: isSelected ? "hsl(var(--accent-light))" : "hsl(var(--background))",
                  }}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-start gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="font-semibold text-sm"
                          style={{ color: "hsl(var(--primary))", fontFamily: "Montserrat, sans-serif" }}
                        >
                          {branch.name}
                        </span>
                        {branch.offer && <span className="badge-accent">{branch.offer}</span>}
                      </div>
                      <div className="flex items-start gap-2 text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
                        <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: "hsl(var(--accent))" }} />
                        <span>{branch.address}</span>
                      </div>
                      <p className="text-xs mt-1.5 pl-5" style={{ color: "hsl(var(--muted-foreground))" }}>
                        {formatBranchHoursSummary(branch.hours)}
                      </p>
                    </div>
                    {isSelected && (
                      <Check className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "hsl(var(--accent))" }} />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

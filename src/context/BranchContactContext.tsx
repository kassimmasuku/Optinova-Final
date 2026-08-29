import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import type { Branch } from "@/data/branches";
import { branches } from "@/data/branches";
import { getEmailLink, getTelLink, getWhatsAppLink } from "@/lib/contact";
import BranchSelectDialog from "@/components/BranchSelectDialog";

export type ContactAction = "call" | "whatsapp" | "email";

interface BranchContactContextValue {
  openBranchContact: (action: ContactAction) => void;
}

const BranchContactContext = createContext<BranchContactContextValue | null>(null);

export function BranchContactProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState<ContactAction>("call");

  const openBranchContact = useCallback((nextAction: ContactAction) => {
    setAction(nextAction);
    setOpen(true);
  }, []);

  const handleSelect = useCallback(
    (branch: Branch) => {
      setOpen(false);
      if (action === "call") {
        const link = getTelLink(branch);
        if (link) window.location.href = link;
      } else if (action === "whatsapp") {
        const link = getWhatsAppLink(branch);
        if (link) window.open(link, "_blank", "noopener,noreferrer");
      } else {
        window.location.href = getEmailLink(branch);
      }
    },
    [action],
  );

  return (
    <BranchContactContext.Provider value={{ openBranchContact }}>
      {children}
      <BranchSelectDialog
        open={open}
        onOpenChange={setOpen}
        action={action}
        branches={branches}
        onSelect={handleSelect}
      />
    </BranchContactContext.Provider>
  );
}

export function useBranchContact() {
  const ctx = useContext(BranchContactContext);
  if (!ctx) throw new Error("useBranchContact must be used within BranchContactProvider");
  return ctx;
}

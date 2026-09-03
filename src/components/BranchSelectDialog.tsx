import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Branch } from "@/data/branches";
import type { ContactAction } from "@/context/BranchContactContext";

const actionLabels: Record<ContactAction, { title: string; description: string; icon: typeof Phone }> = {
  call: {
    title: "Select a Branch",
    description: "Choose the branch you would like to call.",
    icon: Phone,
  },
  whatsapp: {
    title: "Select a Branch",
    description: "Choose the branch you would like to message on WhatsApp.",
    icon: MessageCircle,
  },
  email: {
    title: "Select a Branch",
    description: "Choose the branch you would like to email.",
    icon: Mail,
  },
};

interface BranchSelectDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  action: ContactAction;
  branches: Branch[];
  onSelect: (branch: Branch) => void;
}

export default function BranchSelectDialog({
  open,
  onOpenChange,
  action,
  branches,
  onSelect,
}: BranchSelectDialogProps) {
  const { title, description } = actionLabels[action];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[85vh] overflow-hidden flex flex-col sm:rounded-2xl p-0 gap-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b" style={{ borderColor: "hsl(var(--border))" }}>
          <DialogTitle
            className="text-xl font-bold"
            style={{ color: "hsl(var(--primary))", fontFamily: "Montserrat, sans-serif" }}
          >
            {title}
          </DialogTitle>
          <DialogDescription className="text-sm">{description}</DialogDescription>
        </DialogHeader>

        <div className="overflow-y-auto px-4 py-3 space-y-2 flex-1">
          {branches.map((branch) => (
            <button
              key={branch.id}
              type="button"
              onClick={() => onSelect(branch)}
              className="w-full text-left p-4 rounded-xl border transition-all duration-200 hover:shadow-md hover:border-accent group"
              style={{
                borderColor: "hsl(var(--border))",
                background: "hsl(var(--background))",
              }}
            >
              <div
                className="font-semibold text-sm mb-1 group-hover:text-accent transition-colors"
                style={{ color: "hsl(var(--primary))", fontFamily: "Montserrat, sans-serif" }}
              >
                {branch.full}
              </div>
              {branch.offer && <div className="badge-accent mb-2 w-fit">{branch.offer}</div>}
              <div className="flex items-start gap-2 text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
                <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: "hsl(var(--accent))" }} />
                <span>{branch.address}</span>
              </div>
              <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
                {branch.telephone && <span>📞 {branch.telephone}</span>}
                {branch.voipTelephone && <span>📞 VoIP: {branch.voipTelephone}</span>}
                {branch.mobile && <span>📱 {branch.mobile}</span>}
              </div>
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

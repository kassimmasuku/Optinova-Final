import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { branches } from "@/data/branches";
import { teamMembers, teamGroups, getTeamByGroup } from "@/data/team";
import {
  equipmentShowcase,
  patientCareHighlights,
  affordableHighlights,
  appointmentHours,
  type WhyChooseBenefit,
} from "@/data/whyChooseBenefits";
import { getEmailLink, getTelLink, getWhatsAppLink } from "@/lib/contact";
import equipmentHeroImg from "@/assets/eye-equipment.jpg";

interface WhyChooseBenefitDialogProps {
  benefit: WhyChooseBenefit | null;
  onClose: () => void;
}

export default function WhyChooseBenefitDialog({ benefit, onClose }: WhyChooseBenefitDialogProps) {
  return (
    <Dialog open={benefit !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-hidden flex flex-col sm:rounded-2xl p-0 gap-0">
        {benefit && (
          <>
            {(benefit.type === "equipment" || benefit.type === "care" || benefit.type === "affordable") && (
              <div className="relative h-44 sm:h-52 overflow-hidden rounded-t-2xl shrink-0">
                <img
                  src={benefit.type === "equipment" ? equipmentHeroImg : benefit.type === "care" ? patientCareHighlights[0].image : affordableHighlights[0].image}
                  alt={benefit.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <DialogTitle
                    className="text-xl sm:text-2xl font-bold text-white"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {benefit.title}
                  </DialogTitle>
                </div>
              </div>
            )}

            {benefit.type !== "equipment" && benefit.type !== "care" && benefit.type !== "affordable" && (
              <DialogHeader className="px-6 pt-6 pb-2 shrink-0">
                <DialogTitle
                  className="text-xl font-bold"
                  style={{ color: "hsl(var(--primary))", fontFamily: "Montserrat, sans-serif" }}
                >
                  {benefit.title}
                </DialogTitle>
                <DialogDescription className="text-sm">{benefit.summary}</DialogDescription>
              </DialogHeader>
            )}

            <div className="overflow-y-auto px-6 py-4 flex-1">
              {(benefit.type === "equipment" || benefit.type === "care" || benefit.type === "affordable") && (
                <p className="text-sm mb-5" style={{ color: "hsl(var(--muted-foreground))" }}>
                  {benefit.summary}
                </p>
              )}

              {benefit.type === "equipment" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {equipmentShowcase.map((item) => (
                    <div
                      key={item.name}
                      className="rounded-xl border overflow-hidden transition-shadow hover:shadow-md"
                      style={{ borderColor: "hsl(var(--border))" }}
                    >
                      <div className="h-32 overflow-hidden bg-muted/30">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
                      </div>
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
              )}

              {benefit.type === "branches" && (
                <div className="space-y-3">
                  {branches.map((branch) => (
                    <div
                      key={branch.id}
                      className="p-4 rounded-xl border"
                      style={{ borderColor: "hsl(var(--border))", background: "hsl(var(--muted) / 0.3)" }}
                    >
                      <div
                        className="font-semibold text-sm mb-1"
                        style={{ color: "hsl(var(--primary))", fontFamily: "Montserrat, sans-serif" }}
                      >
                        {branch.full}
                      </div>
                      <div className="flex items-start gap-2 text-xs mb-2" style={{ color: "hsl(var(--muted-foreground))" }}>
                        <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: "hsl(var(--accent))" }} />
                        {branch.address}
                      </div>
                      <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs mb-2" style={{ color: "hsl(var(--muted-foreground))" }}>
                        {branch.telephone && <span className="flex items-center gap-1"><Phone className="w-3 h-3" />{branch.telephone}</span>}
                        {branch.voipTelephone && <span className="flex items-center gap-1"><Phone className="w-3 h-3" />VoIP: {branch.voipTelephone}</span>}
                        {branch.mobile && <span className="flex items-center gap-1"><Phone className="w-3 h-3" />{branch.mobile}</span>}
                      </div>
                      <div className="flex items-center gap-1 text-xs mb-2">
                        <Mail className="w-3 h-3" style={{ color: "hsl(var(--accent))" }} />
                        <a href={getEmailLink(branch)} className="hover:underline" style={{ color: "hsl(var(--accent))" }}>{branch.email}</a>
                      </div>
                      <div className="flex items-start gap-1 text-xs mb-3" style={{ color: "hsl(var(--muted-foreground))" }}>
                        <Clock className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: "hsl(var(--accent))" }} />
                        <span>Mon–Fri {branch.hours.weekdays} · Sat {branch.hours.saturday}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {getTelLink(branch) && (
                          <a href={getTelLink(branch)!} className="text-xs font-semibold px-2.5 py-1 rounded-full border" style={{ borderColor: "hsl(var(--border))", color: "hsl(var(--primary))" }}>Call</a>
                        )}
                        {getWhatsAppLink(branch) && (
                          <a href={getWhatsAppLink(branch)!} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold px-2.5 py-1 rounded-full border" style={{ borderColor: "hsl(var(--accent))", color: "hsl(var(--accent))" }}>WhatsApp</a>
                        )}
                        <a
                          href={`https://maps.google.com/?q=${encodeURIComponent(branch.query)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold inline-flex items-center gap-1"
                          style={{ color: "hsl(var(--accent))" }}
                        >
                          Map <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {benefit.type === "team" && (
                <div className="space-y-6">
                  {teamGroups.map((group) => {
                    const members = getTeamByGroup(group);
                    if (members.length === 0) return null;
                    return (
                      <div key={group}>
                        <h4 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "hsl(var(--accent))", fontFamily: "Montserrat, sans-serif" }}>
                          {group}
                        </h4>
                        <div className="space-y-2">
                          {members.map((m) => (
                            <div key={m.id} className="flex items-center gap-3 p-3 rounded-xl border" style={{ borderColor: "hsl(var(--border))" }}>
                              <img src={m.photo} alt={m.name} className="w-10 h-10 rounded-full object-cover object-top" />
                              <div>
                                <div className="font-semibold text-sm" style={{ color: "hsl(var(--primary))", fontFamily: "Montserrat, sans-serif" }}>{m.name}</div>
                                <div className="text-xs" style={{ color: "hsl(var(--accent))" }}>{m.role}</div>
                                <div className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>{m.experience}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                  <p className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
                    {teamMembers.length} dedicated professionals across our branch network.
                  </p>
                </div>
              )}

              {benefit.type === "care" && (
                <div className="space-y-4">
                  {patientCareHighlights.map((item) => (
                    <div key={item.title} className="rounded-xl border overflow-hidden" style={{ borderColor: "hsl(var(--border))" }}>
                      <div className="h-36 overflow-hidden">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                      <div className="p-4">
                        <div className="font-semibold text-sm mb-1" style={{ color: "hsl(var(--primary))", fontFamily: "Montserrat, sans-serif" }}>{item.title}</div>
                        <p className="text-xs leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {benefit.type === "affordable" && (
                <div className="space-y-4">
                  {affordableHighlights.map((item) => (
                    <div key={item.title} className="rounded-xl border overflow-hidden" style={{ borderColor: "hsl(var(--border))" }}>
                      <div className="h-36 overflow-hidden">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                      <div className="p-4">
                        <div className="font-semibold text-sm mb-1" style={{ color: "hsl(var(--primary))", fontFamily: "Montserrat, sans-serif" }}>{item.title}</div>
                        <p className="text-xs leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {benefit.type === "hours" && (
                <div className="space-y-3">
                  {appointmentHours.map((h) => (
                    <div key={h.label} className="flex items-start justify-between gap-4 p-4 rounded-xl border" style={{ borderColor: "hsl(var(--border))", background: "hsl(var(--muted) / 0.3)" }}>
                      <div>
                        <div className="font-semibold text-sm" style={{ color: "hsl(var(--primary))", fontFamily: "Montserrat, sans-serif" }}>{h.label}</div>
                        <div className="text-xs mt-0.5" style={{ color: "hsl(var(--muted-foreground))" }}>{h.note}</div>
                      </div>
                      <div className="text-sm font-medium text-right shrink-0" style={{ color: h.time === "Closed" ? "hsl(var(--destructive))" : "hsl(var(--accent))" }}>
                        {h.time}
                      </div>
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

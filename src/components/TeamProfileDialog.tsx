import { Award, Briefcase, Clock, GraduationCap } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { TeamMember } from "@/data/team";
import TeamAvatar from "@/components/TeamAvatar";

interface TeamProfileDialogProps {
  member: TeamMember | null;
  onClose: () => void;
}

export default function TeamProfileDialog({ member, onClose }: TeamProfileDialogProps) {
  return (
    <Dialog open={member !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-lg h-[min(90vh,680px)] max-h-[90vh] overflow-hidden flex flex-col sm:rounded-2xl p-0 gap-0">
        {member && (
          <>
            <div className="h-[32%] min-h-[150px] max-h-[220px] shrink-0 rounded-t-2xl bg-muted/40 flex items-center justify-center px-4 py-4">
              {member.photo ? (
                <img
                  src={member.photo}
                  alt={member.name}
                  className="max-h-full max-w-[85%] object-contain rounded-2xl shadow-md"
                />
              ) : (
                <TeamAvatar member={member} size="lg" />
              )}
            </div>

            <div className="flex-1 min-h-0 overflow-y-auto px-6 py-5 space-y-5">
              <DialogHeader className="text-left space-y-1">
                <DialogTitle
                  className="text-xl sm:text-2xl font-bold"
                  style={{ color: "hsl(var(--primary))", fontFamily: "Montserrat, sans-serif" }}
                >
                  {member.name}
                </DialogTitle>
                <p className="text-sm font-medium" style={{ color: "hsl(var(--accent))" }}>
                  {member.role}
                </p>
              </DialogHeader>

              <div className="h-px bg-border" />
              <div className="flex items-center gap-2 text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
                <Clock className="w-4 h-4 flex-shrink-0" style={{ color: "hsl(var(--accent))" }} />
                <span>{member.experience}</span>
              </div>

              {member.qualifications.length > 0 && (
                <div>
                  <h4
                    className="text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2"
                    style={{ color: "hsl(var(--primary))", fontFamily: "Montserrat, sans-serif" }}
                  >
                    <GraduationCap className="w-3.5 h-3.5" /> Qualifications
                  </h4>
                  <ul className="space-y-1.5">
                    {member.qualifications.map((q) => (
                      <li key={q} className="text-xs leading-relaxed flex items-start gap-2" style={{ color: "hsl(var(--muted-foreground))" }}>
                        <span className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5" style={{ background: "hsl(var(--accent))" }} />
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h4
                  className="text-xs font-bold uppercase tracking-wider mb-2"
                  style={{ color: "hsl(var(--primary))", fontFamily: "Montserrat, sans-serif" }}
                >
                  Areas of Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  {member.areasOfExpertise.map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ background: "hsl(var(--accent-light))", color: "hsl(var(--primary))" }}
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {member.awards && member.awards.length > 0 && (
                <div>
                  <h4
                    className="text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2"
                    style={{ color: "hsl(var(--primary))", fontFamily: "Montserrat, sans-serif" }}
                  >
                    <Award className="w-3.5 h-3.5" /> Awards & Recognition
                  </h4>
                  <ul className="space-y-1.5">
                    {member.awards.map((award) => (
                      <li key={award} className="text-xs leading-relaxed flex items-start gap-2" style={{ color: "hsl(var(--muted-foreground))" }}>
                        <span className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5" style={{ background: "hsl(var(--accent))" }} />
                        {award}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h4
                  className="text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2"
                  style={{ color: "hsl(var(--primary))", fontFamily: "Montserrat, sans-serif" }}
                >
                  <Briefcase className="w-3.5 h-3.5" /> Professional Background
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                  {member.biography}
                </p>
              </div>

              <div
                className="p-3 rounded-xl text-xs"
                style={{ background: "hsl(var(--muted))", color: "hsl(var(--muted-foreground))" }}
              >
                <span className="font-semibold" style={{ color: "hsl(var(--foreground))" }}>Team:</span>{" "}
                {member.group}
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

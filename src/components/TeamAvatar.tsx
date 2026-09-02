import { cn } from "@/lib/utils";
import type { TeamMember } from "@/data/team";

const sizeClass = {
  sm: "w-10 h-10",
  md: "w-12 h-12",
  lg: "w-28 h-28",
} as const;

const iconClass = {
  sm: "w-6 h-6",
  md: "w-7 h-7",
  lg: "w-16 h-16",
} as const;

function MaleSilhouette({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M4.5 20.2c.4-3.6 3.5-6.2 7.5-6.2s7.1 2.6 7.5 6.2c.05.5-.35.8-.8.8H5.3c-.45 0-.85-.3-.8-.8Z" />
    </svg>
  );
}

function FemaleSilhouette({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.8 12.2c-.5-1.8-.2-4.6 1.5-6.2C9.4 5 10.6 4.5 12 4.5s2.6.5 3.7 1.5c1.7 1.6 2 4.4 1.5 6.2-.2.7-1.1.6-1.2-.1-.2-1.2-.8-2.6-2.1-3.2-.6-.3-1.2-.4-1.9-.4s-1.3.1-1.9.4c-1.3.6-1.9 2-2.1 3.2-.1.7-1 .8-1.2.1Z" />
      <circle cx="12" cy="9.2" r="3.15" />
      <path d="M5.2 20.5c.5-3.3 3.2-5.6 6.8-5.6s6.3 2.3 6.8 5.6c.07.5-.33.9-.83.9H6.03c-.5 0-.9-.4-.83-.9Z" />
    </svg>
  );
}

interface TeamAvatarProps {
  member: TeamMember;
  size?: keyof typeof sizeClass;
  className?: string;
}

export default function TeamAvatar({ member, size = "md", className }: TeamAvatarProps) {
  if (member.photo) {
    return (
      <img
        src={member.photo}
        alt={member.name}
        className={cn(sizeClass[size], "rounded-full object-cover object-top", className)}
      />
    );
  }

  return (
    <div
      className={cn(
        sizeClass[size],
        "rounded-full flex items-center justify-center shrink-0",
        className,
      )}
      style={{ background: "hsl(var(--accent-light))", color: "hsl(var(--primary))" }}
      aria-hidden="true"
    >
      {member.avatar === "female" ? (
        <FemaleSilhouette className={iconClass[size]} />
      ) : (
        <MaleSilhouette className={iconClass[size]} />
      )}
    </div>
  );
}

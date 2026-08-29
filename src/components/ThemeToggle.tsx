import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface ThemeToggleProps {
  className?: string;
  variant?: "navbar" | "default";
}

export default function ThemeToggle({ className = "", variant = "default" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const baseStyles =
    variant === "navbar"
      ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
      : "border-border bg-background text-foreground hover:bg-muted";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold transition-all duration-200 ${baseStyles} ${className}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {isDark ? (
        <>
          <Sun className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Light</span>
        </>
      ) : (
        <>
          <Moon className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Dark</span>
        </>
      )}
    </button>
  );
}

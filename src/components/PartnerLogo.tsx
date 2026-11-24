import type { ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type PartnerLogoProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
} & Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt" | "className">;

/** Theme-aware surface for medical-aid and frame brand logos. Stays light in dark mode. */
export default function PartnerLogo({ src, alt, className, imgClassName, ...imgProps }: PartnerLogoProps) {
  return (
    <span className={cn("partner-logo", className)}>
      <img src={src} alt={alt} className={cn("partner-logo-img", imgClassName)} {...imgProps} />
    </span>
  );
}

import { Children, cloneElement, isValidElement, useMemo, type ReactElement, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface LogoMarqueeProps {
  children: ReactNode;
  /** Seconds for one full loop */
  duration?: number;
  className?: string;
  trackClassName?: string;
  /** Duplicate items for seamless infinite scroll */
  duplicate?: boolean;
}

function cloneWithSuffix(node: ReactNode, suffix: string, index: number): ReactNode {
  if (!isValidElement(node)) return node;
  const el = node as ReactElement<{ key?: string | number }>;
  const key = el.key != null ? `${el.key}${suffix}` : `${suffix}-${index}`;
  return cloneElement(el, { key });
}

export default function LogoMarquee({
  children,
  duration = 45,
  className,
  trackClassName,
  duplicate = true,
}: LogoMarqueeProps) {
  const style = useMemo(
    () => ({ ["--marquee-duration" as string]: `${duration}s` }),
    [duration],
  );

  const items = Children.toArray(children);
  const duplicateItems = items.map((child, index) => cloneWithSuffix(child, "-dup", index));

  return (
    <div
      className={cn("logo-marquee relative overflow-hidden", className)}
      style={style}
    >
      <div
        className={cn(
          "logo-marquee-track flex w-max items-stretch gap-4",
          trackClassName,
        )}
      >
        <div className="flex shrink-0 items-stretch gap-4">{items}</div>
        {duplicate && (
          <div className="flex shrink-0 items-stretch gap-4" aria-hidden="true">
            {duplicateItems}
          </div>
        )}
      </div>
    </div>
  );
}

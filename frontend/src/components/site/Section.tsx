import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-3 text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]/90">
      <span className="w-8 h-px bg-[var(--gold)]/50" />
      {children}
      <span className="w-8 h-px bg-[var(--gold)]/50" />
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={cn(align === "center" ? "text-center" : "text-left", "max-w-2xl", align === "center" && "mx-auto", className)}
    >
      {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
      <h2 className="mt-4 text-4xl md:text-5xl font-display leading-tight">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </motion.div>
  );
}

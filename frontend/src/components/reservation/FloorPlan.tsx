import { motion } from "framer-motion";
import { type TableCell } from "@/lib/api";
import { cn } from "@/lib/utils";

export function FloorPlan({
  zone,
  selectedId,
  onSelect,
  guests,
  tables: tablesProp,
}: {
  zone: "indoor" | "outdoor";
  selectedId?: string;
  onSelect: (t: TableCell) => void;
  guests: number;
  tables: TableCell[];
}) {
  const tables = tablesProp.filter((t) => t.zone === zone);
  return (
    <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden glass">
      {/* floor pattern */}
      <div className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(0deg, transparent 24%, oklch(0.82 0.14 85 / 0.06) 25%, oklch(0.82 0.14 85 / 0.06) 26%, transparent 27%, transparent 74%, oklch(0.82 0.14 85 / 0.06) 75%, oklch(0.82 0.14 85 / 0.06) 76%, transparent 77%), linear-gradient(90deg, transparent 24%, oklch(0.82 0.14 85 / 0.06) 25%, oklch(0.82 0.14 85 / 0.06) 26%, transparent 27%, transparent 74%, oklch(0.82 0.14 85 / 0.06) 75%, oklch(0.82 0.14 85 / 0.06) 76%, transparent 77%)",
          backgroundSize: "80px 80px",
        }}
      />
      {/* Kitchen / entrance labels */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-[var(--gold)]/80">
        {zone === "indoor" ? "— Main Dining Hall —" : "— Terrace Garden —"}
      </div>
      <div className="absolute bottom-3 right-4 text-[10px] uppercase tracking-widest text-muted-foreground">Kitchen</div>
      <div className="absolute bottom-3 left-4 text-[10px] uppercase tracking-widest text-muted-foreground">Entrance</div>

      {tables.map((t) => {
        const isSelected = selectedId === t.id;
        const isReserved = t.status === "reserved";
        const tooSmall = t.seats < guests;
        const disabled = isReserved || tooSmall;
        const size = t.seats <= 2 ? 60 : t.seats <= 4 ? 76 : t.seats <= 6 ? 92 : 108;

        return (
          <motion.button
            key={t.id}
            whileHover={disabled ? {} : { scale: 1.08 }}
            whileTap={disabled ? {} : { scale: 0.96 }}
            disabled={disabled}
            onClick={() => onSelect(t)}
            style={{ left: `${t.x}%`, top: `${t.y}%`, width: size, height: size }}
            className={cn(
              "absolute -translate-x-1/2 -translate-y-1/2 rounded-full grid place-items-center text-xs font-medium border-2 transition",
              t.seats === 8 ? "rounded-2xl" : "",
              isSelected && "bg-[var(--gold)] border-[var(--gold-light)] text-black shadow-[0_0_0_6px_oklch(0.82_0.14_85_/_0.25)]",
              !isSelected && !isReserved && !tooSmall && "bg-[oklch(0.72_0.17_145_/_0.2)] border-[oklch(0.72_0.17_145_/_0.7)] text-[oklch(0.85_0.16_145)] hover:bg-[oklch(0.72_0.17_145_/_0.35)]",
              !isSelected && isReserved && "bg-[oklch(0.62_0.22_25_/_0.2)] border-[oklch(0.62_0.22_25_/_0.6)] text-[oklch(0.75_0.2_25)] cursor-not-allowed",
              !isSelected && !isReserved && tooSmall && "bg-muted/30 border-muted-foreground/30 text-muted-foreground cursor-not-allowed opacity-60"
            )}
          >
            <div className="text-center leading-tight">
              <div className="font-display text-sm">{t.id}</div>
              <div className="text-[10px] opacity-80">{t.seats} seats</div>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}

export function Legend() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
      <LegendDot color="oklch(0.72 0.17 145)" label="Available" />
      <LegendDot color="oklch(0.62 0.22 25)" label="Reserved" />
      <LegendDot color="oklch(0.82 0.14 85)" label="Selected" />
    </div>
  );
}
function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-3.5 h-3.5 rounded-full border" style={{ background: `${color} / 0.25`, borderColor: color, backgroundColor: `color-mix(in oklab, ${color} 25%, transparent)` }} />
      <span className="text-muted-foreground">{label}</span>
    </div>
  );
}

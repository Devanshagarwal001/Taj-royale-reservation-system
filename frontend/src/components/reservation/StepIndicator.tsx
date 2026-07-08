import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function StepIndicator({ step, steps }: { step: number; steps: string[] }) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        {steps.map((label, i) => {
          const idx = i + 1;
          const done = idx < step;
          const active = idx === step;
          return (
            <div key={label} className="flex-1 flex items-center">
              <div className="flex flex-col items-center gap-2 min-w-fit">
                <motion.div
                  animate={{ scale: active ? 1.08 : 1 }}
                  className={cn(
                    "relative w-11 h-11 rounded-full grid place-items-center border transition",
                    done ? "bg-[var(--gold)] border-[var(--gold)] text-black" :
                    active ? "btn-gold border-transparent" :
                    "border-[var(--gold)]/30 text-muted-foreground"
                  )}
                >
                  {done ? <Check className="w-5 h-5" /> : <span className="text-sm font-medium">{idx}</span>}
                  {active && (
                    <span className="absolute inset-0 rounded-full ring-2 ring-[var(--gold)]/40 animate-ping" />
                  )}
                </motion.div>
                <span className={cn("text-[10px] tracking-widest uppercase whitespace-nowrap", active ? "text-[var(--gold)]" : "text-muted-foreground")}>{label}</span>
              </div>
              {i < steps.length - 1 && (
                <div className="flex-1 h-px mx-3 relative">
                  <div className="absolute inset-0 bg-[var(--gold)]/15" />
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: done ? 1 : 0 }}
                    style={{ originX: 0 }}
                    className="absolute inset-0 bg-[var(--gold)]"
                    transition={{ duration: 0.5 }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

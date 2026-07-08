import { AnimatePresence, motion } from "framer-motion";
import { Star, X, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Dish } from "@/lib/mock-data";

export function DishModal({ dish, onClose }: { dish: Dish | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {dish && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative glass gold-border rounded-3xl overflow-hidden max-w-4xl w-full max-h-[88vh] overflow-y-auto grid md:grid-cols-2"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full grid place-items-center bg-black/50 backdrop-blur border border-white/10 text-white hover:text-[var(--gold)] transition"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative h-64 md:h-full">
              <img src={dish.image} alt={dish.name} className="w-full h-full object-cover" />
              {dish.tag && (
                <div className="absolute top-4 left-4 text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-black/60 text-[var(--gold)] border border-[var(--gold)]/40">
                  {dish.tag}
                </div>
              )}
            </div>

            <div className="p-8 md:p-10 flex flex-col">
              <div className="flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]">
                <span className="w-8 h-px bg-[var(--gold)]/50" /> {dish.category}
              </div>
              <h2 className="mt-4 text-3xl md:text-4xl font-display">{dish.name}</h2>
              <div className="mt-2 flex items-center gap-1 text-sm text-[var(--gold)]">
                <Star className="w-4 h-4 fill-current" /> {dish.rating}
              </div>

              <p className="mt-5 text-muted-foreground leading-relaxed">{dish.description}</p>

              {dish.story && (
                <div className="mt-6 pl-5 border-l border-[var(--gold)]/40">
                  <div className="text-[10px] uppercase tracking-widest text-[var(--gold)] mb-2">The Preparation</div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{dish.story}</p>
                </div>
              )}

              <div className="mt-auto pt-8 flex items-center justify-between">
                <span className="font-display text-3xl gold-text">₹{dish.price}</span>
                <Link
                  to="/reservation"
                  className="group inline-flex items-center gap-2 rounded-full btn-gold px-6 py-3 text-sm font-medium hover:btn-gold-hover"
                >
                  Reserve to Taste
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
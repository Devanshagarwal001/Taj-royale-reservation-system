import { Link, useRouterState } from "@tanstack/react-router";
import { CalendarHeart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingReserve() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname.startsWith("/reservation") || pathname.startsWith("/admin") || pathname.startsWith("/dashboard")) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="fixed z-40 bottom-6 right-6"
      >
        <Link
          to="/reservation"
          className="group flex items-center gap-2 rounded-full btn-gold px-5 py-3 text-sm font-medium shadow-xl hover:btn-gold-hover"
        >
          <CalendarHeart className="w-4 h-4 transition-transform group-hover:rotate-12" />
          Reserve a Table
        </Link>
      </motion.div>
    </AnimatePresence>
  );
}

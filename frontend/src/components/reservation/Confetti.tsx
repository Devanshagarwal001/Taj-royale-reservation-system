import { motion } from "framer-motion";
import { useMemo } from "react";

export function Confetti() {
  const bits = useMemo(() => {
    return Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 0.6,
      duration: 3 + Math.random() * 2.5,
      rotate: Math.random() * 360,
      size: 6 + Math.random() * 8,
      color: ["#e6c565", "#f5deb3", "#c9a54c", "#ffffff", "#8b6f2b"][Math.floor(Math.random() * 5)],
    }));
  }, []);
  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      {bits.map((b) => (
        <motion.span
          key={b.id}
          initial={{ y: -40, x: `${b.x}vw`, rotate: b.rotate, opacity: 0 }}
          animate={{ y: "110vh", rotate: b.rotate + 720, opacity: [0, 1, 1, 0] }}
          transition={{ duration: b.duration, delay: b.delay, ease: "easeIn" }}
          className="absolute block rounded-sm"
          style={{ width: b.size, height: b.size * 0.4, background: b.color }}
        />
      ))}
    </div>
  );
}

// import { createFileRoute } from "@tanstack/react-router";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import { X, ChevronLeft, ChevronRight } from "lucide-react";
// import { GALLERY_IMAGES } from "@/lib/mock-data";
// import { SectionHeading } from "@/components/site/Section";

// export const Route = createFileRoute("/gallery")({
//   component: GalleryPage,
//   head: () => ({ meta: [{ title: "Gallery — Maison Aurée" }, { name: "description", content: "A visual tour of Maison Aurée's cuisine and interiors." }] }),
// });

// function GalleryPage() {
//   const [idx, setIdx] = useState<number | null>(null);
//   const open = idx !== null;
//   const close = () => setIdx(null);
//   const prev = () => setIdx((i) => (i === null ? null : (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length));
//   const next = () => setIdx((i) => (i === null ? null : (i + 1) % GALLERY_IMAGES.length));

//   return (
//     <div className="pt-32 pb-20 px-6 lg:px-10 max-w-7xl mx-auto">
//       <SectionHeading eyebrow="Gallery" title={<>The <span className="gold-text italic">Aurée</span> archive</>} subtitle="Cuisine, atmosphere, private events — the story of a century, one image at a time." />

//       <div className="mt-14 columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
//         {GALLERY_IMAGES.map((img, i) => (
//           <motion.button
//             key={i}
//             initial={{ opacity: 0, y: 16 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: (i % 6) * 0.05 }}
//             onClick={() => setIdx(i)}
//             className="mb-4 block break-inside-avoid w-full rounded-2xl overflow-hidden group relative"
//           >
//             <img src={img.src} alt={img.caption} className="w-full h-auto object-cover transition duration-700 group-hover:scale-110" loading="lazy" />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
//               <span className="text-white text-sm font-display">{img.caption}</span>
//             </div>
//           </motion.button>
//         ))}
//       </div>

//       <AnimatePresence>
//         {open && idx !== null && (
//           <motion.div
//             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl grid place-items-center p-4"
//             onClick={close}
//           >
//             <button onClick={close} className="absolute top-6 right-6 w-11 h-11 rounded-full grid place-items-center border border-white/20 text-white hover:bg-white/10"><X /></button>
//             <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-6 w-11 h-11 rounded-full grid place-items-center border border-white/20 text-white hover:bg-white/10"><ChevronLeft /></button>
//             <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-6 w-11 h-11 rounded-full grid place-items-center border border-white/20 text-white hover:bg-white/10"><ChevronRight /></button>
//             <motion.img
//               key={idx}
//               initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
//               src={GALLERY_IMAGES[idx].src}
//               alt={GALLERY_IMAGES[idx].caption}
//               className="max-w-[92vw] max-h-[80vh] object-contain rounded-2xl shadow-2xl"
//               onClick={(e) => e.stopPropagation()}
//             />
//             <div className="mt-4 text-white/80 text-sm">{GALLERY_IMAGES[idx].caption}</div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY_IMAGES } from "@/lib/mock-data";
import { SectionHeading } from "@/components/site/Section";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({ meta: [{ title: "Gallery — Taj Royale" }, { name: "description", content: "A visual tour of Taj Royale's royal Indian cuisine and interiors." }] }),
});

function GalleryPage() {
  const [idx, setIdx] = useState<number | null>(null);
  const open = idx !== null;
  const close = () => setIdx(null);
  const prev = () => setIdx((i) => (i === null ? null : (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length));
  const next = () => setIdx((i) => (i === null ? null : (i + 1) % GALLERY_IMAGES.length));

  return (
    <div className="pt-32 pb-20 px-6 lg:px-10 max-w-7xl mx-auto">
      <SectionHeading eyebrow="Gallery" title={<>The <span className="gold-text italic">Taj Royale</span> archive</>} subtitle="Cuisine, ambience, royal celebrations — the story of India's finest flavours, one image at a time." />

      <div className="mt-14 columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
        {GALLERY_IMAGES.map((img, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 6) * 0.05 }}
            onClick={() => setIdx(i)}
            className="mb-4 block break-inside-avoid w-full rounded-2xl overflow-hidden group relative"
          >
            <img src={img.src} alt={img.caption} className="w-full h-auto object-cover transition duration-700 group-hover:scale-110" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
              <span className="text-white text-sm font-display">{img.caption}</span>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {open && idx !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl grid place-items-center p-4"
            onClick={close}
          >
            <button onClick={close} className="absolute top-6 right-6 w-11 h-11 rounded-full grid place-items-center border border-white/20 text-white hover:bg-white/10"><X /></button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-6 w-11 h-11 rounded-full grid place-items-center border border-white/20 text-white hover:bg-white/10"><ChevronLeft /></button>
            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-6 w-11 h-11 rounded-full grid place-items-center border border-white/20 text-white hover:bg-white/10"><ChevronRight /></button>
            <motion.img
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              src={GALLERY_IMAGES[idx].src}
              alt={GALLERY_IMAGES[idx].caption}
              className="max-w-[92vw] max-h-[80vh] object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="mt-4 text-white/80 text-sm">{GALLERY_IMAGES[idx].caption}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
// import { createFileRoute } from "@tanstack/react-router";
// import { motion } from "framer-motion";
// import { Heart, Search, Star, SlidersHorizontal } from "lucide-react";
// import { useMemo, useState } from "react";
// import toast from "react-hot-toast";
// import { CATEGORIES, DISHES } from "@/lib/mock-data";
// import { SectionHeading } from "@/components/site/Section";
// import { cn } from "@/lib/utils";

// export const Route = createFileRoute("/menu")({
//   component: MenuPage,
//   head: () => ({ meta: [{ title: "Menu — Maison Aurée" }, { name: "description", content: "Seasonal tasting menu at Maison Aurée." }] }),
// });

// function MenuPage() {
//   const [cat, setCat] = useState("All");
//   const [q, setQ] = useState("");
//   const [sort, setSort] = useState<"popular" | "price-asc" | "price-desc" | "rating">("popular");
//   const [favs, setFavs] = useState<Record<string, boolean>>({});

//   const dishes = useMemo(() => {
//     let list = [...DISHES];
//     if (cat !== "All") list = list.filter((d) => d.category === cat);
//     if (q) list = list.filter((d) => d.name.toLowerCase().includes(q.toLowerCase()));
//     if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
//     if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
//     if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
//     return list;
//   }, [cat, q, sort]);

//   return (
//     <div className="pt-32 pb-24 px-6 lg:px-10 max-w-7xl mx-auto">
// <SectionHeading
//   eyebrow="Taste of India"
//   title={<>Royal <span className="gold-text italic">Indian Cuisine</span></>}
//   subtitle="Every dish at Taj Royale is prepared with authentic Indian spices, fresh ingredients, and traditional recipes, offering an unforgettable fine dining experience."
// />
//       <div className="mt-12 glass rounded-2xl p-4 md:p-5 flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
//         <div className="flex-1 flex items-center gap-3 rounded-full bg-background/50 border border-[var(--gold)]/25 px-4">
//           <Search className="w-4 h-4 text-muted-foreground" />
//           <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search dishes..." className="flex-1 bg-transparent py-2.5 text-sm outline-none placeholder:text-muted-foreground" />
//         </div>
//         <div className="flex items-center gap-2">
//           <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
//           <select value={sort} onChange={(e) => setSort(e.target.value as any)} className="bg-background/50 border border-[var(--gold)]/25 rounded-full px-4 py-2.5 text-sm outline-none">
//             <option value="popular">Sort: Popular</option>
//             <option value="rating">Highest Rated</option>
//             <option value="price-asc">Price: Low to High</option>
//             <option value="price-desc">Price: High to Low</option>
//           </select>
//         </div>
//       </div>

//       <div className="mt-6 flex flex-wrap gap-2">
//         {CATEGORIES.map((c) => (
//           <button key={c} onClick={() => setCat(c)} className={cn(
//             "rounded-full px-5 py-2 text-xs tracking-widest uppercase transition border",
//             cat === c ? "btn-gold border-transparent" : "border-[var(--gold)]/25 text-foreground/80 hover:border-[var(--gold)]/60 hover:text-[var(--gold)]"
//           )}>{c}</button>
//         ))}
//       </div>

//       <motion.div layout className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//         {dishes.map((d, i) => (
//           <motion.div
//             layout
//             key={d.id}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.04 }}
//             whileHover={{ y: -6 }}
//             className="group glass rounded-2xl overflow-hidden"
//           >
//             <div className="relative aspect-[4/3] overflow-hidden">
//               <img src={d.image} alt={d.name} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" loading="lazy" />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
//               {d.tag && <div className="absolute top-3 left-3 text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-black/60 text-[var(--gold)] border border-[var(--gold)]/40">{d.tag}</div>}
//               <button
//                 onClick={() => { const now = !favs[d.id]; setFavs({ ...favs, [d.id]: now }); toast[now ? "success" : "error"](now ? "Added to favorites" : "Removed from favorites"); }}
//                 className={cn("absolute top-3 right-3 w-9 h-9 rounded-full grid place-items-center bg-black/50 backdrop-blur border border-white/10 transition",
//                 favs[d.id] ? "text-[var(--gold)]" : "text-white hover:text-[var(--gold)]")}
//               >
//                 <Heart className={cn("w-4 h-4", favs[d.id] && "fill-[var(--gold)]")} />
//               </button>
//             </div>
//             <div className="p-6">
//               <div className="flex items-center justify-between">
//                 <h3 className="text-xl font-display">{d.name}</h3>
//                 <div className="flex items-center gap-1 text-sm text-[var(--gold)]"><Star className="w-4 h-4 fill-current" />{d.rating}</div>
//               </div>
//               <p className="mt-2 text-sm text-muted-foreground">{d.description}</p>
//               <div className="mt-5 flex items-center justify-between">
//                 <span className="font-display text-2xl gold-text">€{d.price}</span>
//                 <span className="text-xs tracking-widest uppercase text-muted-foreground">{d.category}</span>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>

//       {dishes.length === 0 && (
//         <div className="mt-16 text-center text-muted-foreground">No dishes matched your search.</div>
//       )}
//     </div>
//   );
// }
// import { createFileRoute } from "@tanstack/react-router";
// import { motion } from "framer-motion";
// import { Heart, Search, Star, SlidersHorizontal } from "lucide-react";
// import { useMemo, useState } from "react";
// import toast from "react-hot-toast";
// import { CATEGORIES, DISHES } from "@/lib/mock-data";
// import { SectionHeading } from "@/components/site/Section";
// import { cn } from "@/lib/utils";

// export const Route = createFileRoute("/menu")({
//   component: MenuPage,
//   head: () => ({ meta: [{ title: "Menu — Taj Royale" }, { name: "description", content: "Royal Indian tasting menu at Taj Royale — biryanis, tandoori specialties, curries, and handcrafted desserts." }] }),
// });

// function MenuPage() {
//   const [cat, setCat] = useState("All");
//   const [q, setQ] = useState("");
//   const [sort, setSort] = useState<"popular" | "price-asc" | "price-desc" | "rating">("popular");
//   const [favs, setFavs] = useState<Record<string, boolean>>({});

//   const dishes = useMemo(() => {
//     let list = [...DISHES];
//     if (cat !== "All") list = list.filter((d) => d.category === cat);
//     if (q) list = list.filter((d) => d.name.toLowerCase().includes(q.toLowerCase()));
//     if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
//     if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
//     if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
//     return list;
//   }, [cat, q, sort]);

//   return (
//     <div className="pt-32 pb-24 px-6 lg:px-10 max-w-7xl mx-auto">
//       <SectionHeading
//         eyebrow="Taste of India"
//         title={<>Royal <span className="gold-text italic">Indian Cuisine</span></>}
//         subtitle="Every dish at Taj Royale is prepared with authentic Indian spices, fresh ingredients, and traditional recipes, offering an unforgettable fine dining experience."
//       />
//       <div className="mt-12 glass rounded-2xl p-4 md:p-5 flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
//         <div className="flex-1 flex items-center gap-3 rounded-full bg-background/50 border border-[var(--gold)]/25 px-4">
//           <Search className="w-4 h-4 text-muted-foreground" />
//           <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search dishes..." className="flex-1 bg-transparent py-2.5 text-sm outline-none placeholder:text-muted-foreground" />
//         </div>
//         <div className="flex items-center gap-2">
//           <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
//           <select value={sort} onChange={(e) => setSort(e.target.value as any)} className="bg-background/50 border border-[var(--gold)]/25 rounded-full px-4 py-2.5 text-sm outline-none">
//             <option value="popular">Sort: Popular</option>
//             <option value="rating">Highest Rated</option>
//             <option value="price-asc">Price: Low to High</option>
//             <option value="price-desc">Price: High to Low</option>
//           </select>
//         </div>
//       </div>

//       <div className="mt-6 flex flex-wrap gap-2">
//         {CATEGORIES.map((c) => (
//           <button key={c} onClick={() => setCat(c)} className={cn(
//             "rounded-full px-5 py-2 text-xs tracking-widest uppercase transition border",
//             cat === c ? "btn-gold border-transparent" : "border-[var(--gold)]/25 text-foreground/80 hover:border-[var(--gold)]/60 hover:text-[var(--gold)]"
//           )}>{c}</button>
//         ))}
//       </div>

//       <motion.div layout className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//         {dishes.map((d, i) => (
//           <motion.div
//             layout
//             key={d.id}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.04 }}
//             whileHover={{ y: -6 }}
//             className="group glass rounded-2xl overflow-hidden"
//           >
//             <div className="relative aspect-[4/3] overflow-hidden">
//               <img src={d.image} alt={d.name} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" loading="lazy" />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
//               {d.tag && <div className="absolute top-3 left-3 text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-black/60 text-[var(--gold)] border border-[var(--gold)]/40">{d.tag}</div>}
//               <button
//                 onClick={() => { const now = !favs[d.id]; setFavs({ ...favs, [d.id]: now }); toast[now ? "success" : "error"](now ? "Added to favorites" : "Removed from favorites"); }}
//                 className={cn("absolute top-3 right-3 w-9 h-9 rounded-full grid place-items-center bg-black/50 backdrop-blur border border-white/10 transition",
//                 favs[d.id] ? "text-[var(--gold)]" : "text-white hover:text-[var(--gold)]")}
//               >
//                 <Heart className={cn("w-4 h-4", favs[d.id] && "fill-[var(--gold)]")} />
//               </button>
//             </div>
//             <div className="p-6">
//               <div className="flex items-center justify-between">
//                 <h3 className="text-xl font-display">{d.name}</h3>
//                 <div className="flex items-center gap-1 text-sm text-[var(--gold)]"><Star className="w-4 h-4 fill-current" />{d.rating}</div>
//               </div>
//               <p className="mt-2 text-sm text-muted-foreground">{d.description}</p>
//               <div className="mt-5 flex items-center justify-between">
//                 <span className="font-display text-2xl gold-text">€{d.price}</span>
//                 <span className="text-xs tracking-widest uppercase text-muted-foreground">{d.category}</span>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>

//       {dishes.length === 0 && (
//         <div className="mt-16 text-center text-muted-foreground">No dishes matched your search.</div>
//       )}
//     </div>
//   );
// }
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Heart, Search, Star, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import toast from "react-hot-toast";
import { CATEGORIES, DISHES } from "@/lib/mock-data";
import { SectionHeading } from "@/components/site/Section";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/menu")({
  component: MenuPage,
  head: () => ({ meta: [{ title: "Menu — Taj Royale" }, { name: "description", content: "Royal Indian tasting menu at Taj Royale — biryanis, tandoori specialties, curries, and handcrafted desserts." }] }),
});

function MenuPage() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<"popular" | "price-asc" | "price-desc" | "rating">("popular");
  const [favs, setFavs] = useState<Record<string, boolean>>({});

  const dishes = useMemo(() => {
    let list = [...DISHES];
    if (cat !== "All") list = list.filter((d) => d.category === cat);
    if (q) list = list.filter((d) => d.name.toLowerCase().includes(q.toLowerCase()));
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [cat, q, sort]);

  return (
    <div className="pt-32 pb-24 px-6 lg:px-10 max-w-7xl mx-auto">
      <SectionHeading
        eyebrow="Taste of India"
        title={<>Royal <span className="gold-text italic">Indian Cuisine</span></>}
        subtitle="Every dish at Taj Royale is prepared with authentic Indian spices, fresh ingredients, and traditional recipes, offering an unforgettable fine dining experience."
      />
      <div className="mt-12 glass rounded-2xl p-4 md:p-5 flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
        <div className="flex-1 flex items-center gap-3 rounded-full bg-background/50 border border-[var(--gold)]/25 px-4">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search dishes..." className="flex-1 bg-transparent py-2.5 text-sm outline-none placeholder:text-muted-foreground" />
        </div>
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
          <select value={sort} onChange={(e) => setSort(e.target.value as any)} className="bg-background/50 border border-[var(--gold)]/25 rounded-full px-4 py-2.5 text-sm outline-none">
            <option value="popular">Sort: Popular</option>
            <option value="rating">Highest Rated</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {CATEGORIES.map((c) => (
          <button key={c} onClick={() => setCat(c)} className={cn(
            "rounded-full px-5 py-2 text-xs tracking-widest uppercase transition border",
            cat === c ? "btn-gold border-transparent" : "border-[var(--gold)]/25 text-foreground/80 hover:border-[var(--gold)]/60 hover:text-[var(--gold)]"
          )}>{c}</button>
        ))}
      </div>

      <motion.div layout className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {dishes.map((d, i) => (
          <motion.div
            layout
            key={d.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            whileHover={{ y: -6 }}
            className="group glass rounded-2xl overflow-hidden"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={d.image} alt={d.name} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              {d.tag && <div className="absolute top-3 left-3 text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-black/60 text-[var(--gold)] border border-[var(--gold)]/40">{d.tag}</div>}
              <button
                onClick={() => { const now = !favs[d.id]; setFavs({ ...favs, [d.id]: now }); toast[now ? "success" : "error"](now ? "Added to favorites" : "Removed from favorites"); }}
                className={cn("absolute top-3 right-3 w-9 h-9 rounded-full grid place-items-center bg-black/50 backdrop-blur border border-white/10 transition",
                favs[d.id] ? "text-[var(--gold)]" : "text-white hover:text-[var(--gold)]")}
              >
                <Heart className={cn("w-4 h-4", favs[d.id] && "fill-[var(--gold)]")} />
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-display">{d.name}</h3>
                <div className="flex items-center gap-1 text-sm text-[var(--gold)]"><Star className="w-4 h-4 fill-current" />{d.rating}</div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{d.description}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="font-display text-2xl gold-text">₹{d.price.toLocaleString("en-IN")}</span>
                <span className="text-xs tracking-widest uppercase text-muted-foreground">{d.category}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {dishes.length === 0 && (
        <div className="mt-16 text-center text-muted-foreground">No dishes matched your search.</div>
      )}
    </div>
  );
}
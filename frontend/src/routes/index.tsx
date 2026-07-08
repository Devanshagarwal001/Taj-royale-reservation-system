// import { createFileRoute, Link } from "@tanstack/react-router";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import {
//   Sparkles, Star, ChefHat, GlassWater, Award, Clock, Utensils, Heart, ArrowRight, Quote, Instagram,
// } from "lucide-react";
// import { IMG, DISHES, TESTIMONIALS } from "@/lib/mock-data";
// import { SectionHeading } from "@/components/site/Section";

// export const Route = createFileRoute("/")({ component: Home });

// function Home() {
//   return (
//     <div className="pt-0">
//       <Hero />
//       <Featured />
//       <Categories />
//       <WhyUs />
//       <ChefSection />
//       <Testimonials />
//       <Stats />
//       <GalleryPreview />
//       <Instafeed />
//     </div>
//   );
// }

// function Hero() {
//   const ref = useRef<HTMLDivElement>(null);
//   const { scrollY } = useScroll();
//   const y = useTransform(scrollY, [0, 600], [0, 120]);
//   const scale = useTransform(scrollY, [0, 600], [1.05, 1.2]);
//   return (
//     <section ref={ref} className="relative h-[100svh] min-h-[720px] overflow-hidden">
//       <motion.div style={{ y, scale }} className="absolute inset-0">
//         <img src={IMG.hero} alt="Maison Aurée dining room" className="w-full h-full object-cover" width={1920} height={1280} />
//         <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
//       </motion.div>

//       <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
//           className="flex items-center gap-2 text-[10px] tracking-[0.5em] uppercase text-[var(--gold)]"
//         >
//           <span className="w-10 h-px bg-[var(--gold)]" />
//           WHERE TRADITION MEETS LUXURY
//           <span className="w-10 h-px bg-[var(--gold)]" />
//         </motion.div>

//         <motion.h1
//   initial={{ opacity: 0, y: 30 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ delay: 0.35, duration: 0.8 }}
//   className="mt-6 text-5xl sm:text-7xl md:text-8xl font-display leading-[0.9] text-center"
// >
//   Experience
//   <br />
//   <span className="gold-text italic">
//     Royal Indian Cuisine
//   </span>
// </motion.h1>
//         <p className="mt-8 max-w-2xl mx-auto text-lg text-muted-foreground">
//   Experience the rich heritage of Indian cuisine at
//   <span className="text-[var(--gold)] font-semibold"> Taj Royale</span>.
//   From aromatic biryanis and sizzling tandoori delights to handcrafted desserts,
//   every meal is served with royal hospitality and unforgettable flavours.
// </p>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
//           className="mt-10 flex flex-col sm:flex-row items-center gap-4"
//         >
//           <Link to="/reservation" className="group inline-flex items-center gap-2 rounded-full btn-gold px-7 py-3.5 font-medium hover:btn-gold-hover">
//             Reserve a Table
//             <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//           </Link>
//           <Link to="/menu" className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/40 px-7 py-3.5 text-sm hover:bg-[var(--gold)]/10 hover:text-[var(--gold)] transition">
//             Explore Menu
//           </Link>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
//           className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-xs text-muted-foreground tracking-widest uppercase"
//         >
//           <span>Scroll</span>
//           <span className="mt-2 w-px h-10 bg-gradient-to-b from-[var(--gold)] to-transparent animate-pulse" />
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// function Featured() {
//   return (
//     <section className="py-24 md:py-32 px-6 lg:px-10 max-w-7xl mx-auto">
//       <SectionHeading
//         eyebrow="Chef's Selection"
//         title={<>Taste of <span className="gold-text italic">Royalty</span></>}
//         subtitle="Royal selection of authentic Indian delicacies, crafted with traditional recipes, aromatic spices, and beautifully presented for an unforgettable dining experience."
//       />
//       <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//         {DISHES.slice(0, 6).map((d, i) => (
//           <motion.div
//             key={d.id}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-40px" }}
//             transition={{ delay: i * 0.05, duration: 0.6 }}
//             whileHover={{ y: -6 }}
//             className="group glass rounded-2xl overflow-hidden hover-lift"
//           >
//             <div className="relative aspect-[4/3] overflow-hidden">
//               <img src={d.image} alt={d.name} className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-110" loading="lazy" />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
//               {d.tag && (
//                 <div className="absolute top-3 left-3 text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-black/60 text-[var(--gold)] border border-[var(--gold)]/40">{d.tag}</div>
//               )}
//               <button className="absolute top-3 right-3 w-9 h-9 rounded-full grid place-items-center bg-black/50 backdrop-blur border border-white/10 text-white hover:text-[var(--gold)] transition">
//                 <Heart className="w-4 h-4" />
//               </button>
//             </div>
//             <div className="p-6">
//               <div className="flex items-center justify-between">
//                 <h3 className="text-xl font-display">{d.name}</h3>
//                 <div className="flex items-center gap-1 text-sm text-[var(--gold)]"><Star className="w-4 h-4 fill-current" />{d.rating}</div>
//               </div>
//               <p className="mt-2 text-sm text-muted-foreground">{d.description}</p>
//               <div className="mt-4 flex items-center justify-between">
//                 <span className="font-display text-2xl gold-text">€{d.price}</span>
//                 <button className="text-xs tracking-widest uppercase text-[var(--gold)] hover:underline">Order Tasting</button>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// function Categories() {
//   const cats = [
//     { name: "Signatures", count: 12, icon: Sparkles },
//     { name: "Seafood", count: 18, icon: GlassWater },
//     { name: "Prime Meat", count: 15, icon: Utensils },
//     { name: "Patisserie", count: 22, icon: ChefHat },
//   ];
//   return (
//     <section className="py-20 px-6 lg:px-10 max-w-7xl mx-auto">
//       <SectionHeading eyebrow="Explore" title={<>Popular <span className="gold-text italic">Categories</span></>} />
//       <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//         {cats.map((c, i) => (
//           <motion.div
//             key={c.name}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: i * 0.08 }}
//             className="glass gold-border rounded-2xl p-8 text-center hover-lift hover:-translate-y-1"
//           >
//             <div className="mx-auto w-14 h-14 rounded-full grid place-items-center btn-gold">
//               <c.icon className="w-6 h-6" />
//             </div>
//             <h3 className="mt-5 font-display text-xl">{c.name}</h3>
//             <p className="mt-1 text-sm text-muted-foreground">{c.count} curated plates</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// function WhyUs() {
//   const items = [
//     { icon: Award, title: "Two Michelin Stars", text: "Recognized annually since 2018 for exceptional cuisine and craftsmanship." },
//     { icon: ChefHat, title: "Master Chef Team", text: "A brigade led by Chef Laurent Dubois, formerly of L'Arpège and Alain Ducasse." },
//     { icon: GlassWater, title: "1,200 Wine Selections", text: "One of Europe's most storied cellars — from Burgundy grand crus to natural rarities." },
//     { icon: Clock, title: "Private Dining", text: "Intimate salons for anniversaries, business dinners, and private celebrations." },
//   ];
//   return (
//     <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
//       <SectionHeading eyebrow="Why Us" title={<>The <span className="gold-text italic">Aurée</span> Experience</>} />
//       <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//         {items.map((it, i) => (
//           <motion.div
//             key={it.title}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: i * 0.08 }}
//             className="glass rounded-2xl p-7 hover:border-[var(--gold)]/50 transition"
//           >
//             <it.icon className="w-8 h-8 text-[var(--gold)]" />
//             <h3 className="mt-5 font-display text-lg">{it.title}</h3>
//             <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.text}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// function ChefSection() {
//   return (
//     <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
//       <div className="grid gap-12 lg:grid-cols-2 items-center">
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="relative"
//         >
//           <div className="relative rounded-3xl overflow-hidden gold-border">
//             <img src={IMG.chef} alt="Chef Laurent Dubois" className="w-full h-auto object-cover" loading="lazy" />
//           </div>
//           <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-4 hidden md:block">
//             <div className="text-3xl font-display gold-text">28</div>
//             <div className="text-xs text-muted-foreground uppercase tracking-widest">Years of craft</div>
//           </div>
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, x: 30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//         >
//           <div className="flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]">
//             <span className="w-8 h-px bg-[var(--gold)]/50" /> Meet the Chef
//           </div>
//           <h2 className="mt-4 text-5xl font-display leading-tight">Chef <span className="gold-text italic">Laurent Dubois</span></h2>
//           <p className="mt-5 text-muted-foreground leading-relaxed">
//             A protégé of Alain Passard, Laurent joined Maison Aurée in 2011 and led the kitchen to its second star within four years. His philosophy is deceptively simple: honor the produce, respect the season, surprise the guest.
//           </p>
//           <blockquote className="mt-6 pl-6 border-l border-[var(--gold)]/40 italic text-lg">
//             "Every plate is a letter to the guest. It should feel personal."
//           </blockquote>
//           <div className="mt-8 grid grid-cols-3 gap-4">
//             {[
//               { n: "2×", l: "Michelin Stars" },
//               { n: "3,200+", l: "Guests / month" },
//               { n: "18", l: "Awards" },
//             ].map((s) => (
//               <div key={s.l} className="glass rounded-xl p-4 text-center">
//                 <div className="text-2xl font-display gold-text">{s.n}</div>
//                 <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// function Testimonials() {
//   const [i, setI] = useState(0);
//   useEffect(() => {
//     const t = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 5500);
//     return () => clearInterval(t);
//   }, []);
//   return (
//     <section className="py-24 px-6 lg:px-10 max-w-5xl mx-auto">
//       <SectionHeading eyebrow="Guest Voices" title={<>What our <span className="gold-text italic">guests</span> say</>} />
//       <div className="mt-12 relative min-h-[220px]">
//         {TESTIMONIALS.map((t, idx) => (
//           <motion.div
//             key={idx}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: i === idx ? 1 : 0, y: i === idx ? 0 : 20 }}
//             transition={{ duration: 0.6 }}
//             className={`absolute inset-0 glass rounded-3xl p-10 text-center ${i === idx ? "" : "pointer-events-none"}`}
//           >
//             <Quote className="w-8 h-8 text-[var(--gold)] mx-auto" />
//             <p className="mt-5 text-xl md:text-2xl font-display leading-snug">"{t.text}"</p>
//             <div className="mt-6 flex items-center justify-center gap-1 text-[var(--gold)]">
//               {Array.from({ length: t.rating }).map((_, k) => <Star key={k} className="w-4 h-4 fill-current" />)}
//             </div>
//             <div className="mt-4 text-sm">
//               <div className="font-medium">{t.name}</div>
//               <div className="text-muted-foreground">{t.role}</div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//       <div className="mt-6 flex items-center justify-center gap-2">
//         {TESTIMONIALS.map((_, idx) => (
//           <button key={idx} aria-label={`Testimonial ${idx + 1}`} onClick={() => setI(idx)} className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-[var(--gold)]" : "w-2 bg-[var(--gold)]/30"}`} />
//         ))}
//       </div>
//     </section>
//   );
// }

// function AnimatedNumber({ to, suffix = "" }: { to: number; suffix?: string }) {
//   const [n, setN] = useState(0);
//   const ref = useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const obs = new IntersectionObserver((entries) => {
//       if (entries[0].isIntersecting) {
//         const start = performance.now();
//         const dur = 1600;
//         const tick = (now: number) => {
//           const p = Math.min(1, (now - start) / dur);
//           setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
//           if (p < 1) requestAnimationFrame(tick);
//         };
//         requestAnimationFrame(tick);
//         obs.disconnect();
//       }
//     });
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, [to]);
//   return <div ref={ref} className="text-5xl md:text-6xl font-display gold-text">{n.toLocaleString()}{suffix}</div>;
// }

// function Stats() {
//   const stats = [
//     { n: 100, s: "+", l: "Years of tradition" },
//     { n: 2, s: "★", l: "Michelin stars" },
//     { n: 1200, s: "", l: "Wine selections" },
//     { n: 45000, s: "+", l: "Guests served" },
//   ];
//   return (
//     <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
//       <div className="glass rounded-3xl p-10 md:p-14 grid gap-10 md:grid-cols-4 text-center">
//         {stats.map((s) => (
//           <div key={s.l}>
//             <AnimatedNumber to={s.n} suffix={s.s} />
//             <div className="mt-3 text-xs tracking-[0.3em] uppercase text-muted-foreground">{s.l}</div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// function GalleryPreview() {
//   const imgs = [IMG.gallery1, IMG.dish1, IMG.gallery2, IMG.dish4, IMG.dish5];
//   return (
//     <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
//       <SectionHeading eyebrow="Ambience" title={<>Inside <span className="gold-text italic">Maison Aurée</span></>} />
//       <div className="mt-12 grid gap-4 grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px]">
//         {imgs.map((src, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, scale: 0.96 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: i * 0.06 }}
//             className={`relative rounded-2xl overflow-hidden ${i === 0 ? "row-span-2 col-span-2" : ""}`}
//           >
//             <img src={src} alt="Ambience" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" loading="lazy" />
//           </motion.div>
//         ))}
//       </div>
//       <div className="mt-8 text-center">
//         <Link to="/gallery" className="inline-flex items-center gap-2 text-[var(--gold)] hover:underline">View full gallery <ArrowRight className="w-4 h-4" /></Link>
//       </div>
//     </section>
//   );
// }

// function Instafeed() {
//   const imgs = [IMG.dish1, IMG.dish2, IMG.dish3, IMG.dish4, IMG.dish5, IMG.dish6];
//   return (
//     <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
//       <SectionHeading eyebrow="@maisonauree" title={<>Follow our <span className="gold-text italic">journey</span></>} />
//       <div className="mt-12 grid grid-cols-2 md:grid-cols-6 gap-3">
//         {imgs.map((src, i) => (
//           <motion.a
//             key={i}
//             href="#"
//             initial={{ opacity: 0, y: 12 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: i * 0.04 }}
//             className="group relative aspect-square rounded-xl overflow-hidden"
//           >
//             <img src={src} alt="Instagram" className="w-full h-full object-cover transition duration-500 group-hover:scale-110" loading="lazy" />
//             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition grid place-items-center">
//               <Instagram className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition" />
//             </div>
//           </motion.a>
//         ))}
//       </div>
//     </section>
//   );
// }
// import { createFileRoute, Link } from "@tanstack/react-router";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import {
//   Sparkles, Star, ChefHat, GlassWater, Award, Clock, Utensils, Heart, ArrowRight, Quote, Instagram,
// } from "lucide-react";
// import { IMG, DISHES, TESTIMONIALS } from "@/lib/mock-data";
// import { SectionHeading } from "@/components/site/Section";

// export const Route = createFileRoute("/")({ component: Home });

// function Home() {
//   return (
//     <div className="pt-0">
//       <Hero />
//       <Featured />
//       <Categories />
//       <WhyUs />
//       <ChefSection />
//       <Testimonials />
//       <Stats />
//       <GalleryPreview />
//       <Instafeed />
//     </div>
//   );
// }

// function Hero() {
//   const ref = useRef<HTMLDivElement>(null);
//   const { scrollY } = useScroll();
//   const y = useTransform(scrollY, [0, 600], [0, 120]);
//   const scale = useTransform(scrollY, [0, 600], [1.05, 1.2]);
//   return (
//     <section ref={ref} className="relative h-[100svh] min-h-[720px] overflow-hidden">
//       <motion.div style={{ y, scale }} className="absolute inset-0">
//         <img src={IMG.hero} alt="Taj Royale dining room" className="w-full h-full object-cover" width={1920} height={1280} />
//         <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
//       </motion.div>

//       <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
//           className="flex items-center gap-2 text-[10px] tracking-[0.5em] uppercase text-[var(--gold)]"
//         >
//           <span className="w-10 h-px bg-[var(--gold)]" />
//           WHERE TRADITION MEETS ROYALTY
//           <span className="w-10 h-px bg-[var(--gold)]" />
//         </motion.div>

//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.35, duration: 0.8 }}
//           className="mt-6 text-5xl sm:text-7xl md:text-8xl font-display leading-[0.9] text-center"
//         >
//           Experience
//           <br />
//           <span className="gold-text italic">
//             Royal Indian Cuisine
//           </span>
//         </motion.h1>
//         <p className="mt-8 max-w-2xl mx-auto text-lg text-muted-foreground">
//           Experience the rich heritage of Indian cuisine at
//           <span className="text-[var(--gold)] font-semibold"> Taj Royale</span>.
//           From aromatic biryanis and sizzling tandoori delights to handcrafted desserts,
//           every meal is served with royal hospitality and unforgettable flavours.
//         </p>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
//           className="mt-10 flex flex-col sm:flex-row items-center gap-4"
//         >
//           <Link to="/reservation" className="group inline-flex items-center gap-2 rounded-full btn-gold px-7 py-3.5 font-medium hover:btn-gold-hover">
//             Reserve a Table
//             <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//           </Link>
//           <Link to="/menu" className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/40 px-7 py-3.5 text-sm hover:bg-[var(--gold)]/10 hover:text-[var(--gold)] transition">
//             Explore Menu
//           </Link>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
//           className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-xs text-muted-foreground tracking-widest uppercase"
//         >
//           <span>Scroll</span>
//           <span className="mt-2 w-px h-10 bg-gradient-to-b from-[var(--gold)] to-transparent animate-pulse" />
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// function Featured() {
//   return (
//     <section className="py-24 md:py-32 px-6 lg:px-10 max-w-7xl mx-auto">
//       <SectionHeading
//         eyebrow="Chef's Selection"
//         title={<>Taste of <span className="gold-text italic">Royalty</span></>}
//         subtitle="Royal selection of authentic Indian delicacies, crafted with traditional recipes, aromatic spices, and beautifully presented for an unforgettable dining experience."
//       />
//       <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//         {DISHES.slice(0, 6).map((d, i) => (
//           <motion.div
//             key={d.id}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-40px" }}
//             transition={{ delay: i * 0.05, duration: 0.6 }}
//             whileHover={{ y: -6 }}
//             className="group glass rounded-2xl overflow-hidden hover-lift"
//           >
//             <div className="relative aspect-[4/3] overflow-hidden">
//               <img src={d.image} alt={d.name} className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-110" loading="lazy" />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
//               {d.tag && (
//                 <div className="absolute top-3 left-3 text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-black/60 text-[var(--gold)] border border-[var(--gold)]/40">{d.tag}</div>
//               )}
//               <button className="absolute top-3 right-3 w-9 h-9 rounded-full grid place-items-center bg-black/50 backdrop-blur border border-white/10 text-white hover:text-[var(--gold)] transition">
//                 <Heart className="w-4 h-4" />
//               </button>
//             </div>
//             <div className="p-6">
//               <div className="flex items-center justify-between">
//                 <h3 className="text-xl font-display">{d.name}</h3>
//                 <div className="flex items-center gap-1 text-sm text-[var(--gold)]"><Star className="w-4 h-4 fill-current" />{d.rating}</div>
//               </div>
//               <p className="mt-2 text-sm text-muted-foreground">{d.description}</p>
//               <div className="mt-4 flex items-center justify-between">
//                 <span className="font-display text-2xl gold-text">₹{d.price}</span>
//                 <button className="text-xs tracking-widest uppercase text-[var(--gold)] hover:underline">Order Tasting</button>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// function Categories() {
//   const cats = [
//     { name: "Tandoor Specials", count: 14, icon: Sparkles },
//     { name: "Biryani & Rice", count: 10, icon: GlassWater },
//     { name: "Curries & Kebabs", count: 20, icon: Utensils },
//     { name: "Sweets & Desserts", count: 16, icon: ChefHat },
//   ];
//   return (
//     <section className="py-20 px-6 lg:px-10 max-w-7xl mx-auto">
//       <SectionHeading eyebrow="Explore" title={<>Popular <span className="gold-text italic">Categories</span></>} />
//       <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//         {cats.map((c, i) => (
//           <motion.div
//             key={c.name}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: i * 0.08 }}
//             className="glass gold-border rounded-2xl p-8 text-center hover-lift hover:-translate-y-1"
//           >
//             <div className="mx-auto w-14 h-14 rounded-full grid place-items-center btn-gold">
//               <c.icon className="w-6 h-6" />
//             </div>
//             <h3 className="mt-5 font-display text-xl">{c.name}</h3>
//             <p className="mt-1 text-sm text-muted-foreground">{c.count} curated plates</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// function WhyUs() {
//   const items = [
//     { icon: Award, title: "Royal Dining Heritage", text: "Bringing recipes from Mughal royal kitchens and regional India together on one menu." },
//     { icon: ChefHat, title: "Master Chef Team", text: "A kitchen led by Chef Vikram Singh, trained in the royal kitchens of Rajasthan and Delhi's finest houses." },
//     { icon: GlassWater, title: "Handpicked Spice Cellar", text: "Spices sourced directly from Kerala, Kashmir, and Rajasthan for authentic, robust flavour in every dish." },
//     { icon: Clock, title: "Private Dining", text: "Elegant private salons for anniversaries, family celebrations, and festive gatherings." },
//   ];
//   return (
//     <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
//       <SectionHeading eyebrow="Why Us" title={<>The <span className="gold-text italic">Taj Royale</span> Experience</>} />
//       <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//         {items.map((it, i) => (
//           <motion.div
//             key={it.title}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: i * 0.08 }}
//             className="glass rounded-2xl p-7 hover:border-[var(--gold)]/50 transition"
//           >
//             <it.icon className="w-8 h-8 text-[var(--gold)]" />
//             <h3 className="mt-5 font-display text-lg">{it.title}</h3>
//             <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.text}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// function ChefSection() {
//   return (
//     <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
//       <div className="grid gap-12 lg:grid-cols-2 items-center">
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="relative"
//         >
//           <div className="relative rounded-3xl overflow-hidden gold-border">
//             <img src={IMG.chef} alt="Chef Vikram Singh" className="w-full h-auto object-cover" loading="lazy" />
//           </div>
//           <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-4 hidden md:block">
//             <div className="text-3xl font-display gold-text">25</div>
//             <div className="text-xs text-muted-foreground uppercase tracking-widest">Years of craft</div>
//           </div>
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, x: 30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//         >
//           <div className="flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]">
//             <span className="w-8 h-px bg-[var(--gold)]/50" /> Meet the Chef
//           </div>
//           <h2 className="mt-4 text-5xl font-display leading-tight">Chef <span className="gold-text italic">Vikram Singh</span></h2>
//           <p className="mt-5 text-muted-foreground leading-relaxed">
//             Trained in the royal kitchens of Jaipur and later refined his craft across Delhi's finest tables, Chef Vikram joined Taj Royale in 2014 to bring the flavours of India's imperial kitchens to Paris. His philosophy is simple: honor the spice, respect the tradition, delight the guest.
//           </p>
//           <blockquote className="mt-6 pl-6 border-l border-[var(--gold)]/40 italic text-lg">
//             "Every dish carries the story of a region. It should feel like home."
//           </blockquote>
//           <div className="mt-8 grid grid-cols-3 gap-4">
//             {[
//               { n: "25+", l: "Years of Experience" },
//               { n: "3,500+", l: "Guests / month" },
//               { n: "20", l: "Signature Recipes" },
//             ].map((s) => (
//               <div key={s.l} className="glass rounded-xl p-4 text-center">
//                 <div className="text-2xl font-display gold-text">{s.n}</div>
//                 <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// function Testimonials() {
//   const [i, setI] = useState(0);
//   useEffect(() => {
//     const t = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 5500);
//     return () => clearInterval(t);
//   }, []);
//   return (
//     <section className="py-24 px-6 lg:px-10 max-w-5xl mx-auto">
//       <SectionHeading eyebrow="Guest Voices" title={<>What our <span className="gold-text italic">guests</span> say</>} />
//       <div className="mt-12 relative min-h-[220px]">
//         {TESTIMONIALS.map((t, idx) => (
//           <motion.div
//             key={idx}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: i === idx ? 1 : 0, y: i === idx ? 0 : 20 }}
//             transition={{ duration: 0.6 }}
//             className={`absolute inset-0 glass rounded-3xl p-10 text-center ${i === idx ? "" : "pointer-events-none"}`}
//           >
//             <Quote className="w-8 h-8 text-[var(--gold)] mx-auto" />
//             <p className="mt-5 text-xl md:text-2xl font-display leading-snug">"{t.text}"</p>
//             <div className="mt-6 flex items-center justify-center gap-1 text-[var(--gold)]">
//               {Array.from({ length: t.rating }).map((_, k) => <Star key={k} className="w-4 h-4 fill-current" />)}
//             </div>
//             <div className="mt-4 text-sm">
//               <div className="font-medium">{t.name}</div>
//               <div className="text-muted-foreground">{t.role}</div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//       <div className="mt-6 flex items-center justify-center gap-2">
//         {TESTIMONIALS.map((_, idx) => (
//           <button key={idx} aria-label={`Testimonial ${idx + 1}`} onClick={() => setI(idx)} className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-[var(--gold)]" : "w-2 bg-[var(--gold)]/30"}`} />
//         ))}
//       </div>
//     </section>
//   );
// }

// function AnimatedNumber({ to, suffix = "" }: { to: number; suffix?: string }) {
//   const [n, setN] = useState(0);
//   const ref = useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const obs = new IntersectionObserver((entries) => {
//       if (entries[0].isIntersecting) {
//         const start = performance.now();
//         const dur = 1600;
//         const tick = (now: number) => {
//           const p = Math.min(1, (now - start) / dur);
//           setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
//           if (p < 1) requestAnimationFrame(tick);
//         };
//         requestAnimationFrame(tick);
//         obs.disconnect();
//       }
//     });
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, [to]);
//   return <div ref={ref} className="text-5xl md:text-6xl font-display gold-text">{n.toLocaleString()}{suffix}</div>;
// }

// function Stats() {
//   const stats = [
//     { n: 30, s: "+", l: "Years of tradition" },
//     { n: 20, s: "+", l: "Signature spices used" },
//     { n: 500, s: "+", l: "Recipes perfected" },
//     { n: 60000, s: "+", l: "Guests served" },
//   ];
//   return (
//     <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
//       <div className="glass rounded-3xl p-10 md:p-14 grid gap-10 md:grid-cols-4 text-center">
//         {stats.map((s) => (
//           <div key={s.l}>
//             <AnimatedNumber to={s.n} suffix={s.s} />
//             <div className="mt-3 text-xs tracking-[0.3em] uppercase text-muted-foreground">{s.l}</div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// function GalleryPreview() {
//   const imgs = [IMG.gallery1, IMG.dish1, IMG.gallery2, IMG.dish4, IMG.dish5];
//   return (
//     <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
//       <SectionHeading eyebrow="Ambience" title={<>Inside <span className="gold-text italic">Taj Royale</span></>} />
//       <div className="mt-12 grid gap-4 grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px]">
//         {imgs.map((src, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, scale: 0.96 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: i * 0.06 }}
//             className={`relative rounded-2xl overflow-hidden ${i === 0 ? "row-span-2 col-span-2" : ""}`}
//           >
//             <img src={src} alt="Ambience" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" loading="lazy" />
//           </motion.div>
//         ))}
//       </div>
//       <div className="mt-8 text-center">
//         <Link to="/gallery" className="inline-flex items-center gap-2 text-[var(--gold)] hover:underline">View full gallery <ArrowRight className="w-4 h-4" /></Link>
//       </div>
//     </section>
//   );
// }

// function Instafeed() {
//   const imgs = [IMG.dish1, IMG.dish2, IMG.dish3, IMG.dish4, IMG.dish5, IMG.dish6];
//   return (
//     <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
//       <SectionHeading eyebrow="@tajroyale" title={<>Follow our <span className="gold-text italic">journey</span></>} />
//       <div className="mt-12 grid grid-cols-2 md:grid-cols-6 gap-3">
//         {imgs.map((src, i) => (
//           <motion.a
//             key={i}
//             href="#"
//             initial={{ opacity: 0, y: 12 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: i * 0.04 }}
//             className="group relative aspect-square rounded-xl overflow-hidden"
//           >
//             <img src={src} alt="Instagram" className="w-full h-full object-cover transition duration-500 group-hover:scale-110" loading="lazy" />
//             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition grid place-items-center">
//               <Instagram className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition" />
//             </div>
//           </motion.a>
//         ))}
//       </div>
//     </section>
//   );
// }
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Sparkles, Star, ChefHat, GlassWater, Award, Clock, Utensils, Heart, ArrowRight, Quote, Instagram,
} from "lucide-react";
import { IMG, DISHES, TESTIMONIALS, type Dish } from "@/lib/mock-data";
import { SectionHeading } from "@/components/site/Section";
import { DishModal } from "@/components/site/DishModal";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="pt-0">
      <Hero />
      <Featured />
      <Categories />
      <WhyUs />
      <ChefSection />
      <Testimonials />
      <Stats />
      <GalleryPreview />
      <Instafeed />
    </div>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const scale = useTransform(scrollY, [0, 600], [1.05, 1.2]);
  return (
    <section ref={ref} className="relative h-[100svh] min-h-[720px] overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img src={IMG.hero} alt="Taj Royale dining room" className="w-full h-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="flex items-center gap-2 text-[10px] tracking-[0.5em] uppercase text-[var(--gold)]"
        >
          <span className="w-10 h-px bg-[var(--gold)]" />
          WHERE TRADITION MEETS ROYALTY
          <span className="w-10 h-px bg-[var(--gold)]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-6 text-5xl sm:text-7xl md:text-8xl font-display leading-[0.9] text-center"
        >
          Experience
          <br />
          <span className="gold-text italic">
            Royal Indian Cuisine
          </span>
        </motion.h1>
        <p className="mt-8 max-w-2xl mx-auto text-lg text-muted-foreground">
          Experience the rich heritage of Indian cuisine at
          <span className="text-[var(--gold)] font-semibold"> Taj Royale</span>.
          From aromatic biryanis and sizzling tandoori delights to handcrafted desserts,
          every meal is served with royal hospitality and unforgettable flavours.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <Link to="/reservation" className="group inline-flex items-center gap-2 rounded-full btn-gold px-7 py-3.5 font-medium hover:btn-gold-hover">
            Reserve a Table
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link to="/menu" className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/40 px-7 py-3.5 text-sm hover:bg-[var(--gold)]/10 hover:text-[var(--gold)] transition">
            Explore Menu
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-xs text-muted-foreground tracking-widest uppercase"
        >
          <span>Scroll</span>
          <span className="mt-2 w-px h-10 bg-gradient-to-b from-[var(--gold)] to-transparent animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}

function Featured() {
  const [selected, setSelected] = useState<Dish | null>(null);

  return (
    <section className="py-24 md:py-32 px-6 lg:px-10 max-w-7xl mx-auto">
      <SectionHeading
        eyebrow="Chef's Selection"
        title={<>Taste of <span className="gold-text italic">Royalty</span></>}
        subtitle="Royal selection of authentic Indian delicacies, crafted with traditional recipes, aromatic spices, and beautifully presented for an unforgettable dining experience."
      />
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {DISHES.slice(0, 6).map((d, i) => (
          <motion.div
            key={d.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.05, duration: 0.6 }}
            whileHover={{ y: -6 }}
            onClick={() => setSelected(d)}
            className="group glass rounded-2xl overflow-hidden hover-lift cursor-pointer"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={d.image} alt={d.name} className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
              {d.tag && (
                <div className="absolute top-3 left-3 text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-black/60 text-[var(--gold)] border border-[var(--gold)]/40">{d.tag}</div>
              )}
              <button
                onClick={(e) => e.stopPropagation()}
                className="absolute top-3 right-3 w-9 h-9 rounded-full grid place-items-center bg-black/50 backdrop-blur border border-white/10 text-white hover:text-[var(--gold)] transition"
              >
                <Heart className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-display">{d.name}</h3>
                <div className="flex items-center gap-1 text-sm text-[var(--gold)]"><Star className="w-4 h-4 fill-current" />{d.rating}</div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{d.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-display text-2xl gold-text">₹{d.price}</span>
                <button
                  onClick={(e) => { e.stopPropagation(); setSelected(d); }}
                  className="text-xs tracking-widest uppercase text-[var(--gold)] hover:underline"
                >
                  Order Tasting
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <DishModal dish={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

function Categories() {
  const cats = [
    { name: "Tandoor Specials", count: 14, icon: Sparkles },
    { name: "Biryani & Rice", count: 10, icon: GlassWater },
    { name: "Curries & Kebabs", count: 20, icon: Utensils },
    { name: "Sweets & Desserts", count: 16, icon: ChefHat },
  ];
  return (
    <section className="py-20 px-6 lg:px-10 max-w-7xl mx-auto">
      <SectionHeading eyebrow="Explore" title={<>Popular <span className="gold-text italic">Categories</span></>} />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cats.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass gold-border rounded-2xl p-8 text-center hover-lift hover:-translate-y-1"
          >
            <div className="mx-auto w-14 h-14 rounded-full grid place-items-center btn-gold">
              <c.icon className="w-6 h-6" />
            </div>
            <h3 className="mt-5 font-display text-xl">{c.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{c.count} curated plates</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { icon: Award, title: "Royal Dining Heritage", text: "Bringing recipes from Mughal royal kitchens and regional India together on one menu." },
    { icon: ChefHat, title: "Master Chef Team", text: "A kitchen led by Chef Vikram Singh, trained in the royal kitchens of Rajasthan and Delhi's finest houses." },
    { icon: GlassWater, title: "Handpicked Spice Cellar", text: "Spices sourced directly from Kerala, Kashmir, and Rajasthan for authentic, robust flavour in every dish." },
    { icon: Clock, title: "Private Dining", text: "Elegant private salons for anniversaries, family celebrations, and festive gatherings." },
  ];
  return (
    <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
      <SectionHeading eyebrow="Why Us" title={<>The <span className="gold-text italic">Taj Royale</span> Experience</>} />
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass rounded-2xl p-7 hover:border-[var(--gold)]/50 transition"
          >
            <it.icon className="w-8 h-8 text-[var(--gold)]" />
            <h3 className="mt-5 font-display text-lg">{it.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ChefSection() {
  return (
    <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
      <div className="grid gap-12 lg:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden gold-border">
            <img src={IMG.chef} alt="Chef Vikram Singh" className="w-full h-auto object-cover" loading="lazy" />
          </div>
          <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-4 hidden md:block">
            <div className="text-3xl font-display gold-text">25</div>
            <div className="text-xs text-muted-foreground uppercase tracking-widest">Years of craft</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]">
            <span className="w-8 h-px bg-[var(--gold)]/50" /> Meet the Chef
          </div>
          <h2 className="mt-4 text-5xl font-display leading-tight">Chef <span className="gold-text italic">Vikram Singh</span></h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Trained in the royal kitchens of Jaipur and later refined his craft across Delhi's finest tables, Chef Vikram joined Taj Royale in 2014 to bring the flavours of India's imperial kitchens to Paris. His philosophy is simple: honor the spice, respect the tradition, delight the guest.
          </p>
          <blockquote className="mt-6 pl-6 border-l border-[var(--gold)]/40 italic text-lg">
            "Every dish carries the story of a region. It should feel like home."
          </blockquote>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { n: "25+", l: "Years of Experience" },
              { n: "3,500+", l: "Guests / month" },
              { n: "20", l: "Signature Recipes" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-xl p-4 text-center">
                <div className="text-2xl font-display gold-text">{s.n}</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 5500);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="py-24 px-6 lg:px-10 max-w-5xl mx-auto">
      <SectionHeading eyebrow="Guest Voices" title={<>What our <span className="gold-text italic">guests</span> say</>} />
      <div className="mt-12 relative min-h-[220px]">
        {TESTIMONIALS.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: i === idx ? 1 : 0, y: i === idx ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className={`absolute inset-0 glass rounded-3xl p-10 text-center ${i === idx ? "" : "pointer-events-none"}`}
          >
            <Quote className="w-8 h-8 text-[var(--gold)] mx-auto" />
            <p className="mt-5 text-xl md:text-2xl font-display leading-snug">"{t.text}"</p>
            <div className="mt-6 flex items-center justify-center gap-1 text-[var(--gold)]">
              {Array.from({ length: t.rating }).map((_, k) => <Star key={k} className="w-4 h-4 fill-current" />)}
            </div>
            <div className="mt-4 text-sm">
              <div className="font-medium">{t.name}</div>
              <div className="text-muted-foreground">{t.role}</div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-center gap-2">
        {TESTIMONIALS.map((_, idx) => (
          <button key={idx} aria-label={`Testimonial ${idx + 1}`} onClick={() => setI(idx)} className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-[var(--gold)]" : "w-2 bg-[var(--gold)]/30"}`} />
        ))}
      </div>
    </section>
  );
}

function AnimatedNumber({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const start = performance.now();
        const dur = 1600;
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / dur);
          setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);
  return <div ref={ref} className="text-5xl md:text-6xl font-display gold-text">{n.toLocaleString()}{suffix}</div>;
}

function Stats() {
  const stats = [
    { n: 30, s: "+", l: "Years of tradition" },
    { n: 20, s: "+", l: "Signature spices used" },
    { n: 500, s: "+", l: "Recipes perfected" },
    { n: 60000, s: "+", l: "Guests served" },
  ];
  return (
    <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
      <div className="glass rounded-3xl p-10 md:p-14 grid gap-10 md:grid-cols-4 text-center">
        {stats.map((s) => (
          <div key={s.l}>
            <AnimatedNumber to={s.n} suffix={s.s} />
            <div className="mt-3 text-xs tracking-[0.3em] uppercase text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function GalleryPreview() {
  const imgs = [IMG.gallery1, IMG.dish1, IMG.gallery2, IMG.dish4, IMG.dish5];
  return (
    <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
      <SectionHeading eyebrow="Ambience" title={<>Inside <span className="gold-text italic">Taj Royale</span></>} />
      <div className="mt-12 grid gap-4 grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px]">
        {imgs.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className={`relative rounded-2xl overflow-hidden ${i === 0 ? "row-span-2 col-span-2" : ""}`}
          >
            <img src={src} alt="Ambience" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" loading="lazy" />
          </motion.div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link to="/gallery" className="inline-flex items-center gap-2 text-[var(--gold)] hover:underline">View full gallery <ArrowRight className="w-4 h-4" /></Link>
      </div>
    </section>
  );
}

function Instafeed() {
  const imgs = [IMG.dish1, IMG.dish2, IMG.dish3, IMG.dish4, IMG.dish5, IMG.dish6];
  return (
    <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
      <SectionHeading eyebrow="@tajroyale" title={<>Follow our <span className="gold-text italic">journey</span></>} />
      <div className="mt-12 grid grid-cols-2 md:grid-cols-6 gap-3">
        {imgs.map((src, i) => (
          <motion.a
            key={i}
            href="#"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="group relative aspect-square rounded-xl overflow-hidden"
          >
            <img src={src} alt="Instagram" className="w-full h-full object-cover transition duration-500 group-hover:scale-110" loading="lazy" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition grid place-items-center">
              <Instagram className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
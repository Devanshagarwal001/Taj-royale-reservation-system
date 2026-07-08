// // import { createFileRoute, Link } from "@tanstack/react-router";
// // import { motion } from "framer-motion";
// // import { useEffect, useState } from "react";
// // import {
// //   Check, Calendar, Clock, Users, MapPin, Phone, Sparkles, Download, Printer, Share2, CalendarPlus, Home as HomeIcon, RotateCcw, UtensilsCrossed,
// // } from "lucide-react";
// // import toast from "react-hot-toast";
// // import { getLastReservation } from "@/lib/reservation-store";
// // import type { Reservation } from "@/lib/api";
// // import { Confetti } from "@/components/reservation/Confetti";

// // export const Route = createFileRoute("/confirmation")({
// //   component: ConfirmationPage,
// //   head: () => ({ meta: [{ title: "Reservation Confirmed — Maison Aurée" }, { name: "robots", content: "noindex" }] }),
// // });

// // function ConfirmationPage() {
// //   const [r, setR] = useState<Reservation | null>(null);
// //   const [showConfetti, setShowConfetti] = useState(false);

// //   useEffect(() => {
// //     const data = getLastReservation();
// //     setR(data);
// //     setShowConfetti(true);
// //     const t = setTimeout(() => setShowConfetti(false), 4500);
// //     return () => clearTimeout(t);
// //   }, []);

// //   if (!r) {
// //     return (
// //       <div className="pt-40 pb-24 px-6 text-center">
// //         <h1 className="font-display text-3xl">No recent reservation</h1>
// //         <p className="mt-2 text-muted-foreground">Please make a reservation first.</p>
// //         <Link to="/reservation" className="mt-6 inline-flex btn-gold px-6 py-2.5 rounded-full">Reserve now</Link>
// //       </div>
// //     );
// //   }

// //   const share = async () => {
// //     const text = `I just reserved a table at Maison Aurée! ${r.date} @ ${r.time}. Booking ${r.bookingId}`;
// //     try {
// //       if (navigator.share) await navigator.share({ title: "My Maison Aurée Reservation", text });
// //       else { await navigator.clipboard.writeText(text); toast.success("Copied to clipboard"); }
// //     } catch {}
// //   };

// //   return (
// //     <div className="relative pt-28 pb-20 px-6 lg:px-10">
// //       {showConfetti && <Confetti />}

// //       <motion.div
// //         initial={{ opacity: 0, y: 30 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.8 }}
// //         className="max-w-3xl mx-auto text-center"
// //       >
// //         <motion.div
// //           initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.15 }}
// //           className="mx-auto w-20 h-20 rounded-full grid place-items-center btn-gold shadow-2xl"
// //         >
// //           <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6, type: "spring" }}>
// //             <Check className="w-9 h-9 text-black" strokeWidth={3} />
// //           </motion.div>
// //         </motion.div>
// //         <div className="mt-6 text-[10px] tracking-[0.5em] uppercase text-[var(--gold)]">Reservation Confirmed</div>
// //         <h1 className="mt-3 text-4xl md:text-5xl font-display">Welcome to <span className="gold-text italic">Maison Aurée</span></h1>
// //         <p className="mt-3 text-muted-foreground">Your table awaits. A confirmation has been sent to {r.email}.</p>
// //       </motion.div>

// //       {/* Boarding-pass style confirmation card */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 40, scale: 0.98 }}
// //         animate={{ opacity: 1, y: 0, scale: 1 }}
// //         transition={{ delay: 0.35, duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
// //         className="mt-12 max-w-4xl mx-auto"
// //       >
// //         <div className="relative rounded-3xl gold-border overflow-hidden shadow-[var(--shadow-luxe)]">
// //           <div className="relative bg-[oklch(0.11_0.008_60)]">
// //             {/* subtle noise/gradient */}
// //             <div className="absolute inset-0 opacity-40 pointer-events-none"
// //               style={{ background: "radial-gradient(600px 300px at 0% 0%, oklch(0.82 0.14 85 / 0.12), transparent 60%), radial-gradient(600px 300px at 100% 100%, oklch(0.82 0.14 85 / 0.08), transparent 60%)" }} />

// //             {/* Header */}
// //             <div className="relative px-8 py-6 flex items-center justify-between border-b border-[var(--gold)]/20">
// //               <div className="flex items-center gap-3">
// //                 <div className="w-11 h-11 rounded-full grid place-items-center btn-gold"><UtensilsCrossed className="w-5 h-5" /></div>
// //                 <div>
// //                   <div className="font-display text-xl gold-text">Maison Aurée</div>
// //                   <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Boarding · Fine Dining</div>
// //                 </div>
// //               </div>
// //               <StatusBadge status={r.status} />
// //             </div>

// //             {/* Body */}
// //             <div className="grid md:grid-cols-[1fr_auto] items-stretch">
// //               <div className="p-8 grid gap-6">
// //                 <div className="grid grid-cols-3 gap-6">
// //                   <Cell label="Date" value={r.date} icon={Calendar} big />
// //                   <ArrowChain />
// //                   <Cell label="Time" value={r.time} icon={Clock} big />
// //                 </div>
// //                 <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
// //                   <Cell label="Guest" value={r.name} />
// //                   <Cell label="Guests" value={String(r.guests)} icon={Users} />
// //                   <Cell label="Table" value={r.tableId} />
// //                   <Cell label="Seating" value={r.seating === "indoor" ? "Indoor" : "Outdoor"} />
// //                 </div>
// //                 <div className="grid grid-cols-2 gap-6">
// //                   <Cell label="Occasion" value={r.occasion} icon={Sparkles} />
// //                   <Cell label="Booking ID" value={r.bookingId} mono />
// //                 </div>
// //                 {r.specialRequest && (
// //                   <div>
// //                     <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Special Request</div>
// //                     <p className="mt-1 text-sm italic">"{r.specialRequest}"</p>
// //                   </div>
// //                 )}
// //                 <div className="pt-4 border-t border-[var(--gold)]/15 grid grid-cols-2 gap-6 text-sm">
// //                   <div className="flex items-start gap-2 text-muted-foreground">
// //                     <MapPin className="w-4 h-4 text-[var(--gold)] mt-0.5" />
// //                     <span>12 Rue du Faubourg,<br />Paris, France 75008</span>
// //                   </div>
// //                   <div className="flex items-start gap-2 text-muted-foreground">
// //                     <Phone className="w-4 h-4 text-[var(--gold)] mt-0.5" />
// //                     <span>+33 1 42 00 12 34</span>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Tear-off stub */}
// //               <div className="relative border-t md:border-t-0 md:border-l border-dashed border-[var(--gold)]/40 p-8 grid place-items-center">
// //                 <div className="absolute -left-3 -top-3 w-6 h-6 rounded-full bg-background hidden md:block" />
// //                 <div className="absolute -left-3 -bottom-3 w-6 h-6 rounded-full bg-background hidden md:block" />
// //                 <div className="text-center">
// //                   <QRPlaceholder />
// //                   <div className="mt-3 font-mono text-xs">{r.bookingId}</div>
// //                   <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">Scan at entrance</div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Perforation */}
// //             <div className="relative h-2 border-t border-dashed border-[var(--gold)]/25" />

// //             {/* Footer flight-style */}
// //             <div className="px-8 py-4 flex flex-wrap items-center justify-between gap-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
// //               <span>Boarding · 30 min prior</span>
// //               <span>Dress code · Smart Elegant</span>
// //               <span>Gate · Main Salon</span>
// //             </div>
// //           </div>
// //         </div>
// //       </motion.div>

// //       {/* Actions */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
// //         className="mt-10 max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-3"
// //       >
// //         <ActionBtn icon={Download} onClick={() => toast.success("Reservation card downloaded")}>Download</ActionBtn>
// //         <ActionBtn icon={Printer} onClick={() => window.print()}>Print</ActionBtn>
// //         <ActionBtn icon={Share2} onClick={share}>Share</ActionBtn>
// //         <ActionBtn icon={CalendarPlus} onClick={() => toast.success("Added to calendar")}>Add to Calendar</ActionBtn>
// //         <Link to="/reservation" className="inline-flex items-center gap-2 rounded-full btn-gold px-5 py-2.5 text-sm font-medium hover:btn-gold-hover">
// //           <RotateCcw className="w-4 h-4" /> Book Another
// //         </Link>
// //         <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/30 px-5 py-2.5 text-sm hover:bg-[var(--gold)]/10">
// //           <HomeIcon className="w-4 h-4" /> Home
// //         </Link>
// //       </motion.div>
// //     </div>
// //   );
// // }

// // function Cell({ label, value, icon: Icon, big, mono }: any) {
// //   return (
// //     <div>
// //       <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-1.5">
// //         {Icon && <Icon className="w-3 h-3 text-[var(--gold)]" />}{label}
// //       </div>
// //       <div className={`mt-1 font-display ${big ? "text-3xl gold-text" : "text-lg"} ${mono ? "font-mono text-sm text-[var(--gold)]" : ""}`}>{value}</div>
// //     </div>
// //   );
// // }

// // function ArrowChain() {
// //   return (
// //     <div className="flex flex-col items-center justify-center">
// //       <div className="text-[var(--gold)]">✧</div>
// //       <div className="w-full h-px border-t border-dashed border-[var(--gold)]/40 my-2" />
// //       <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Aurée</div>
// //     </div>
// //   );
// // }

// // function StatusBadge({ status }: { status: string }) {
// //   return (
// //     <motion.div
// //       animate={{ boxShadow: ["0 0 0 0 oklch(0.72 0.17 145 / 0.4)", "0 0 0 10px oklch(0.72 0.17 145 / 0)"] }}
// //       transition={{ repeat: Infinity, duration: 2 }}
// //       className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] tracking-[0.3em] uppercase bg-[oklch(0.72_0.17_145_/_0.15)] border border-[oklch(0.72_0.17_145_/_0.5)] text-[oklch(0.85_0.16_145)]"
// //     >
// //       <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.17_145)] animate-pulse" />{status}
// //     </motion.div>
// //   );
// // }

// // function ActionBtn({ icon: Icon, children, onClick }: any) {
// //   return (
// //     <button onClick={onClick} className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/25 px-5 py-2.5 text-sm hover:bg-[var(--gold)]/10 hover:text-[var(--gold)] transition">
// //       <Icon className="w-4 h-4" />{children}
// //     </button>
// //   );
// // }

// // function QRPlaceholder() {
// //   // Faux QR code made of tiles
// //   return (
// //     <div className="w-32 h-32 p-2 bg-white rounded-lg grid grid-cols-8 grid-rows-8 gap-[2px]">
// //       {Array.from({ length: 64 }).map((_, i) => {
// //         const on = (i * 31 + (i % 7)) % 3 !== 0;
// //         // corner markers
// //         const row = Math.floor(i / 8), col = i % 8;
// //         const corner = (row < 3 && col < 3) || (row < 3 && col > 4) || (row > 4 && col < 3);
// //         return <span key={i} className={corner ? "bg-black" : on ? "bg-black" : "bg-white"} />;
// //       })}
// //     </div>
// //   );
// // }
// import { jsPDF } from "jspdf";
// import { createFileRoute, Link } from "@tanstack/react-router";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import {
//   Check, Calendar, Clock, Users, MapPin, Phone, Sparkles, Download, Printer, Share2, CalendarPlus, Home as HomeIcon, RotateCcw, UtensilsCrossed,
// } from "lucide-react";
// import toast from "react-hot-toast";
// import { getLastReservation } from "@/lib/reservation-store";
// import type { Reservation } from "@/lib/api";
// import { Confetti } from "@/components/reservation/Confetti";

// export const Route = createFileRoute("/confirmation")({
//   component: ConfirmationPage,
//   head: () => ({ meta: [{ title: "Reservation Confirmed — Taj Royale" }, { name: "robots", content: "noindex" }] }),
// });
// function downloadReservationCard(r: Reservation) {
//   const doc = new jsPDF();

//   doc.setFontSize(22);
//   doc.setTextColor(184, 134, 11);
//   doc.text("TAJ ROYALE", 20, 20);

//   doc.setFontSize(12);
//   doc.setTextColor(0, 0, 0);

//   doc.text(`Booking ID: ${r.bookingId}`, 20, 40);
//   doc.text(`Guest: ${r.name}`, 20, 50);
//   doc.text(`Email: ${r.email}`, 20, 60);
//   doc.text(`Phone: ${r.phone}`, 20, 70);

//   doc.text(`Date: ${r.date}`, 20, 90);
//   doc.text(`Time: ${r.time}`, 20, 100);
//   doc.text(`Guests: ${r.guests}`, 20, 110);
//   doc.text(`Table: ${r.tableId}`, 20, 120);
//   doc.text(`Occasion: ${r.occasion}`, 20, 130);
//   doc.text(`Seating: ${r.seating}`, 20, 140);
//   doc.text(`Status: ${r.status}`, 20, 150);

//   doc.save(`Reservation-${r.bookingId}.pdf`);
// }
// function ConfirmationPage() {
//   const [r, setR] = useState<Reservation | null>(null);
//   const [showConfetti, setShowConfetti] = useState(false);

//   useEffect(() => {
//     const data = getLastReservation();
//     setR(data);
//     setShowConfetti(true);
//     const t = setTimeout(() => setShowConfetti(false), 4500);
//     return () => clearTimeout(t);
//   }, []);

//   if (!r) {
//     return (
//       <div className="pt-40 pb-24 px-6 text-center">
//         <h1 className="font-display text-3xl">No recent reservation</h1>
//         <p className="mt-2 text-muted-foreground">Please make a reservation first.</p>
//         <Link to="/reservation" className="mt-6 inline-flex btn-gold px-6 py-2.5 rounded-full">Reserve now</Link>
//       </div>
//     );
//   }

//   const share = async () => {
//     const text = `I just reserved a table at Taj Royale! ${r.date} @ ${r.time}. Booking ${r.bookingId}`;
//     try {
//       if (navigator.share) await navigator.share({ title: "My Taj Royale Reservation", text });
//       else { await navigator.clipboard.writeText(text); toast.success("Copied to clipboard"); }
//     } catch {}
//   };

//   return (
//     <div className="relative pt-28 pb-20 px-6 lg:px-10">
//       {showConfetti && <Confetti />}

//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="max-w-3xl mx-auto text-center"
//       >
//         <motion.div
//           initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.15 }}
//           className="mx-auto w-20 h-20 rounded-full grid place-items-center btn-gold shadow-2xl"
//         >
//           <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6, type: "spring" }}>
//             <Check className="w-9 h-9 text-black" strokeWidth={3} />
//           </motion.div>
//         </motion.div>
//         <div className="mt-6 text-[10px] tracking-[0.5em] uppercase text-[var(--gold)]">Reservation Confirmed</div>
//         <h1 className="mt-3 text-4xl md:text-5xl font-display">Welcome to <span className="gold-text italic">Taj Royale</span></h1>
//         <p className="mt-3 text-muted-foreground">Your table awaits. A confirmation has been sent to {r.email}.</p>
//       </motion.div>

//       {/* Boarding-pass style confirmation card */}
//       <motion.div
//         initial={{ opacity: 0, y: 40, scale: 0.98 }}
//         animate={{ opacity: 1, y: 0, scale: 1 }}
//         transition={{ delay: 0.35, duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
//         className="mt-12 max-w-4xl mx-auto"
//       >
//         <div className="relative rounded-3xl gold-border overflow-hidden shadow-[var(--shadow-luxe)]">
//           <div className="relative bg-[oklch(0.11_0.008_60)]">
//             {/* subtle noise/gradient */}
//             <div className="absolute inset-0 opacity-40 pointer-events-none"
//               style={{ background: "radial-gradient(600px 300px at 0% 0%, oklch(0.82 0.14 85 / 0.12), transparent 60%), radial-gradient(600px 300px at 100% 100%, oklch(0.82 0.14 85 / 0.08), transparent 60%)" }} />

//             {/* Header */}
//             <div className="relative px-8 py-6 flex items-center justify-between border-b border-[var(--gold)]/20">
//               <div className="flex items-center gap-3">
//                 <div className="w-11 h-11 rounded-full grid place-items-center btn-gold"><UtensilsCrossed className="w-5 h-5" /></div>
//                 <div>
//                   <div className="font-display text-xl gold-text">Taj Royale</div>
//                   <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Boarding · Royal Dining</div>
//                 </div>
//               </div>
//               <StatusBadge status={r.status} />
//             </div>

//             {/* Body */}
//             <div className="grid md:grid-cols-[1fr_auto] items-stretch">
//               <div className="p-8 grid gap-6">
//                 <div className="grid grid-cols-3 gap-6">
//                   <Cell label="Date" value={r.date} icon={Calendar} big />
//                   <ArrowChain />
//                   <Cell label="Time" value={r.time} icon={Clock} big />
//                 </div>
//                 <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
//                   <Cell label="Guest" value={r.name} />
//                   <Cell label="Guests" value={String(r.guests)} icon={Users} />
//                   <Cell label="Table" value={r.tableId} />
//                   <Cell label="Seating" value={r.seating === "indoor" ? "Indoor" : "Outdoor"} />
//                 </div>
//                 <div className="grid grid-cols-2 gap-6">
//                   <Cell label="Occasion" value={r.occasion} icon={Sparkles} />
//                   <Cell label="Booking ID" value={r.bookingId} mono />
//                 </div>
//                 {r.specialRequest && (
//                   <div>
//                     <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Special Request</div>
//                     <p className="mt-1 text-sm italic">"{r.specialRequest}"</p>
//                   </div>
//                 )}
//                 <div className="pt-4 border-t border-[var(--gold)]/15 grid grid-cols-2 gap-6 text-sm">
//                   <div className="flex items-start gap-2 text-muted-foreground">
//                     <MapPin className="w-4 h-4 text-[var(--gold)] mt-0.5" />
//                     <span>49 Civil Lines Main Market,<br />Roorkee, Uttarakhand 247667</span>
//                   </div>
//                   <div className="flex items-start gap-2 text-muted-foreground">
//                     <Phone className="w-4 h-4 text-[var(--gold)] mt-0.5" />
//                     <span>+91 12345 67890</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Tear-off stub */}
//               <div className="relative border-t md:border-t-0 md:border-l border-dashed border-[var(--gold)]/40 p-8 grid place-items-center">
//                 <div className="absolute -left-3 -top-3 w-6 h-6 rounded-full bg-background hidden md:block" />
//                 <div className="absolute -left-3 -bottom-3 w-6 h-6 rounded-full bg-background hidden md:block" />
//                 <div className="text-center">
//                   <QRPlaceholder />
//                   <div className="mt-3 font-mono text-xs">{r.bookingId}</div>
//                   <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">Scan at entrance</div>
//                 </div>
//               </div>
//             </div>

//             {/* Perforation */}
//             <div className="relative h-2 border-t border-dashed border-[var(--gold)]/25" />

//             {/* Footer flight-style */}
//             <div className="px-8 py-4 flex flex-wrap items-center justify-between gap-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
//               <span>Boarding · 30 min prior</span>
//               <span>Dress code · Smart Elegant</span>
//               <span>Gate · Main Salon</span>
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       {/* Actions */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
//         className="mt-10 max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-3"
//       >
// <ActionBtn
//   icon={Download}
//   onClick={() => {
//     downloadReservationCard(r);
//     toast.success("Reservation card downloaded");
//   }}
// >
//   Download
// </ActionBtn>        <ActionBtn icon={Printer} onClick={() => window.print()}>Print</ActionBtn>
//         <ActionBtn icon={Share2} onClick={share}>Share</ActionBtn>
//         <ActionBtn icon={CalendarPlus} onClick={() => toast.success("Added to calendar")}>Add to Calendar</ActionBtn>
//         <Link to="/reservation" className="inline-flex items-center gap-2 rounded-full btn-gold px-5 py-2.5 text-sm font-medium hover:btn-gold-hover">
//           <RotateCcw className="w-4 h-4" /> Book Another
//         </Link>
//         <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/30 px-5 py-2.5 text-sm hover:bg-[var(--gold)]/10">
//           <HomeIcon className="w-4 h-4" /> Home
//         </Link>
//       </motion.div>
//     </div>
//   );
// }

// function Cell({ label, value, icon: Icon, big, mono }: any) {
//   return (
//     <div>
//       <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-1.5">
//         {Icon && <Icon className="w-3 h-3 text-[var(--gold)]" />}{label}
//       </div>
//       <div className={`mt-1 font-display ${big ? "text-3xl gold-text" : "text-lg"} ${mono ? "font-mono text-sm text-[var(--gold)]" : ""}`}>{value}</div>
//     </div>
//   );
// }

// function ArrowChain() {
//   return (
//     <div className="flex flex-col items-center justify-center">
//       <div className="text-[var(--gold)]">✧</div>
//       <div className="w-full h-px border-t border-dashed border-[var(--gold)]/40 my-2" />
//       <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Royale</div>
//     </div>
//   );
// }

// function StatusBadge({ status }: { status: string }) {
//   return (
//     <motion.div
//       animate={{ boxShadow: ["0 0 0 0 oklch(0.72 0.17 145 / 0.4)", "0 0 0 10px oklch(0.72 0.17 145 / 0)"] }}
//       transition={{ repeat: Infinity, duration: 2 }}
//       className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] tracking-[0.3em] uppercase bg-[oklch(0.72_0.17_145_/_0.15)] border border-[oklch(0.72_0.17_145_/_0.5)] text-[oklch(0.85_0.16_145)]"
//     >
//       <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.17_145)] animate-pulse" />{status}
//     </motion.div>
//   );
// }

// function ActionBtn({ icon: Icon, children, onClick }: any) {
//   return (
//     <button onClick={onClick} className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/25 px-5 py-2.5 text-sm hover:bg-[var(--gold)]/10 hover:text-[var(--gold)] transition">
//       <Icon className="w-4 h-4" />{children}
//     </button>
//   );
// }

// function QRPlaceholder() {
//   // Faux QR code made of tiles
//   return (
//     <div className="w-32 h-32 p-2 bg-white rounded-lg grid grid-cols-8 grid-rows-8 gap-[2px]">
//       {Array.from({ length: 64 }).map((_, i) => {
//         const on = (i * 31 + (i % 7)) % 3 !== 0;
//         // corner markers
//         const row = Math.floor(i / 8), col = i % 8;
//         const corner = (row < 3 && col < 3) || (row < 3 && col > 4) || (row > 4 && col < 3);
//         return <span key={i} className={corner ? "bg-black" : on ? "bg-black" : "bg-white"} />;
//       })}
//     </div>
//   );
// } 
// import { createFileRoute, Link } from "@tanstack/react-router";
// import { motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import {
//   Check, Calendar, Clock, Users, MapPin, Phone, Mail, Sparkles, Download, Printer, Share2,
//   CalendarPlus, Home as HomeIcon, RotateCcw, Armchair, Ticket, Crown, DoorOpen,
// } from "lucide-react";
// import toast from "react-hot-toast";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas-pro";
// import { getLastReservation } from "@/lib/reservation-store";
// import type { Reservation } from "@/lib/api";
// import { Confetti } from "@/components/reservation/Confetti";

// const GOLD = "#D4AF37";

// export const Route = createFileRoute("/confirmation")({
//   component: ConfirmationPage,
//   head: () => ({ meta: [{ title: "Reservation Confirmed — Taj Royale" }, { name: "robots", content: "noindex" }] }),
// });

// function ConfirmationPage() {
//   const [r, setR] = useState<Reservation | null>(null);
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [downloading, setDownloading] = useState(false);
//   const cardRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const data = getLastReservation();
//     setR(data);
//     setShowConfetti(true);
//     const t = setTimeout(() => setShowConfetti(false), 4500);
//     return () => clearTimeout(t);
//   }, []);

//   if (!r) {
//     return (
//       <div className="pt-40 pb-24 px-6 text-center">
//         <h1 className="font-display text-3xl">No recent reservation</h1>
//         <p className="mt-2 text-muted-foreground">Please make a reservation first.</p>
//         <Link to="/reservation" className="mt-6 inline-flex btn-gold px-6 py-2.5 rounded-full">Reserve now</Link>
//       </div>
//     );
//   }

//   const share = async () => {
//     const text = `I just reserved a table at Taj Royale! ${r.date} @ ${r.time}. Booking ${r.bookingId}`;
//     try {
//       if (navigator.share) await navigator.share({ title: "My Taj Royale Reservation", text });
//       else { await navigator.clipboard.writeText(text); toast.success("Copied to clipboard"); }
//     } catch {}
//   };

//   const downloadPDF = async () => {
//     if (!cardRef.current) return;
//     setDownloading(true);
//     try {
//       const canvas = await html2canvas(cardRef.current, {
//         backgroundColor: "#0f0d0a",
//         scale: 3,
//         useCORS: true,
//       });
//       const imgData = canvas.toDataURL("image/png");

//       const imgWidthMM = 190;
//       const imgHeightMM = (canvas.height * imgWidthMM) / canvas.width;

//       const pdf = new jsPDF({
//         orientation: imgHeightMM > imgWidthMM ? "portrait" : "landscape",
//         unit: "mm",
//         format: "a4",
//       });

//       const pageWidth = pdf.internal.pageSize.getWidth();
//       const x = (pageWidth - imgWidthMM) / 2;

//       pdf.addImage(imgData, "PNG", x, 15, imgWidthMM, imgHeightMM);
//       pdf.save(`Taj-Royale-${r.bookingId}.pdf`);
//       toast.success("Reservation card downloaded");
//     } catch (err) {
//       console.error("PDF generation failed:", err);
//       toast.error("Could not generate PDF");
//     } finally {
//       setDownloading(false);
//     }
//   };

//   const dateObj = new Date(r.date + "T00:00:00");
//   const weekday = dateObj.toLocaleDateString("en-US", { weekday: "long" });
//   const dateFormatted = dateObj.toLocaleDateString("en-US", { day: "2-digit", month: "long", year: "numeric" }).toUpperCase();
//   const [hh, mm] = r.time.split(":").map(Number);
//   const ampm = hh >= 12 ? "PM" : "AM";
//   const hour12 = ((hh + 11) % 12) + 1;
//   const timeFormatted = `${String(hour12).padStart(2, "0")}:${String(mm).padStart(2, "0")} ${ampm}`;

//   return (
//     <div className="relative pt-28 pb-20 px-6 lg:px-10">
//       {showConfetti && <Confetti />}

//       <div className="mt-4 max-w-3xl mx-auto">
//         {/* Captured card */}
//         <motion.div
//           initial={{ opacity: 0, y: 40, scale: 0.98 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           transition={{ delay: 0.2, duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
//         >
//           <div
//             ref={cardRef}
//             className="relative rounded-3xl overflow-hidden"
//             style={{
//               background: "#0b0906",
//               border: `1px solid ${GOLD}55`,
//               boxShadow: `0 0 0 1px ${GOLD}22`,
//               fontFamily: "inherit",
//             }}
//           >
//             <div className="p-8 md:p-10">
//               {/* Header */}
//               <div className="flex items-start justify-between flex-wrap gap-6">
//                 <div className="flex items-center gap-4">
//                   <div
//                     className="w-16 h-16 rounded-full grid place-items-center shrink-0"
//                     style={{ border: `2px solid ${GOLD}`, color: GOLD }}
//                   >
//                     <span className="font-display text-2xl">TR</span>
//                   </div>
//                   <div>
//                     <div className="font-display text-2xl" style={{ color: GOLD }}>Taj Royale</div>
//                     <div className="text-[10px] uppercase tracking-[0.3em] text-white/50 mt-1">Royal Indian Cuisine</div>
//                     <div className="text-[10px] uppercase tracking-[0.3em] text-white/30">Est. 1984</div>
//                   </div>
//                 </div>

//                 <div className="flex flex-col items-center mx-auto">
//                   <div className="w-14 h-14 rounded-full grid place-items-center" style={{ background: GOLD }}>
//                     <Check className="w-7 h-7 text-black" strokeWidth={3} />
//                   </div>
//                   <div className="mt-3 text-[10px] tracking-[0.4em] uppercase text-white/50">Reservation</div>
//                   <div className="font-display text-3xl text-white">Confirmed</div>
//                 </div>

//                 <div
//                   className="px-4 py-3 rounded-xl text-center shrink-0"
//                   style={{ border: `1px solid ${GOLD}66`, color: GOLD }}
//                 >
//                   <Crown className="w-5 h-5 mx-auto" />
//                   <div className="mt-1 text-[9px] uppercase tracking-[0.2em] leading-tight">
//                     Royal Dining<br />Experience
//                   </div>
//                 </div>
//               </div>

//               <p className="mt-6 text-center text-sm text-white/60">
//                 Thank you, {r.name.split(" ")[0]}! Your table is reserved. We look forward to serving you.
//               </p>

//               {/* Details panel */}
//               <div className="mt-8 grid md:grid-cols-[1fr_auto] gap-0 rounded-2xl overflow-hidden" style={{ border: `1px solid ${GOLD}33` }}>
//                 <div className="p-7">
//                   <div className="text-center text-[10px] tracking-[0.4em] uppercase mb-6" style={{ color: GOLD }}>
//                     — Your Reservation Details —
//                   </div>

//                   <div className="grid grid-cols-3 gap-4">
//                     <DetailCell icon={Calendar} label="Date" value={dateFormatted} sub={weekday} />
//                     <DetailCell icon={Clock} label="Time" value={r.time} sub={timeFormatted} />
//                     <DetailCell icon={Users} label="Guests" value={String(r.guests)} sub={`${r.guests === 1 ? "One Guest" : r.guests + " Guests"}`} />
//                   </div>

//                   <Divider />

//                   <div className="grid grid-cols-3 gap-4">
//                     <DetailCell icon={Armchair} label="Table" value={r.tableId} sub="Table Number" />
//                     <DetailCell icon={DoorOpen} label="Seating" value={r.seating === "indoor" ? "Indoor" : "Outdoor"} sub="Seating" />
//                     <DetailCell icon={Sparkles} label="Occasion" value={r.occasion} sub="Special Occasion" />
//                   </div>

//                   <Divider />

//                   <div className="grid sm:grid-cols-2 gap-4">
//                     <DetailCell icon={Users} label="Guest Name" value={r.name} wide />
//                     <DetailCell icon={Ticket} label="Booking ID" value={r.bookingId} wide mono />
//                   </div>

//                   <div className="mt-4 grid sm:grid-cols-2 gap-4">
//                     <DetailCell icon={Mail} label="Email" value={r.email} wide />
//                     <DetailCell icon={Phone} label="Phone" value={r.phone || "—"} wide />
//                   </div>

//                   {r.specialRequest && (
//                     <div className="mt-4 pt-4" style={{ borderTop: `1px dashed ${GOLD}33` }}>
//                       <div className="text-[10px] uppercase tracking-[0.3em] text-white/40">Special Request</div>
//                       <p className="mt-1 text-sm italic text-white/70">"{r.specialRequest}"</p>
//                     </div>
//                   )}

//                   <div
//                     className="mt-5 rounded-xl px-5 py-4 flex flex-wrap items-center justify-between gap-3 text-sm text-white/70"
//                     style={{ border: `1px solid ${GOLD}22` }}
//                   >
//                     <div className="flex items-start gap-2">
//                       <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: GOLD }} />
//                       <span>49 Civil Lines Main Market,<br />Roorkee, Uttarakhand 247667</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Phone className="w-4 h-4 shrink-0" style={{ color: GOLD }} />
//                       <span>+91 12345 67890</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Stub */}
//                 <div
//                   className="p-7 flex flex-col items-center justify-center text-center md:w-[220px]"
//                   style={{ borderTop: `1px dashed ${GOLD}44`, borderLeft: "none" }}
//                 >
//                   <div className="hidden md:block" style={{ borderLeft: `1px dashed ${GOLD}44`, height: 0 }} />
//                   <Crown className="w-5 h-5" style={{ color: GOLD }} />
//                   <div className="mt-2 text-[9px] tracking-[0.3em] uppercase text-white/50">Show This</div>
//                   <div className="text-[9px] tracking-[0.3em] uppercase text-white/50">At Entrance</div>

//                   <div className="mt-4 bg-white rounded-xl p-3">
//                     <QRCode />
//                   </div>

//                   <div className="mt-3 font-mono text-xs" style={{ color: GOLD }}>{r.bookingId}</div>
//                   <div className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/40">Scan To Verify</div>

//                   <MonumentSilhouette className="mt-6 w-24 opacity-70" style={{ color: GOLD }} />

//                   <div className="mt-4 italic text-sm" style={{ color: GOLD, fontFamily: "cursive" }}>
//                     Experience Royalty<br />Every Moment
//                   </div>
//                 </div>
//               </div>

//               {/* Bottom info bar */}
//               <div
//                 className="mt-6 rounded-xl px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-[10px] uppercase tracking-[0.25em] text-white/50"
//                 style={{ border: `1px solid ${GOLD}22` }}
//               >
//                 <span>Boarding · 30 min prior</span>
//                 <span>Dress code · Smart Elegant</span>
//                 <span>Gate · Main Salon</span>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Closing line + actions (outside PDF capture) */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
//           className="mt-8 text-center"
//         >
//           <div className="gold-text italic font-display text-lg">We can't wait to welcome you!</div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
//           className="mt-8 flex flex-wrap items-center justify-center gap-3"
//         >
//           <ActionBtn icon={Download} onClick={downloadPDF} disabled={downloading}>
//             {downloading ? "Preparing…" : "Download"}
//           </ActionBtn>
//           <ActionBtn icon={Printer} onClick={() => window.print()}>Print</ActionBtn>
//           <ActionBtn icon={Share2} onClick={share}>Share</ActionBtn>
//           <ActionBtn icon={CalendarPlus} onClick={() => toast.success("Added to calendar")}>Add to Calendar</ActionBtn>
//           <Link to="/reservation" className="inline-flex items-center gap-2 rounded-full btn-gold px-5 py-2.5 text-sm font-medium hover:btn-gold-hover">
//             <RotateCcw className="w-4 h-4" /> Book Another
//           </Link>
//           <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/30 px-5 py-2.5 text-sm hover:bg-[var(--gold)]/10">
//             <HomeIcon className="w-4 h-4" /> Home
//           </Link>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// function DetailCell({ icon: Icon, label, value, sub, wide, mono }: any) {
//   return (
//     <div className={wide ? "col-span-1" : ""}>
//       <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.25em] text-white/40">
//         <Icon className="w-3 h-3" style={{ color: GOLD }} />{label}
//       </div>
//       <div className={`mt-1.5 text-white ${mono ? "font-mono text-sm" : "font-display text-lg"}`}>{value}</div>
//       {sub && <div className="text-[10px] text-white/35 mt-0.5">{sub}</div>}
//     </div>
//   );
// }

// function Divider() {
//   return (
//     <div className="my-5 flex items-center gap-3">
//       <div className="flex-1 h-px" style={{ background: `${GOLD}33` }} />
//       <div style={{ color: GOLD }}>✧</div>
//       <div className="flex-1 h-px" style={{ background: `${GOLD}33` }} />
//     </div>
//   );
// }

// function ActionBtn({ icon: Icon, children, onClick, disabled }: any) {
//   return (
//     <button onClick={onClick} disabled={disabled} className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/25 px-5 py-2.5 text-sm hover:bg-[var(--gold)]/10 hover:text-[var(--gold)] transition disabled:opacity-50 disabled:cursor-not-allowed">
//       <Icon className="w-4 h-4" />{children}
//     </button>
//   );
// }

// function QRCode() {
//   return (
//     <div className="w-28 h-28 grid grid-cols-8 grid-rows-8 gap-[2px]">
//       {Array.from({ length: 64 }).map((_, i) => {
//         const on = (i * 31 + (i % 7)) % 3 !== 0;
//         const row = Math.floor(i / 8), col = i % 8;
//         const corner = (row < 3 && col < 3) || (row < 3 && col > 4) || (row > 4 && col < 3);
//         return <span key={i} className={corner ? "bg-black" : on ? "bg-black" : "bg-white"} />;
//       })}
//     </div>
//   );
// }

// function MonumentSilhouette({ className, style }: { className?: string; style?: React.CSSProperties }) {
//   return (
//     <svg viewBox="0 0 100 60" className={className} style={style} fill="currentColor">
//       <path d="M50 4 L54 12 L46 12 Z" />
//       <rect x="47" y="12" width="6" height="10" />
//       <path d="M50 8 A10 10 0 0 1 60 18 L60 26 L40 26 L40 18 A10 10 0 0 1 50 8 Z" />
//       <rect x="15" y="26" width="8" height="24" />
//       <path d="M15 26 A4 6 0 0 1 23 26 Z" />
//       <rect x="77" y="26" width="8" height="24" />
//       <path d="M77 26 A4 6 0 0 1 85 26 Z" />
//       <rect x="30" y="22" width="40" height="28" rx="1" />
//       <path d="M30 22 A20 14 0 0 1 70 22 Z" />
//       <rect x="0" y="50" width="100" height="4" />
//     </svg>
//   );
// }
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Check, Calendar, Clock, Users, MapPin, Phone, Mail, Sparkles, Download, Printer, Share2,
  CalendarPlus, Home as HomeIcon, RotateCcw, Armchair, Ticket, Crown, DoorOpen,
} from "lucide-react";
import toast from "react-hot-toast";
import jsPDF from "jspdf";
import html2canvas from "html2canvas-pro";
import QRCode from "react-qr-code";
import { getLastReservation } from "@/lib/reservation-store";
import type { Reservation } from "@/lib/api";
import { Confetti } from "@/components/reservation/Confetti";

const GOLD = "#D4AF37";

export const Route = createFileRoute("/confirmation")({
  component: ConfirmationPage,
  head: () => ({ meta: [{ title: "Reservation Confirmed — Taj Royale" }, { name: "robots", content: "noindex" }] }),
});

function ConfirmationPage() {
  const [r, setR] = useState<Reservation | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const data = getLastReservation();
    setR(data);
    setShowConfetti(true);
    const t = setTimeout(() => setShowConfetti(false), 4500);
    return () => clearTimeout(t);
  }, []);

  if (!r) {
    return (
      <div className="pt-40 pb-24 px-6 text-center">
        <h1 className="font-display text-3xl">No recent reservation</h1>
        <p className="mt-2 text-muted-foreground">Please make a reservation first.</p>
        <Link to="/reservation" className="mt-6 inline-flex btn-gold px-6 py-2.5 rounded-full">Reserve now</Link>
      </div>
    );
  }

  const qrValue = `${window.location.origin}/reservation/${r.bookingId}`;

  const share = async () => {
    const text = `I just reserved a table at Taj Royale! ${r.date} @ ${r.time}. Booking ${r.bookingId}`;
    try {
      if (navigator.share) await navigator.share({ title: "My Taj Royale Reservation", text });
      else { await navigator.clipboard.writeText(text); toast.success("Copied to clipboard"); }
    } catch {}
  };

  const downloadPDF = async () => {
    if (!cardRef.current) return;
    setDownloading(true);
    try {
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: "#0f0d0a",
        scale: 3,
        useCORS: true,
      });
      const imgData = canvas.toDataURL("image/png");

      const imgWidthMM = 190;
      const imgHeightMM = (canvas.height * imgWidthMM) / canvas.width;

      const pdf = new jsPDF({
        orientation: imgHeightMM > imgWidthMM ? "portrait" : "landscape",
        unit: "mm",
        format: "a4",
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const x = (pageWidth - imgWidthMM) / 2;

      pdf.addImage(imgData, "PNG", x, 15, imgWidthMM, imgHeightMM);
      pdf.save(`Taj-Royale-${r.bookingId}.pdf`);
      toast.success("Reservation card downloaded");
    } catch (err) {
      console.error("PDF generation failed:", err);
      toast.error("Could not generate PDF");
    } finally {
      setDownloading(false);
    }
  };

  const dateObj = new Date(r.date + "T00:00:00");
  const weekday = dateObj.toLocaleDateString("en-US", { weekday: "long" });
  const dateFormatted = dateObj.toLocaleDateString("en-US", { day: "2-digit", month: "long", year: "numeric" }).toUpperCase();
  const [hh, mm] = r.time.split(":").map(Number);
  const ampm = hh >= 12 ? "PM" : "AM";
  const hour12 = ((hh + 11) % 12) + 1;
  const timeFormatted = `${String(hour12).padStart(2, "0")}:${String(mm).padStart(2, "0")} ${ampm}`;

  return (
    <div className="relative pt-28 pb-20 px-6 lg:px-10">
      {showConfetti && <Confetti />}

      <div className="mt-4 max-w-3xl mx-auto">
        {/* Captured card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <div
            ref={cardRef}
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: "#0b0906",
              border: `1px solid ${GOLD}55`,
              boxShadow: `0 0 0 1px ${GOLD}22`,
              fontFamily: "inherit",
            }}
          >
            <div className="p-8 md:p-10">
              {/* Header */}
              <div className="flex items-start justify-between flex-wrap gap-6">
                <div className="flex items-center gap-4">
                  <div
                    className="w-16 h-16 rounded-full grid place-items-center shrink-0"
                    style={{ border: `2px solid ${GOLD}`, color: GOLD }}
                  >
                    <span className="font-display text-2xl">TR</span>
                  </div>
                  <div>
                    <div className="font-display text-2xl" style={{ color: GOLD }}>Taj Royale</div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-white/50 mt-1">Royal Indian Cuisine</div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-white/30">Est. 1984</div>
                  </div>
                </div>

                <div className="flex flex-col items-center mx-auto">
                  <div className="w-14 h-14 rounded-full grid place-items-center" style={{ background: GOLD }}>
                    <Check className="w-7 h-7 text-black" strokeWidth={3} />
                  </div>
                  <div className="mt-3 text-[10px] tracking-[0.4em] uppercase text-white/50">Reservation</div>
                  <div className="font-display text-3xl text-white">Confirmed</div>
                </div>

                <div
                  className="px-4 py-3 rounded-xl text-center shrink-0"
                  style={{ border: `1px solid ${GOLD}66`, color: GOLD }}
                >
                  <Crown className="w-5 h-5 mx-auto" />
                  <div className="mt-1 text-[9px] uppercase tracking-[0.2em] leading-tight">
                    Royal Dining<br />Experience
                  </div>
                </div>
              </div>

              <p className="mt-6 text-center text-sm text-white/60">
                Thank you, {r.name.split(" ")[0]}! Your table is reserved. We look forward to serving you.
              </p>

              {/* Details panel */}
              <div className="mt-8 grid md:grid-cols-[1fr_auto] gap-0 rounded-2xl overflow-hidden" style={{ border: `1px solid ${GOLD}33` }}>
                <div className="p-7">
                  <div className="text-center text-[10px] tracking-[0.4em] uppercase mb-6" style={{ color: GOLD }}>
                    — Your Reservation Details —
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <DetailCell icon={Calendar} label="Date" value={dateFormatted} sub={weekday} />
                    <DetailCell icon={Clock} label="Time" value={r.time} sub={timeFormatted} />
                    <DetailCell icon={Users} label="Guests" value={String(r.guests)} sub={`${r.guests === 1 ? "One Guest" : r.guests + " Guests"}`} />
                  </div>

                  <Divider />

                  <div className="grid grid-cols-3 gap-4">
                    <DetailCell icon={Armchair} label="Table" value={r.tableId} sub="Table Number" />
                    <DetailCell icon={DoorOpen} label="Seating" value={r.seating === "indoor" ? "Indoor" : "Outdoor"} sub="Seating" />
                    <DetailCell icon={Sparkles} label="Occasion" value={r.occasion} sub="Special Occasion" />
                  </div>

                  <Divider />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <DetailCell icon={Users} label="Guest Name" value={r.name} wide />
                    <DetailCell icon={Ticket} label="Booking ID" value={r.bookingId} wide mono />
                  </div>

                  <div className="mt-4 grid sm:grid-cols-2 gap-4">
                    <DetailCell icon={Mail} label="Email" value={r.email} wide />
                    <DetailCell icon={Phone} label="Phone" value={r.phone || "—"} wide />
                  </div>

                  {r.specialRequest && (
                    <div className="mt-4 pt-4" style={{ borderTop: `1px dashed ${GOLD}33` }}>
                      <div className="text-[10px] uppercase tracking-[0.3em] text-white/40">Special Request</div>
                      <p className="mt-1 text-sm italic text-white/70">"{r.specialRequest}"</p>
                    </div>
                  )}

                  <div
                    className="mt-5 rounded-xl px-5 py-4 flex flex-wrap items-center justify-between gap-3 text-sm text-white/70"
                    style={{ border: `1px solid ${GOLD}22` }}
                  >
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: GOLD }} />
                      <span>49 Civil Lines Main Market,<br />Roorkee, Uttarakhand 247667</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 shrink-0" style={{ color: GOLD }} />
                      <span>+91 12345 67890</span>
                    </div>
                  </div>
                </div>

                {/* Stub */}
                <div
                  className="p-7 flex flex-col items-center justify-center text-center md:w-[220px]"
                  style={{ borderTop: `1px dashed ${GOLD}44`, borderLeft: "none" }}
                >
                  <div className="hidden md:block" style={{ borderLeft: `1px dashed ${GOLD}44`, height: 0 }} />
                  <Crown className="w-5 h-5" style={{ color: GOLD }} />
                  <div className="mt-2 text-[9px] tracking-[0.3em] uppercase text-white/50">Show This</div>
                  <div className="text-[9px] tracking-[0.3em] uppercase text-white/50">At Entrance</div>

                  <div className="mt-4 bg-white p-3 rounded-xl">
                    <QRCode value={qrValue} size={112} />
                  </div>

                  <div className="mt-3 font-mono text-xs" style={{ color: GOLD }}>{r.bookingId}</div>
                  <div className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/40">Scan To Verify</div>

                  <MonumentSilhouette className="mt-6 w-24 opacity-70" style={{ color: GOLD }} />

                  <div className="mt-4 italic text-sm" style={{ color: GOLD, fontFamily: "cursive" }}>
                    Experience Royalty<br />Every Moment
                  </div>
                </div>
              </div>

              {/* Bottom info bar */}
              <div
                className="mt-6 rounded-xl px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-[10px] uppercase tracking-[0.25em] text-white/50"
                style={{ border: `1px solid ${GOLD}22` }}
              >
                <span>Boarding · 30 min prior</span>
                <span>Dress code · Smart Elegant</span>
                <span>Gate · Main Salon</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Closing line + actions (outside PDF capture) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
          className="mt-8 text-center"
        >
          <div className="gold-text italic font-display text-lg">We can't wait to welcome you!</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <ActionBtn icon={Download} onClick={downloadPDF} disabled={downloading}>
            {downloading ? "Preparing…" : "Download"}
          </ActionBtn>
          <ActionBtn icon={Printer} onClick={() => window.print()}>Print</ActionBtn>
          <ActionBtn icon={Share2} onClick={share}>Share</ActionBtn>
          <ActionBtn icon={CalendarPlus} onClick={() => toast.success("Added to calendar")}>Add to Calendar</ActionBtn>
          <Link to="/reservation" className="inline-flex items-center gap-2 rounded-full btn-gold px-5 py-2.5 text-sm font-medium hover:btn-gold-hover">
            <RotateCcw className="w-4 h-4" /> Book Another
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/30 px-5 py-2.5 text-sm hover:bg-[var(--gold)]/10">
            <HomeIcon className="w-4 h-4" /> Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

function DetailCell({ icon: Icon, label, value, sub, wide, mono }: any) {
  return (
    <div className={wide ? "col-span-1" : ""}>
      <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.25em] text-white/40">
        <Icon className="w-3 h-3" style={{ color: GOLD }} />{label}
      </div>
      <div className={`mt-1.5 text-white ${mono ? "font-mono text-sm" : "font-display text-lg"}`}>{value}</div>
      {sub && <div className="text-[10px] text-white/35 mt-0.5">{sub}</div>}
    </div>
  );
}

function Divider() {
  return (
    <div className="my-5 flex items-center gap-3">
      <div className="flex-1 h-px" style={{ background: `${GOLD}33` }} />
      <div style={{ color: GOLD }}>✧</div>
      <div className="flex-1 h-px" style={{ background: `${GOLD}33` }} />
    </div>
  );
}

function ActionBtn({ icon: Icon, children, onClick, disabled }: any) {
  return (
    <button onClick={onClick} disabled={disabled} className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/25 px-5 py-2.5 text-sm hover:bg-[var(--gold)]/10 hover:text-[var(--gold)] transition disabled:opacity-50 disabled:cursor-not-allowed">
      <Icon className="w-4 h-4" />{children}
    </button>
  );
}

function MonumentSilhouette({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 60" className={className} style={style} fill="currentColor">
      <path d="M50 4 L54 12 L46 12 Z" />
      <rect x="47" y="12" width="6" height="10" />
      <path d="M50 8 A10 10 0 0 1 60 18 L60 26 L40 26 L40 18 A10 10 0 0 1 50 8 Z" />
      <rect x="15" y="26" width="8" height="24" />
      <path d="M15 26 A4 6 0 0 1 23 26 Z" />
      <rect x="77" y="26" width="8" height="24" />
      <path d="M77 26 A4 6 0 0 1 85 26 Z" />
      <rect x="30" y="22" width="40" height="28" rx="1" />
      <path d="M30 22 A20 14 0 0 1 70 22 Z" />
      <rect x="0" y="50" width="100" height="4" />
    </svg>
  );
}
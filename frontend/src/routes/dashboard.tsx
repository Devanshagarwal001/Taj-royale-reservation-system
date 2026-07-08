// // // import { createFileRoute, Link } from "@tanstack/react-router";
// // // import { motion } from "framer-motion";
// // // import { useEffect, useState } from "react";
// // // import { CalendarCheck, History, Heart, User, Settings, Download, Edit, Trash2, Plus } from "lucide-react";
// // // import toast from "react-hot-toast";
// // // import { api, type Reservation } from "@/lib/api";
// // // import { getUser, isAuthenticated } from "@/lib/auth-store";
// // // import { DISHES } from "@/lib/mock-data";
// // // import { cn } from "@/lib/utils";

// // // export const Route = createFileRoute("/dashboard")({
// // //   component: DashboardPage,
// // //   head: () => ({ meta: [{ title: "My Dashboard — Maison Aurée" }, { name: "robots", content: "noindex" }] }),
// // // });

// // // const TABS = [
// // //   { k: "upcoming", label: "Upcoming", icon: CalendarCheck },
// // //   { k: "history", label: "History", icon: History },
// // //   { k: "favorites", label: "Favorites", icon: Heart },
// // //   { k: "profile", label: "Profile", icon: User },
// // //   { k: "settings", label: "Settings", icon: Settings },
// // // ] as const;

// // // function DashboardPage() {
// // //   const [tab, setTab] = useState<typeof TABS[number]["k"]>("upcoming");
// // //   const [items, setItems] = useState<Reservation[]>([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const user = getUser();

// // //   const refresh = () => {
// // //     if (!isAuthenticated()) {
// // //       setLoading(false);
// // //       return;
// // //     }
// // //     setLoading(true);
// // //     api
// // //       .getMyReservations()
// // //       .then((res) => setItems(res.data))
// // //       .catch((err) => toast.error(err.message || "Failed to load reservations"))
// // //       .finally(() => setLoading(false));
// // //   };

// // //   useEffect(() => { refresh(); }, []);

// // //   const upcoming = items.filter((r) => r.status === "CONFIRMED" && r.date >= new Date().toISOString().slice(0, 10));
// // //   const past = items.filter((r) => r.date < new Date().toISOString().slice(0, 10) || r.status === "CANCELLED");

// // //   if (!isAuthenticated()) {
// // //     return (
// // //       <div className="pt-40 pb-24 px-6 text-center">
// // //         <h1 className="font-display text-3xl">Sign in to view your dashboard</h1>
// // //         <p className="mt-2 text-muted-foreground">Track reservations, favorites, and your profile.</p>
// // //         <Link to="/login" className="mt-6 inline-flex btn-gold px-6 py-2.5 rounded-full">Sign in</Link>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="pt-32 pb-16 px-6 lg:px-10 max-w-7xl mx-auto">
// // //       <div className="flex flex-wrap items-end justify-between gap-4">
// // //         <div>
// // //           <div className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]">My Account</div>
// // //           <h1 className="mt-2 text-4xl md:text-5xl font-display">Bonsoir, <span className="gold-text italic">{user?.name?.split(" ")[0] || "Guest"}</span></h1>
// // //         </div>
// // //         <Link to="/reservation" className="inline-flex items-center gap-2 rounded-full btn-gold px-5 py-2.5 text-sm font-medium"><Plus className="w-4 h-4" /> New Reservation</Link>
// // //       </div>

// // //       <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
// // //         <StatCard label="Upcoming" value={upcoming.length} />
// // //         <StatCard label="Past visits" value={past.length} />
// // //         <StatCard label="Loyalty tier" value="Gold" gold />
// // //         <StatCard label="Points" value="1,240" />
// // //       </div>

// // //       <div className="mt-10 grid gap-6 lg:grid-cols-[240px_1fr]">
// // //         <aside className="glass rounded-2xl p-3 h-fit lg:sticky lg:top-24">
// // //           <ul className="flex lg:flex-col gap-1 overflow-x-auto">
// // //             {TABS.map((t) => (
// // //               <li key={t.k}>
// // //                 <button onClick={() => setTab(t.k)} className={cn("w-full flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition whitespace-nowrap",
// // //                   tab === t.k ? "btn-gold" : "text-muted-foreground hover:bg-[var(--gold)]/10 hover:text-foreground")}>
// // //                   <t.icon className="w-4 h-4" /> {t.label}
// // //                 </button>
// // //               </li>
// // //             ))}
// // //           </ul>
// // //         </aside>

// // //         <div className="glass rounded-2xl p-6 md:p-8">
// // //           {tab === "upcoming" && (
// // //             <ResList
// // //               list={upcoming}
// // //               loading={loading}
// // //               onCancel={async (id) => {
// // //                 try {
// // //                   await api.cancelReservation(id);
// // //                   toast.success("Reservation cancelled");
// // //                   refresh();
// // //                 } catch (err: any) {
// // //                   toast.error(err.message || "Failed to cancel");
// // //                 }
// // //               }}
// // //             />
// // //           )}
// // //           {tab === "history" && <ResList list={past} readOnly loading={loading} />}
// // //           {tab === "favorites" && <Favorites />}
// // //           {tab === "profile" && <Profile user={user} />}
// // //           {tab === "settings" && <SettingsPanel />}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // function StatCard({ label, value, gold }: { label: string; value: any; gold?: boolean }) {
// // //   return (
// // //     <motion.div whileHover={{ y: -3 }} className="glass rounded-2xl p-5">
// // //       <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
// // //       <div className={cn("mt-2 text-3xl font-display", gold ? "gold-text" : "")}>{value}</div>
// // //     </motion.div>
// // //   );
// // // }

// // // function ResList({ list, onCancel, readOnly, loading }: { list: Reservation[]; onCancel?: (id: string) => void; readOnly?: boolean; loading?: boolean }) {
// // //   if (loading) return <div className="text-center py-16 text-muted-foreground">Loading reservations...</div>;
// // //   if (!list.length) return <div className="text-center py-16 text-muted-foreground">No reservations yet. <Link to="/reservation" className="text-[var(--gold)] hover:underline">Book one</Link>.</div>;
// // //   return (
// // //     <div className="grid gap-4">
// // //       {list.map((r) => (
// // //         <motion.div key={r.bookingId} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-[var(--gold)]/15 p-5 flex flex-wrap items-center gap-4 justify-between">
// // //           <div>
// // //             <div className="text-xs uppercase tracking-widest text-muted-foreground">{r.bookingId}</div>
// // //             <div className="mt-1 font-display text-xl">{r.date} · {r.time}</div>
// // //             <div className="text-sm text-muted-foreground">{r.guests} guests · Table {r.tableId} · {r.occasion}</div>
// // //           </div>
// // //           <div className="flex items-center gap-2">
// // //             <span className={cn("text-[10px] uppercase tracking-widest px-3 py-1 rounded-full",
// // //               r.status === "CONFIRMED" ? "bg-[oklch(0.72_0.17_145_/_0.15)] text-[oklch(0.85_0.16_145)] border border-[oklch(0.72_0.17_145_/_0.5)]" :
// // //               "bg-muted text-muted-foreground border border-border")}>{r.status}</span>
// // //             <button onClick={() => toast.success("Card downloaded")} className="w-9 h-9 rounded-full grid place-items-center border border-[var(--gold)]/25 hover:bg-[var(--gold)]/10"><Download className="w-4 h-4" /></button>
// // //             {!readOnly && (
// // //               <>
// // //                 <button onClick={() => toast("Edit UI (demo)")} className="w-9 h-9 rounded-full grid place-items-center border border-[var(--gold)]/25 hover:bg-[var(--gold)]/10"><Edit className="w-4 h-4" /></button>
// // //                 <button onClick={() => onCancel?.(r.bookingId)} className="w-9 h-9 rounded-full grid place-items-center border border-[var(--danger)]/40 text-[var(--danger)] hover:bg-[var(--danger)]/10"><Trash2 className="w-4 h-4" /></button>
// // //               </>
// // //             )}
// // //           </div>
// // //         </motion.div>
// // //       ))}
// // //     </div>
// // //   );
// // // }

// // // function Favorites() {
// // //   return (
// // //     <div className="grid gap-4 sm:grid-cols-2">
// // //       {DISHES.slice(0, 4).map((d) => (
// // //         <div key={d.id} className="rounded-2xl overflow-hidden border border-[var(--gold)]/15 flex items-center gap-4 p-3">
// // //           <img src={d.image} alt={d.name} className="w-24 h-24 object-cover rounded-xl" loading="lazy" />
// // //           <div>
// // //             <div className="font-display">{d.name}</div>
// // //             <div className="text-sm text-muted-foreground">€{d.price}</div>
// // //           </div>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // }
// // // function Profile({ user }: { user: ReturnType<typeof getUser> }) {
// // //   return (
// // //     <div className="grid gap-4 md:grid-cols-2">
// // //       {[["Name", user?.name || "—"],["Email", user?.email || "—"],["Phone","—"],["Loyalty","Gold Member"]].map(([l,v]) => (
// // //         <div key={l} className="rounded-2xl border border-[var(--gold)]/15 p-4">
// // //           <div className="text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
// // //           <div className="mt-1 font-display text-lg">{v}</div>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // }
// // // function SettingsPanel() {
// // //   const rows = ["Email notifications","SMS reminders","Personalized offers","Newsletter"];
// // //   return (
// // //     <div className="grid gap-3">
// // //       {rows.map((r) => (
// // //         <label key={r} className="flex items-center justify-between rounded-2xl border border-[var(--gold)]/15 px-5 py-4">
// // //           <span>{r}</span>
// // //           <input type="checkbox" defaultChecked className="w-10 h-5 accent-[var(--gold)]" />
// // //         </label>
// // //       ))}
// // //     </div>
// // //   );
// // // }
// // import jsPDF from "jspdf";
// // import { createFileRoute, Link } from "@tanstack/react-router";
// // import { motion } from "framer-motion";
// // import { useEffect, useState } from "react";
// // import { CalendarCheck, History, Heart, User, Settings, Download, Edit, Trash2, Plus } from "lucide-react";
// // import toast from "react-hot-toast";
// // import { api, type Reservation } from "@/lib/api";
// // import { getUser, isAuthenticated } from "@/lib/auth-store";
// // import { DISHES } from "@/lib/mock-data";
// // import { cn } from "@/lib/utils";

// // export const Route = createFileRoute("/dashboard")({
// //   component: DashboardPage,
// //   head: () => ({ meta: [{ title: "My Dashboard — Taj Royale" }, { name: "robots", content: "noindex" }] }),
// // });

// // const TABS = [
// //   { k: "upcoming", label: "Upcoming", icon: CalendarCheck },
// //   { k: "history", label: "History", icon: History },
// //   { k: "favorites", label: "Favorites", icon: Heart },
// //   { k: "profile", label: "Profile", icon: User },
// //   { k: "settings", label: "Settings", icon: Settings },
// // ] as const;

// // function DashboardPage() {
// //   const [tab, setTab] = useState<typeof TABS[number]["k"]>("upcoming");
// //   const [items, setItems] = useState<Reservation[]>([]);
// //   const [loading, setLoading] = useState(true);
// //   const user = getUser();

// //   const refresh = () => {
// //     if (!isAuthenticated()) {
// //       setLoading(false);
// //       return;
// //     }
// //     setLoading(true);
// //     api
// //       .getMyReservations()
// //       .then((res) => setItems(res.data))
// //       .catch((err) => toast.error(err.message || "Failed to load reservations"))
// //       .finally(() => setLoading(false));
// //   };

// //   useEffect(() => { refresh(); }, []);

// //   const upcoming = items.filter((r) => r.status === "CONFIRMED" && r.date >= new Date().toISOString().slice(0, 10));
// //   const past = items.filter((r) => r.date < new Date().toISOString().slice(0, 10) || r.status === "CANCELLED");

// //   if (!isAuthenticated()) {
// //     return (
// //       <div className="pt-40 pb-24 px-6 text-center">
// //         <h1 className="font-display text-3xl">Sign in to view your dashboard</h1>
// //         <p className="mt-2 text-muted-foreground">Track reservations, favorites, and your profile.</p>
// //         <Link to="/login" className="mt-6 inline-flex btn-gold px-6 py-2.5 rounded-full">Sign in</Link>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="pt-32 pb-16 px-6 lg:px-10 max-w-7xl mx-auto">
// //       <div className="flex flex-wrap items-end justify-between gap-4">
// //         <div>
// //           <div className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]">My Account</div>
// //           <h1 className="mt-2 text-4xl md:text-5xl font-display">Namaste, <span className="gold-text italic">{user?.name?.split(" ")[0] || "Guest"}</span></h1>
// //         </div>
// //         <Link to="/reservation" className="inline-flex items-center gap-2 rounded-full btn-gold px-5 py-2.5 text-sm font-medium"><Plus className="w-4 h-4" /> New Reservation</Link>
// //       </div>

// //       <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
// //         <StatCard label="Upcoming" value={upcoming.length} />
// //         <StatCard label="Past visits" value={past.length} />
// //         <StatCard label="Loyalty tier" value="Royal Gold" gold />
// //         <StatCard label="Points" value="1,240" />
// //       </div>

// //       <div className="mt-10 grid gap-6 lg:grid-cols-[240px_1fr]">
// //         <aside className="glass rounded-2xl p-3 h-fit lg:sticky lg:top-24">
// //           <ul className="flex lg:flex-col gap-1 overflow-x-auto">
// //             {TABS.map((t) => (
// //               <li key={t.k}>
// //                 <button onClick={() => setTab(t.k)} className={cn("w-full flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition whitespace-nowrap",
// //                   tab === t.k ? "btn-gold" : "text-muted-foreground hover:bg-[var(--gold)]/10 hover:text-foreground")}>
// //                   <t.icon className="w-4 h-4" /> {t.label}
// //                 </button>
// //               </li>
// //             ))}
// //           </ul>
// //         </aside>

// //         <div className="glass rounded-2xl p-6 md:p-8">
// //           {tab === "upcoming" && (
// //             <ResList
// //               list={upcoming}
// //               loading={loading}
// //               onCancel={async (id) => {
// //                 try {
// //                   await api.cancelReservation(id);
// //                   toast.success("Reservation cancelled");
// //                   refresh();
// //                 } catch (err: any) {
// //                   toast.error(err.message || "Failed to cancel");
// //                 }
// //               }}
// //             />
// //           )}
// //           {tab === "history" && <ResList list={past} readOnly loading={loading} />}
// //           {tab === "favorites" && <Favorites />}
// //           {tab === "profile" && <Profile user={user} />}
// //           {tab === "settings" && <SettingsPanel />}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // function StatCard({ label, value, gold }: { label: string; value: any; gold?: boolean }) {
// //   return (
// //     <motion.div whileHover={{ y: -3 }} className="glass rounded-2xl p-5">
// //       <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
// //       <div className={cn("mt-2 text-3xl font-display", gold ? "gold-text" : "")}>{value}</div>
// //     </motion.div>
// //   );
// // }
// // function downloadReservationCard(r: Reservation) {
// //   const doc = new jsPDF();

// //   doc.setFontSize(22);
// //   doc.text("TAJ ROYALE", 20, 20);

// //   doc.setFontSize(12);

// //   doc.text(`Booking ID: ${r.bookingId}`, 20, 40);
// //   doc.text(`Guest: ${r.name}`, 20, 50);
// //   doc.text(`Email: ${r.email}`, 20, 60);
// //   doc.text(`Phone: ${r.phone}`, 20, 70);

// //   doc.text(`Date: ${r.date}`, 20, 90);
// //   doc.text(`Time: ${r.time}`, 20, 100);
// //   doc.text(`Guests: ${r.guests}`, 20, 110);
// //   doc.text(`Table: ${r.tableId}`, 20, 120);
// //   doc.text(`Occasion: ${r.occasion}`, 20, 130);

// //   doc.text(`Status: ${r.status}`, 20, 150);

// //   doc.save(`Reservation-${r.bookingId}.pdf`);
// // }


// // function ResList({ list, onCancel, readOnly, loading }: { list: Reservation[]; onCancel?: (id: string) => void; readOnly?: boolean; loading?: boolean }) {
// //   if (loading) return <div className="text-center py-16 text-muted-foreground">Loading reservations...</div>;
// //   if (!list.length) return <div className="text-center py-16 text-muted-foreground">No reservations yet. <Link to="/reservation" className="text-[var(--gold)] hover:underline">Book one</Link>.</div>;
// //   return (
// //     <div className="grid gap-4">
// //       {list.map((r) => (
// //         <motion.div key={r.bookingId} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-[var(--gold)]/15 p-5 flex flex-wrap items-center gap-4 justify-between">
// //           <div>
// //             <div className="text-xs uppercase tracking-widest text-muted-foreground">{r.bookingId}</div>
// //             <div className="mt-1 font-display text-xl">{r.date} · {r.time}</div>
// //             <div className="text-sm text-muted-foreground">{r.guests} guests · Table {r.tableId} · {r.occasion}</div>
// //           </div>
// //           <div className="flex items-center gap-2">
// //             <span className={cn("text-[10px] uppercase tracking-widest px-3 py-1 rounded-full",
// //               r.status === "CONFIRMED" ? "bg-[oklch(0.72_0.17_145_/_0.15)] text-[oklch(0.85_0.16_145)] border border-[oklch(0.72_0.17_145_/_0.5)]" :
// //               "bg-muted text-muted-foreground border border-border")}>{r.status}</span>
// // <button
// //   onClick={() => downloadReservationCard(r)}
// //   className="w-9 h-9 rounded-full grid place-items-center border border-[var(--gold)]/25 hover:bg-[var(--gold)]/10"
// // >
// //   <Download className="w-4 h-4" />
// // </button>            {!readOnly && (
// //               <>
// //                 <button onClick={() => toast("Edit UI (demo)")} className="w-9 h-9 rounded-full grid place-items-center border border-[var(--gold)]/25 hover:bg-[var(--gold)]/10"><Edit className="w-4 h-4" /></button>
// // <button
// //   onClick={() => {
// //     console.log("Delete clicked:", r.bookingId);
// //     onCancel?.(r.bookingId);
// //   }}
// //   className="w-9 h-9 rounded-full grid place-items-center border border-[var(--danger)]/40 text-[var(--danger)] hover:bg-[var(--danger)]/10"
// // >
// //   <Trash2 className="w-4 h-4" />
// // </button>              </>
// //             )}
// //           </div>
// //         </motion.div>
// //       ))}
// //     </div>
// //   );
// // }

// // function Favorites() {
// //   return (
// //     <div className="grid gap-4 sm:grid-cols-2">
// //       {DISHES.slice(0, 4).map((d) => (
// //         <div key={d.id} className="rounded-2xl overflow-hidden border border-[var(--gold)]/15 flex items-center gap-4 p-3">
// //           <img src={d.image} alt={d.name} className="w-24 h-24 object-cover rounded-xl" loading="lazy" />
// //           <div>
// //             <div className="font-display">{d.name}</div>
// //             <div className="text-sm text-muted-foreground">€{d.price}</div>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }
// // function Profile({ user }: { user: ReturnType<typeof getUser> }) {
// //   return (
// //     <div className="grid gap-4 md:grid-cols-2">
// //       {[["Name", user?.name || "—"],["Email", user?.email || "—"],["Phone","—"],["Loyalty","Royal Gold Member"]].map(([l,v]) => (
// //         <div key={l} className="rounded-2xl border border-[var(--gold)]/15 p-4">
// //           <div className="text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
// //           <div className="mt-1 font-display text-lg">{v}</div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }
// // function SettingsPanel() {
// //   const rows = ["Email notifications","SMS reminders","Personalized offers","Newsletter"];
// //   return (
// //     <div className="grid gap-3">
// //       {rows.map((r) => (
// //         <label key={r} className="flex items-center justify-between rounded-2xl border border-[var(--gold)]/15 px-5 py-4">
// //           <span>{r}</span>
// //           <input type="checkbox" defaultChecked className="w-10 h-5 accent-[var(--gold)]" />
// //         </label>
// //       ))}
// //     </div>
// //   );
// // }
// import jsPDF from "jspdf";
// import { createFileRoute, Link } from "@tanstack/react-router";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { CalendarCheck, History, Heart, User, Settings, Download, Edit, Trash2, Plus } from "lucide-react";
// import toast from "react-hot-toast";
// import { api, type Reservation } from "@/lib/api";
// import { getUser, isAuthenticated } from "@/lib/auth-store";
// import { DISHES } from "@/lib/mock-data";
// import { cn } from "@/lib/utils";

// export const Route = createFileRoute("/dashboard")({
//   component: DashboardPage,
//   head: () => ({ meta: [{ title: "My Dashboard — Taj Royale" }, { name: "robots", content: "noindex" }] }),
// });

// const TABS = [
//   { k: "upcoming", label: "Upcoming", icon: CalendarCheck },
//   { k: "history", label: "History", icon: History },
//   { k: "favorites", label: "Favorites", icon: Heart },
//   { k: "profile", label: "Profile", icon: User },
//   { k: "settings", label: "Settings", icon: Settings },
// ] as const;

// function DashboardPage() {
//   const [tab, setTab] = useState<typeof TABS[number]["k"]>("upcoming");
//   const [items, setItems] = useState<Reservation[]>([]);
//   const [loading, setLoading] = useState(true);
//   const user = getUser();

//   const refresh = () => {
//     if (!isAuthenticated()) {
//       setLoading(false);
//       return;
//     }
//     setLoading(true);
//     api
//       .getMyReservations()
//       .then((res) => setItems(res.data))
//       .catch((err) => toast.error(err.message || "Failed to load reservations"))
//       .finally(() => setLoading(false));
//   };

//   useEffect(() => { refresh(); }, []);

//   const upcoming = items.filter((r) => r.status === "CONFIRMED" && r.date >= new Date().toISOString().slice(0, 10));
//   const past = items.filter((r) => r.date < new Date().toISOString().slice(0, 10) || r.status === "CANCELLED");

//   if (!isAuthenticated()) {
//     return (
//       <div className="pt-40 pb-24 px-6 text-center">
//         <h1 className="font-display text-3xl">Sign in to view your dashboard</h1>
//         <p className="mt-2 text-muted-foreground">Track reservations, favorites, and your profile.</p>
//         <Link to="/login" className="mt-6 inline-flex btn-gold px-6 py-2.5 rounded-full">Sign in</Link>
//       </div>
//     );
//   }

//   return (
//     <div className="pt-32 pb-16 px-6 lg:px-10 max-w-7xl mx-auto">
//       <div className="flex flex-wrap items-end justify-between gap-4">
//         <div>
//           <div className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]">My Account</div>
//           <h1 className="mt-2 text-4xl md:text-5xl font-display">Namaste, <span className="gold-text italic">{user?.name?.split(" ")[0] || "Guest"}</span></h1>
//         </div>
//         <Link to="/reservation" className="inline-flex items-center gap-2 rounded-full btn-gold px-5 py-2.5 text-sm font-medium"><Plus className="w-4 h-4" /> New Reservation</Link>
//       </div>

//       <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
//         <StatCard label="Upcoming" value={upcoming.length} />
//         <StatCard label="Past visits" value={past.length} />
//         <StatCard label="Loyalty tier" value="Royal Gold" gold />
//         <StatCard label="Points" value="1,240" />
//       </div>

//       <div className="mt-10 grid gap-6 lg:grid-cols-[240px_1fr]">
//         <aside className="glass rounded-2xl p-3 h-fit lg:sticky lg:top-24">
//           <ul className="flex lg:flex-col gap-1 overflow-x-auto">
//             {TABS.map((t) => (
//               <li key={t.k}>
//                 <button onClick={() => setTab(t.k)} className={cn("w-full flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition whitespace-nowrap",
//                   tab === t.k ? "btn-gold" : "text-muted-foreground hover:bg-[var(--gold)]/10 hover:text-foreground")}>
//                   <t.icon className="w-4 h-4" /> {t.label}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </aside>

//         <div className="glass rounded-2xl p-6 md:p-8">
//           {tab === "upcoming" && (
//             <ResList
//               list={upcoming}
//               loading={loading}
//               onCancel={async (id) => {
//                 try {
//                   await api.cancelReservation(id);
//                   toast.success("Reservation cancelled");
//                   refresh();
//                 } catch (err: any) {
//                   toast.error(err.message || "Failed to cancel");
//                 }
//               }}
//             />
//           )}
//           {tab === "history" && <ResList list={past} readOnly loading={loading} />}
//           {tab === "favorites" && <Favorites />}
//           {tab === "profile" && <Profile user={user} />}
//           {tab === "settings" && <SettingsPanel />}
//         </div>
//       </div>
//     </div>
//   );
// }

// function StatCard({ label, value, gold }: { label: string; value: any; gold?: boolean }) {
//   return (
//     <motion.div whileHover={{ y: -3 }} className="glass rounded-2xl p-5">
//       <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
//       <div className={cn("mt-2 text-3xl font-display", gold ? "gold-text" : "")}>{value}</div>
//     </motion.div>
//   );
// }

// // ---- Premium gold/black PDF generator ----
// function downloadReservationCard(r: Reservation) {
//   const doc = new jsPDF({ unit: "mm", format: "a4" });
//   const pageWidth = doc.internal.pageSize.getWidth();

//   const GOLD: [number, number, number] = [212, 175, 55];
//   const GOLD_DIM: [number, number, number] = [140, 115, 40];
//   const BLACK: [number, number, number] = [11, 9, 6];
//   const WHITE: [number, number, number] = [245, 245, 240];
//   const MUTED: [number, number, number] = [160, 160, 155];

//   const marginX = 15;
//   const cardW = pageWidth - marginX * 2;
//   const cardX = marginX;
//   const cardY = 15;
//   const cardH = 240;

//   // Card background
//   doc.setFillColor(...BLACK);
//   doc.roundedRect(cardX, cardY, cardW, cardH, 4, 4, "F");

//   // Gold border
//   doc.setDrawColor(...GOLD);
//   doc.setLineWidth(0.6);
//   doc.roundedRect(cardX, cardY, cardW, cardH, 4, 4, "S");

//   let y = cardY + 18;

//   // Crest circle
//   doc.setDrawColor(...GOLD);
//   doc.setLineWidth(0.8);
//   doc.circle(cardX + 22, y, 10, "S");
//   doc.setFont("times", "bold");
//   doc.setFontSize(14);
//   doc.setTextColor(...GOLD);
//   doc.text("TR", cardX + 22, y + 1.5, { align: "center" });

//   // Restaurant name
//   doc.setFont("times", "bold");
//   doc.setFontSize(20);
//   doc.setTextColor(...GOLD);
//   doc.text("TAJ ROYALE", cardX + 38, y - 2);

//   doc.setFont("helvetica", "normal");
//   doc.setFontSize(8);
//   doc.setTextColor(...MUTED);
//   doc.text("ROYAL INDIAN CUISINE  ·  EST. 1984", cardX + 38, y + 4);

//   // Status badge (top right)
//   doc.setDrawColor(...GOLD);
//   doc.setLineWidth(0.4);
//   const badgeText = r.status;
//   const badgeW = doc.getTextWidth(badgeText) + 10;
//   const badgeX = cardX + cardW - badgeW - 8;
//   doc.roundedRect(badgeX, y - 6, badgeW, 8, 3, 3, "S");
//   doc.setFontSize(8);
//   doc.setTextColor(...GOLD);
//   doc.text(badgeText, badgeX + badgeW / 2, y - 0.5, { align: "center" });

//   y += 16;
//   doc.setDrawColor(...GOLD_DIM);
//   doc.setLineWidth(0.2);
//   doc.line(cardX + 8, y, cardX + cardW - 8, y);

//   // Section title
//   y += 10;
//   doc.setFont("helvetica", "bold");
//   doc.setFontSize(9);
//   doc.setTextColor(...GOLD);
//   doc.text("— RESERVATION DETAILS —", cardX + cardW / 2, y, { align: "center" });

//   // Helper to draw a labeled field
//   const col1 = cardX + 12;
//   const col2 = cardX + cardW / 2 - 20;
//   const col3 = cardX + cardW - 60;

//   function field(x: number, yy: number, label: string, value: string) {
//     doc.setFont("helvetica", "normal");
//     doc.setFontSize(7.5);
//     doc.setTextColor(...MUTED);
//     doc.text(label.toUpperCase(), x, yy);
//     doc.setFont("times", "bold");
//     doc.setFontSize(12);
//     doc.setTextColor(...WHITE);
//     doc.text(value, x, yy + 6);
//   }

//   y += 12;
//   field(col1, y, "Date", r.date);
//   field(col2, y, "Time", r.time);
//   field(col3, y, "Guests", String(r.guests));

//   y += 18;
//   field(col1, y, "Table", r.tableId);
//   field(col2, y, "Occasion", r.occasion);
//   field(col3, y, "Booking ID", r.bookingId);

//   y += 18;
//   field(col1, y, "Guest Name", r.name);
//   field(col2, y, "Email", r.email);
//   field(col3, y, "Phone", r.phone || "—");

//   y += 16;
//   doc.setDrawColor(...GOLD_DIM);
//   doc.setLineWidth(0.2);
//   doc.line(cardX + 8, y, cardX + cardW - 8, y);

//   // Address block
//   y += 10;
//   doc.setFont("helvetica", "normal");
//   doc.setFontSize(9);
//   doc.setTextColor(...MUTED);
//   doc.text("49 Civil Lines Main Market, Roorkee, Uttarakhand 247667", cardX + 12, y);
//   doc.text("+91 12345 67890", cardX + cardW - 12, y, { align: "right" });

//   // Bottom info bar
//   const barY = cardY + cardH - 16;
//   doc.setDrawColor(...GOLD_DIM);
//   doc.setLineWidth(0.2);
//   doc.line(cardX + 8, barY, cardX + cardW - 8, barY);

//   doc.setFont("helvetica", "normal");
//   doc.setFontSize(7.5);
//   doc.setTextColor(...MUTED);
//   doc.text("BOARDING · 30 MIN PRIOR", cardX + 12, barY + 8);
//   doc.text("DRESS CODE · SMART ELEGANT", cardX + cardW / 2, barY + 8, { align: "center" });
//   doc.text("GATE · MAIN SALON", cardX + cardW - 12, barY + 8, { align: "right" });

//   // Footer line
//   doc.setFont("times", "italic");
//   doc.setFontSize(10);
//   doc.setTextColor(...GOLD);
//   doc.text("We can't wait to welcome you!", pageWidth / 2, cardY + cardH + 14, { align: "center" });

//   doc.save(`Taj-Royale-${r.bookingId}.pdf`);
// }

// function ResList({ list, onCancel, readOnly, loading }: { list: Reservation[]; onCancel?: (id: string) => void; readOnly?: boolean; loading?: boolean }) {
//   if (loading) return <div className="text-center py-16 text-muted-foreground">Loading reservations...</div>;
//   if (!list.length) return <div className="text-center py-16 text-muted-foreground">No reservations yet. <Link to="/reservation" className="text-[var(--gold)] hover:underline">Book one</Link>.</div>;
//   return (
//     <div className="grid gap-4">
//       {list.map((r) => (
//         <motion.div key={r.bookingId} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-[var(--gold)]/15 p-5 flex flex-wrap items-center gap-4 justify-between">
//           <div>
//             <div className="text-xs uppercase tracking-widest text-muted-foreground">{r.bookingId}</div>
//             <div className="mt-1 font-display text-xl">{r.date} · {r.time}</div>
//             <div className="text-sm text-muted-foreground">{r.guests} guests · Table {r.tableId} · {r.occasion}</div>
//           </div>
//           <div className="flex items-center gap-2">
//             <span className={cn("text-[10px] uppercase tracking-widest px-3 py-1 rounded-full",
//               r.status === "CONFIRMED" ? "bg-[oklch(0.72_0.17_145_/_0.15)] text-[oklch(0.85_0.16_145)] border border-[oklch(0.72_0.17_145_/_0.5)]" :
//               "bg-muted text-muted-foreground border border-border")}>{r.status}</span>
//             <button
//               onClick={() => downloadReservationCard(r)}
//               className="w-9 h-9 rounded-full grid place-items-center border border-[var(--gold)]/25 hover:bg-[var(--gold)]/10"
//             >
//               <Download className="w-4 h-4" />
//             </button>
//             {!readOnly && (
//               <>
//                 <button onClick={() => toast("Edit UI (demo)")} className="w-9 h-9 rounded-full grid place-items-center border border-[var(--gold)]/25 hover:bg-[var(--gold)]/10"><Edit className="w-4 h-4" /></button>
//                 <button
//                   onClick={() => {
//                     console.log("Delete clicked:", r.bookingId);
//                     onCancel?.(r.bookingId);
//                   }}
//                   className="w-9 h-9 rounded-full grid place-items-center border border-[var(--danger)]/40 text-[var(--danger)] hover:bg-[var(--danger)]/10"
//                 >
//                   <Trash2 className="w-4 h-4" />
//                 </button>
//               </>
//             )}
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// }

// function Favorites() {
//   return (
//     <div className="grid gap-4 sm:grid-cols-2">
//       {DISHES.slice(0, 4).map((d) => (
//         <div key={d.id} className="rounded-2xl overflow-hidden border border-[var(--gold)]/15 flex items-center gap-4 p-3">
//           <img src={d.image} alt={d.name} className="w-24 h-24 object-cover rounded-xl" loading="lazy" />
//           <div>
//             <div className="font-display">{d.name}</div>
//             <div className="text-sm text-muted-foreground">₹{d.price.toLocaleString("en-IN")}</div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
// function Profile({ user }: { user: ReturnType<typeof getUser> }) {
//   return (
//     <div className="grid gap-4 md:grid-cols-2">
//       {[["Name", user?.name || "—"],["Email", user?.email || "—"],["Phone","—"],["Loyalty","Royal Gold Member"]].map(([l,v]) => (
//         <div key={l} className="rounded-2xl border border-[var(--gold)]/15 p-4">
//           <div className="text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
//           <div className="mt-1 font-display text-lg">{v}</div>
//         </div>
//       ))}
//     </div>
//   );
// }
// function SettingsPanel() {
//   const rows = ["Email notifications","SMS reminders","Personalized offers","Newsletter"];
//   return (
//     <div className="grid gap-3">
//       {rows.map((r) => (
//         <label key={r} className="flex items-center justify-between rounded-2xl border border-[var(--gold)]/15 px-5 py-4">
//           <span>{r}</span>
//           <input type="checkbox" defaultChecked className="w-10 h-5 accent-[var(--gold)]" />
//         </label>
//       ))}
//     </div>
//   );
// }
import jsPDF from "jspdf";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CalendarCheck, History, Heart, User, Settings, Download, Edit, Trash2, Plus } from "lucide-react";
import toast from "react-hot-toast";
import { api, type Reservation } from "@/lib/api";
import { getUser, isAuthenticated } from "@/lib/auth-store";
import { DISHES } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { showDismissableError } from "@/lib/toast-helpers";

export const Route = createFileRoute("/dashboard")({
  component: DashboardPage,
  head: () => ({ meta: [{ title: "My Dashboard — Taj Royale" }, { name: "robots", content: "noindex" }] }),
});

const TABS = [
  { k: "upcoming", label: "Upcoming", icon: CalendarCheck },
  { k: "history", label: "History", icon: History },
  { k: "favorites", label: "Favorites", icon: Heart },
  { k: "profile", label: "Profile", icon: User },
  { k: "settings", label: "Settings", icon: Settings },
] as const;

function DashboardPage() {
  const [tab, setTab] = useState<typeof TABS[number]["k"]>("upcoming");
  const [items, setItems] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);
  const user = getUser();

  const refresh = () => {
    if (!isAuthenticated()) {
      setLoading(false);
      return;
    }
    setLoading(true);
    api
      .getMyReservations()
      .then((res) => setItems(res.data))
      .catch((err) => showDismissableError(err.message || "Failed to load reservations", "reservations-error"))
      .finally(() => setLoading(false));
  };

  useEffect(() => { refresh(); }, []);

  const upcoming = items.filter((r) => r.status === "CONFIRMED" && r.date >= new Date().toISOString().slice(0, 10));
  const past = items.filter((r) => r.date < new Date().toISOString().slice(0, 10) || r.status === "CANCELLED");

  if (!isAuthenticated()) {
    return (
      <div className="pt-40 pb-24 px-6 text-center">
        <h1 className="font-display text-3xl">Sign in to view your dashboard</h1>
        <p className="mt-2 text-muted-foreground">Track reservations, favorites, and your profile.</p>
        <Link to="/login" className="mt-6 inline-flex btn-gold px-6 py-2.5 rounded-full">Sign in</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-16 px-6 lg:px-10 max-w-7xl mx-auto">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]">My Account</div>
          <h1 className="mt-2 text-4xl md:text-5xl font-display">Namaste, <span className="gold-text italic">{user?.name?.split(" ")[0] || "Guest"}</span></h1>
        </div>
        <Link to="/reservation" className="inline-flex items-center gap-2 rounded-full btn-gold px-5 py-2.5 text-sm font-medium"><Plus className="w-4 h-4" /> New Reservation</Link>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Upcoming" value={upcoming.length} />
        <StatCard label="Past visits" value={past.length} />
        <StatCard label="Loyalty tier" value="Royal Gold" gold />
        <StatCard label="Points" value="1,240" />
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[240px_1fr]">
        <aside className="glass rounded-2xl p-3 h-fit lg:sticky lg:top-24">
          <ul className="flex lg:flex-col gap-1 overflow-x-auto">
            {TABS.map((t) => (
              <li key={t.k}>
                <button onClick={() => setTab(t.k)} className={cn("w-full flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition whitespace-nowrap",
                  tab === t.k ? "btn-gold" : "text-muted-foreground hover:bg-[var(--gold)]/10 hover:text-foreground")}>
                  <t.icon className="w-4 h-4" /> {t.label}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <div className="glass rounded-2xl p-6 md:p-8">
          {tab === "upcoming" && (
            <ResList
              list={upcoming}
              loading={loading}
              onCancel={async (id) => {
                try {
                  await api.cancelReservation(id);
                  toast.success("Reservation cancelled");
                  refresh();
                } catch (err: any) {
                  toast.error(err.message || "Failed to cancel");
                }
              }}
            />
          )}
          {tab === "history" && <ResList list={past} readOnly loading={loading} />}
          {tab === "favorites" && <Favorites />}
          {tab === "profile" && <Profile user={user} />}
          {tab === "settings" && <SettingsPanel />}
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, gold }: { label: string; value: any; gold?: boolean }) {
  return (
    <motion.div whileHover={{ y: -3 }} className="glass rounded-2xl p-5">
      <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className={cn("mt-2 text-3xl font-display", gold ? "gold-text" : "")}>{value}</div>
    </motion.div>
  );
}

// ---- Premium gold/black PDF generator ----
function downloadReservationCard(r: Reservation) {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();

  const GOLD: [number, number, number] = [212, 175, 55];
  const GOLD_DIM: [number, number, number] = [140, 115, 40];
  const BLACK: [number, number, number] = [11, 9, 6];
  const WHITE: [number, number, number] = [245, 245, 240];
  const MUTED: [number, number, number] = [160, 160, 155];

  const marginX = 15;
  const cardW = pageWidth - marginX * 2;
  const cardX = marginX;
  const cardY = 15;
  const cardH = 240;

  // Card background
  doc.setFillColor(...BLACK);
  doc.roundedRect(cardX, cardY, cardW, cardH, 4, 4, "F");

  // Gold border
  doc.setDrawColor(...GOLD);
  doc.setLineWidth(0.6);
  doc.roundedRect(cardX, cardY, cardW, cardH, 4, 4, "S");

  let y = cardY + 18;

  // Crest circle
  doc.setDrawColor(...GOLD);
  doc.setLineWidth(0.8);
  doc.circle(cardX + 22, y, 10, "S");
  doc.setFont("times", "bold");
  doc.setFontSize(14);
  doc.setTextColor(...GOLD);
  doc.text("TR", cardX + 22, y + 1.5, { align: "center" });

  // Restaurant name
  doc.setFont("times", "bold");
  doc.setFontSize(20);
  doc.setTextColor(...GOLD);
  doc.text("TAJ ROYALE", cardX + 38, y - 2);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(...MUTED);
  doc.text("ROYAL INDIAN CUISINE  ·  EST. 1984", cardX + 38, y + 4);

  // Status badge (top right)
  doc.setDrawColor(...GOLD);
  doc.setLineWidth(0.4);
  const badgeText = r.status;
  const badgeW = doc.getTextWidth(badgeText) + 10;
  const badgeX = cardX + cardW - badgeW - 8;
  doc.roundedRect(badgeX, y - 6, badgeW, 8, 3, 3, "S");
  doc.setFontSize(8);
  doc.setTextColor(...GOLD);
  doc.text(badgeText, badgeX + badgeW / 2, y - 0.5, { align: "center" });

  y += 16;
  doc.setDrawColor(...GOLD_DIM);
  doc.setLineWidth(0.2);
  doc.line(cardX + 8, y, cardX + cardW - 8, y);

  // Section title
  y += 10;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(...GOLD);
  doc.text("— RESERVATION DETAILS —", cardX + cardW / 2, y, { align: "center" });

  // Helper to draw a labeled field
  const col1 = cardX + 12;
  const col2 = cardX + cardW / 2 - 20;
  const col3 = cardX + cardW - 60;

  function field(x: number, yy: number, label: string, value: string) {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(...MUTED);
    doc.text(label.toUpperCase(), x, yy);
    doc.setFont("times", "bold");
    doc.setFontSize(12);
    doc.setTextColor(...WHITE);
    doc.text(value, x, yy + 6);
  }

  y += 12;
  field(col1, y, "Date", r.date);
  field(col2, y, "Time", r.time);
  field(col3, y, "Guests", String(r.guests));

  y += 18;
  field(col1, y, "Table", r.tableId);
  field(col2, y, "Occasion", r.occasion);
  field(col3, y, "Booking ID", r.bookingId);

  y += 18;
  field(col1, y, "Guest Name", r.name);
  field(col2, y, "Email", r.email);
  field(col3, y, "Phone", r.phone || "—");

  y += 16;
  doc.setDrawColor(...GOLD_DIM);
  doc.setLineWidth(0.2);
  doc.line(cardX + 8, y, cardX + cardW - 8, y);

  // Address block
  y += 10;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...MUTED);
  doc.text("49 Civil Lines Main Market, Roorkee, Uttarakhand 247667", cardX + 12, y);
  doc.text("+91 12345 67890", cardX + cardW - 12, y, { align: "right" });

  // Bottom info bar
  const barY = cardY + cardH - 16;
  doc.setDrawColor(...GOLD_DIM);
  doc.setLineWidth(0.2);
  doc.line(cardX + 8, barY, cardX + cardW - 8, barY);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.setTextColor(...MUTED);
  doc.text("BOARDING · 30 MIN PRIOR", cardX + 12, barY + 8);
  doc.text("DRESS CODE · SMART ELEGANT", cardX + cardW / 2, barY + 8, { align: "center" });
  doc.text("GATE · MAIN SALON", cardX + cardW - 12, barY + 8, { align: "right" });

  // Footer line
  doc.setFont("times", "italic");
  doc.setFontSize(10);
  doc.setTextColor(...GOLD);
  doc.text("We can't wait to welcome you!", pageWidth / 2, cardY + cardH + 14, { align: "center" });

  doc.save(`Taj-Royale-${r.bookingId}.pdf`);
}

function ResList({ list, onCancel, readOnly, loading }: { list: Reservation[]; onCancel?: (id: string) => void; readOnly?: boolean; loading?: boolean }) {
  if (loading) return <div className="text-center py-16 text-muted-foreground">Loading reservations...</div>;
  if (!list.length) return <div className="text-center py-16 text-muted-foreground">No reservations yet. <Link to="/reservation" className="text-[var(--gold)] hover:underline">Book one</Link>.</div>;
  return (
    <div className="grid gap-4">
      {list.map((r) => (
        <motion.div key={r.bookingId} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-[var(--gold)]/15 p-5 flex flex-wrap items-center gap-4 justify-between">
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">{r.bookingId}</div>
            <div className="mt-1 font-display text-xl">{r.date} · {r.time}</div>
            <div className="text-sm text-muted-foreground">{r.guests} guests · Table {r.tableId} · {r.occasion}</div>
          </div>
          <div className="flex items-center gap-2">
            <span className={cn("text-[10px] uppercase tracking-widest px-3 py-1 rounded-full",
              r.status === "CONFIRMED" ? "bg-[oklch(0.72_0.17_145_/_0.15)] text-[oklch(0.85_0.16_145)] border border-[oklch(0.72_0.17_145_/_0.5)]" :
              "bg-muted text-muted-foreground border border-border")}>{r.status}</span>
            <button
              onClick={() => downloadReservationCard(r)}
              className="w-9 h-9 rounded-full grid place-items-center border border-[var(--gold)]/25 hover:bg-[var(--gold)]/10"
            >
              <Download className="w-4 h-4" />
            </button>
            {!readOnly && (
              <>
                <button onClick={() => toast("Edit UI (demo)")} className="w-9 h-9 rounded-full grid place-items-center border border-[var(--gold)]/25 hover:bg-[var(--gold)]/10"><Edit className="w-4 h-4" /></button>
                <button
                  onClick={() => {
                    console.log("Delete clicked:", r.bookingId);
                    onCancel?.(r.bookingId);
                  }}
                  className="w-9 h-9 rounded-full grid place-items-center border border-[var(--danger)]/40 text-[var(--danger)] hover:bg-[var(--danger)]/10"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function Favorites() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {DISHES.slice(0, 4).map((d) => (
        <div key={d.id} className="rounded-2xl overflow-hidden border border-[var(--gold)]/15 flex items-center gap-4 p-3">
          <img src={d.image} alt={d.name} className="w-24 h-24 object-cover rounded-xl" loading="lazy" />
          <div>
            <div className="font-display">{d.name}</div>
            <div className="text-sm text-muted-foreground">₹{d.price.toLocaleString("en-IN")}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
function Profile({ user }: { user: ReturnType<typeof getUser> }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {[["Name", user?.name || "—"],["Email", user?.email || "—"],["Phone","—"],["Loyalty","Royal Gold Member"]].map(([l,v]) => (
        <div key={l} className="rounded-2xl border border-[var(--gold)]/15 p-4">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
          <div className="mt-1 font-display text-lg">{v}</div>
        </div>
      ))}
    </div>
  );
}
function SettingsPanel() {
  const rows = ["Email notifications","SMS reminders","Personalized offers","Newsletter"];
  return (
    <div className="grid gap-3">
      {rows.map((r) => (
        <label key={r} className="flex items-center justify-between rounded-2xl border border-[var(--gold)]/15 px-5 py-4">
          <span>{r}</span>
          <input type="checkbox" defaultChecked className="w-10 h-5 accent-[var(--gold)]" />
        </label>
      ))}
    </div>
  );
}
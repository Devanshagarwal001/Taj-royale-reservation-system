// // import { createFileRoute, useNavigate } from "@tanstack/react-router";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { useState, useEffect } from "react";
// // import { useForm } from "react-hook-form";
// // import toast from "react-hot-toast";
// // import {
// //   User, Mail, Phone, Calendar, Clock, Users, Sparkles, Trees, Home as HomeIcon, ArrowRight, ArrowLeft, MessageSquare, Loader2,
// // } from "lucide-react";
// // import { StepIndicator } from "@/components/reservation/StepIndicator";
// // import { FloorPlan, Legend } from "@/components/reservation/FloorPlan";
// // import { OCCASIONS, TIMES } from "@/lib/mock-data";
// // import { setLastReservation } from "@/lib/reservation-store";
// // import { api, type TableCell } from "@/lib/api";
// // import { cn } from "@/lib/utils";

// // export const Route = createFileRoute("/reservation")({
// //   component: ReservationPage,
// //   head: () => ({ meta: [{ title: "Reserve a Table — Maison Aurée" }, { name: "description", content: "Reserve your table at Maison Aurée. Choose your date, party size, and seating." }] }),
// // });

// // type FormData = {
// //   name: string; email: string; phone: string;
// //   date: string; time: string; guests: number;
// //   occasion: string; seating: "indoor" | "outdoor"; specialRequest: string;
// // };

// // function ReservationPage() {
// //   const [step, setStep] = useState(1);
// //   const [table, setTable] = useState<TableCell | null>(null);
// //   const [tables, setTables] = useState<TableCell[]>([]);
// //   const [loadingTables, setLoadingTables] = useState(false);
// //   const [submitting, setSubmitting] = useState(false);
// //   const navigate = useNavigate();

// //   const { register, handleSubmit, watch, setValue, trigger, formState: { errors } } = useForm<FormData>({
// //     defaultValues: {
// //       name: "", email: "", phone: "",
// //       date: new Date(Date.now() + 86400000).toISOString().slice(0, 10),
// //       time: "19:30", guests: 2, occasion: "Date Night",
// //       seating: "indoor", specialRequest: "",
// //     }
// //   });

// //   const values = watch();
// //   const steps = ["Details", "Reservation", "Table", "Confirm"];

// //   useEffect(() => {
// //     if (step !== 3) return;
// //     setLoadingTables(true);
// //     setTable(null);
// //     api
// //       .getTables({ date: values.date, time: values.time, zone: values.seating })
// //       .then((res) => setTables(res.data))
// //       .catch((err) => toast.error(err.message || "Failed to load tables"))
// //       .finally(() => setLoadingTables(false));
// //   }, [step, values.date, values.time, values.seating]);

// //   const next = async () => {
// //     let fields: (keyof FormData)[] = [];
// //     if (step === 1) fields = ["name", "email", "phone"];
// //     if (step === 2) fields = ["date", "time", "guests", "occasion", "seating"];
// //     const ok = await trigger(fields);
// //     if (!ok) return toast.error("Please complete the highlighted fields");
// //     if (step === 3 && !table) return toast.error("Please select a table");
// //     setStep((s) => Math.min(4, s + 1));
// //   };
// //   const prev = () => setStep((s) => Math.max(1, s - 1));

// //   const onSubmit = handleSubmit(async (data) => {
// //     if (!table) return;
// //     setSubmitting(true);
// //     try {
// //       const res = await api.createReservation({
// //         name: data.name,
// //         email: data.email,
// //         phone: data.phone,
// //         date: data.date,
// //         time: data.time,
// //         guests: data.guests,
// //         occasion: data.occasion,
// //         seating: data.seating,
// //         specialRequest: data.specialRequest,
// //         tableId: table.id,
// //       });
// //       setLastReservation(res.data);
// //       toast.success("Reservation confirmed");
// //       navigate({ to: "/confirmation" });
// //     } catch (err: any) {
// //       toast.error(err.message || "Failed to create reservation");
// //     } finally {
// //       setSubmitting(false);
// //     }
// //   });

// //   return (
// //     <div className="pt-32 pb-20 px-6 lg:px-10 max-w-5xl mx-auto">
// //       <div className="text-center">
// //         <div className="flex items-center justify-center gap-3 text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]">
// //           <span className="w-8 h-px bg-[var(--gold)]/50" /> Table Reservation <span className="w-8 h-px bg-[var(--gold)]/50" />
// //         </div>
// //         <h1 className="mt-4 text-4xl md:text-5xl font-display">Reserve your <span className="gold-text italic">evening</span></h1>
// //         <p className="mt-3 text-muted-foreground max-w-lg mx-auto">Four intimate steps to secure your table. Your evening begins here.</p>
// //       </div>

// //       <div className="mt-12">
// //         <StepIndicator step={step} steps={steps} />
// //       </div>

// //       <form onSubmit={onSubmit} className="mt-10 glass rounded-3xl p-6 md:p-10">
// //         <AnimatePresence mode="wait">
// //           <motion.div
// //             key={step}
// //             initial={{ opacity: 0, x: 30 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             exit={{ opacity: 0, x: -30 }}
// //             transition={{ duration: 0.35 }}
// //           >
// //             {step === 1 && (
// //               <div className="grid gap-6">
// //                 <StepTitle title="Your details" subtitle="We'll send a confirmation to this email." />
// //                 <Field label="Full name" icon={User} error={errors.name?.message}>
// //                   <input {...register("name", { required: "Name is required" })} className="input" placeholder="Isabella Moreau" />
// //                 </Field>
// //                 <div className="grid md:grid-cols-2 gap-6">
// //                   <Field label="Email" icon={Mail} error={errors.email?.message}>
// //                     <input type="email" {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/, message: "Invalid email" } })} className="input" placeholder="you@email.com" />
// //                   </Field>
// //                   <Field label="Phone" icon={Phone} error={errors.phone?.message}>
// //                     <input {...register("phone", { required: "Phone is required" })} className="input" placeholder="+33 6 12 34 56 78" />
// //                   </Field>
// //                 </div>
// //               </div>
// //             )}

// //             {step === 2 && (
// //               <div className="grid gap-6">
// //                 <StepTitle title="Reservation details" subtitle="When would you like to join us?" />
// //                 <div className="grid md:grid-cols-2 gap-6">
// //                   <Field label="Date" icon={Calendar}>
// //                     <input type="date" min={new Date().toISOString().slice(0,10)} {...register("date", { required: true })} className="input" />
// //                   </Field>
// //                   <Field label="Time" icon={Clock}>
// //                     <select {...register("time")} className="input">
// //                       {TIMES.map((t) => <option key={t}>{t}</option>)}
// //                     </select>
// //                   </Field>
// //                 </div>

// //                 <Field label="Guests" icon={Users}>
// //                   <div className="flex flex-wrap gap-2">
// //                     {[1,2,3,4,5,6,7,8].map((n) => (
// //                       <button type="button" key={n} onClick={() => setValue("guests", n)} className={cn(
// //                         "w-11 h-11 rounded-full border transition text-sm",
// //                         values.guests === n ? "btn-gold border-transparent" : "border-[var(--gold)]/25 hover:border-[var(--gold)]/60"
// //                       )}>{n}</button>
// //                     ))}
// //                   </div>
// //                 </Field>

// //                 <Field label="Occasion" icon={Sparkles}>
// //                   <div className="flex flex-wrap gap-2">
// //                     {OCCASIONS.map((o) => (
// //                       <button type="button" key={o} onClick={() => setValue("occasion", o)} className={cn(
// //                         "rounded-full px-4 py-2 text-xs uppercase tracking-widest border transition",
// //                         values.occasion === o ? "btn-gold border-transparent" : "border-[var(--gold)]/25 hover:border-[var(--gold)]/60"
// //                       )}>{o}</button>
// //                     ))}
// //                   </div>
// //                 </Field>

// //                 <Field label="Seating">
// //                   <div className="grid grid-cols-2 gap-3">
// //                     {[
// //                       { v: "indoor" as const, icon: HomeIcon, label: "Indoor", desc: "Main dining hall" },
// //                       { v: "outdoor" as const, icon: Trees, label: "Outdoor", desc: "Terrace garden" },
// //                     ].map((o) => (
// //                       <button type="button" key={o.v} onClick={() => setValue("seating", o.v)} className={cn(
// //                         "rounded-2xl border p-5 text-left transition",
// //                         values.seating === o.v ? "border-[var(--gold)] bg-[var(--gold)]/10" : "border-[var(--gold)]/20 hover:border-[var(--gold)]/60"
// //                       )}>
// //                         <o.icon className="w-6 h-6 text-[var(--gold)]" />
// //                         <div className="mt-3 font-display text-lg">{o.label}</div>
// //                         <div className="text-xs text-muted-foreground">{o.desc}</div>
// //                       </button>
// //                     ))}
// //                   </div>
// //                 </Field>

// //                 <Field label="Special request" icon={MessageSquare}>
// //                   <textarea {...register("specialRequest")} rows={3} className="input resize-none" placeholder="Allergies, celebrations, seating preferences..." />
// //                 </Field>
// //               </div>
// //             )}

// //             {step === 3 && (
// //               <div>
// //                 <StepTitle title="Choose your table" subtitle={`Party of ${values.guests} · ${values.seating === "indoor" ? "Main Dining Hall" : "Terrace Garden"}`} />
// //                 <div className="mt-6">
// //                   {loadingTables ? (
// //                     <div className="flex items-center justify-center py-20 text-muted-foreground">
// //                       <Loader2 className="w-6 h-6 animate-spin mr-2" /> Loading tables...
// //                     </div>
// //                   ) : (
// //                     <FloorPlan zone={values.seating} guests={values.guests} selectedId={table?.id} onSelect={setTable} tables={tables} />
// //                   )}
// //                 </div>
// //                 <div className="mt-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
// //                   <Legend />
// //                   {table && (
// //                     <div className="glass rounded-full px-5 py-2 text-sm">
// //                       Selected: <span className="text-[var(--gold)] font-medium">{table.id}</span> · {table.seats} seats
// //                     </div>
// //                   )}
// //                 </div>
// //               </div>
// //             )}

// //             {step === 4 && (
// //               <div>
// //                 <StepTitle title="Confirm your reservation" subtitle="A final look before we secure your table." />
// //                 <div className="mt-6 grid gap-3">
// //                   {[
// //                     ["Guest", values.name],
// //                     ["Email", values.email],
// //                     ["Phone", values.phone],
// //                     ["Date", values.date],
// //                     ["Time", values.time],
// //                     ["Guests", `${values.guests} people`],
// //                     ["Occasion", values.occasion],
// //                     ["Seating", values.seating === "indoor" ? "Main Dining Hall" : "Terrace Garden"],
// //                     ["Table", table?.id ?? "—"],
// //                     ["Special request", values.specialRequest || "—"],
// //                   ].map(([k, v]) => (
// //                     <div key={k as string} className="flex items-center justify-between py-3 border-b border-[var(--gold)]/10 last:border-0">
// //                       <span className="text-xs uppercase tracking-widest text-muted-foreground">{k}</span>
// //                       <span className="font-medium">{v}</span>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             )}
// //           </motion.div>
// //         </AnimatePresence>

// //         <div className="mt-10 flex items-center justify-between">
// //           <button type="button" onClick={prev} disabled={step === 1} className={cn(
// //             "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm border transition",
// //             step === 1 ? "opacity-40 cursor-not-allowed border-muted" : "border-[var(--gold)]/25 hover:bg-[var(--gold)]/10"
// //           )}>
// //             <ArrowLeft className="w-4 h-4" /> Back
// //           </button>
// //           {step < 4 ? (
// //             <button type="button" onClick={next} className="inline-flex items-center gap-2 rounded-full btn-gold px-6 py-2.5 text-sm font-medium hover:btn-gold-hover">
// //               Continue <ArrowRight className="w-4 h-4" />
// //             </button>
// //           ) : (
// //             <button type="submit" disabled={submitting} className="inline-flex items-center gap-2 rounded-full btn-gold px-7 py-3 text-sm font-medium hover:btn-gold-hover disabled:opacity-70">
// //               {submitting ? (<><Loader2 className="w-4 h-4 animate-spin" /> Confirming...</>) : (<>Confirm Reservation <ArrowRight className="w-4 h-4" /></>)}
// //             </button>
// //           )}
// //         </div>
// //       </form>

// //       <style>{`
// //         .input {
// //           width: 100%;
// //           background: color-mix(in oklab, var(--background) 60%, transparent);
// //           border: 1px solid var(--input);
// //           border-radius: 14px;
// //           padding: 12px 14px;
// //           font-size: 14px;
// //           outline: none;
// //           transition: border-color .2s, box-shadow .2s;
// //         }
// //         .input:focus { border-color: var(--gold); box-shadow: 0 0 0 4px oklch(0.82 0.14 85 / 0.15); }
// //       `}</style>
// //     </div>
// //   );
// // }

// // function StepTitle({ title, subtitle }: { title: string; subtitle: string }) {
// //   return (
// //     <div>
// //       <h2 className="font-display text-2xl md:text-3xl">{title}</h2>
// //       <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
// //     </div>
// //   );
// // }

// // function Field({ label, icon: Icon, error, children }: { label: string; icon?: any; error?: string; children: React.ReactNode }) {
// //   return (
// //     <label className="block">
// //       <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground mb-2">
// //         {Icon && <Icon className="w-3.5 h-3.5 text-[var(--gold)]" />}
// //         {label}
// //       </span>
// //       {children}
// //       {error && <span className="mt-1 block text-xs text-[var(--danger)]">{error}</span>}
// //     </label>
// //   );
// // }
// import { createFileRoute, useNavigate } from "@tanstack/react-router";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";
// import {
//   User, Mail, Phone, Calendar, Clock, Users, Sparkles, Trees, Home as HomeIcon, ArrowRight, ArrowLeft, MessageSquare, Loader2,
// } from "lucide-react";
// import { StepIndicator } from "@/components/reservation/StepIndicator";
// import { FloorPlan, Legend } from "@/components/reservation/FloorPlan";
// import { OCCASIONS, TIMES } from "@/lib/mock-data";
// import { setLastReservation } from "@/lib/reservation-store";
// import { api, type TableCell } from "@/lib/api";
// import { cn } from "@/lib/utils";
// import { isAuthenticated } from "@/lib/auth-store";

// export const Route = createFileRoute("/reservation")({
//   component: ReservationPage,
//   head: () => ({ meta: [{ title: "Reserve a Table — Taj Royale" }, { name: "description", content: "Reserve your table at Taj Royale. Choose your date, party size, and seating." }] }),
// });

// type FormData = {
//   name: string; email: string; phone: string;
//   date: string; time: string; guests: number;
//   occasion: string; seating: "indoor" | "outdoor"; specialRequest: string;
// };

// function ReservationPage() {
//   const [step, setStep] = useState(1);
//   const [table, setTable] = useState<TableCell | null>(null);
//   const [tables, setTables] = useState<TableCell[]>([]);
//   const [loadingTables, setLoadingTables] = useState(false);
//   const [submitting, setSubmitting] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!isAuthenticated()) {
//       toast.error("Please login first to reserve a table.");
//       navigate({ to: "/login" });
//     }
//   }, []);

//   const { register, handleSubmit, watch, setValue, trigger, formState: { errors } } = useForm<FormData>({
//     defaultValues: {
//       name: "", email: "", phone: "",
//       date: new Date(Date.now() + 86400000).toISOString().slice(0, 10),
//       time: "19:30", guests: 2, occasion: "Date Night",
//       seating: "indoor", specialRequest: "",
//     }
//   });

//   const values = watch();
//   const steps = ["Details", "Reservation", "Table", "Confirm"];

//   useEffect(() => {
//     if (step !== 3) return;
//     setLoadingTables(true);
//     setTable(null);
//     api
//       .getTables({ date: values.date, time: values.time, zone: values.seating })
//       .then((res) => setTables(res.data))
//       .catch((err) => toast.error(err.message || "Failed to load tables"))
//       .finally(() => setLoadingTables(false));
//   }, [step, values.date, values.time, values.seating]);

//   const next = async () => {
//     let fields: (keyof FormData)[] = [];
//     if (step === 1) fields = ["name", "email", "phone"];
//     if (step === 2) fields = ["date", "time", "guests", "occasion", "seating"];
//     const ok = await trigger(fields);
//     if (!ok) return toast.error("Please complete the highlighted fields");
//     if (step === 3 && !table) return toast.error("Please select a table");
//     setStep((s) => Math.min(4, s + 1));
//   };
//   const prev = () => setStep((s) => Math.max(1, s - 1));

//   const onSubmit = handleSubmit(async (data) => {
//     if (!table) return;
//     setSubmitting(true);
//     try {
//       const res = await api.createReservation({
//         name: data.name,
//         email: data.email,
//         phone: data.phone,
//         date: data.date,
//         time: data.time,
//         guests: data.guests,
//         occasion: data.occasion,
//         seating: data.seating,
//         specialRequest: data.specialRequest,
//         tableId: table.id,
//       });
//       setLastReservation(res.data);
//       toast.success("Reservation confirmed");
//       navigate({ to: "/confirmation" });
//     } catch (err: any) {
//       toast.error(err.message || "Failed to create reservation");
//     } finally {
//       setSubmitting(false);
//     }
//   });

//   return (
//     <div className="pt-32 pb-20 px-6 lg:px-10 max-w-5xl mx-auto">
//       <div className="text-center">
//         <div className="flex items-center justify-center gap-3 text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]">
//           <span className="w-8 h-px bg-[var(--gold)]/50" /> Table Reservation <span className="w-8 h-px bg-[var(--gold)]/50" />
//         </div>
//         <h1 className="mt-4 text-4xl md:text-5xl font-display">Reserve your <span className="gold-text italic">evening</span></h1>
//         <p className="mt-3 text-muted-foreground max-w-lg mx-auto">Four intimate steps to secure your table. Your evening begins here.</p>
//       </div>

//       <div className="mt-12">
//         <StepIndicator step={step} steps={steps} />
//       </div>

//       <form onSubmit={onSubmit} className="mt-10 glass rounded-3xl p-6 md:p-10">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={step}
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -30 }}
//             transition={{ duration: 0.35 }}
//           >
//             {step === 1 && (
//               <div className="grid gap-6">
//                 <StepTitle title="Your details" subtitle="We'll send a confirmation to this email." />
//                 <Field label="Full name" icon={User} error={errors.name?.message}>
//                   <input {...register("name", { required: "Name is required" })} className="input" placeholder="Isabella Moreau" />
//                 </Field>
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <Field label="Email" icon={Mail} error={errors.email?.message}>
//                     <input type="email" {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/, message: "Invalid email" } })} className="input" placeholder="you@email.com" />
//                   </Field>
//                   <Field label="Phone" icon={Phone} error={errors.phone?.message}>
//                     <input {...register("phone", { required: "Phone is required" })} className="input" placeholder="+91 12345 67890" />
//                   </Field>
//                 </div>
//               </div>
//             )}

//             {step === 2 && (
//               <div className="grid gap-6">
//                 <StepTitle title="Reservation details" subtitle="When would you like to join us?" />
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <Field label="Date" icon={Calendar}>
//                     <input type="date" min={new Date().toISOString().slice(0,10)} {...register("date", { required: true })} className="input" />
//                   </Field>
//                   <Field label="Time" icon={Clock}>
//                     <select {...register("time")} className="input">
//                       {TIMES.map((t) => <option key={t}>{t}</option>)}
//                     </select>
//                   </Field>
//                 </div>

//                 <Field label="Guests" icon={Users}>
//                   <div className="flex flex-wrap gap-2">
//                     {[1,2,3,4,5,6,7,8].map((n) => (
//                       <button type="button" key={n} onClick={() => setValue("guests", n)} className={cn(
//                         "w-11 h-11 rounded-full border transition text-sm",
//                         values.guests === n ? "btn-gold border-transparent" : "border-[var(--gold)]/25 hover:border-[var(--gold)]/60"
//                       )}>{n}</button>
//                     ))}
//                   </div>
//                 </Field>

//                 <Field label="Occasion" icon={Sparkles}>
//                   <div className="flex flex-wrap gap-2">
//                     {OCCASIONS.map((o) => (
//                       <button type="button" key={o} onClick={() => setValue("occasion", o)} className={cn(
//                         "rounded-full px-4 py-2 text-xs uppercase tracking-widest border transition",
//                         values.occasion === o ? "btn-gold border-transparent" : "border-[var(--gold)]/25 hover:border-[var(--gold)]/60"
//                       )}>{o}</button>
//                     ))}
//                   </div>
//                 </Field>

//                 <Field label="Seating">
//                   <div className="grid grid-cols-2 gap-3">
//                     {[
//                       { v: "indoor" as const, icon: HomeIcon, label: "Indoor", desc: "Main dining hall" },
//                       { v: "outdoor" as const, icon: Trees, label: "Outdoor", desc: "Terrace garden" },
//                     ].map((o) => (
//                       <button type="button" key={o.v} onClick={() => setValue("seating", o.v)} className={cn(
//                         "rounded-2xl border p-5 text-left transition",
//                         values.seating === o.v ? "border-[var(--gold)] bg-[var(--gold)]/10" : "border-[var(--gold)]/20 hover:border-[var(--gold)]/60"
//                       )}>
//                         <o.icon className="w-6 h-6 text-[var(--gold)]" />
//                         <div className="mt-3 font-display text-lg">{o.label}</div>
//                         <div className="text-xs text-muted-foreground">{o.desc}</div>
//                       </button>
//                     ))}
//                   </div>
//                 </Field>

//                 <Field label="Special request" icon={MessageSquare}>
//                   <textarea {...register("specialRequest")} rows={3} className="input resize-none" placeholder="Allergies, celebrations, seating preferences..." />
//                 </Field>
//               </div>
//             )}

//             {step === 3 && (
//               <div>
//                 <StepTitle title="Choose your table" subtitle={`Party of ${values.guests} · ${values.seating === "indoor" ? "Main Dining Hall" : "Terrace Garden"}`} />
//                 <div className="mt-6">
//                   {loadingTables ? (
//                     <div className="flex items-center justify-center py-20 text-muted-foreground">
//                       <Loader2 className="w-6 h-6 animate-spin mr-2" /> Loading tables...
//                     </div>
//                   ) : (
//                     <FloorPlan zone={values.seating} guests={values.guests} selectedId={table?.id} onSelect={setTable} tables={tables} />
//                   )}
//                 </div>
//                 <div className="mt-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
//                   <Legend />
//                   {table && (
//                     <div className="glass rounded-full px-5 py-2 text-sm">
//                       Selected: <span className="text-[var(--gold)] font-medium">{table.id}</span> · {table.seats} seats
//                     </div>
//                   )}
//                 </div>
//               </div>
//             )}

//             {step === 4 && (
//               <div>
//                 <StepTitle title="Confirm your reservation" subtitle="A final look before we secure your table." />
//                 <div className="mt-6 grid gap-3">
//                   {[
//                     ["Guest", values.name],
//                     ["Email", values.email],
//                     ["Phone", values.phone],
//                     ["Date", values.date],
//                     ["Time", values.time],
//                     ["Guests", `${values.guests} people`],
//                     ["Occasion", values.occasion],
//                     ["Seating", values.seating === "indoor" ? "Main Dining Hall" : "Terrace Garden"],
//                     ["Table", table?.id ?? "—"],
//                     ["Special request", values.specialRequest || "—"],
//                   ].map(([k, v]) => (
//                     <div key={k as string} className="flex items-center justify-between py-3 border-b border-[var(--gold)]/10 last:border-0">
//                       <span className="text-xs uppercase tracking-widest text-muted-foreground">{k}</span>
//                       <span className="font-medium">{v}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </motion.div>
//         </AnimatePresence>

//         <div className="mt-10 flex items-center justify-between">
//           <button type="button" onClick={prev} disabled={step === 1} className={cn(
//             "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm border transition",
//             step === 1 ? "opacity-40 cursor-not-allowed border-muted" : "border-[var(--gold)]/25 hover:bg-[var(--gold)]/10"
//           )}>
//             <ArrowLeft className="w-4 h-4" /> Back
//           </button>
//           {step < 4 ? (
//             <button type="button" onClick={next} className="inline-flex items-center gap-2 rounded-full btn-gold px-6 py-2.5 text-sm font-medium hover:btn-gold-hover">
//               Continue <ArrowRight className="w-4 h-4" />
//             </button>
//           ) : (
//             <button type="submit" disabled={submitting} className="inline-flex items-center gap-2 rounded-full btn-gold px-7 py-3 text-sm font-medium hover:btn-gold-hover disabled:opacity-70">
//               {submitting ? (<><Loader2 className="w-4 h-4 animate-spin" /> Confirming...</>) : (<>Confirm Reservation <ArrowRight className="w-4 h-4" /></>)}
//             </button>
//           )}
//         </div>
//       </form>

//       <style>{`
//         .input {
//           width: 100%;
//           background: color-mix(in oklab, var(--background) 60%, transparent);
//           border: 1px solid var(--input);
//           border-radius: 14px;
//           padding: 12px 14px;
//           font-size: 14px;
//           outline: none;
//           transition: border-color .2s, box-shadow .2s;
//         }
//         .input:focus { border-color: var(--gold); box-shadow: 0 0 0 4px oklch(0.82 0.14 85 / 0.15); }
//       `}</style>
//     </div>
//   );
// }

// function StepTitle({ title, subtitle }: { title: string; subtitle: string }) {
//   return (
//     <div>
//       <h2 className="font-display text-2xl md:text-3xl">{title}</h2>
//       <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
//     </div>
//   );
// }

// function Field({ label, icon: Icon, error, children }: { label: string; icon?: any; error?: string; children: React.ReactNode }) {
//   return (
//     <label className="block">
//       <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground mb-2">
//         {Icon && <Icon className="w-3.5 h-3.5 text-[var(--gold)]" />}
//         {label}
//       </span>
//       {children}
//       {error && <span className="mt-1 block text-xs text-[var(--danger)]">{error}</span>}
//     </label>
//   );
// }
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  User, Mail, Phone, Calendar, Clock, Users, Sparkles, Trees, Home as HomeIcon, ArrowRight, ArrowLeft, MessageSquare, Loader2, X,
} from "lucide-react";
import { StepIndicator } from "@/components/reservation/StepIndicator";
import { FloorPlan, Legend } from "@/components/reservation/FloorPlan";
import { OCCASIONS, TIMES } from "@/lib/mock-data";
import { setLastReservation } from "@/lib/reservation-store";
import { api, type TableCell } from "@/lib/api";
import { cn } from "@/lib/utils";
import { isAuthenticated } from "@/lib/auth-store";

export const Route = createFileRoute("/reservation")({
  component: ReservationPage,
  head: () => ({ meta: [{ title: "Reserve a Table — Taj Royale" }, { name: "description", content: "Reserve your table at Taj Royale. Choose your date, party size, and seating." }] }),
});

type FormData = {
  name: string; email: string; phone: string;
  date: string; time: string; guests: number;
  occasion: string; seating: "indoor" | "outdoor"; specialRequest: string;
};

// Shows an error toast with a real, working close (×) button
function showDismissableError(message: string) {
  toast.custom(
    (t) => (
      <div
        className={cn(
          "glass rounded-2xl px-5 py-3.5 flex items-center gap-3 border border-[var(--danger)]/40 shadow-lg max-w-sm",
          t.visible ? "animate-in fade-in" : "animate-out fade-out"
        )}
      >
        <span className="text-sm text-foreground flex-1">{message}</span>
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-6 h-6 shrink-0 rounded-full grid place-items-center hover:bg-white/10 transition"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    ),
    { duration: 6000 }
  );
}

function ReservationPage() {
  const [step, setStep] = useState(1);
  const [table, setTable] = useState<TableCell | null>(null);
  const [tables, setTables] = useState<TableCell[]>([]);
  const [loadingTables, setLoadingTables] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const authCheckedRef = useRef(false);

  useEffect(() => {
    if (authCheckedRef.current) return;
    authCheckedRef.current = true;
    if (!isAuthenticated()) {
      showDismissableError("Please login first to reserve a table.");
      navigate({ to: "/login" });
    }
  }, []);

  const { register, handleSubmit, watch, setValue, trigger, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      name: "", email: "", phone: "",
      date: new Date(Date.now() + 86400000).toISOString().slice(0, 10),
      time: "19:30", guests: 2, occasion: "Date Night",
      seating: "indoor", specialRequest: "",
    }
  });

  const values = watch();
  const steps = ["Details", "Reservation", "Table", "Confirm"];

  useEffect(() => {
    if (step !== 3) return;
    setLoadingTables(true);
    setTable(null);
    api
      .getTables({ date: values.date, time: values.time, zone: values.seating })
      .then((res) => setTables(res.data))
      .catch((err) => toast.error(err.message || "Failed to load tables"))
      .finally(() => setLoadingTables(false));
  }, [step, values.date, values.time, values.seating]);

  const next = async () => {
    let fields: (keyof FormData)[] = [];
    if (step === 1) fields = ["name", "email", "phone"];
    if (step === 2) fields = ["date", "time", "guests", "occasion", "seating"];
    const ok = await trigger(fields);
    if (!ok) return toast.error("Please complete the highlighted fields");
    if (step === 3 && !table) return toast.error("Please select a table");
    setStep((s) => Math.min(4, s + 1));
  };
  const prev = () => setStep((s) => Math.max(1, s - 1));

  const onSubmit = handleSubmit(async (data) => {
    if (!table) return;
    setSubmitting(true);
    try {
      const res = await api.createReservation({
        name: data.name,
        email: data.email,
        phone: data.phone,
        date: data.date,
        time: data.time,
        guests: data.guests,
        occasion: data.occasion,
        seating: data.seating,
        specialRequest: data.specialRequest,
        tableId: table.id,
      });
      setLastReservation(res.data);
      toast.success("Reservation confirmed");
      navigate({ to: "/confirmation" });
    } catch (err: any) {
      toast.error(err.message || "Failed to create reservation");
    } finally {
      setSubmitting(false);
    }
  });

  return (
    <div className="pt-32 pb-20 px-6 lg:px-10 max-w-5xl mx-auto">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]">
          <span className="w-8 h-px bg-[var(--gold)]/50" /> Table Reservation <span className="w-8 h-px bg-[var(--gold)]/50" />
        </div>
        <h1 className="mt-4 text-4xl md:text-5xl font-display">Reserve your <span className="gold-text italic">evening</span></h1>
        <p className="mt-3 text-muted-foreground max-w-lg mx-auto">Four intimate steps to secure your table. Your evening begins here.</p>
      </div>

      <div className="mt-12">
        <StepIndicator step={step} steps={steps} />
      </div>

      <form onSubmit={onSubmit} className="mt-10 glass rounded-3xl p-6 md:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35 }}
          >
            {step === 1 && (
              <div className="grid gap-6">
                <StepTitle title="Your details" subtitle="We'll send a confirmation to this email." />
                <Field label="Full name" icon={User} error={errors.name?.message}>
                  <input {...register("name", { required: "Name is required" })} className="input" placeholder="Isabella Moreau" />
                </Field>
                <div className="grid md:grid-cols-2 gap-6">
                  <Field label="Email" icon={Mail} error={errors.email?.message}>
                    <input type="email" {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/, message: "Invalid email" } })} className="input" placeholder="you@email.com" />
                  </Field>
                  <Field label="Phone" icon={Phone} error={errors.phone?.message}>
                    <input {...register("phone", { required: "Phone is required" })} className="input" placeholder="+91 12345 67890" />
                  </Field>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="grid gap-6">
                <StepTitle title="Reservation details" subtitle="When would you like to join us?" />
                <div className="grid md:grid-cols-2 gap-6">
                  <Field label="Date" icon={Calendar}>
                    <input type="date" min={new Date().toISOString().slice(0,10)} {...register("date", { required: true })} className="input" />
                  </Field>
                  <Field label="Time" icon={Clock}>
                    <select {...register("time")} className="input">
                      {TIMES.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </Field>
                </div>

                <Field label="Guests" icon={Users}>
                  <div className="flex flex-wrap gap-2">
                    {[1,2,3,4,5,6,7,8].map((n) => (
                      <button type="button" key={n} onClick={() => setValue("guests", n)} className={cn(
                        "w-11 h-11 rounded-full border transition text-sm",
                        values.guests === n ? "btn-gold border-transparent" : "border-[var(--gold)]/25 hover:border-[var(--gold)]/60"
                      )}>{n}</button>
                    ))}
                  </div>
                </Field>

                <Field label="Occasion" icon={Sparkles}>
                  <div className="flex flex-wrap gap-2">
                    {OCCASIONS.map((o) => (
                      <button type="button" key={o} onClick={() => setValue("occasion", o)} className={cn(
                        "rounded-full px-4 py-2 text-xs uppercase tracking-widest border transition",
                        values.occasion === o ? "btn-gold border-transparent" : "border-[var(--gold)]/25 hover:border-[var(--gold)]/60"
                      )}>{o}</button>
                    ))}
                  </div>
                </Field>

                <Field label="Seating">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { v: "indoor" as const, icon: HomeIcon, label: "Indoor", desc: "Main dining hall" },
                      { v: "outdoor" as const, icon: Trees, label: "Outdoor", desc: "Terrace garden" },
                    ].map((o) => (
                      <button type="button" key={o.v} onClick={() => setValue("seating", o.v)} className={cn(
                        "rounded-2xl border p-5 text-left transition",
                        values.seating === o.v ? "border-[var(--gold)] bg-[var(--gold)]/10" : "border-[var(--gold)]/20 hover:border-[var(--gold)]/60"
                      )}>
                        <o.icon className="w-6 h-6 text-[var(--gold)]" />
                        <div className="mt-3 font-display text-lg">{o.label}</div>
                        <div className="text-xs text-muted-foreground">{o.desc}</div>
                      </button>
                    ))}
                  </div>
                </Field>

                <Field label="Special request" icon={MessageSquare}>
                  <textarea {...register("specialRequest")} rows={3} className="input resize-none" placeholder="Allergies, celebrations, seating preferences..." />
                </Field>
              </div>
            )}

            {step === 3 && (
              <div>
                <StepTitle title="Choose your table" subtitle={`Party of ${values.guests} · ${values.seating === "indoor" ? "Main Dining Hall" : "Terrace Garden"}`} />
                <div className="mt-6">
                  {loadingTables ? (
                    <div className="flex items-center justify-center py-20 text-muted-foreground">
                      <Loader2 className="w-6 h-6 animate-spin mr-2" /> Loading tables...
                    </div>
                  ) : (
                    <FloorPlan zone={values.seating} guests={values.guests} selectedId={table?.id} onSelect={setTable} tables={tables} />
                  )}
                </div>
                <div className="mt-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <Legend />
                  {table && (
                    <div className="glass rounded-full px-5 py-2 text-sm">
                      Selected: <span className="text-[var(--gold)] font-medium">{table.id}</span> · {table.seats} seats
                    </div>
                  )}
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <StepTitle title="Confirm your reservation" subtitle="A final look before we secure your table." />
                <div className="mt-6 grid gap-3">
                  {[
                    ["Guest", values.name],
                    ["Email", values.email],
                    ["Phone", values.phone],
                    ["Date", values.date],
                    ["Time", values.time],
                    ["Guests", `${values.guests} people`],
                    ["Occasion", values.occasion],
                    ["Seating", values.seating === "indoor" ? "Main Dining Hall" : "Terrace Garden"],
                    ["Table", table?.id ?? "—"],
                    ["Special request", values.specialRequest || "—"],
                  ].map(([k, v]) => (
                    <div key={k as string} className="flex items-center justify-between py-3 border-b border-[var(--gold)]/10 last:border-0">
                      <span className="text-xs uppercase tracking-widest text-muted-foreground">{k}</span>
                      <span className="font-medium">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex items-center justify-between">
          <button type="button" onClick={prev} disabled={step === 1} className={cn(
            "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm border transition",
            step === 1 ? "opacity-40 cursor-not-allowed border-muted" : "border-[var(--gold)]/25 hover:bg-[var(--gold)]/10"
          )}>
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          {step < 4 ? (
            <button type="button" onClick={next} className="inline-flex items-center gap-2 rounded-full btn-gold px-6 py-2.5 text-sm font-medium hover:btn-gold-hover">
              Continue <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button type="submit" disabled={submitting} className="inline-flex items-center gap-2 rounded-full btn-gold px-7 py-3 text-sm font-medium hover:btn-gold-hover disabled:opacity-70">
              {submitting ? (<><Loader2 className="w-4 h-4 animate-spin" /> Confirming...</>) : (<>Confirm Reservation <ArrowRight className="w-4 h-4" /></>)}
            </button>
          )}
        </div>
      </form>

      <style>{`
        .input {
          width: 100%;
          background: color-mix(in oklab, var(--background) 60%, transparent);
          border: 1px solid var(--input);
          border-radius: 14px;
          padding: 12px 14px;
          font-size: 14px;
          outline: none;
          transition: border-color .2s, box-shadow .2s;
        }
        .input:focus { border-color: var(--gold); box-shadow: 0 0 0 4px oklch(0.82 0.14 85 / 0.15); }
      `}</style>
    </div>
  );
}

function StepTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div>
      <h2 className="font-display text-2xl md:text-3xl">{title}</h2>
      <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
    </div>
  );
}

function Field({ label, icon: Icon, error, children }: { label: string; icon?: any; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground mb-2">
        {Icon && <Icon className="w-3.5 h-3.5 text-[var(--gold)]" />}
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-[var(--danger)]">{error}</span>}
    </label>
  );
}
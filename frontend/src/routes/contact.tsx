// import { createFileRoute } from "@tanstack/react-router";
// import { motion } from "framer-motion";
// import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";
// import { useState } from "react";
// import toast from "react-hot-toast";
// import { SectionHeading } from "@/components/site/Section";

// export const Route = createFileRoute("/contact")({
//   component: ContactPage,
//   head: () => ({ meta: [{ title: "Contact — Maison Aurée" }, { name: "description", content: "Reach the Maison Aurée concierge. Address, hours, and enquiries." }] }),
// });

// function ContactPage() {
//   const [f, setF] = useState({ name: "", email: "", subject: "", message: "" });
//   return (
//     <div className="pt-32 pb-20 px-6 lg:px-10 max-w-7xl mx-auto">
//       <SectionHeading eyebrow="Get in touch" title={<>Say <span className="gold-text italic">hello</span></>} subtitle="Private dining, press enquiries, or a simple question — we reply within a day." />

//       <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
//         <motion.form
//           initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
//           onSubmit={(e) => { e.preventDefault(); toast.success("Message sent — we'll be in touch"); setF({ name: "", email: "", subject: "", message: "" }); }}
//           className="glass rounded-3xl p-8 grid gap-4"
//         >
//           <div className="grid gap-4 md:grid-cols-2">
//             <Input label="Name" v={f.name} on={(v: string) => setF({ ...f, name: v })} />
//             <Input label="Email" type="email" v={f.email} on={(v: string) => setF({ ...f, email: v })} />
//           </div>
//           <Input label="Subject" v={f.subject} on={(v: string) => setF({ ...f, subject: v })} />
//           <label className="block">
//             <span className="text-xs uppercase tracking-widest text-muted-foreground">Message</span>
//             <textarea required value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} rows={5}
//               className="mt-2 w-full bg-background/50 border border-[var(--gold)]/25 rounded-2xl px-4 py-3 text-sm outline-none focus:border-[var(--gold)] resize-none" />
//           </label>
//           <button type="submit" className="mt-2 rounded-full btn-gold px-6 py-3 font-medium hover:btn-gold-hover self-start">Send Message</button>
//         </motion.form>

//         <div className="grid gap-4">
//           <ContactCard icon={MapPin} title="Address" lines={["12 Rue du Faubourg", "Paris, France 75008"]} />
//           <ContactCard icon={Phone} title="Phone" lines={["+33 1 42 00 12 34"]} />
//           <ContactCard icon={Mail} title="Email" lines={["reservations@maisonauree.com"]} />
//           <ContactCard icon={Clock} title="Hours" lines={["Tue – Sat", "12:00 – 14:30 · 18:30 – 22:30", "Closed Sun – Mon"]} />
//           <div className="glass rounded-2xl p-6">
//             <div className="text-xs uppercase tracking-widest text-muted-foreground">Follow</div>
//             <div className="mt-3 flex items-center gap-3">
//               {[Instagram, Facebook, Twitter].map((I, i) => (
//                 <a key={i} href="#" className="w-10 h-10 rounded-full grid place-items-center border border-[var(--gold)]/25 hover:bg-[var(--gold)]/10 hover:text-[var(--gold)]"><I className="w-4 h-4" /></a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Map placeholder */}
//       <div className="mt-12 rounded-3xl overflow-hidden gold-border h-[380px] relative">
//         <div className="absolute inset-0 bg-[oklch(0.15_0.008_60)] grid place-items-center">
//           <div className="absolute inset-0 opacity-20"
//             style={{ backgroundImage: "linear-gradient(oklch(0.82_0.14_85_/_0.25) 1px, transparent 1px), linear-gradient(90deg, oklch(0.82_0.14_85_/_0.25) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
//           <div className="relative text-center">
//             <MapPin className="w-10 h-10 text-[var(--gold)] mx-auto animate-bounce" />
//             <div className="mt-3 font-display text-xl">Maison Aurée</div>
//             <div className="text-xs text-muted-foreground">12 Rue du Faubourg · Paris 75008</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Input({ label, v, on, type = "text" }: any) {
//   return (
//     <label className="block">
//       <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
//       <input type={type} required value={v} onChange={(e) => on(e.target.value)}
//         className="mt-2 w-full bg-background/50 border border-[var(--gold)]/25 rounded-full px-4 py-3 text-sm outline-none focus:border-[var(--gold)]" />
//     </label>
//   );
// }
// function ContactCard({ icon: I, title, lines }: any) {
//   return (
//     <div className="glass rounded-2xl p-6">
//       <I className="w-6 h-6 text-[var(--gold)]" />
//       <div className="mt-3 font-display text-lg">{title}</div>
//       <div className="mt-1 text-sm text-muted-foreground space-y-0.5">
//         {lines.map((l: string) => <div key={l}>{l}</div>)}
//       </div>
//     </div>
//   );
// }
// import { createFileRoute } from "@tanstack/react-router";
// import { motion } from "framer-motion";
// import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";
// import { useState } from "react";
// import toast from "react-hot-toast";
// import { SectionHeading } from "@/components/site/Section";

// export const Route = createFileRoute("/contact")({
//   component: ContactPage,
//   head: () => ({ meta: [{ title: "Contact — Taj Royale" }, { name: "description", content: "Reach the Taj Royale team. Address, hours, and enquiries." }] }),
// });

// function ContactPage() {
//   const [f, setF] = useState({ name: "", email: "", subject: "", message: "" });
//   return (
//     <div className="pt-32 pb-20 px-6 lg:px-10 max-w-7xl mx-auto">
//       <SectionHeading eyebrow="Get in touch" title={<>Say <span className="gold-text italic">hello</span></>} subtitle="Private dining, press enquiries, or a simple question — we reply within a day." />

//       <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
//         <motion.form
//           initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
//           onSubmit={(e) => { e.preventDefault(); toast.success("Message sent — we'll be in touch"); setF({ name: "", email: "", subject: "", message: "" }); }}
//           className="glass rounded-3xl p-8 grid gap-4"
//         >
//           <div className="grid gap-4 md:grid-cols-2">
//             <Input label="Name" v={f.name} on={(v: string) => setF({ ...f, name: v })} />
//             <Input label="Email" type="email" v={f.email} on={(v: string) => setF({ ...f, email: v })} />
//           </div>
//           <Input label="Subject" v={f.subject} on={(v: string) => setF({ ...f, subject: v })} />
//           <label className="block">
//             <span className="text-xs uppercase tracking-widest text-muted-foreground">Message</span>
//             <textarea required value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} rows={5}
//               className="mt-2 w-full bg-background/50 border border-[var(--gold)]/25 rounded-2xl px-4 py-3 text-sm outline-none focus:border-[var(--gold)] resize-none" />
//           </label>
//           <button type="submit" className="mt-2 rounded-full btn-gold px-6 py-3 font-medium hover:btn-gold-hover self-start">Send Message</button>
//         </motion.form>

//         <div className="grid gap-4">
//           <ContactCard icon={MapPin} title="Address" lines={["49 Civil Lines Main Market", "Roorkee, Uttarakhand, 247667"]} />
//           <ContactCard icon={Phone} title="Phone" lines={["+91 12345 67890"]} />
//           <ContactCard icon={Mail} title="Email" lines={["reservations@tajroyale.com"]} />
//           <ContactCard icon={Clock} title="Hours" lines={["Tue – Sun", "12:00 – 15:00 · 18:30 – 23:00", "Closed Mon"]} />
//           <div className="glass rounded-2xl p-6">
//             <div className="text-xs uppercase tracking-widest text-muted-foreground">Follow</div>
//             <div className="mt-3 flex items-center gap-3">
//               {[Instagram, Facebook, Twitter].map((I, i) => (
//                 <a key={i} href="#" className="w-10 h-10 rounded-full grid place-items-center border border-[var(--gold)]/25 hover:bg-[var(--gold)]/10 hover:text-[var(--gold)]"><I className="w-4 h-4" /></a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Map placeholder */}
//       <div className="mt-12 rounded-3xl overflow-hidden gold-border h-[380px] relative">
//         <div className="absolute inset-0 bg-[oklch(0.15_0.008_60)] grid place-items-center">
//           <div className="absolute inset-0 opacity-20"
//             style={{ backgroundImage: "linear-gradient(oklch(0.82_0.14_85_/_0.25) 1px, transparent 1px), linear-gradient(90deg, oklch(0.82_0.14_85_/_0.25) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
//           <div className="relative text-center">
//             <MapPin className="w-10 h-10 text-[var(--gold)] mx-auto animate-bounce" />
//             <div className="mt-3 font-display text-xl">Taj Royale</div>
//             <div className="text-xs text-muted-foreground">49 Civil Lines Main Market · Roorkee, Uttarakhand 247667</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Input({ label, v, on, type = "text" }: any) {
//   return (
//     <label className="block">
//       <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
//       <input type={type} required value={v} onChange={(e) => on(e.target.value)}
//         className="mt-2 w-full bg-background/50 border border-[var(--gold)]/25 rounded-full px-4 py-3 text-sm outline-none focus:border-[var(--gold)]" />
//     </label>
//   );
// }
// function ContactCard({ icon: I, title, lines }: any) {
//   return (
//     <div className="glass rounded-2xl p-6">
//       <I className="w-6 h-6 text-[var(--gold)]" />
//       <div className="mt-3 font-display text-lg">{title}</div>
//       <div className="mt-1 text-sm text-muted-foreground space-y-0.5">
//         {lines.map((l: string) => <div key={l}>{l}</div>)}
//       </div>
//     </div>
//   );
// }
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { SectionHeading } from "@/components/site/Section";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({ meta: [{ title: "Contact — Taj Royale" }, { name: "description", content: "Reach the Taj Royale team. Address, hours, and enquiries." }] }),
});

function ContactPage() {
  const [f, setF] = useState({ name: "", email: "", subject: "", message: "" });
  return (
    <div className="pt-32 pb-20 px-6 lg:px-10 max-w-7xl mx-auto">
      <SectionHeading eyebrow="Get in touch" title={<>Say <span className="gold-text italic">hello</span></>} subtitle="Private dining, press enquiries, or a simple question — we reply within a day." />

      <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <motion.form
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          onSubmit={(e) => { e.preventDefault(); toast.success("Message sent — we'll be in touch"); setF({ name: "", email: "", subject: "", message: "" }); }}
          className="glass rounded-3xl p-8 grid gap-4"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Input label="Name" v={f.name} on={(v: string) => setF({ ...f, name: v })} />
            <Input label="Email" type="email" v={f.email} on={(v: string) => setF({ ...f, email: v })} />
          </div>
          <Input label="Subject" v={f.subject} on={(v: string) => setF({ ...f, subject: v })} />
          <label className="block">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Message</span>
            <textarea required value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} rows={5}
              className="mt-2 w-full bg-background/50 border border-[var(--gold)]/25 rounded-2xl px-4 py-3 text-sm outline-none focus:border-[var(--gold)] resize-none" />
          </label>
          <button type="submit" className="mt-2 rounded-full btn-gold px-6 py-3 font-medium hover:btn-gold-hover self-start">Send Message</button>
        </motion.form>

        <div className="grid gap-4">
          <ContactCard icon={MapPin} title="Address" lines={["49 Civil Lines Main Market", "Roorkee, Uttarakhand, 247667"]} />
          <ContactCard icon={Phone} title="Phone" lines={["+91 12345 67890"]} />
          <ContactCard icon={Mail} title="Email" lines={["reservations@tajroyale.com"]} />
          <ContactCard icon={Clock} title="Hours" lines={["Monday – Sunday", "8:00 AM – 11:00 AM (Breakfast)", "12:00 PM – 3:30 PM (Lunch)", "7:00 PM – 11:00 PM (Dinner)"]} />
          <div className="glass rounded-2xl p-6">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Follow</div>
            <div className="mt-3 flex items-center gap-3">
              {[Instagram, Facebook, Twitter].map((I, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full grid place-items-center border border-[var(--gold)]/25 hover:bg-[var(--gold)]/10 hover:text-[var(--gold)]"><I className="w-4 h-4" /></a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Map placeholder */}
      <div className="mt-12 rounded-3xl overflow-hidden gold-border h-[380px] relative">
        <div className="absolute inset-0 bg-[oklch(0.15_0.008_60)] grid place-items-center">
          <div className="absolute inset-0 opacity-20"
            style={{ backgroundImage: "linear-gradient(oklch(0.82_0.14_85_/_0.25) 1px, transparent 1px), linear-gradient(90deg, oklch(0.82_0.14_85_/_0.25) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="relative text-center">
            <MapPin className="w-10 h-10 text-[var(--gold)] mx-auto animate-bounce" />
            <div className="mt-3 font-display text-xl">Taj Royale</div>
            <div className="text-xs text-muted-foreground">49 Civil Lines Main Market · Roorkee, Uttarakhand 247667</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input({ label, v, on, type = "text" }: any) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      <input type={type} required value={v} onChange={(e) => on(e.target.value)}
        className="mt-2 w-full bg-background/50 border border-[var(--gold)]/25 rounded-full px-4 py-3 text-sm outline-none focus:border-[var(--gold)]" />
    </label>
  );
}
function ContactCard({ icon: I, title, lines }: any) {
  return (
    <div className="glass rounded-2xl p-6">
      <I className="w-6 h-6 text-[var(--gold)]" />
      <div className="mt-3 font-display text-lg">{title}</div>
      <div className="mt-1 text-sm text-muted-foreground space-y-0.5">
        {lines.map((l: string) => <div key={l}>{l}</div>)}
      </div>
    </div>
  );
}
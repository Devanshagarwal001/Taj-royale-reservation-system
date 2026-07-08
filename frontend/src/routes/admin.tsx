import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CalendarDays, Users, TrendingUp, DoorOpen, DoorClosed, Coins } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip, BarChart, Bar, CartesianGrid } from "recharts";
import { api, type Reservation } from "@/lib/api";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
  head: () => ({ meta: [{ title: "Admin — Maison Aurée" }, { name: "robots", content: "noindex" }] }),
});

const revenueData = [
  { d: "Mon", r: 3200 }, { d: "Tue", r: 5100 }, { d: "Wed", r: 6400 }, { d: "Thu", r: 7800 },
  { d: "Fri", r: 11200 }, { d: "Sat", r: 14600 }, { d: "Sun", r: 9200 },
];
const bookingData = [
  { d: "12h", n: 4 }, { d: "13h", n: 8 }, { d: "18h", n: 6 }, { d: "19h", n: 14 },
  { d: "20h", n: 18 }, { d: "21h", n: 9 },
];

function AdminPage() {
  const [stats, setStats] = useState({ total: 12, reserved: 0, available: 12, todayReservations: 0 });
  const [items, setItems] = useState<Reservation[]>([]);

  useEffect(() => {
    api.getTableStats().then((res) => setStats(res.data)).catch(() => {});
    api.getAllReservations().then((res) => setItems(res.data)).catch((err) => toast.error(err.message));
  }, []);

  const customers = [
    { name: "Isabella Moreau", visits: 12, tier: "Gold" },
    { name: "James Whitfield", visits: 8, tier: "Silver" },
    { name: "Kenji Ito", visits: 15, tier: "Platinum" },
    { name: "Amelia Rossi", visits: 4, tier: "Silver" },
  ];

  return (
    <div className="pt-32 pb-16 px-6 lg:px-10 max-w-7xl mx-auto">
      <div>
        <div className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]">Admin</div>
        <h1 className="mt-2 text-4xl md:text-5xl font-display">Restaurant <span className="gold-text italic">Dashboard</span></h1>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KPI icon={CalendarDays} label="Today's Reservations" value={stats.todayReservations || items.length} sub="Live from database" />
        <KPI icon={DoorClosed} label="Reserved Tables" value={stats.reserved} sub={`of ${stats.total}`} />
        <KPI icon={DoorOpen} label="Available Tables" value={stats.available} sub={`of ${stats.total}`} />
        <KPI icon={Coins} label="Revenue (week)" value="€57,400" sub="+18% WoW" />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="glass rounded-2xl p-6 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-xl">Weekly Revenue</h3>
            <TrendingUp className="w-5 h-5 text-[var(--gold)]" />
          </div>
          <div className="mt-4 h-64">
            <ResponsiveContainer>
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.82 0.14 85)" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="oklch(0.82 0.14 85)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} strokeDasharray="3 6" stroke="oklch(0.82 0.14 85 / 0.15)" />
                <XAxis dataKey="d" stroke="oklch(0.7 0.02 80)" fontSize={12} />
                <YAxis stroke="oklch(0.7 0.02 80)" fontSize={12} />
                <Tooltip contentStyle={{ background: "oklch(0.12 0.008 60)", border: "1px solid oklch(0.82 0.14 85 / 0.3)", borderRadius: 12 }} />
                <Area type="monotone" dataKey="r" stroke="oklch(0.82 0.14 85)" fill="url(#g)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass rounded-2xl p-6">
          <h3 className="font-display text-xl">Bookings by hour</h3>
          <div className="mt-4 h-64">
            <ResponsiveContainer>
              <BarChart data={bookingData}>
                <XAxis dataKey="d" stroke="oklch(0.7 0.02 80)" fontSize={12} />
                <YAxis stroke="oklch(0.7 0.02 80)" fontSize={12} />
                <Tooltip contentStyle={{ background: "oklch(0.12 0.008 60)", border: "1px solid oklch(0.82 0.14 85 / 0.3)", borderRadius: 12 }} />
                <Bar dataKey="n" fill="oklch(0.82 0.14 85)" radius={[8,8,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="glass rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-xl">Recent Reservations</h3>
            <Users className="w-5 h-5 text-[var(--gold)]" />
          </div>
          <div className="mt-4 divide-y divide-[var(--gold)]/10">
            {(items.length ? items : []).slice(0, 6).map((r) => (
              <div key={r.bookingId} className="py-3 flex items-center justify-between text-sm">
                <div>
                  <div className="font-medium">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.date} · {r.time} · Table {r.tableId}</div>
                </div>
                <div className="text-xs text-[var(--gold)] font-mono">{r.bookingId}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-2xl p-6">
          <h3 className="font-display text-xl">Top Customers</h3>
          <div className="mt-4 grid gap-3">
            {customers.map((c) => (
              <motion.div whileHover={{ x: 3 }} key={c.name} className="flex items-center justify-between rounded-xl px-4 py-3 border border-[var(--gold)]/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full grid place-items-center btn-gold font-display">{c.name[0]}</div>
                  <div>
                    <div className="font-medium">{c.name}</div>
                    <div className="text-xs text-muted-foreground">{c.visits} visits</div>
                  </div>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-[var(--gold)]">{c.tier}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function KPI({ icon: I, label, value, sub }: any) {
  return (
    <motion.div whileHover={{ y: -3 }} className="glass rounded-2xl p-5">
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
        <I className="w-4 h-4 text-[var(--gold)]" />
      </div>
      <div className="mt-3 text-3xl font-display gold-text">{value}</div>
      <div className="mt-1 text-xs text-muted-foreground">{sub}</div>
    </motion.div>
  );
}

import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { User, Mail, Lock } from "lucide-react";
import { AuthShell, Field } from "./login";
import toast from "react-hot-toast";
import { api } from "@/lib/api";
import { setAuth } from "@/lib/auth-store";

export const Route = createFileRoute("/register")({
  component: RegisterPage,
  head: () => ({ meta: [{ title: "Create account — Maison Aurée" }] }),
});

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [accept, setAccept] = useState(false);
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const strength = useMemo(() => {
    let s = 0;
    if (pw.length >= 8) s++;
    if (/[A-Z]/.test(pw)) s++;
    if (/[0-9]/.test(pw)) s++;
    if (/[^A-Za-z0-9]/.test(pw)) s++;
    return s;
  }, [pw]);
  const labels = ["Too weak", "Weak", "Okay", "Strong", "Excellent"];
  const colors = ["#ef4444", "#f59e0b", "#eab308", "#84cc16", "oklch(0.82 0.14 85)"];

  return (
<AuthShell
  title={<>Join <span className="gold-text italic">Taj Royale</span></>}
  subtitle="Create your account to reserve tables, manage bookings, and enjoy a royal dining experience."
>      <form
        onSubmit={async (e) => {
          e.preventDefault();
          if (!accept) return toast.error("Please accept the terms");
          setLoading(true);
          try {
            const res = await api.register({ name, email, password: pw });
            setAuth(res.token, res.data);
            toast.success("Welcome to Aurée");
            nav({ to: "/dashboard" });
          } catch (err: any) {
            toast.error(err.message || "Registration failed");
          } finally {
            setLoading(false);
          }
        }}
        className="grid gap-4"
      >
        <Field icon={User} label="Full name" value={name} onChange={setName} />
        <Field icon={Mail} label="Email" type="email" value={email} onChange={setEmail} />
        <Field icon={Lock} label="Password" type="password" value={pw} onChange={setPw} />
        <div>
          <div className="h-1.5 rounded-full bg-[var(--gold)]/10 overflow-hidden flex gap-1 p-0.5">
            {[0,1,2,3].map((i) => (
              <div key={i} className="flex-1 rounded-full transition-all" style={{ background: i < strength ? colors[strength] : "transparent" }} />
            ))}
          </div>
          <div className="mt-1 text-xs text-muted-foreground">{pw ? labels[strength] : "Use 8+ chars, uppercase, number & symbol"}</div>
        </div>
        <label className="inline-flex items-start gap-2 text-xs text-muted-foreground">
          <input type="checkbox" checked={accept} onChange={(e) => setAccept(e.target.checked)} className="mt-0.5 accent-[var(--gold)]" />
          <span>I agree to the <a className="text-[var(--gold)] hover:underline" href="#">Terms of Service</a> and <a className="text-[var(--gold)] hover:underline" href="#">Privacy Policy</a>.</span>
        </label>
        <button disabled={loading} className="rounded-full btn-gold px-6 py-3 font-medium hover:btn-gold-hover mt-2 disabled:opacity-70">{loading ? "Creating account..." : "Create account"}</button>
      </form>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Already have an account? <Link to="/login" className="text-[var(--gold)] hover:underline">Sign in</Link>
      </p>
    </AuthShell>
  );
}

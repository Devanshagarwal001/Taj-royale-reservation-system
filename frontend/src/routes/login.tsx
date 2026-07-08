// import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import { Mail, Lock, Eye, EyeOff, UtensilsCrossed } from "lucide-react";
// import toast from "react-hot-toast";
// import { api } from "@/lib/api";
// import { setAuth } from "@/lib/auth-store";

// export const Route = createFileRoute("/login")({
//   component: LoginPage,
//   head: () => ({ meta: [{ title: "Sign in — Maison Aurée" }] }),
// });

// function LoginPage() {
//   const [show, setShow] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const nav = useNavigate();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const res = await api.login({ email, password });
//       setAuth(res.token, res.data);
//       toast.success("Signed in");
//       nav({ to: "/dashboard" });
//     } catch (err: any) {
//       toast.error(err.message || "Sign in failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <AuthShell title={<>Welcome <span className="gold-text italic">back</span></>} subtitle="Sign in to your Taj's account">
//       <form onSubmit={handleSubmit} className="grid gap-4">
//         <Field icon={Mail} label="Email" type="email" value={email} onChange={setEmail} />
//         <Field icon={Lock} label="Password" type={show ? "text" : "password"} value={password} onChange={setPassword} right={<button type="button" onClick={() => setShow((s) => !s)} className="text-muted-foreground hover:text-[var(--gold)]">{show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}</button>} />
//         <div className="flex items-center justify-between text-xs">
//           <label className="inline-flex items-center gap-2 text-muted-foreground"><input type="checkbox" className="accent-[var(--gold)]" /> Remember me</label>
//           <a href="#" className="text-[var(--gold)] hover:underline">Forgot password?</a>
//         </div>
//         <button disabled={loading} className="rounded-full btn-gold px-6 py-3 font-medium hover:btn-gold-hover mt-2 disabled:opacity-70">{loading ? "Signing in..." : "Sign in"}</button>
//       </form>
//       <div className="my-6 flex items-center gap-3 text-[10px] uppercase tracking-widest text-muted-foreground">
//         <div className="flex-1 h-px bg-[var(--gold)]/20" /> or continue with <div className="flex-1 h-px bg-[var(--gold)]/20" />
//       </div>
//       <div className="grid grid-cols-3 gap-3">
//         {["Google", "Apple", "Facebook"].map((p) => (
//           <button key={p} type="button" className="rounded-full border border-[var(--gold)]/25 py-2.5 text-sm hover:bg-[var(--gold)]/10">{p}</button>
//         ))}
//       </div>
//       <p className="mt-6 text-center text-sm text-muted-foreground">
//         New to Taj ⭐️? <Link to="/register" className="text-[var(--gold)] hover:underline">Create an account</Link>
//       </p>
//     </AuthShell>
//   );
// }

// export function AuthShell({ title, subtitle, children }: any) {
//   return (
//     <div className="pt-32 pb-20 px-6 grid place-items-center">
//       <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md glass rounded-3xl p-8 md:p-10">
//         <div className="flex justify-center">
//           <div className="w-12 h-12 rounded-full btn-gold grid place-items-center"><UtensilsCrossed className="w-6 h-6" /></div>
//         </div>
//         <h1 className="mt-5 text-3xl font-display text-center">{title}</h1>
//         <p className="mt-1 text-sm text-muted-foreground text-center">{subtitle}</p>
//         <div className="mt-8">{children}</div>
//       </motion.div>
//     </div>
//   );
// }

// export function Field({ icon: I, label, type = "text", right, onChange, value }: any) {
//   return (
//     <label className="block">
//       <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
//       <div className="mt-2 flex items-center gap-2 rounded-full bg-background/50 border border-[var(--gold)]/25 focus-within:border-[var(--gold)] px-4">
//         <I className="w-4 h-4 text-[var(--gold)]" />
//         <input type={type} required value={value} onChange={(e) => onChange?.(e.target.value)} className="flex-1 bg-transparent py-3 text-sm outline-none" />
//         {right}
//       </div>
//     </label>
//   );
// }
// import { GoogleLogin } from "@react-oauth/google";
// import { jwtDecode } from "jwt-decode";
// import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import { Mail, Lock, Eye, EyeOff, UtensilsCrossed } from "lucide-react";
// import toast from "react-hot-toast";
// import { api } from "@/lib/api";
// import { setAuth } from "@/lib/auth-store";

// export const Route = createFileRoute("/login")({
//   component: LoginPage,
//   head: () => ({ meta: [{ title: "Sign in — Taj Royale" }] }),
// });

// function LoginPage() {
//   const [show, setShow] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const nav = useNavigate();
// const handleGoogleSuccess = async (credentialResponse: any) => {
//   try {
//     const user: any = jwtDecode(credentialResponse.credential);

//     console.log(user);

//     // Temporary login (frontend only)
//     setAuth("google-login", {
//       name: user.name,
//       email: user.email,
//       avatar: user.picture,
//     } as any);

//     toast.success("Logged in with Google");

//     nav({ to: "/dashboard" });

//   } catch (err) {
//     toast.error("Google login failed");
//   }
// };
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const res = await api.login({ email, password });
//       setAuth(res.token, res.data);
//       toast.success("Signed in");
//       window.location.href = "/dashboard";
//     } catch (err: any) {
//       toast.error(err.message || "Sign in failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <AuthShell title={<>Welcome <span className="gold-text italic">back</span></>} subtitle="Sign in to your Taj's account">
//       <form onSubmit={handleSubmit} className="grid gap-4">
//         <Field icon={Mail} label="Email" type="email" value={email} onChange={setEmail} />
//         <Field icon={Lock} label="Password" type={show ? "text" : "password"} value={password} onChange={setPassword} right={<button type="button" onClick={() => setShow((s) => !s)} className="text-muted-foreground hover:text-[var(--gold)]">{show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}</button>} />
//         <div className="flex items-center justify-between text-xs">
//           <label className="inline-flex items-center gap-2 text-muted-foreground"><input type="checkbox" className="accent-[var(--gold)]" /> Remember me</label>
//           <a href="#" className="text-[var(--gold)] hover:underline">Forgot password?</a>
//         </div>
//         <button disabled={loading} className="rounded-full btn-gold px-6 py-3 font-medium hover:btn-gold-hover mt-2 disabled:opacity-70">{loading ? "Signing in..." : "Sign in"}</button>
//       </form>
//       <div className="my-6 flex items-center gap-3 text-[10px] uppercase tracking-widest text-muted-foreground">
//         <div className="flex-1 h-px bg-[var(--gold)]/20" /> or continue with <div className="flex-1 h-px bg-[var(--gold)]/20" />
//       </div>
//       <div className="mt-6 flex justify-center">
//   <GoogleLogin
//     onSuccess={handleGoogleSuccess}
//     onError={() => toast.error("Google Login Failed")}
//     theme="filled_black"
//     size="large"
//     shape="pill"
//     text="continue_with"
//   />
// </div>
//       <p className="mt-6 text-center text-sm text-muted-foreground">
//         New to Taj ⭐️? <Link to="/register" className="text-[var(--gold)] hover:underline">Create an account</Link>
//       </p>
//     </AuthShell>
//   );
// }

// export function AuthShell({ title, subtitle, children }: any) {
//   return (
//     <div className="pt-32 pb-20 px-6 grid place-items-center">
//       <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md glass rounded-3xl p-8 md:p-10">
//         <div className="flex justify-center">
//           <div className="w-12 h-12 rounded-full btn-gold grid place-items-center"><UtensilsCrossed className="w-6 h-6" /></div>
//         </div>
//         <h1 className="mt-5 text-3xl font-display text-center">{title}</h1>
//         <p className="mt-1 text-sm text-muted-foreground text-center">{subtitle}</p>
//         <div className="mt-8">{children}</div>
//       </motion.div>
//     </div>
//   );
// }

// export function Field({ icon: I, label, type = "text", right, onChange, value }: any) {
//   return (
//     <label className="block">
//       <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
//       <div className="mt-2 flex items-center gap-2 rounded-full bg-background/50 border border-[var(--gold)]/25 focus-within:border-[var(--gold)] px-4">
//         <I className="w-4 h-4 text-[var(--gold)]" />
//         <input type={type} required value={value} onChange={(e) => onChange?.(e.target.value)} className="flex-1 bg-transparent py-3 text-sm outline-none" />
//         {right}
//       </div>
//     </label>
//   );
// }
import { GoogleLogin } from "@react-oauth/google";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, UtensilsCrossed } from "lucide-react";
import toast from "react-hot-toast";
import { api } from "@/lib/api";
import { setAuth } from "@/lib/auth-store";

export const Route = createFileRoute("/login")({
  component: LoginPage,
  head: () => ({ meta: [{ title: "Sign in — Taj Royale" }] }),
});

function LoginPage() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleSuccess = async (credentialResponse: any) => {
    try {
      if (!credentialResponse.credential) {
        toast.error("Google login failed");
        return;
      }

      // Send the credential to your backend to verify + get a real JWT
      const res = await api.googleLogin(credentialResponse.credential);
      setAuth(res.token, res.data);

      toast.success("Logged in with Google");
      window.location.href = "/dashboard";
    } catch (err: any) {
      toast.error(err.message || "Google login failed");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.login({ email, password });
      setAuth(res.token, res.data);
      toast.success("Signed in");
      window.location.href = "/dashboard";
    } catch (err: any) {
      toast.error(err.message || "Sign in failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthShell title={<>Welcome <span className="gold-text italic">back</span></>} subtitle="Sign in to your Taj's account">
      <form onSubmit={handleSubmit} className="grid gap-4">
        <Field icon={Mail} label="Email" type="email" value={email} onChange={setEmail} />
        <Field icon={Lock} label="Password" type={show ? "text" : "password"} value={password} onChange={setPassword} right={<button type="button" onClick={() => setShow((s) => !s)} className="text-muted-foreground hover:text-[var(--gold)]">{show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}</button>} />
        <div className="flex items-center justify-between text-xs">
          <label className="inline-flex items-center gap-2 text-muted-foreground"><input type="checkbox" className="accent-[var(--gold)]" /> Remember me</label>
          <a href="#" className="text-[var(--gold)] hover:underline">Forgot password?</a>
        </div>
        <button disabled={loading} className="rounded-full btn-gold px-6 py-3 font-medium hover:btn-gold-hover mt-2 disabled:opacity-70">{loading ? "Signing in..." : "Sign in"}</button>
      </form>
      <div className="my-6 flex items-center gap-3 text-[10px] uppercase tracking-widest text-muted-foreground">
        <div className="flex-1 h-px bg-[var(--gold)]/20" /> or continue with <div className="flex-1 h-px bg-[var(--gold)]/20" />
      </div>
      <div className="mt-6 flex justify-center">
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={() => toast.error("Google Login Failed")}
          theme="filled_black"
          size="large"
          shape="pill"
          text="continue_with"
        />
      </div>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        New to Taj ⭐️? <Link to="/register" className="text-[var(--gold)] hover:underline">Create an account</Link>
      </p>
    </AuthShell>
  );
}

export function AuthShell({ title, subtitle, children }: any) {
  return (
    <div className="pt-32 pb-20 px-6 grid place-items-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md glass rounded-3xl p-8 md:p-10">
        <div className="flex justify-center">
          <div className="w-12 h-12 rounded-full btn-gold grid place-items-center"><UtensilsCrossed className="w-6 h-6" /></div>
        </div>
        <h1 className="mt-5 text-3xl font-display text-center">{title}</h1>
        <p className="mt-1 text-sm text-muted-foreground text-center">{subtitle}</p>
        <div className="mt-8">{children}</div>
      </motion.div>
    </div>
  );
}

export function Field({ icon: I, label, type = "text", right, onChange, value }: any) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      <div className="mt-2 flex items-center gap-2 rounded-full bg-background/50 border border-[var(--gold)]/25 focus-within:border-[var(--gold)] px-4">
        <I className="w-4 h-4 text-[var(--gold)]" />
        <input type={type} required value={value} onChange={(e) => onChange?.(e.target.value)} className="flex-1 bg-transparent py-3 text-sm outline-none" />
        {right}
      </div>
    </label>
  );
}
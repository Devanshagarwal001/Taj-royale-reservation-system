// import { Link, useRouterState } from "@tanstack/react-router";
// import { useEffect, useState } from "react";
// import { Menu, X, Moon, Sun, UtensilsCrossed } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useTheme } from "./ThemeProvider";
// import { cn } from "@/lib/utils";

// const links = [
//   { to: "/", label: "Home" },
//   { to: "/menu", label: "Menu" },
//   { to: "/reservation", label: "Reserve" },
//   { to: "/gallery", label: "Gallery" },
//   { to: "/about", label: "About" },
//   { to: "/contact", label: "Contact" },
// ];

// export function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);
//   const pathname = useRouterState({ select: (s) => s.location.pathname });
//   const { theme, toggle } = useTheme();

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     onScroll();
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => setOpen(false), [pathname]);

//   return (
//     <header
//       className={cn(
//         "fixed top-0 inset-x-0 z-50 transition-all duration-500",
//         scrolled ? "backdrop-blur-xl bg-background/70 border-b border-[var(--gold)]/15" : "bg-transparent"
//       )}
//     >
//       <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
//         <Link to="/" className="flex items-center gap-2 group">
//           <motion.div
//             whileHover={{ rotate: 12, scale: 1.05 }}
//             className="w-10 h-10 rounded-full grid place-items-center btn-gold"
//           >
//             <UtensilsCrossed className="w-5 h-5" />
//           </motion.div>
//           <div className="leading-tight">
//             <div className="font-display text-xl gold-text">Taj Royale</div>
//             <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">ROYAL INDIAN CUISINE • EST. 2020</div>
//           </div>
//         </Link>

//         <ul className="hidden lg:flex items-center gap-8">
//           {links.map((l) => (
//             <li key={l.to}>
//               <Link
//                 to={l.to}
//                 className={cn(
//                   "relative text-sm tracking-wide uppercase transition-colors hover:text-[var(--gold)]",
//                   pathname === l.to ? "text-[var(--gold)]" : "text-foreground/80"
//                 )}
//               >
//                 {l.label}
//                 {pathname === l.to && (
//                   <motion.span
//                     layoutId="nav-underline"
//                     className="absolute -bottom-2 left-0 right-0 h-px bg-[var(--gold)]"
//                   />
//                 )}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         <div className="flex items-center gap-3">
//           <button
//             aria-label="Toggle theme"
//             onClick={toggle}
//             className="w-10 h-10 rounded-full grid place-items-center border border-[var(--gold)]/25 hover:bg-[var(--gold)]/10 transition"
//           >
//             {theme === "dark" ? <Sun className="w-4 h-4 text-[var(--gold)]" /> : <Moon className="w-4 h-4" />}
//           </button>
//           <Link
//             to="/reservation"
//             className="hidden md:inline-flex items-center rounded-full btn-gold px-5 py-2.5 text-sm font-medium hover:btn-gold-hover"
//           >
//             Reserve
//           </Link>
//           <button aria-label="Menu" className="lg:hidden text-foreground" onClick={() => setOpen((o) => !o)}>
//             {open ? <X /> : <Menu />}
//           </button>
//         </div>
//       </nav>

//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             className="lg:hidden overflow-hidden bg-background/95 backdrop-blur border-t border-[var(--gold)]/15"
//           >
//             <ul className="px-6 py-6 space-y-4">
//               {links.map((l) => (
//                 <li key={l.to}>
//                   <Link to={l.to} className="block text-lg font-display">
//                     {l.label}
//                   </Link>
//                 </li>
//               ))}
//               <li>
//                 <Link to="/login" className="text-sm text-muted-foreground">Sign in</Link>
//               </li>
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }
// import { Link, useRouterState } from "@tanstack/react-router";
// import { useEffect, useState } from "react";
// import { Menu, X, Moon, Sun, UtensilsCrossed } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useTheme } from "./ThemeProvider";
// import { cn } from "@/lib/utils";
// import { isAuthenticated, clearAuth } from "@/lib/auth-store";
// import { clear } from "console";

// const links = [
//   { to: "/", label: "Home" },
//   { to: "/menu", label: "Menu" },
//   { to: "/reservation", label: "Reserve" },
//   { to: "/gallery", label: "Gallery" },
//   { to: "/about", label: "About" },
//   { to: "/contact", label: "Contact" },
// ];

// export function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);
//   const pathname = useRouterState({
//     select: (s) => s.location.pathname,
//   });

//   const { theme, toggle } = useTheme();
// const [token, setToken] = useState<string | null>(null);

// useEffect(() => {
//   if (typeof window !== "undefined") {
//     setToken(localStorage.getItem("maison_token"));
//   }
// }, []);
// const handleLogout = () => {
//   localStorage.removeItem("maison_token");
//   localStorage.removeItem("user");

//   setToken(null);

//   window.location.href = "/";
// };
//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     onScroll();
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => setOpen(false), [pathname]);

//   return (
//     <header
//       className={cn(
//         "fixed top-0 inset-x-0 z-50 transition-all duration-500",
//         scrolled
//           ? "backdrop-blur-xl bg-background/70 border-b border-[var(--gold)]/15"
//           : "bg-transparent"
//       )}
//     >
//       <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-2 group">
//           <motion.div
//             whileHover={{ rotate: 12, scale: 1.05 }}
//             className="w-10 h-10 rounded-full grid place-items-center btn-gold"
//           >
//             <UtensilsCrossed className="w-5 h-5" />
//           </motion.div>

//           <div className="leading-tight">
//             <div className="font-display text-xl gold-text">
//               Taj Royale
//             </div>
//             <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
//               ROYAL INDIAN CUISINE • EST. 1984
//             </div>
//           </div>
//         </Link>

//         {/* Desktop Links */}
//         <ul className="hidden lg:flex items-center gap-8">
//           {links.map((l) => (
//             <li key={l.to}>
//               <Link
//                 to={l.to}
//                 className={cn(
//                   "relative text-sm tracking-wide uppercase transition-colors hover:text-[var(--gold)]",
//                   pathname === l.to
//                     ? "text-[var(--gold)]"
//                     : "text-foreground/80"
//                 )}
//               >
//                 {l.label}

//                 {pathname === l.to && (
//                   <motion.span
//                     layoutId="nav-underline"
//                     className="absolute -bottom-2 left-0 right-0 h-px bg-[var(--gold)]"
//                   />
//                 )}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Right Buttons */}
//         <div className="flex items-center gap-3">
//           {/* Theme Toggle */}
//           <button
//             aria-label="Toggle theme"
//             onClick={toggle}
//             className="w-10 h-10 rounded-full grid place-items-center border border-[var(--gold)]/25 hover:bg-[var(--gold)]/10 transition"
//           >
//             {theme === "dark" ? (
//               <Sun className="w-4 h-4 text-[var(--gold)]" />
//             ) : (
//               <Moon className="w-4 h-4" />
//             )}
//           </button>
          
//           {/* Admin Login Button */}
//           {token ? (
//   <button
//     onClick={handleLogout}
//     className="hidden md:inline-flex items-center rounded-full border border-red-500 px-5 py-2.5 text-sm font-medium text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300"
//   >
//     Logout
//   </button>
// ) : (
//   <Link
//     to="/login"
//     className="hidden md:inline-flex items-center rounded-full border border-[var(--gold)] px-5 py-2.5 text-sm font-medium text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black transition-all duration-300"
//   >
//     Login
//   </Link>
// )}
//           {/* Mobile Menu Button */}
//           <button
//             aria-label="Menu"
//             className="lg:hidden text-foreground"
//             onClick={() => setOpen((o) => !o)}
//           >
//             {open ? <X /> : <Menu />}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             className="lg:hidden overflow-hidden bg-background/95 backdrop-blur border-t border-[var(--gold)]/15"
//           >
//             <ul className="px-6 py-6 space-y-4">
//               {links.map((l) => (
//                 <li key={l.to}>
//                   <Link to={l.to} className="block text-lg font-display">
//                     {l.label}
//                   </Link>
//                 </li>
//               ))}

//               <li>
//                 <Link
//                   to="/reservation"
//                   className="block rounded-full btn-gold text-center py-3"
//                 >
//                   Reserve a Table
//                 </Link>
//               </li>

//               <li>
//   {token ? (
//     <button
//       onClick={handleLogout}
//       className="w-full rounded-full border border-red-500 py-3 text-red-400 hover:bg-red-500 hover:text-white transition"
//     >
//       Logout
//     </button>
//   ) : (
//     <Link
//       to="/login"
//       className="block rounded-full border border-[var(--gold)] text-center py-3 text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black transition"
//     >
//       Login
//     </Link>
//   )}
// </li>
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }
import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, UtensilsCrossed } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";
import { isAuthenticated, clearAuth } from "@/lib/auth-store";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/reservation", label: "Reserve" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });

  const { theme, toggle } = useTheme();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(isAuthenticated());
  }, [pathname]);

  const handleLogout = () => {
    clearAuth();
    setLoggedIn(false);
    window.location.href = "/";
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-[var(--gold)]/15"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: 12, scale: 1.05 }}
            className="w-10 h-10 rounded-full grid place-items-center btn-gold"
          >
            <UtensilsCrossed className="w-5 h-5" />
          </motion.div>

          <div className="leading-tight">
            <div className="font-display text-xl gold-text">
              Taj Royale
            </div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
              ROYAL INDIAN CUISINE • EST. 1984
            </div>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={cn(
                  "relative text-sm tracking-wide uppercase transition-colors hover:text-[var(--gold)]",
                  pathname === l.to
                    ? "text-[var(--gold)]"
                    : "text-foreground/80"
                )}
              >
                {l.label}

                {pathname === l.to && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-0 right-0 h-px bg-[var(--gold)]"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Buttons */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            aria-label="Toggle theme"
            onClick={toggle}
            className="w-10 h-10 rounded-full grid place-items-center border border-[var(--gold)]/25 hover:bg-[var(--gold)]/10 transition"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-[var(--gold)]" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>

          {/* Login / Logout Button */}
          {loggedIn ? (
            <button
              onClick={handleLogout}
              className="hidden md:inline-flex items-center rounded-full border border-red-500 px-5 py-2.5 text-sm font-medium text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="hidden md:inline-flex items-center rounded-full border border-[var(--gold)] px-5 py-2.5 text-sm font-medium text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black transition-all duration-300"
            >
              Login
            </Link>
          )}

          {/* Mobile Menu Button */}
          <button
            aria-label="Menu"
            className="lg:hidden text-foreground"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-background/95 backdrop-blur border-t border-[var(--gold)]/15"
          >
            <ul className="px-6 py-6 space-y-4">
              {links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="block text-lg font-display">
                    {l.label}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  to="/reservation"
                  className="block rounded-full btn-gold text-center py-3"
                >
                  Reserve a Table
                </Link>
              </li>

              <li>
                {loggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="w-full rounded-full border border-red-500 py-3 text-red-400 hover:bg-red-500 hover:text-white transition"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="block rounded-full border border-[var(--gold)] text-center py-3 text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black transition"
                  >
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
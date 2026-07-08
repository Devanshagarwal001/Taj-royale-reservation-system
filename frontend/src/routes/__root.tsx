// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import {
//   Outlet,
//   createRootRouteWithContext,
//   useRouter,
//   HeadContent,
//   Scripts,
// } from "@tanstack/react-router";
// import { useEffect, type ReactNode } from "react";
// import { Toaster } from "react-hot-toast";

// import appCss from "../styles.css?url";
// import { reportLovableError } from "../lib/lovable-error-reporting";
// import { Navbar } from "@/components/site/Navbar";
// import { Footer } from "@/components/site/Footer";
// import { FloatingReserve } from "@/components/site/FloatingReserve";
// import { BackToTop } from "@/components/site/BackToTop";
// import { ThemeProvider } from "@/components/site/ThemeProvider";
// import { PageTransition } from "@/components/site/PageTransition";

// function NotFoundComponent() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-background px-4">
//       <div className="max-w-md text-center">
//         <h1 className="text-8xl font-display gold-text">404</h1>
//         <h2 className="mt-4 text-2xl font-display text-foreground">Page not found</h2>
//         <p className="mt-2 text-sm text-muted-foreground">
//           The page you're looking for has slipped off the menu.
//         </p>
//         <a href="/" className="mt-8 inline-flex items-center rounded-full btn-gold px-6 py-3 text-sm font-medium hover:btn-gold-hover">
//           Return home
//         </a>
//       </div>
//     </div>
//   );
// }

// function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
//   const router = useRouter();
//   useEffect(() => {
//     reportLovableError(error, { boundary: "tanstack_root_error_component" });
//   }, [error]);

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-background px-4">
//       <div className="max-w-md text-center glass rounded-2xl p-8">
//         <h1 className="text-2xl font-display gold-text">Something went wrong</h1>
//         <p className="mt-2 text-sm text-muted-foreground">Please try again in a moment.</p>
//         <button
//           onClick={() => { router.invalidate(); reset(); }}
//           className="mt-6 inline-flex items-center rounded-full btn-gold px-6 py-2.5 text-sm font-medium"
//         >
//           Try again
//         </button>
//       </div>
//     </div>
//   );
// }

// export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
//   head: () => ({
//     meta: [
//       { charSet: "utf-8" },
//       { name: "viewport", content: "width=device-width, initial-scale=1" },
//       { title: "Maison Aurée — Michelin-Star Fine Dining Reservations" },
//       { name: "description", content: "Reserve your table at Maison Aurée, a Michelin-starred fine dining experience. Curated tasting menus, exquisite wines, and unforgettable evenings." },
//       { name: "author", content: "Maison Aurée" },
//       { property: "og:title", content: "Maison Aurée — Michelin-Star Fine Dining" },
//       { property: "og:description", content: "Reserve an unforgettable evening at Maison Aurée." },
//       { property: "og:type", content: "website" },
//       { name: "twitter:card", content: "summary_large_image" },
//       { name: "theme-color", content: "#0a0a0a" },
//     ],
//     links: [
//       { rel: "stylesheet", href: appCss },
//       { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
//       { rel: "preconnect", href: "https://fonts.googleapis.com" },
//       { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
//       {
//         rel: "stylesheet",
//         href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap",
//       },
//     ],
//   }),
//   shellComponent: RootShell,
//   component: RootComponent,
//   notFoundComponent: NotFoundComponent,
//   errorComponent: ErrorComponent,
// });

// function RootShell({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en">
//       <head>
//         <HeadContent />
//       </head>
//       <body>
//         {children}
//         <Scripts />
//       </body>
//     </html>
//   );
// }

// function RootComponent() {
//   const { queryClient } = Route.useRouteContext();
//   return (
//     <QueryClientProvider client={queryClient}>
//       <ThemeProvider>
//         <div className="relative min-h-screen flex flex-col">
//           <Navbar />
//           <main className="flex-1">
//             <PageTransition>
//               <Outlet />
//             </PageTransition>
//           </main>
//           <Footer />
//           <FloatingReserve />
//           <BackToTop />
//         </div>
//         <Toaster
//           position="top-center"
//           toastOptions={{
//             style: {
//               background: "oklch(0.12 0.008 60)",
//               color: "oklch(0.97 0.01 85)",
//               border: "1px solid oklch(0.82 0.14 85 / 0.35)",
//               borderRadius: "14px",
//               padding: "12px 16px",
//               boxShadow: "0 20px 60px -20px rgba(0,0,0,0.6)",
//             },
//             iconTheme: { primary: "oklch(0.82 0.14 85)", secondary: "oklch(0.12 0.008 60)" },
//           }}
//         />
//       </ThemeProvider>
//     </QueryClientProvider>
//   );
// }
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { GoogleOAuthProvider } from "@react-oauth/google";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingReserve } from "@/components/site/FloatingReserve";
import { BackToTop } from "@/components/site/BackToTop";
import { ThemeProvider } from "@/components/site/ThemeProvider";
import { PageTransition } from "@/components/site/PageTransition";

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-display gold-text">404</h1>
        <h2 className="mt-4 text-2xl font-display text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for has slipped off the menu.
        </p>
        <a href="/" className="mt-8 inline-flex items-center rounded-full btn-gold px-6 py-3 text-sm font-medium hover:btn-gold-hover">
          Return home
        </a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center glass rounded-2xl p-8">
        <h1 className="text-2xl font-display gold-text">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please try again in a moment.</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 inline-flex items-center rounded-full btn-gold px-6 py-2.5 text-sm font-medium"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Taj Royale — Royal Indian Cuisine" },
      { name: "description", content: "Reserve your table at Taj Royale, a royal Indian fine dining experience. Aromatic biryanis, tandoori delights, and unforgettable evenings." },
      { name: "author", content: "Taj Royale" },
      { property: "og:title", content: "Taj Royale — Royal Indian Cuisine" },
      { property: "og:description", content: "Reserve an unforgettable evening at Taj Royale." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0a0a0a" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              <PageTransition>
                <Outlet />
              </PageTransition>
            </main>
            <Footer />
            <FloatingReserve />
            <BackToTop />
          </div>
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                background: "oklch(0.12 0.008 60)",
                color: "oklch(0.97 0.01 85)",
                border: "1px solid oklch(0.82 0.14 85 / 0.35)",
                borderRadius: "14px",
                padding: "12px 16px",
                boxShadow: "0 20px 60px -20px rgba(0,0,0,0.6)",
              },
              iconTheme: { primary: "oklch(0.82 0.14 85)", secondary: "oklch(0.12 0.008 60)" },
            }}
          />
        </ThemeProvider>
      </QueryClientProvider>
    </GoogleOAuthProvider>
  );
}
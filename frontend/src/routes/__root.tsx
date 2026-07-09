import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { GoogleOAuthProvider } from "@react-oauth/google";

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
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID || ""}>
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
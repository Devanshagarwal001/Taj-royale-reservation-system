import toast from "react-hot-toast";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

// Reusable dismissable toast with a real, working close (×) button on the LEFT
export function showDismissableError(message: string, id?: string) {
  toast.custom(
    (t) => (
      <div
        className={cn(
          "glass rounded-2xl px-4 py-3.5 flex items-center gap-3 border border-[var(--danger)]/40 shadow-lg max-w-sm",
          t.visible ? "animate-in fade-in" : "animate-out fade-out"
        )}
      >
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-6 h-6 shrink-0 rounded-full grid place-items-center hover:bg-white/10 transition"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
        <span className="text-sm text-foreground flex-1">{message}</span>
      </div>
    ),
    { duration: 6000, id }
  );
}
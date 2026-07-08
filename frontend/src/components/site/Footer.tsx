import { Link } from "@tanstack/react-router";
import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  UtensilsCrossed,
  Send,
} from "lucide-react";
import toast from "react-hot-toast";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email.trim()) {
      toast.error("Please enter your email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    toast.success(
      "👑 Welcome to Royal Updates!\n\nThank you for subscribing. You'll now receive exclusive dining offers, chef's specials, seasonal menus, and invitations to special events at Taj Royale."
    );

    setEmail("");
  };

  return (
    <footer className="relative mt-24 border-t border-[var(--gold)]/15 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        {/* Logo */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full grid place-items-center btn-gold">
              <UtensilsCrossed className="w-5 h-5" />
            </div>

            <div className="font-display text-xl gold-text">
              Taj Royale
            </div>
          </div>

          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Where royal hospitality meets authentic Indian flavors.
            Every meal becomes a cherished memory.
          </p>

          <div className="flex items-center gap-3 mt-6">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full grid place-items-center border border-[var(--gold)]/25 hover:bg-[var(--gold)]/10 hover:text-[var(--gold)] transition"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Discover */}
        <div>
          <h4 className="font-display text-lg mb-4">Discover</h4>

          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/menu" className="hover:text-[var(--gold)]">
                Menu
              </Link>
            </li>

            <li>
              <Link to="/reservation" className="hover:text-[var(--gold)]">
                Reservations
              </Link>
            </li>

            <li>
              <Link to="/gallery" className="hover:text-[var(--gold)]">
                Gallery
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-[var(--gold)]">
                Our Story
              </Link>
            </li>
          </ul>
        </div>

        {/* Visit */}
        <div>
          <h4 className="font-display text-lg mb-4">Visit</h4>

          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>49 Civil Lines Main Market</li>
            <li>Roorkee, Uttarakhand 247667</li>
            <li>+91 12345 67890</li>
            <li>contact@tajroyale.com</li>
          </ul>
        </div>

        {/* Royal Updates */}
        <div>
          <h4 className="font-display text-lg mb-4">
            Royal Updates
          </h4>

          <p className="text-sm text-muted-foreground mb-4">
            Receive exclusive dining offers, royal events, seasonal menus,
            chef's specials, and invitations directly in your inbox.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubscribe();
            }}
            className="flex glass rounded-full p-1"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-muted-foreground"
            />

            <button
              type="submit"
              className="rounded-full btn-gold w-10 h-10 grid place-items-center hover:btn-gold-hover transition"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="divider-gold" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-2">
        <p>© {new Date().getFullYear()} Taj Royale. All rights reserved.</p>

        <p className="tracking-[0.3em] uppercase">
          Where Tradition Meets Luxury
        </p>
      </div>
    </footer>
  );
}
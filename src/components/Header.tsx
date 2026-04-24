import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./ui/button";

const navItems = [
  { to: "/transit-vehicules", label: "Transit véhicules" },
  { to: "/vehicules", label: "Véhicules" },
  { to: "/transport", label: "Transport" },
  { to: "/catalogues", label: "Catalogues" },
  { to: "/equipe", label: "L'équipe" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Logo />

        <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-full hover:bg-muted"
              activeProps={{ className: "px-4 py-2 text-sm font-semibold text-ink bg-muted rounded-full" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+33000000000"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            <Phone className="h-4 w-4" />
            Contact
          </a>
          <Button variant="amber" size="default" asChild className="rounded-full">
            <Link to="/devis">Devis express</Link>
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-muted transition-colors"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl animate-fade-in">
          <nav className="container-page py-6 flex flex-col gap-1" aria-label="Navigation mobile">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="py-3 text-base font-medium text-foreground/80 hover:text-foreground border-b border-border/40"
                activeProps={{ className: "py-3 text-base font-semibold text-ink border-b border-border/40" }}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="amber" size="lg" asChild className="mt-4">
              <Link to="/devis">Devis express</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

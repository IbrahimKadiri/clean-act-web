import { Link } from "@tanstack/react-router";

interface LogoProps {
  variant?: "ink" | "cream";
  className?: string;
}

export function Logo({ variant = "ink", className = "" }: LogoProps) {
  const color = variant === "cream" ? "text-cream" : "text-ink";
  return (
    <Link to="/" className={`group inline-flex items-center gap-2 ${className}`} aria-label="GACTI — Accueil">
      <span className={`font-display text-2xl font-bold tracking-tight ${color}`}>
        G<span className="relative inline-block">
          A
          <svg
            viewBox="0 0 30 12"
            className="absolute -right-1 top-1/2 h-3 w-5 -translate-y-1/2 text-accent transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          >
            <path
              d="M2 6 L24 6 M18 1 L26 6 L18 11"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </span>CTI
      </span>
    </Link>
  );
}
